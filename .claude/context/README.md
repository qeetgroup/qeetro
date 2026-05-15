# Qeetro Context Index

## Purpose

Context files contain durable project knowledge. Claude agents and collaborators should load these before making product, architecture, implementation, or delivery decisions.

These files are downstream of [strategy/](../../strategy/README.md). When in doubt about _why_ (category, positioning, principles, AI philosophy), read `strategy/`. Use `.claude/context/` for _how_ we execute.

## Load Order

0. [strategy/](../../strategy/README.md), at minimum `00-manifesto.md`, `03-positioning.md`, `05-product-principles.md`, `09-ai-philosophy.md`
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
