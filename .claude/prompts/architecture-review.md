---
type: prompt
name: architecture-review
recommended_agents:
  - system-architect
  - backend-architect
  - security-architect
  - observability-reliability-architect
required_context:
  - ../context/architecture.md
  - ../context/engineering-principles.md
  - ../context/tech-stack.md
  - ../context/domain-model.md
---

# Architecture Review Prompt

## Use When

Use this prompt to review a proposed feature, service, integration, data model, or architecture decision.

## Variables

- `PROPOSAL`: Architecture or implementation proposal.
- `SCOPE`: Systems, domains, or files affected.
- `RISKS`: Known concerns.
- `DECISION_NEEDED`: What must be decided now.

## Prompt

You are reviewing an architecture proposal for Qeetro.

Read the required context files first. Identify whether the proposal matches the current repository state or describes a future target.

Proposal:
`PROPOSAL`

Scope:
`SCOPE`

Known risks:
`RISKS`

Decision needed:
`DECISION_NEEDED`

Review the proposal for:

- Domain boundaries
- Multi-tenancy
- Authorization and security
- Data consistency
- API contract quality
- Event and async behavior
- Realtime implications
- AI governance implications
- Observability
- Reliability and failure modes
- Migration and rollout risk
- Operational cost and complexity
- Fit with current project phase

Return:

- Recommendation
- Major concerns
- Minor concerns
- Required changes
- Open questions
- Suggested architecture shape
- Validation plan
- Rollback or mitigation plan

Be direct. Prefer practical architecture that preserves future options without overbuilding.

## Expected Output

A review memo suitable for product and engineering decision-making.
