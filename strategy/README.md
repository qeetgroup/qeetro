# Qeetro Strategy

This directory is the strategic source of truth for Qeetro.

The `.claude/` folder is the operational layer for agents, prompts, workflows, and reusable execution context. This `strategy/` directory defines the deeper company logic: why Qeetro exists, what category it is creating, who it serves, what it refuses to become, and how the product should compound over time.

When strategy and operational guidance disagree, this directory wins. When repository implementation proves a different reality, update the relevant strategy or context document instead of letting stale guidance drift.

## Strategic Thesis

Qeetro is an AI-native execution system for software teams.

It is not a generic project management tool, a Jira clone, or Linear with AI bolted on. Qeetro exists because software organizations are no longer primarily constrained by individual task tracking. They are constrained by coordination tax: manual status reporting, cross-tool context loss, dependency ambiguity, planning rituals, and the inability of existing systems to understand work as it actually happens.

Qeetro's long-term ambition is to become the execution substrate for AI-native software organizations: the system where human collaborators and AI agents plan, coordinate, ship, explain, and improve work together under explicit governance.

## Index

| #   | Document                                                 | What it answers                                                      |
| --- | -------------------------------------------------------- | -------------------------------------------------------------------- |
| 00  | [Manifesto](00-manifesto.md)                             | Why Qeetro exists and what it refuses to accept.                     |
| 01  | [Vision](01-vision.md)                                   | The long-term future Qeetro is building toward.                      |
| 02  | [Mission](02-mission.md)                                 | What Qeetro does now to move toward that future.                     |
| 03  | [Positioning](03-positioning.md)                         | Who Qeetro is for, who it is not for, and the market wedge.          |
| 04  | [Category Design](04-category-design.md)                 | The AI-Native Execution Systems category and how Qeetro defines it.  |
| 05  | [Product Principles](05-product-principles.md)           | The operating laws that govern product decisions.                    |
| 06  | [ICP](06-icp.md)                                         | Ideal customer profiles, buying triggers, pains, and adoption paths. |
| 07  | [Differentiation and Moats](07-differentiation-moats.md) | What makes Qeetro strategically hard to copy.                        |
| 08  | [Competitive Teardown](08-competitive-teardown.md)       | Strategic analysis of incumbent and adjacent platforms.              |
| 09  | [AI Philosophy](09-ai-philosophy.md)                     | How AI is built into the substrate, not bolted onto the product.     |
| 10  | [Roadmap Strategy](10-roadmap-strategy.md)               | What to build, when to build it, and what to delay.                  |
| 11  | [Market Research Update](11-market-research-2026.md)     | Current public competitor signals and strategic implications.        |

## Source Of Truth Order

Use this order when documents conflict:

1. Repository implementation reality
2. Explicit user or founder instruction
3. `strategy/`
4. `.claude/context/`
5. `.claude/workflows/`
6. `.claude/prompts/`
7. `.claude/agents/`

The repository is currently in a seed and planning state. Strategy documents describe intent, direction, and decision rules. They are not evidence that the product has been implemented.

## How To Use These Documents

Before defining a feature, read [Product Principles](05-product-principles.md), [Positioning](03-positioning.md), and [Roadmap Strategy](10-roadmap-strategy.md).

Before making an architecture or platform decision, read [AI Philosophy](09-ai-philosophy.md), [Differentiation and Moats](07-differentiation-moats.md), and the relevant `.claude/context/` files.

Before writing marketing, sales, investor, or recruiting language, read [Manifesto](00-manifesto.md), [Vision](01-vision.md), [Category Design](04-category-design.md), and [ICP](06-icp.md).

Before a strategy refresh, read [Market Research Update](11-market-research-2026.md) and decide which findings are durable enough to move into the core strategy.

Before saying yes to a large customer request, read the anti-principles in [Product Principles](05-product-principles.md) and the anti-ICP section in [ICP](06-icp.md).

## Strategic Guardrails

Qeetro should protect these truths even under customer, investor, and competitive pressure:

- Speed over complexity.
- Execution over administration.
- Intelligent defaults over configuration.
- AI assistance over manual coordination.
- Developer-first adoption before enterprise ceremony.
- Enterprise readiness without enterprise heaviness.
- Realtime collaboration as infrastructure.
- Agent identity, permission, audit, and accountability from the beginning.
- Category creation over feature parity.

## Governance

These documents are versioned through git. Material strategic changes should include a written rationale.

Vision, mission, positioning, category design, and product principles require founder-level approval. ICP, competitive analysis, moats, AI philosophy, and roadmap strategy can evolve faster, but they must remain internally consistent with the core thesis.

Review cadence:

- Monthly during seed stage: market research, competitive teardown, roadmap implications.
- Quarterly: positioning, ICP, competitive teardown, roadmap strategy.
- Semi-annually: differentiation, moats, AI philosophy.
- Rarely: manifesto, vision, mission, tier-one product principles.

Strategy should be stable enough to compound, but not so sacred that it ignores market evidence.
