# Qeetro Workflow Playbooks

## Purpose

Workflow files define repeatable operating procedures for Qeetro product and engineering work.

Use workflows when a task has multiple steps, multiple roles, or release/quality risk.

## How To Use

1. Select the workflow that matches the task.
2. Load the required context files.
3. Use the referenced prompts when a structured output is needed.
4. Follow the checklist.
5. Update context, prompts, or workflows when the process changes.

## Available Workflows

- `feature-delivery.md`
- `architecture-decision.md`
- `bug-triage.md`
- `release-management.md`
- `incident-response.md`
- `documentation-update.md`
- `ai-feature-governance.md`

## Workflow Rules

- Keep workflows operational and repeatable.
- Keep durable facts in `.claude/context/`.
- Keep reusable task wording in `.claude/prompts/`.
- Use workflows to coordinate handoffs, quality gates, and validation.
