# Qeetro Context Index

## Purpose

Context files contain durable project knowledge. Claude agents and collaborators should load these before making product, architecture, implementation, or delivery decisions.

## Load Order

1. `product-vision.md`
2. `engineering-principles.md`
3. `tech-stack.md`
4. `architecture.md`
5. `domain-model.md`
6. `delivery-standards.md`

## Rules

- Treat context files as source-of-truth planning documents.
- Do not claim a system is implemented unless repository files prove it.
- Update context when a durable decision changes.
- Keep context factual and long-lived.
- Put task-specific instructions in `.claude/prompts/`.
- Put repeatable operating procedures in `.claude/workflows/`.

## Current State

This repository is in seed/planning state. The context docs define the intended product and architecture direction for future implementation.
