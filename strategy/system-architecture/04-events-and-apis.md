# Events And APIs

Last updated: 2026-05-15

Status: Proposed Phase 1 baseline

Back to [System Architecture](README.md).

## Event-Driven Architecture

### Event Transport Decision

Use a transactional outbox in PostgreSQL plus NATS JetStream as the Phase 1 event transport.

Rationale:

- The outbox guarantees domain state and event publication are committed together.
- NATS JetStream is operationally lighter than Kafka for an early team while still supporting durable streams, consumer groups, redelivery, and replay.
- Event contracts and partitioning should be designed so Kafka can replace or supplement NATS later if throughput or ecosystem needs require it.

### Event Envelope

Every domain event uses a versioned envelope:

```json
{
  "event_id": "uuid",
  "event_type": "issue.created.v1",
  "event_version": 1,
  "occurred_at": "2026-05-15T00:00:00.000Z",
  "producer": "execution",
  "organization_id": "uuid",
  "workspace_id": "uuid-or-null",
  "actor_id": "uuid-or-null",
  "actor_type": "human|service|ai",
  "target_type": "issue",
  "target_id": "uuid",
  "correlation_id": "uuid",
  "causation_id": "uuid-or-null",
  "idempotency_key": "string-or-null",
  "schema_version": "1.0",
  "payload": {}
}
```

Payloads must not include secrets, invite tokens, session tokens, provider credentials, or large document bodies unless the event is explicitly a safe indexing command. Prefer event notifications with identifiers and safe metadata. Consumers should load source data with their own tenant checks when needed.

### Topic Strategy

Use domain streams with partition keys rather than one stream per entity.

| Topic                  | Producers                    | Primary Consumers                                                       | Partition Key                                     |
| ---------------------- | ---------------------------- | ----------------------------------------------------------------------- | ------------------------------------------------- |
| `identity.events`      | Identity                     | Audit, analytics, notifications                                         | `organization_id` when available, else `actor_id` |
| `tenant.events`        | Tenant and workspace         | Audit, analytics, realtime, search permission refresh                   | `organization_id`                                 |
| `membership.events`    | Membership and authorization | Audit, realtime, notifications, search, AI retrieval cache invalidation | `organization_id`                                 |
| `execution.events`     | Execution core               | Search, activity, realtime, notifications, analytics, AI                | `workspace_id` or `issue_id`                      |
| `collaboration.events` | Collaboration and docs       | Search, activity, notifications, realtime, AI                           | `workspace_id` or target ID                       |
| `notification.events`  | Notifications                | Realtime, email delivery, analytics                                     | `organization_id` and user ID                     |
| `integration.events`   | Integrations                 | Activity, search, notifications, AI, audit                              | `workspace_id` or integration ID                  |
| `import.events`        | Import workers               | Realtime, activity, analytics, search, notifications                    | Import run ID                                     |
| `search.events`        | Search indexer               | Realtime, analytics, AI retrieval readiness                             | `workspace_id`                                    |
| `ai.events`            | AI platform                  | Audit, activity, analytics, notifications, realtime                     | Workflow ID                                       |
| `audit.events`         | Audit                        | Security monitoring and future export                                   | `organization_id`                                 |

### Core Event Catalog

