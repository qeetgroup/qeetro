---
type: prompt
name: github-issue-breakdown
recommended_agents:
  - github-issues-planner
  - product-manager
  - print-agile-program-manager
required_context:
  - ../context/product-vision.md
  - ../context/domain-model.md
  - ../context/delivery-standards.md
---

# GitHub Issue Breakdown Prompt

## Use When

Use this prompt to convert a PRD, plan, or feature request into implementation-ready GitHub issues.

## Variables

- `PLAN_OR_PRD`: Source plan or requirements.
- `MILESTONE`: Target milestone.
- `TEAM_OR_OWNERS`: Owners or teams.
- `LABELS`: Preferred labels.

## Prompt

Break the Qeetro work below into GitHub issues.

Source plan or PRD:
`PLAN_OR_PRD`

Milestone:
`MILESTONE`

Team or owners:
`TEAM_OR_OWNERS`

Labels:
`LABELS`

For each issue, include:

- Title
- Objective
- Context
- Scope
- Non-goals
- Acceptance criteria
- Technical notes
- Testing notes
- Dependencies
- Suggested labels
- Suggested owner/agent

Group issues by milestone or delivery sequence. Keep issues small enough to review and test independently.

## Expected Output

A list of ready-to-create GitHub issues in Markdown.
