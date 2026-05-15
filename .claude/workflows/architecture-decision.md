---
type: workflow
name: architecture-decision
primary_agents:
  - system-architect
  - backend-architect
  - data-architect
  - security-architect
  - observability-reliability-architect
required_context:
  - ../context/architecture.md
  - ../context/engineering-principles.md
  - ../context/tech-stack.md
related_prompts:
  - ../prompts/architecture-review.md
---

# Architecture Decision Workflow

## Purpose

Make significant technical decisions deliberately and document the tradeoffs.

## Use For

- Framework selection
- Service boundaries
- Data storage choices
- Realtime architecture
- AI platform decisions
- Eventing strategy
- Security model changes
- Infrastructure changes

## Steps

1. State the decision needed.
2. Identify the current repository state.
3. List options.
4. Compare tradeoffs.
5. Review security, tenant, reliability, and observability implications.
6. Choose a recommended option.
7. Define rollout and rollback strategy.
8. Document the decision in an ADR when it is durable.
9. Update `.claude/context/` if the decision changes project direction.

## Decision Template

```md
# ADR: <Decision Title>

## Status
Proposed | Accepted | Superseded

## Context
What problem are we solving?

## Options
What options were considered?

## Decision
What are we choosing?

## Consequences
What improves, what becomes harder, and what risks remain?

## Rollout
How will this be introduced?

## Reversal
How can we undo or migrate away from this decision?
```

## Quality Gates

- The decision is tied to a real product or engineering need.
- Current implementation reality is clear.
- Tenant isolation is addressed.
- Failure modes are addressed.
- Operational ownership is clear.
- Migration and rollback are considered.

## Checklist

- [ ] Decision needed is clear
- [ ] Options compared
- [ ] Security reviewed
- [ ] Multi-tenancy reviewed
- [ ] Observability reviewed
- [ ] Rollout reviewed
- [ ] ADR written if durable
- [ ] Context updated if needed
