# Qeetro - Delivery Standards

## Purpose

This file defines the baseline delivery quality expected for Qeetro work.

## Definition Of Ready

A feature is ready for implementation when it has:

- User problem
- Target users
- Success criteria
- Scope and non-goals
- Domain ownership
- Permission model
- Data model notes
- API or UI contract notes
- Observability expectations
- Testing expectations
- Rollout plan for risky changes

## Definition Of Done

A feature is done when:

- The requested behavior is implemented.
- Tests cover the core behavior and important edge cases.
- Tenant and permission checks are in place.
- Errors are handled intentionally.
- Logs, metrics, or traces exist for important paths.
- Documentation is updated where behavior or setup changed.
- Migration and rollback concerns are addressed.
- The feature is reviewed against product and architecture context.

## Documentation Expectations

Update:

- Product docs when user-visible behavior changes.
- Architecture docs when system boundaries or contracts change.
- Workflow docs when a repeated process changes.
- Prompt docs when a reusable AI task changes.
- ADRs for significant architectural choices.

## Review Checklist

Before merge or handoff, review:

- Correctness
- User experience
- Accessibility
- Tenant isolation
- Authorization
- Data consistency
- Migration safety
- Error states
- Empty states
- Loading states
- Observability
- Test coverage
- Release risk

## Release Checklist

Before release, confirm:

- CI passes.
- Migrations are reviewed.
- Rollback or mitigation path exists.
- Feature flags are configured if needed.
- Monitoring is ready.
- Known risks are documented.
- Support notes are prepared for user-facing changes.

## Incident Expectations

For production incidents:

- Stabilize the system first.
- Preserve evidence.
- Communicate status clearly.
- Identify customer impact.
- Track mitigation and follow-up work.
- Write a short post-incident review for meaningful incidents.

## AI Output Standard

AI-generated plans, specs, and implementation suggestions should:

- Cite the context files used.
- State assumptions.
- Separate facts from recommendations.
- Identify risks.
- Provide test or validation steps.
- Avoid claiming implementation details that are not present in the repo.
