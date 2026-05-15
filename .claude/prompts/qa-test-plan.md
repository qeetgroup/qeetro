---
type: prompt
name: qa-test-plan
recommended_agents:
  - qa-reliability-engineer
required_context:
  - ../context/product-vision.md
  - ../context/engineering-principles.md
  - ../context/delivery-standards.md
---

# QA Test Plan Prompt

## Use When

Use this prompt to create a test strategy for a feature, release, bug fix, or workflow.

## Variables

- `SCOPE`: Feature, release, or workflow being tested.
- `REQUIREMENTS`: Requirements or acceptance criteria.
- `RISK_AREAS`: Known risk areas.
- `SUPPORTED_PLATFORMS`: Browsers, devices, APIs, or environments.

## Prompt

Create a QA test plan for Qeetro.

Scope:
`SCOPE`

Requirements:
`REQUIREMENTS`

Risk areas:
`RISK_AREAS`

Supported platforms:
`SUPPORTED_PLATFORMS`

Include:

- Test objectives
- In-scope and out-of-scope areas
- Test data needs
- Unit test coverage
- Integration test coverage
- End-to-end test coverage
- API contract tests
- Permission and tenant isolation tests
- Realtime/collaboration tests, if applicable
- AI behavior tests, if applicable
- Accessibility checks
- Performance checks
- Regression checklist
- Manual exploratory checklist
- Release signoff criteria

Prioritize tests by risk and user impact.

## Expected Output

A QA plan that can guide automated and manual validation.
