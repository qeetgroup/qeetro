# Qeetro - Engineering Principles

## Purpose

This file defines how engineering decisions should be made for Qeetro. Use it for implementation planning, architecture review, code review, testing strategy, and operational decisions.

## Core Philosophy

Qeetro should be built with clarity, reliability, observability, and maintainability as default expectations.

The platform is intended to become:

- AI-native
- Realtime-capable
- Multi-tenant
- Cloud-native
- Enterprise-ready
- Developer-friendly

Those goals should guide decisions, but they should not justify unnecessary complexity before the product needs it.

## Principles

### 1. Start Simple, Preserve Boundaries

Prefer a simple deployable architecture early, while keeping domain ownership and contracts explicit.

Do:

- Define clear modules.
- Keep domain models cohesive.
- Avoid leaking data access across domains.
- Use explicit API and event contracts.

Avoid:

- Premature microservices.
- Shared utility sprawl.
- Unclear ownership.
- Hidden dependencies between features.

### 2. Architecture Before Large Features

Before building a major feature, define:

- User problem
- Domain ownership
- Data model
- API contract
- Permission model
- Event behavior
- Observability requirements
- Test strategy
- Rollout approach

Small features can move faster, but they should still follow established patterns.

### 3. Tenant Isolation Is Mandatory

Every feature must respect tenant boundaries.

Tenant awareness must exist in:

- API handlers
- Database queries
- Cache keys
- Events
- Search documents
- Vector retrieval
- Logs and analytics
- Background jobs

Cross-tenant data leakage is a release-blocking defect.

### 4. Security Is Part Of The Feature

Security is not a final checklist.

Every implementation should define:

- Who can perform the action
- Which tenant/workspace/project scope applies
- What audit record is required
- What input must be validated
- What rate limits or abuse controls apply
- What sensitive data must be excluded from logs

### 5. Observability Is Required

If a workflow matters, it must be observable.

Include:

- Structured logs
- Metrics
- Traces for request and job paths
- Correlation IDs
- Tenant-safe diagnostic fields
- Error reporting
- Dashboards for production-critical flows

### 6. Reliability Before Optimization

Optimize in this order:

1. Correctness
2. Reliability
3. Security
4. Observability
5. Maintainability
6. Performance
7. Cost

Performance work should be measured. Reliability work should be designed into the workflow.

### 7. Async Work Must Be Idempotent

Background jobs and event consumers must be safe to retry.

They should include:

- Idempotency keys where needed
- Deduplication strategy
- Retry policy
- Dead-letter behavior
- Correlation IDs
- Error visibility

### 8. AI Must Be Governed

AI features must be:

- Tenant-scoped
- Auditable
- Explainable enough for the workflow
- Safe for sensitive data
- Recoverable when provider calls fail
- Controlled by users for high-impact actions

AI output should be treated as assistance until a user or trusted policy accepts it.

### 9. Developer Experience Matters

Good engineering systems should make the right path easy.

Prefer:

- Clear commands
- Fast feedback
- Strong types
- Reusable testing utilities
- Local development parity where practical
- Consistent formatting
- Helpful documentation close to the code

### 10. Documentation Follows Decisions

When a decision changes behavior or architecture, update the relevant docs:

- `.claude/context/*` for durable project context
- `.claude/workflows/*` for repeated operating processes
- `.claude/prompts/*` for reusable AI prompts
- README or product docs for user-facing setup and usage
- ADRs when an architectural tradeoff matters long term

## Engineering Standards

### Code Quality

- Use TypeScript for application code when the stack is created.
- Prefer explicit types at public boundaries.
- Keep modules focused.
- Avoid large files with mixed responsibilities.
- Keep side effects visible.
- Validate external input.
- Handle errors deliberately.

### Testing

Expected test levels:

- Unit tests for pure business logic
- Integration tests for persistence, APIs, events, and jobs
- Contract tests for public APIs and important event schemas
- End-to-end tests for critical user workflows
- Accessibility checks for UI flows
- Load or soak tests for realtime, queue, and high-volume paths

### Review

Code review should check:

- Correctness
- Tenant isolation
- Authorization
- Data model implications
- Error handling
- Observability
- Test coverage
- Migration safety
- User impact
- Rollout and rollback

### Release Readiness

A release should have:

- Passing checks
- Migration plan
- Rollback plan
- Feature flag plan if needed
- Monitoring plan
- Known risks documented
- Support or incident notes for risky changes

## Decision Heuristics

Choose boring technology unless a non-boring choice clearly improves product outcomes.

Prefer building custom logic for:

- Core product differentiation
- Domain-specific workflows
- AI execution intelligence
- Collaboration behavior

Prefer proven platforms/libraries for:

- Authentication primitives
- Payments
- Observability collection
- Queueing foundations
- Rich text/collaboration engines
- Security scanning

## Non-Negotiables

- No secrets in source control.
- No cross-tenant data access.
- No unbounded background retries.
- No silent destructive AI action.
- No production-critical workflow without logs and metrics.
- No schema migration without rollback or mitigation thinking.
- No major feature without an authorization model.
