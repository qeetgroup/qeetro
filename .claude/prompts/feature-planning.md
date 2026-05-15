---
type: prompt
name: feature-planning
recommended_agents:
  - product-manager
  - system-architect
  - frontend-architect
  - backend-architect
required_context:
  - ../context/product-vision.md
  - ../context/architecture.md
  - ../context/domain-model.md
  - ../context/delivery-standards.md
---

# Feature Planning Prompt

## Use When

Use this prompt to turn an approved feature into a practical delivery plan.

## Variables

- `FEATURE_SPEC`: PRD or feature summary.
- `TARGET_MILESTONE`: Desired release or phase.
- `TEAM_CONSTRAINTS`: Team, time, or dependency constraints.
- `KNOWN_DEPENDENCIES`: External or internal dependencies.

## Prompt

Create a delivery plan for the Qeetro feature below.

Feature spec:
`FEATURE_SPEC`

Target milestone:
`TARGET_MILESTONE`

Team constraints:
`TEAM_CONSTRAINTS`

Known dependencies:
`KNOWN_DEPENDENCIES`

Produce:

- Scope summary
- Assumptions
- Dependencies
- Work breakdown by domain
- Suggested implementation order
- Frontend work
- Backend work
- Data and migration work
- Realtime/event work
- AI work, if applicable
- Security and permission work
- Observability work
- QA strategy
- Documentation updates
- Rollout plan
- Risks and mitigations

Keep the plan sequenced and shippable. Identify a minimum viable milestone and defer non-essential complexity.

## Expected Output

A structured delivery plan that can be converted into implementation issues.
