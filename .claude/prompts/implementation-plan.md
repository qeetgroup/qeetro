---
type: prompt
name: implementation-plan
recommended_agents:
  - system-architect
  - frontend-architect
  - backend-architect
  - data-architect
  - qa-reliability-engineer
required_context:
  - ../context/engineering-principles.md
  - ../context/tech-stack.md
  - ../context/delivery-standards.md
---

# Implementation Plan Prompt

## Use When

Use this prompt before coding a specific feature, bug fix, refactor, or infrastructure change.

## Variables

- `TASK`: What must be implemented.
- `FILES_OR_AREAS`: Known files, packages, or domains affected.
- `ACCEPTANCE_CRITERIA`: Required behavior.
- `CONSTRAINTS`: Technical or product constraints.

## Prompt

Create an implementation plan for Qeetro.

Task:
`TASK`

Files or areas:
`FILES_OR_AREAS`

Acceptance criteria:
`ACCEPTANCE_CRITERIA`

Constraints:
`CONSTRAINTS`

First inspect the repository state. Do not assume files or frameworks exist unless they are present.

Return:

- Current state summary
- Proposed change
- Files to create or modify
- Step-by-step implementation plan
- Data model or migration changes
- API changes
- UI changes
- Permission and tenant checks
- Observability additions
- Tests to add or update
- Manual validation steps
- Risks and mitigations
- Questions only if the answer is required to avoid a risky assumption

Keep the plan concrete enough for implementation.

## Expected Output

A practical implementation plan with validation steps.