| Event                              | Producer      | Topic                  | Primary Consumers                                        |
| ---------------------------------- | ------------- | ---------------------- | -------------------------------------------------------- |
| `user.created.v1`                  | Identity      | `identity.events`      | Analytics, audit                                         |
| `user.email_verified.v1`           | Identity      | `identity.events`      | Analytics, onboarding                                    |
| `session.revoked.v1`               | Identity      | `identity.events`      | Realtime, audit                                          |
| `organization.created.v1`          | Tenant        | `tenant.events`        | Audit, analytics                                         |
| `organization.updated.v1`          | Tenant        | `tenant.events`        | Audit, analytics, realtime                               |
| `workspace.created.v1`             | Tenant        | `tenant.events`        | Realtime, analytics, audit                               |
| `workspace.updated.v1`             | Tenant        | `tenant.events`        | Realtime, analytics, audit                               |
| `invite.created.v1`                | Membership    | `membership.events`    | Email, notifications, audit, analytics                   |
| `invite.accepted.v1`               | Membership    | `membership.events`    | Realtime, notifications, audit, analytics                |
| `invite.revoked.v1`                | Membership    | `membership.events`    | Realtime, audit, analytics                               |
| `invite.expired.v1`                | Scheduler     | `membership.events`    | Realtime, analytics                                      |
| `organization.member_added.v1`     | Membership    | `membership.events`    | Realtime, audit, analytics                               |
| `organization.member_removed.v1`   | Membership    | `membership.events`    | Realtime, notifications, audit, search, AI               |
| `organization.role_changed.v1`     | Membership    | `membership.events`    | Realtime, notifications, audit, search, AI               |
| `workspace.member_added.v1`        | Membership    | `membership.events`    | Realtime, notifications, audit, analytics                |
| `workspace.member_removed.v1`      | Membership    | `membership.events`    | Realtime, notifications, audit, search, AI               |
| `workspace.role_changed.v1`        | Membership    | `membership.events`    | Realtime, notifications, audit, search, AI               |
| `team.created.v1`                  | Execution     | `execution.events`     | Search, activity, analytics                              |
| `team.updated.v1`                  | Execution     | `execution.events`     | Search, activity, analytics                              |
| `project.created.v1`               | Execution     | `execution.events`     | Search, activity, realtime, analytics, AI                |
| `project.updated.v1`               | Execution     | `execution.events`     | Search, activity, realtime, analytics, AI                |
| `project.archived.v1`              | Execution     | `execution.events`     | Search, activity, realtime, analytics                    |
| `issue.created.v1`                 | Execution     | `execution.events`     | Search, activity, realtime, notifications, analytics, AI |
| `issue.updated.v1`                 | Execution     | `execution.events`     | Search, activity, realtime, notifications, analytics, AI |
| `issue.status_changed.v1`          | Execution     | `execution.events`     | Search, activity, realtime, notifications, analytics, AI |
| `issue.assigned.v1`                | Execution     | `execution.events`     | Notifications, activity, realtime, analytics             |
| `issue.priority_changed.v1`        | Execution     | `execution.events`     | Search, activity, analytics                              |
| `issue.label_changed.v1`           | Execution     | `execution.events`     | Search, activity, analytics                              |
| `issue.archived.v1`                | Execution     | `execution.events`     | Search, activity, realtime, analytics                    |
| `sprint.created.v1`                | Execution     | `execution.events`     | Activity, realtime, analytics                            |
| `sprint.started.v1`                | Execution     | `execution.events`     | Activity, notifications, AI, analytics                   |
| `sprint.completed.v1`              | Execution     | `execution.events`     | Activity, AI summaries, analytics                        |
| `sprint.issue_added.v1`            | Execution     | `execution.events`     | Activity, realtime, analytics                            |
| `sprint.issue_removed.v1`          | Execution     | `execution.events`     | Activity, realtime, analytics                            |
| `comment.created.v1`               | Collaboration | `collaboration.events` | Search, activity, notifications, realtime, AI            |
| `comment.updated.v1`               | Collaboration | `collaboration.events` | Search, activity, realtime, AI                           |
| `comment.archived.v1`              | Collaboration | `collaboration.events` | Search, activity, realtime, AI                           |
| `mention.created.v1`               | Collaboration | `collaboration.events` | Notifications, activity, realtime                        |
| `doc.created.v1`                   | Collaboration | `collaboration.events` | Search, activity, realtime, AI                           |
| `doc.updated.v1`                   | Collaboration | `collaboration.events` | Search, activity, realtime, AI                           |
| `doc.archived.v1`                  | Collaboration | `collaboration.events` | Search, activity, realtime, AI                           |
| `activity.item_created.v1`         | Collaboration | `collaboration.events` | Realtime, analytics                                      |
| `notification.created.v1`          | Notifications | `notification.events`  | Realtime, email delivery, analytics                      |
| `notification.read.v1`             | Notifications | `notification.events`  | Realtime, analytics                                      |
| `notification.delivery_failed.v1`  | Notifications | `notification.events`  | Alerting, analytics                                      |
| `github.connection_created.v1`     | Integrations  | `integration.events`   | Audit, activity, analytics                               |
| `github.connection_removed.v1`     | Integrations  | `integration.events`   | Audit, activity, worker revocation                       |
| `github.webhook_received.v1`       | Integrations  | `integration.events`   | Link processor, observability                            |
| `github.pull_request_linked.v1`    | Integrations  | `integration.events`   | Activity, search, realtime, AI                           |
| `github.commit_linked.v1`          | Integrations  | `integration.events`   | Activity, search, realtime, AI                           |
| `import.created.v1`                | Imports       | `import.events`        | Realtime, audit, analytics                               |
| `import.preview_generated.v1`      | Imports       | `import.events`        | Realtime, analytics                                      |
| `import.started.v1`                | Imports       | `import.events`        | Realtime, audit, analytics                               |
| `import.item_processed.v1`         | Imports       | `import.events`        | Realtime, analytics, search                              |
| `import.completed.v1`              | Imports       | `import.events`        | Realtime, notifications, activity, analytics             |
| `import.failed.v1`                 | Imports       | `import.events`        | Realtime, notifications, alerting                        |
| `search.document_indexed.v1`       | Search        | `search.events`        | Analytics, AI retrieval readiness                        |
| `search.document_removed.v1`       | Search        | `search.events`        | Analytics, AI retrieval readiness                        |
| `search.reindex_requested.v1`      | Search        | `search.events`        | Search indexer                                           |
| `ai.workflow_requested.v1`         | AI            | `ai.events`            | AI worker, analytics, audit                              |
| `ai.retrieval_performed.v1`        | AI            | `ai.events`            | Audit, analytics, AI quality monitoring                  |
| `ai.issue_draft_generated.v1`      | AI            | `ai.events`            | Activity, analytics, realtime                            |
| `ai.summary_generated.v1`          | AI            | `ai.events`            | Activity, analytics, realtime                            |
| `ai.answer_generated.v1`           | AI            | `ai.events`            | Analytics, realtime                                      |
| `ai.output_accepted.v1`            | AI            | `ai.events`            | Analytics, quality evaluation                            |
| `ai.output_rejected.v1`            | AI            | `ai.events`            | Analytics, quality evaluation                            |
| `ai.output_edited.v1`              | AI            | `ai.events`            | Analytics, quality evaluation                            |
| `ai.action_logged.v1`              | AI            | `ai.events`            | Audit, activity, analytics                               |
| `ai.workflow_failed.v1`            | AI            | `ai.events`            | Alerting, analytics, realtime                            |
| `ai.setting_changed.v1`            | AI            | `ai.events`            | Audit, analytics                                         |
| `realtime.subscription_revoked.v1` | Realtime      | `tenant.events`        | Audit, analytics                                         |
| `audit.recorded.v1`                | Audit         | `audit.events`         | Security monitoring                                      |

