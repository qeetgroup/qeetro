# Roadmap, Review Checklist, And ADRs

Last updated: 2026-05-15

Status: Proposed Phase 1 baseline

Back to [System Architecture](README.md).

## Phase 1 Implementation Roadmap

### M0: Platform Foundation

Deliver:

- Monorepo and package layout.
- NestJS API, worker, realtime, scheduler bootstraps.
- PostgreSQL migrations and tenant-aware base models.
- OpenTelemetry, structured logging, metrics, correlation IDs.
- Transactional outbox and event schema package.
- Authorization policy skeleton.
- Feature flag and kill switch foundation.

Exit gate: a protected command can write a tenant-scoped record, emit an event, create an audit record, and appear in logs/traces with no secrets.

### M1: Identity, Tenant, Workspace, Membership

Deliver:

- Signup, login, logout, verification, sessions.
- User profile and actor model.
- Organization and workspace creation.
- Owner assignment and last-owner protection.
- Invites, invite acceptance, membership, role management.

Exit gate: user creates workspace and invites teammate with safe tenant boundaries.

### M2: Governance, Audit, Realtime, Notifications

Deliver:

- Central authorization checks.
- Audit events for sensitive actions.
- Rate limits.
- WebSocket gateway with reconnect permission validation.
- Notification records and invite email delivery.
- Access revocation propagation.

Exit gate: removed user loses API, realtime, notification, search-ready, and AI-ready access paths.

### M3: Teams, Projects, Issues, History

Deliver:

- Team creation.
- Project creation, status, archive lifecycle.
- Issue create, edit, assign, prioritize, label, move, archive.
- Issue history.
- Execution events.

Exit gate: workspace to project to first issue flow is fast, tenant-safe, and observable.

### M4: Views, Search, Backlog, Sprint/Cycle

Deliver:

- List and board views.
- Filters and sorts.
- Backlog.
- Sprint/cycle lifecycle.
- OpenSearch indexing and reindex tooling.

Exit gate: search returns only permitted projects, issues, docs, and comments, and board state reconciles with durable issue state.

### M5: Collaboration, Docs, Activity

Deliver:

- Issue comments.
- Mentions and mention notifications.
- Lightweight markdown docs.
- Activity projections.
- Search indexing for comments and docs.

Exit gate: comments, docs, activity, notifications, search, and permissions work together without cross-tenant leakage.

### M6: GitHub Links And Imports

Deliver:

- GitHub App connection.
- Manual PR and commit links.
- Webhook verification and idempotency.
- Import source parser, staging, preview, execution, progress, and error reporting.

Exit gate: PR or commit can be linked to an issue, and import retries cannot duplicate work.

### M7: AI Trust Foundations And Assistance

Deliver:

- AI enablement controls.
- Model gateway.
- Prompt registry.
- Permission-aware retrieval.
- Issue draft workflow.
- Summary workflow.
- Workspace Q&A where retrieval is ready.
- AI action logs and evaluation fixtures.

Exit gate: AI produces source-backed drafts or summaries, logs actions, respects permissions, and degrades gracefully.

### M8: Release Validation

Deliver:

- End-to-end MVP loop.
- Permission matrix tests.
- Tenant isolation tests across API, DB, cache, events, search, vector, jobs, realtime, notifications, GitHub, imports, and AI.
- Operational dashboards and alerts.
- Support notes for known limitations.

Exit gate: no known cross-tenant or AI retrieval permission defects.

## Architecture Review Checklist

### Domain Review

- Does one bounded context clearly own the data?
- Is the aggregate invariant explicit?
- Does the feature reuse organization and workspace scope instead of inventing a new scope model?
- Are cross-domain side effects event-driven unless strong consistency is required?

### API Review

- Is the command idempotent where retries are likely?
- Does the query filter by tenant and permission before returning data?
- Are errors safe and non-leaky?
- Does the contract have a versioning path?

### Event Review

- Is the event immutable and versioned?
- Does it include organization, workspace, actor, target, correlation, and causation fields?
- Is the payload safe for consumers and logs?
- Are consumers idempotent?
- Is there a replay or rebuild path?

### Data Review

- Does every tenant-owned table include `organization_id`?
- Does every workspace-owned table include `workspace_id`?
- Are indexes aligned to expected filters?
- Is derived data rebuildable?
- Are secrets excluded from domain tables where a secret store is required?

### Security Review

- Does authorization deny by default?
- Are tenant boundary checks performed before resource checks?
- Does the feature avoid resource existence leakage?
- Are audit events required and implemented?
- Are tokens, secrets, prompts, and provider payloads scrubbed from logs?

### Operational Review

- Are traces, logs, and metrics defined?
- Are failure modes observable?
- Are retries bounded and safe?
- Is there a kill switch for risky async or external-provider behavior?
- Is there an alert for the most important failure modes?

### AI Review

- Is retrieval permission-aware?
- Are outputs source-backed where factual?
- Is uncertainty handled conservatively?
- Is the action logged?
- Does the workflow have evaluation fixtures and fallback behavior?

## Architecture Decision Records

### ADR-001: Start With A Hybrid Modular Monolith

Status: Proposed

Decision: Qeetro Phase 1 uses a modular monolith with separate runtime workers and a realtime gateway.

Rationale: This preserves product speed and domain coherence while allowing operational scaling for async work and WebSockets.

Consequences:

- Strong module boundaries are mandatory.
- Service extraction is delayed until traffic and ownership justify it.
- Shared infrastructure packages must not become a place for domain logic.

### ADR-002: Organization Is The Tenant Boundary

