# Domains And Modules

Last updated: 2026-05-15

Status: Proposed Phase 1 baseline

Back to [System Architecture](README.md).

## Bounded Contexts And Domain Ownership

Organization is the primary tenant boundary. Workspace is the primary execution context. Team, project, issue, sprint, doc, and integration scope are subordinate to organization and workspace.

| Bounded Context              | Owns                                                                                       | Does Not Own                                      | Primary Data                                                                                     | Primary Events                                                                 |
| ---------------------------- | ------------------------------------------------------------------------------------------ | ------------------------------------------------- | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| Identity And Actors          | Users, profiles, auth identities, sessions, actor types                                    | Organization membership or permissions            | users, auth_identities, sessions, actors                                                         | user.created.v1, user.email_verified.v1, session.revoked.v1                    |
| Tenant And Workspace         | Organizations, workspaces, lifecycle state, tenant settings                                | User identity, issue data, docs                   | organizations, workspaces, organization_settings, workspace_settings                             | organization.created.v1, workspace.created.v1, workspace.updated.v1            |
| Membership And Authorization | Org membership, workspace membership, roles, invites, permission policies                  | Domain entities like issues and docs              | organization_memberships, workspace_memberships, invites, role_assignments                       | invite.created.v1, organization.member_added.v1, workspace.role_changed.v1     |
| Audit And Governance         | Audit events, sensitive action taxonomy, access-change records                             | Product analytics and domain history              | audit_events, access_revocation_records                                                          | audit.recorded.v1, access.revoked.v1                                           |
| Execution Core               | Teams, projects, issues, labels, issue history, sprint/cycle                               | Comments, docs, GitHub credentials, AI outputs    | teams, projects, issues, labels, issue_history, sprints                                          | team.created.v1, project.created.v1, issue.created.v1, sprint.started.v1       |
| Collaboration And Docs       | Comments, mentions, lightweight docs, activity projections                                 | Issue status, member roles, notification delivery | comments, mentions, docs, activity_items                                                         | comment.created.v1, mention.created.v1, doc.updated.v1                         |
| Notifications                | Notification records, preferences, delivery attempts, eligibility checks                   | Source domain state                               | notifications, notification_preferences, delivery_attempts                                       | notification.created.v1, notification.delivery_failed.v1, notification.read.v1 |
| Realtime                     | Connection state, channel auth, subscription revocation, presence foundation               | Durable business state                            | realtime_sessions, subscription_revocations, presence_records                                    | realtime.subscription_revoked.v1                                               |
| Search And Retrieval         | Search documents, indexing jobs, reindex state, retrieval filters                          | Source-of-truth content                           | search_documents, indexing_jobs, reindex_runs                                                    | search.document_indexed.v1, search.reindex_requested.v1                        |
| Integrations And Imports     | GitHub connections, credential references, external links, import runs                     | Issue source of truth after import                | integration_connections, external_links, import_runs, import_items                               | github.connection_created.v1, import.completed.v1                              |
| AI Platform                  | Model gateway, prompt registry, AI workflows, action logs, agent placeholders, evaluations | Permission source of truth and domain ownership   | ai_settings, ai_action_logs, ai_workflows, prompt_templates, evaluation_fixtures, agent_profiles | ai.workflow_requested.v1, ai.action_logged.v1                                  |
| Analytics                    | Product analytics events and activation metrics                                            | Audit-grade records                               | analytics_events, activation_facts                                                               | analytics.event_recorded.v1                                                    |

### Aggregate Boundaries

| Aggregate              | Invariants                                                                                          |
| ---------------------- | --------------------------------------------------------------------------------------------------- |
| Organization           | Has at least one owner, owns tenant boundary, cannot leak resources across organizations            |
| Workspace              | Belongs to exactly one organization, workspace key unique inside organization                       |
| Invite                 | Secure single-use token, status transition is pending to accepted, revoked, or expired              |
| Membership             | Role and status scoped to organization or workspace, removal revokes subordinate access             |
| Team                   | Belongs to one workspace, does not grant access beyond workspace membership                         |
| Project                | Belongs to one workspace, project key unique in workspace, access inherited from workspace in MVP   |
| Issue                  | Belongs to one organization, workspace, and project, status/history changes are actor-attributed    |
| Sprint/Cycle           | Belongs to one workspace, issues can belong to zero or one active sprint/cycle in MVP               |
| Comment                | Targets accessible issue, author actor must have access at write time                               |
| Doc                    | Belongs to one workspace and optionally project or issue, markdown must be sanitized                |
| Integration Connection | Scoped to organization and optionally workspace/project, credential reference never exposed         |
| Import Run             | Scoped to one organization and workspace, source IDs and idempotency keys prevent duplicates        |
| AI Workflow            | Runs only when enabled, retrieves only permitted context, output remains suggestion unless approved |

## Service And Module Topology

### Backend Module Layout

The backend should use explicit module boundaries rather than a flat feature folder structure.

```text
apps/
  web/                 Next.js application
  api/                 NestJS HTTP, GraphQL, commands, queries
  worker/              Event consumers, jobs, import, email, indexing, AI
  realtime/            WebSocket gateway
  scheduler/           Delayed and recurring jobs

packages/
  contracts/           API DTOs, event schemas, shared validation
  database/            Migrations, connection, transaction helpers
  observability/       OpenTelemetry, logging, metrics helpers
  authorization/       Policy engine primitives and resource guards
  events/              Outbox publisher, event envelope, consumer helpers
  idempotency/         Idempotency key helpers and processed event tracking
  security/            crypto, token hashing, secret redaction helpers
  testing/             Tenant isolation and permission test harnesses

domains/
  identity/
  tenancy/
  membership/
  audit/
  execution/
  collaboration/
  notifications/
  realtime/
  search/
  integrations/
  ai/
  analytics/
```

### Module Rules

- Each domain owns its repository interfaces, commands, queries, events, and migrations.
- Domain modules may call another domain through public application services, not by importing repositories directly.
- Cross-domain side effects should use domain events unless the operation must be synchronous for correctness.
- Protected commands require actor context, organization scope, permission decision, idempotency behavior where retryable, and correlation ID.
- Query handlers must apply tenant and permission filters before returning data.
- Events must use versioned contracts from `packages/contracts`.

### CQRS Strategy

Use CQRS pragmatically:

- Commands enforce invariants and write durable state.
- Queries compose read models for product views.
- Read models can start as SQL queries and become projections when load or complexity requires it.
- Search, activity, notification, AI retrieval, and analytics are derived projections, not source-of-truth systems.