### Reliability Rules

- Domain writes and outbox inserts happen in the same database transaction.
- Outbox relay publishes with at-least-once delivery.
- Consumers are idempotent and record processed event IDs.
- Retryable consumers use exponential backoff with jitter.
- Non-retryable failures move to a dead-letter stream after a bounded number of attempts.
- DLQs are named by topic, for example `execution.events.dlq`.
- Every DLQ record includes event ID, consumer name, failure reason, stack fingerprint, first failure time, last failure time, and retry count.
- Operators need dashboards for event lag, retry count, DLQ count, and consumer error rate.

### Replay Strategy

Phase 1 is not event-sourced. PostgreSQL remains the source of truth. Events are used for propagation, projections, audit, and async workflows.

Replay paths:

- Search reindex rebuilds documents from PostgreSQL source records.
- Vector re-embedding rebuilds embeddings from permitted search/source documents.
- Activity projection can rebuild from issue history, comments, docs, GitHub links, imports, and AI action logs.
- Notification delivery should not blindly replay old notification creation events without a delivery policy.
- Audit events are append-only and should be corrected by compensating records, not mutation.
- Consumer replay must be tenant-scoped and rate-limited to avoid noisy neighbor effects.

## API Strategy

### API Surfaces

Use both REST and GraphQL intentionally.

| Surface              | Purpose                                             | Notes                                                                  |
| -------------------- | --------------------------------------------------- | ---------------------------------------------------------------------- |
| REST commands        | Mutations with clear idempotency and HTTP semantics | Create issue, accept invite, connect GitHub, start import, change role |
| GraphQL reads        | Product view composition                            | Workspace shell, issue page, board, activity, notifications            |
| REST webhooks        | External provider callbacks                         | GitHub webhooks, future Slack and GitLab webhooks                      |
| Internal module APIs | In-process domain contracts                         | No network call while modular monolith remains intact                  |
| Public API           | Deferred Phase 2 or 3                               | Design command contracts now so externalization is safe                |

### Command API Rules

- Every mutation accepts or generates a correlation ID.
- Retry-prone commands accept `Idempotency-Key`.
- Mutation handlers perform tenant resolution, permission check, validation, domain write, outbox event insert, and audit write when required.
- Error responses must avoid resource existence leakage.
- High-risk commands require explicit confirmation or approval state.

Example command endpoints:

```text
POST /api/v1/auth/signup
POST /api/v1/organizations
POST /api/v1/workspaces
POST /api/v1/invites
POST /api/v1/invites/{inviteId}/accept
POST /api/v1/projects
POST /api/v1/issues
PATCH /api/v1/issues/{issueId}
POST /api/v1/sprints
POST /api/v1/integrations/github/connections
POST /api/v1/imports
POST /api/v1/ai/workflows/issue-draft
POST /api/v1/ai/workflows/summary
```

### GraphQL Query Rules

- Use GraphQL for screen-shaped reads and filters, not arbitrary unrestricted querying.
- Resolvers must use tenant-aware data loaders.
- Resolver-level permission checks must delegate to the same authorization layer as REST.
- Avoid GraphQL mutations for high-risk workflows in Phase 1 unless the team standardizes on GraphQL end to end.

Example read operations:

```text
workspaceShell
workspaceMembers
projectIssueList
issueBoard
issueDetail
activityFeed
searchResults
notificationInbox
aiActionLog
```
