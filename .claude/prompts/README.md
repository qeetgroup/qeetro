# Qeetro Prompt Templates

## Purpose

Prompt files are reusable task templates for Claude-assisted work. They should produce consistent, reviewable outputs across product, architecture, engineering, QA, and release tasks.

## How To Use

1. Read the required context files listed in the prompt.
2. Fill in the variables.
3. Run the prompt with the relevant agent role when useful.
4. Check the output against the expected output section.
5. Update context or workflows when the prompt reveals a durable decision.

## Prompt Rules

- Keep prompts task-specific.
- Include inputs, assumptions, and expected output.
- Ask Claude to separate facts from recommendations.
- Ask Claude to identify risks and validation steps.
- Do not put long-lived product truth in prompts. Put it in `.claude/context/`.

## Available Prompts

- `product-requirements.md`
- `architecture-review.md`
- `feature-planning.md`
- `implementation-plan.md`
- `code-review.md`
- `qa-test-plan.md`
- `github-issue-breakdown.md`
- `release-notes.md`
