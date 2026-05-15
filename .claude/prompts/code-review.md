---
type: prompt
name: code-review
recommended_agents:
  - qa-reliability-engineer
  - security-architect
  - backend-architect
  - frontend-architect
required_context:
  - ../context/engineering-principles.md
  - ../context/delivery-standards.md
---

# Code Review Prompt

## Use When

Use this prompt to review a branch, pull request, patch, or implementation plan.

## Variables

- `CHANGE_SUMMARY`: What changed.
- `FILES_CHANGED`: Files or diff to review.
- `REVIEW_FOCUS`: Security, reliability, product, frontend, backend, tests, or all.

## Prompt

Review the Qeetro change below.

Change summary:
`CHANGE_SUMMARY`

Files changed or diff:
`FILES_CHANGED`

Review focus:
`REVIEW_FOCUS`

Prioritize findings over summary. Look for:

- Incorrect behavior
- Security gaps
- Tenant isolation issues
- Authorization mistakes
- Data consistency problems
- Migration risk
- Realtime/event ordering issues
- AI safety issues
- Missing observability
- Missing or weak tests
- Accessibility issues
- Performance problems
- Release risk

Return findings ordered by severity. Each finding must include:

- Severity
- File/area
- Problem
- Why it matters
- Suggested fix

If no major findings exist, say so and list remaining test gaps or residual risks.

## Expected Output

A concise review with actionable findings first.
