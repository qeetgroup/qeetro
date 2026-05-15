# Data Architecture

Last updated: 2026-05-15

Status: Proposed Phase 1 baseline

Back to [System Architecture](README.md).

## Database Ownership And Multi-Tenant Data Strategy

### Primary Store

Use PostgreSQL as the source of truth for Phase 1.

Recommended model:

- Shared PostgreSQL database and shared physical cluster for Phase 1.
- Shared tables scoped by `organization_id` for all tenant-owned records.
- `workspace_id` required for workspace-owned records.
- Composite indexes start with `organization_id` and commonly include `workspace_id`, lifecycle state, updated time, and target IDs.
- Soft archive lifecycle for projects, issues, comments, docs, imports, and integrations where history matters.
- Row-level security can be added as defense-in-depth after query paths stabilize, but application authorization remains mandatory.

Do not use schema-per-tenant or database-per-tenant in Phase 1. Those models add early operational complexity before Qeetro has tenant scale that justifies them. Preserve a future enterprise dedicated-cluster path by keeping tenant IDs explicit in every table and avoiding global state that cannot be moved.

### Data Ownership Rules

| Data Class                             | Source Of Truth                                     | Derived Systems                              |
| -------------------------------------- | --------------------------------------------------- | -------------------------------------------- |
| Users, sessions, actors                | PostgreSQL identity tables                          | Cache, analytics                             |
| Organizations, workspaces, memberships | PostgreSQL tenant and membership tables             | Cache, realtime, search permission filters   |
| Projects, issues, sprints              | PostgreSQL execution tables                         | Search, activity, AI retrieval, analytics    |
| Comments and docs                      | PostgreSQL collaboration tables                     | Search, vector store, activity, AI retrieval |
| Audit events                           | PostgreSQL audit table or append-only audit schema  | Audit exports later                          |
| Domain events                          | Transactional outbox and event bus                  | Consumers, replays, projections              |
| Search documents                       | OpenSearch                                          | Rebuilt from PostgreSQL                      |
| Embeddings                             | Vector store or pgvector projection                 | Rebuilt from source documents                |
| Realtime presence                      | Redis                                               | Ephemeral only                               |
| Notification records                   | PostgreSQL notifications tables                     | Email delivery provider state                |
| Integration credentials                | External secret store with DB credential references | Never copied into logs or events             |
| Object attachments                     | Object storage                                      | Metadata in PostgreSQL                       |

### Tenant Isolation Requirements

| Layer            | Rule                                                                                             |
| ---------------- | ------------------------------------------------------------------------------------------------ |
| API              | Resolve actor, organization, workspace, and permission before protected resource access          |
| Database         | All tenant-owned tables include `organization_id`; workspace-owned tables include `workspace_id` |
| Cache            | Keys are prefixed with organization and workspace scope, for example `org:{id}:ws:{id}:...`      |
| Events           | Event envelope includes organization ID and workspace ID where applicable                        |
| Jobs             | Job payloads include organization and workspace scope, never infer from external ID alone        |
| Search           | Query filter must include organization and effective workspace or resource scope                 |
| Vector retrieval | Metadata filters enforce organization, workspace, source type, source ID, and access scope       |
| Realtime         | Channels are authorized by organization, workspace, resource, and actor permissions              |
| Notifications    | Eligibility is checked at creation and again before external delivery                            |
| Logs             | Use correlation ID and safe tenant identifiers; never log secrets or raw tokens                  |
| Analytics        | Product analytics are tenant-safe and must not become developer surveillance                     |
| AI               | Prompt and retrieval payloads contain only permitted sources                                     |

### Consistency Boundaries

Strong consistency is required for:

- Authentication and session creation.
- Organization, workspace, membership, role, and invite state.
- Permission checks and access revocation.
- Issue writes, status changes, assignment changes, and history writes.
- Audit events for sensitive actions.
- AI enablement checks before AI workflows.

Eventual consistency is acceptable for:

- Search indexing.
- Vector embeddings.
- Notification delivery.
- Activity projections.
- Product analytics.
- AI summaries and generated suggestions.
- GitHub webhook-derived link updates.

When eventual consistency is used, the UI must show either durable state or an explicit progress state. Realtime events are hints or patches, not the authority.
