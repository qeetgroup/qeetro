# Qeetro - Architecture Context

## Purpose

This file defines the target architecture for Qeetro. Use it when designing services, APIs, data models, events, realtime collaboration, AI systems, security boundaries, and deployment workflows.

## Current Implementation State

The repository currently contains planning documentation only. The architecture below is a target architecture, not proof that these systems are already implemented.

When producing implementation plans, always distinguish between:

- Existing repo reality
- Proposed target state
- First milestone implementation
- Future architecture

## Architecture Goals

Qeetro should be:

- Multi-tenant
- Cloud-native
- API-first
- Realtime-capable
- Event-driven where useful
- AI-native
- Observable
- Secure by default
- Modular enough to evolve without creating a distributed monolith

## System Shape

Recommended early architecture:

- Monorepo
- Modular frontend app
- Modular backend application first
- Clear domain boundaries
- Shared packages only for stable contracts and utilities
- Event-driven internal workflows where async behavior is valuable

Recommended scaling path:

1. Start with a modular monolith or small set of deployable services.
2. Keep domain boundaries explicit from the beginning.
3. Extract services only when scale, ownership, reliability, or deployment independence justifies it.
4. Preserve contracts through typed APIs, events, and schema versioning.

## High-Level Topology

```text
Clients
  Web app
  Future mobile apps
  External integrations

API Layer
  API gateway or backend-for-frontend
  REST APIs
  GraphQL where graph-shaped client reads justify it
  Realtime gateway

Application Layer
  Identity and access
  Organizations and workspaces
  Projects
  Issues
  Sprints
  Docs
  Comments and collaboration
  Notifications
  Automation
  Integrations
  Analytics
  AI orchestration

Platform Layer
  Event bus
  Background workers
  Search
  Cache
  Object storage
  Observability
  Feature flags

Data Layer
  Relational database
  Cache
  Search index
  Object storage
  Vector index for AI retrieval
```

## Domain Boundaries

Initial bounded contexts:

- Identity: users, sessions, authentication, SSO
- Access control: memberships, roles, permissions, policy checks
- Organization: organizations, workspaces, billing boundaries
- Project: projects, teams, project settings
- Work item: issues, epics, subtasks, labels, priorities, dependencies
- Agile: backlogs, sprints, roadmaps, releases
- Documentation: docs, pages, templates, markdown content
- Collaboration: comments, mentions, activity streams, presence
- Notification: email, in-app, Slack/Discord routing
- Automation: triggers, conditions, actions, rule execution
- Integration: third-party connections, webhooks, import/export
- Analytics: metrics, reports, forecasting
- AI: prompts, retrieval, AI tasks, model calls, AI audit trails

## Multi-Tenancy Model

Tenant hierarchy:

```text
Organization
  Workspaces
    Teams
    Projects
      Issues
      Sprints
      Docs
      Automations
```

Tenant isolation must exist at:

- API authorization layer
- Database query layer
- Cache key layer
- Event payload layer
- Search index layer
- Object storage layer
- Vector retrieval layer
- Analytics layer

Every domain object that belongs to a tenant should include an explicit organization or workspace boundary.

## API Strategy

Use REST for:

- Resource CRUD
- Webhooks
- External integrations
- Public API stability

Use GraphQL only where it creates clear value:

- Complex dashboards
- Cross-resource views
- Client-selected nested reads

Use realtime subscriptions for:

- Presence
- Issue updates
- Board updates
- Comments
- Notifications
- Collaborative editing state

API contracts should include:

- Stable identifiers
- Pagination
- Filtering
- Sorting
- Idempotency keys for mutation safety
- Correlation IDs
- Explicit tenant context
- Consistent error shapes

## Event Strategy

Use events for:

- Activity streams
- Notifications
- Automation triggers
- Search indexing
- Analytics ingestion
- Integration fanout
- AI summarization jobs

Event requirements:

- Versioned event names
- Stable schemas
- Idempotent consumers
- Retry-safe handlers
- Dead-letter handling
- Correlation and causation IDs
- Tenant identifiers
- Replay strategy for important workflows

Example event names:

- `issue.created.v1`
- `issue.status_changed.v1`
- `comment.created.v1`
- `sprint.started.v1`
- `automation.rule_triggered.v1`
- `doc.updated.v1`

## Realtime Architecture

Realtime systems should support:

- WebSocket or equivalent persistent transport
- Tenant-scoped channels
- Project-scoped channels
- Presence state
- Reconnect and resync
- Optimistic UI reconciliation
- Event ordering strategy
- Backpressure handling

Realtime updates should be derived from durable state changes where possible. Avoid treating ephemeral socket messages as the source of truth for business data.

## AI Architecture

AI should be implemented as a platform capability:

- Prompt templates are versioned.
- Retrieval sources are explicit.
- Model calls are logged with safe metadata.
- AI-generated outputs are traceable.
- User confirmation is required for destructive or high-impact actions.
- Tenant boundaries apply to retrieval and embeddings.
- AI features degrade gracefully when providers fail.

Core AI services:

- Prompt registry
- Retrieval service
- AI task queue
- Model gateway
- Safety and policy layer
- AI audit trail
- Evaluation harness

## Data Architecture

Primary data should live in a relational database.

Recommended data responsibilities:

- Relational database: core transactional records
- Cache: sessions, hot reads, rate limiting, ephemeral collaboration helpers
- Search index: text search, filtering-heavy search views
- Object storage: attachments, exports, generated reports
- Vector index: tenant-scoped AI retrieval
- Event log or broker: async workflows and fanout

Data design requirements:

- Tenant-aware schemas
- Soft-delete strategy where recovery/audit matters
- Audit timestamps and actor IDs
- Migration discipline
- Backup and restore plan
- Explicit retention policies

## Security Architecture

Security requirements:

- Least privilege
- RBAC from the beginning
- Centralized authorization checks
- Tenant isolation
- Secure session management
- Audit logs for sensitive actions
- Secret management outside source control
- Rate limiting
- Input validation
- Dependency scanning
- Secure webhook validation

High-risk actions must produce audit records:

- Permission changes
- Integration installs
- Automation changes
- AI-generated bulk operations
- Data exports
- Billing/admin changes

## Observability Architecture

Every production service should emit:

- Structured logs
- Metrics
- Traces
- Correlation IDs
- Tenant-safe diagnostic metadata
- Health checks
- SLO-oriented dashboards

Minimum operational views:

- API latency and errors
- Realtime connection health
- Background job success/failure
- Event consumer lag
- Search indexing lag
- AI provider latency and error rate
- Database saturation
- Cache hit rate

## Deployment Architecture

Early target:

- Containerized applications
- Environment-specific configuration
- CI checks for lint, tests, type checks, and security scans
- Preview environments when practical
- Automated migrations with rollback planning

Future target:

- Kubernetes
- Terraform-managed infrastructure
- Helm or equivalent deployment packaging
- Progressive delivery
- Feature flags
- Centralized secrets management
- SLO-based release gates

## Architecture Decision Rules

Prefer:

- Simple modular boundaries before service extraction
- Explicit contracts before implicit coupling
- Durable source-of-truth writes before realtime fanout
- Idempotent async workflows
- Tenant-aware data access
- Observable behavior over hidden magic

Avoid:

- Premature microservices
- Unversioned events
- Cross-tenant shared caches
- AI retrieval without tenant scoping
- Business-critical state stored only in realtime channels
- Hidden authorization assumptions
