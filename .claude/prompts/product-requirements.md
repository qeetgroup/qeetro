---
type: prompt
name: product-requirements
recommended_agents:
  - product-manager
  - founder-vision-strategist
required_context:
  - ../context/product-vision.md
  - ../context/domain-model.md
  - ../context/delivery-standards.md
---

# Product Requirements Prompt

## Use When

Use this prompt to turn a product idea into a clear PRD or feature specification.

## Variables

- `FEATURE_NAME`: Name of the feature.
- `USER_PROBLEM`: The problem users have.
- `TARGET_USERS`: Primary users affected.
- `CURRENT_CONTEXT`: What exists today, if anything.
- `CONSTRAINTS`: Timeline, technical, business, or compliance constraints.
- `OPEN_QUESTIONS`: Known unknowns.

## Prompt

You are defining product requirements for Qeetro.

Read the required context files first. Treat repository reality as more important than planning assumptions.

Feature:
`FEATURE_NAME`

User problem:
`USER_PROBLEM`

Target users:
`TARGET_USERS`

Current context:
`CURRENT_CONTEXT`

Constraints:
`CONSTRAINTS`

Open questions:
`OPEN_QUESTIONS`

Produce a PRD that includes:

- Summary
- Goals
- Non-goals
- Target users
- User stories
- Core workflows
- Functional requirements
- Non-functional requirements
- Permissions and tenant boundaries
- AI behavior, if applicable
- Analytics and success metrics
- Edge cases
- Rollout considerations
- Open questions
- Acceptance criteria

Separate facts, assumptions, and recommendations. Keep the PRD implementation-aware but do not over-prescribe technical design unless the requirement demands it.

## Expected Output

A structured Markdown PRD that engineering, design, QA, and product can review.
