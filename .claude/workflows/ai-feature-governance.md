---
type: workflow
name: ai-feature-governance
primary_agents:
  - ai-platform-architect
  - security-architect
  - product-manager
  - qa-reliability-engineer
required_context:
  - ../context/product-vision.md
  - ../context/architecture.md
  - ../context/engineering-principles.md
  - ../context/tech-stack.md
related_prompts:
  - ../prompts/product-requirements.md
  - ../prompts/architecture-review.md
  - ../prompts/qa-test-plan.md
---

# AI Feature Governance Workflow

## Purpose

Ensure AI features are useful, safe, observable, tenant-scoped, and aligned with user control.

## Use For

- AI summaries
- AI issue generation
- AI search
- AI planning assistants
- AI automation suggestions
- AI agent workflows
- Retrieval-augmented generation

## Steps

1. Define the user problem and AI value.
2. Identify the user-visible AI action.
3. Identify data sources and tenant scope.
4. Define prompt inputs and output format.
5. Define safety constraints.
6. Define whether user confirmation is required.
7. Define audit and observability needs.
8. Define fallback behavior.
9. Create evaluation fixtures.
10. Add QA coverage for expected, edge, and unsafe cases.
11. Document limitations and user-facing behavior.

## Required Checks

Tenant safety:

- Retrieval is tenant-scoped.
- Cache keys include tenant scope.
- Logs exclude sensitive prompt content unless explicitly approved.
- AI outputs cannot expose cross-tenant context.

User control:

- High-impact actions require confirmation.
- Destructive actions require explicit user intent.
- Generated content is distinguishable from user-authored content where needed.

Reliability:

- Provider failures degrade gracefully.
- Structured outputs are validated.
- Retries are bounded.
- Costs and latency are observable.

Evaluation:

- Happy path examples exist.
- Edge case examples exist.
- Unsafe input examples exist.
- Regression fixtures exist for prompt changes.

## AI Feature Checklist

- [ ] User problem defined
- [ ] AI value is clear
- [ ] Data sources identified
- [ ] Tenant boundaries reviewed
- [ ] Prompt versioning planned
- [ ] Output validation planned
- [ ] User confirmation rules defined
- [ ] Audit logging defined
- [ ] Observability defined
- [ ] Fallback behavior defined
- [ ] Evaluation fixtures created
- [ ] QA plan complete
