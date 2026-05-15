# Security And Observability

Last updated: 2026-05-15

Status: Proposed Phase 1 baseline

Back to [System Architecture](README.md).

## Security Architecture

### Identity And Sessions

- Email verification required before tenant setup completion.
- Sessions use secure, httpOnly cookies for browser flows.
- CSRF protection is required for cookie-authenticated mutations.
- Signup, login, invite creation, invite acceptance, and password reset are rate-limited.
- Session tokens, invite tokens, password reset tokens, and provider secrets are never logged.
- Identity model remains SSO-ready through external identity provider records.

### Authorization Model

Centralize authorization in a policy layer used by REST, GraphQL, workers, realtime, search, and AI.

Phase 1 roles:

- Organization owner.
- Organization admin.
- Workspace admin.
- Team lead.
- Project admin where needed.
- Workspace member.
- Service actor.
- AI actor placeholder.

Authorization rules:

- Deny by default.
- Check tenant boundary before resource permission.
- Avoid confirming existence of inaccessible private resources.
- Last organization owner cannot be removed or demoted without replacement.
- Integration and AI actors require explicit scoped permissions.
- Permission decisions should be testable with a matrix harness.

### Audit Architecture

Sensitive actions write audit events. Minimum audit fields:

```text
event_id
organization_id
workspace_id
actor_id
actor_type
action
target_type
target_id
timestamp
correlation_id
request_metadata_safe
metadata_safe
```

Audit-required actions include:

- Organization and workspace creation or rename.
- Invite creation, acceptance, revocation.
- Role changes.
- Member removal.
- Session revocation due to access change.
- Project archive or restore.
- Issue archive, restore, bulk update, or integration/import/AI movement.
- Integration install, reconnect, removal.
- Import start, completion, failure, rollback where supported.
- AI setting changes.
- AI action logs for generated summaries, suggestions, drafts, and accepted changes.

### Secrets And Credentials

- Use cloud secret manager or sealed Kubernetes secret integration through External Secrets.
- Application reads secrets at runtime through least-privilege service account.
- GitHub credentials are encrypted or stored in a managed secret system.
- Rotate provider secrets through deployment-safe procedures.
- No secrets in events, logs, analytics, search documents, vector records, or AI prompts.

### Tenant Safety Release Gates

No Phase 1 release should ship with known defects in:

- Cross-tenant API reads or writes.
- Cross-tenant events.
- Cross-tenant cache keys.
- Search result leakage.
- Vector retrieval leakage.
- Realtime event leakage.
- Notification leakage.
- Import staging leakage.
- GitHub connection leakage.
- AI prompt or retrieval leakage.

## Observability Architecture

Qeetro should be observable before it is scaled.

### Instrumentation Standard

Use OpenTelemetry across web, API, workers, realtime, and external provider calls.

Required context propagation:

- `correlation_id` for request and workflow tracing.
- `causation_id` for event-driven flows.
- `organization_id` and `workspace_id` as safe attributes where policy allows.
- `actor_type`, not sensitive actor details in logs.
- `event_id`, `job_id`, `import_run_id`, `ai_workflow_id`, and `integration_connection_id` where applicable.

### Metrics

| Area          | Metrics                                                                                                                        |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| API           | Request rate, latency, error rate, permission denials, idempotency conflicts                                                   |
| Database      | Query latency, lock waits, connection pool saturation, tenant hot spots                                                        |
| Events        | Outbox lag, publish failures, consumer lag, retry count, DLQ count                                                             |
| Realtime      | Connection count, auth failures, reconnects, delivery failures, revocation time                                                |
| Notifications | Created count, delivery attempts, failures, retry age, preference changes                                                      |
| Search        | Query latency, indexing lag, reindex progress, failed documents, no-result rate                                                |
| GitHub        | Webhook receipt count, signature failures, processing failures, retry count                                                    |
| Imports       | Import duration, item failures, duplicate prevention count, retry count                                                        |
| AI            | Provider latency, timeout rate, cost-ready metric, token volume, retrieval count, source count, acceptance/edit/rejection rate |
| Security      | Rate-limit hits, permission denials, suspicious access attempts, audit write failures                                          |

### Logs

Structured logs must be JSON, tenant-safe, and secret-scrubbed. Logs should include correlation IDs and safe target metadata. They must never include tokens, passwords, invite links, provider credentials, raw model prompts with sensitive content, or raw webhook secrets.

### Traces

Trace critical workflows end to end:

- Signup to workspace creation.
- Invite creation to email delivery to acceptance.
- Member removal to session and realtime revocation.
- Issue creation to search indexing to realtime update.
- Comment mention to notification fanout.
- GitHub webhook to issue link to activity update.
- Import start to item processing to completion.
- AI workflow request to retrieval to provider call to action log.

### SLO Candidates

| Workflow                 | Initial SLO Candidate                                          |
| ------------------------ | -------------------------------------------------------------- |
| Core API availability    | 99.9 percent monthly during beta after production readiness    |
| Issue create API latency | p95 under 300 ms excluding cold starts                         |
| Common issue view query  | p95 under 500 ms for Phase 1 team volumes                      |
| Realtime delivery        | p95 under 1 second after committed event for connected clients |
| Invite email queue time  | p95 under 60 seconds excluding provider outage                 |
| Search freshness         | p95 under 30 seconds after source update                       |
| AI issue draft latency   | p95 under 15 seconds with graceful timeout                     |
| Import progress update   | p95 under 5 seconds after batch completion                     |

### Dashboards And Alerts

Phase 1 requires dashboards for:

- Auth and onboarding.
- Invites and membership.
- Permissions and audit writes.
- Issues and comments.
- Realtime gateway.
- Notification delivery.
- Search indexing and query health.
- GitHub webhooks.
- Imports.
- AI workflows, provider calls, retrieval, action logs.
- Event bus and DLQs.

Alert on:

- Cross-tenant access attempt spikes.
- Audit write failures.
- Event DLQ growth.
- Search indexing lag.
- Realtime auth or delivery failure spikes.
- Invite email delivery failures.
- GitHub webhook signature failure spikes.
- Import failure spikes.
- AI provider degradation or timeout spikes.
- AI retrieval permission denial anomalies.
