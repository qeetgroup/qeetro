# Qeetro Claude Workspace

## Purpose

This folder contains Qeetro-specific context, reusable prompts, workflows, and agent role definitions for Claude-assisted product and engineering work.

The **strategic** source-of-truth lives in [strategy/](../strategy/README.md). Files in `.claude/` are the **operational** layer that turns that strategy into repeatable execution. If `.claude/` and `strategy/` disagree, `strategy/` wins.

## Folder Structure

```text
.claude/
  agents/      Specialist role definitions
  context/     Durable project facts and source-of-truth guidance
  prompts/     Reusable prompt templates for common Claude tasks
  workflows/   Repeatable operating procedures and handoff playbooks
```

## How To Use

1. Load the relevant context from `.claude/context/`.
2. Choose a specialist from `.claude/agents/` when a task needs a role lens.
3. Use a template from `.claude/prompts/` for repeatable outputs.
4. Follow `.claude/workflows/` for multi-step execution.

## Source Of Truth Order

When files disagree, prefer this order:

1. Repository implementation
2. Explicit user instruction
3. `strategy/` (Manifesto, Vision, Positioning, Product Principles, AI Philosophy)
4. `.claude/context/`
5. `.claude/workflows/`
6. `.claude/prompts/`
7. `.claude/agents/`

## Important Note

The current repository is in seed/planning state. The `.claude` files describe intended product, architecture, and operating direction. Do not assume application code exists until the repository contains it.