Status: Proposed

Decision: `organization_id` is the primary tenant boundary. Workspace is the primary execution scope under an organization.

Rationale: Product requirements consistently make organization the governance and tenant unit, while workspace is where execution happens.

Consequences:

- Every tenant-owned record carries `organization_id`.
- Workspace-owned records also carry `workspace_id`.
- Team and project do not become independent tenant boundaries in Phase 1.

### ADR-003: Shared PostgreSQL With Explicit Tenant Columns

Status: Proposed

Decision: Use a shared PostgreSQL database with explicit tenant columns and composite tenant indexes for Phase 1.

Rationale: Schema-per-tenant or database-per-tenant adds too much early operational complexity. Explicit tenant columns preserve future sharding and enterprise isolation paths.

Consequences:

- Tenant isolation tests are mandatory.
- Query review must verify tenant filters.
- Future dedicated tenant clusters remain possible because tenant IDs are explicit.

### ADR-004: Transactional Outbox Plus NATS JetStream

Status: Proposed

Decision: Use PostgreSQL transactional outbox for reliable publication and NATS JetStream for durable event transport.

Rationale: The outbox prevents lost events. NATS provides lightweight durable streams and consumer groups suitable for Phase 1.

Consequences:

- Events are at-least-once delivered.
- Consumers must be idempotent.
- Kafka remains a future option if throughput or ecosystem needs require it.

### ADR-005: REST Commands And GraphQL Reads

Status: Proposed

Decision: Use REST for commands and GraphQL for product read composition.

Rationale: REST gives simple mutation semantics, idempotency, and webhook compatibility. GraphQL helps compose dense product screens without creating broad custom endpoints.

Consequences:

- Authorization must be shared by REST and GraphQL.
- GraphQL must not become an unrestricted data access layer.
- Public API design should use stable command contracts.

### ADR-006: Realtime Uses Durable State Reconciliation

Status: Proposed

Decision: WebSocket events deliver patches, refetch signals, and revocations, but PostgreSQL-backed API state remains authoritative.

Rationale: Realtime should improve collaboration without making volatile connection state the source of truth.

Consequences:

- Clients must refetch after reconnect or missed sequence.
- Large or permission-sensitive changes should use refetch signals.
- Realtime gateway can be extracted and scaled independently.

### ADR-007: OpenSearch Is The Phase 1 Search Projection

Status: Proposed

Decision: Use OpenSearch for full-text search and filtered workspace search.

Rationale: Phase 1 needs search over projects, issues, docs, comments, and GitHub metadata with index freshness observability and rebuild paths.

Consequences:

- Search is derived and rebuildable.
- Permission filtering is mandatory at query time.
- Index aliases support reindex without downtime.

### ADR-008: Vector Store Behind An Adapter

Status: Proposed

Decision: Put vector retrieval behind a `VectorStore` adapter and start with pgvector or OpenSearch vector search if sufficient.

Rationale: AI retrieval is required, but a specialized vector database may be premature before volume and recall needs are proven.

Consequences:

- Embedding metadata must preserve tenant and permission filters.
- A dedicated vector database can be introduced later.
- Retrieval tests must be provider-independent.

### ADR-009: GitHub Uses GitHub App Integration

Status: Proposed

Decision: Use a GitHub App as the primary GitHub integration model.

Rationale: GitHub Apps provide scoped installations, webhook support, and a clean service actor model.

Consequences:

- Webhook signature verification and idempotency are mandatory.
- Credentials live in secret storage with DB references.
- Manual PR/commit linking can ship before deep webhook automation.

### ADR-010: AI Is Governed Assistance, Not Autonomy

Status: Proposed

Decision: Phase 1 AI can draft, summarize, and answer questions, but cannot perform high-impact autonomous actions.

Rationale: Qeetro's strategic AI moat is trust, governance, context, and evidence, not flashy autonomy before foundations exist.

Consequences:

- AI output is suggestion-first.
- Source-backed outputs and AI action logs are required.
- High-impact actions require approval boundaries before shipment.

### ADR-011: Audit Events Are Separate From Product Analytics

Status: Proposed

Decision: Audit events are a governance record, separate from product analytics.

Rationale: Audit data must be reliable, scoped, export-ready, and safe for future enterprise requirements. Analytics can evolve faster and should not be treated as evidence-grade governance data.

Consequences:

- Sensitive actions write audit events.
- Product analytics must not include secrets or surveillance-style developer scoring.
- Future audit UI and export can use the audit store without analytics coupling.

### ADR-012: Kubernetes From Production Baseline, Not Platform Sprawl

Status: Proposed

Decision: Use Kubernetes, Terraform, Helm, and GitHub Actions for production deployment, but keep deployable count small in Phase 1.

Rationale: Qeetro needs enterprise-ready operations and scaling paths, but not a large platform team footprint before product usage demands it.

Consequences:

- Deploy web, API, worker, realtime, scheduler, and outbox relay as separate processes.
- Use managed data services where possible.
- Require dashboards, alerts, feature flags, and kill switches before public MVP.

## Summary

Qeetro Phase 1 should be architected as a fast, tenant-safe, AI-ready execution substrate. The core product should remain a disciplined modular monolith while async workflows, realtime, search, integrations, imports, notifications, and AI run through event-driven worker surfaces that can scale and extract independently.

The most important architectural constraint is not microservice count. It is whether every workflow preserves clear ownership, tenant isolation, permission-aware access, durable state, replayable projections, source-backed AI, and operational observability. If those foundations hold, Qeetro can ship the MVP quickly without trapping itself in early architecture debt.
