# Qeetro Strategy

This directory is the strategic source of truth for Qeetro.

The `.claude/` folder is the operational layer for agents, prompts, workflows, and reusable execution context. This `strategy/` directory defines the deeper company logic: why Qeetro exists, what category it is creating, who it serves, what it refuses to become, and how the product should compound over time.

When strategy and operational guidance disagree, this directory wins. When repository implementation proves a different reality, update the relevant strategy or context document instead of letting stale guidance drift.

## Strategic Thesis

Qeetro is an AI-native execution system for software teams.

It is not a generic project management tool, a Jira clone, or Linear with AI bolted on. Qeetro exists because software organizations are no longer primarily constrained by individual task tracking. They are constrained by coordination tax: manual status reporting, cross-tool context loss, dependency ambiguity, planning rituals, and the inability of existing systems to understand work as it actually happens.

Qeetro's long-term ambition is to become the execution substrate for AI-native software organizations: the system where human collaborators and AI agents plan, coordinate, ship, explain, and improve work together under explicit governance.

## Current Market Readout: May 2026

The market has moved faster than the old project-management frame. AI assistants, AI teammates, agents, enterprise search, connected context, MCP access, workflow automation, and AI-powered planning are now visible across the category. Linear, GitHub, GitLab, Notion, ClickUp, Asana, Plane, Motion, Shortcut, Smartsheet, and Coda all publicly claim some form of AI-assisted work, agentic workflow, connected context, or intelligent work management.

The strategic implication is clear: Qeetro should not differentiate by saying it has AI. That claim is already crowded. Qeetro should differentiate by defining and proving a stricter standard: governed software execution.

The market now breaks into four competitive clusters:

1. Modern software execution tools: Linear, Plane, and Shortcut. These are the closest wedge competitors because they serve software teams directly, respect developer workflows, and increasingly position around agents, MCP, or AI-assisted product development.
2. Code-platform gravity: GitHub and GitLab. They own repositories, pull requests, CI/CD signals, developer identity, and agentic coding. Qeetro should integrate deeply with them and own the execution layer above code.
3. Broad AI work platforms: Notion, ClickUp, Asana, Monday, Smartsheet, and Coda. They validate demand for connected AI work, but their breadth creates the familiar risks of generic semantics, configuration load, and weaker developer trust.
4. Adjacent AI productivity tools: Motion and Height. They are useful signals for automatic prioritization, capacity planning, and AI project-management language, but they should not pull Qeetro into personal productivity or scheduling.

This makes Qeetro's wedge narrower and stronger: governed execution intelligence for software teams. The product must prove that it understands software execution more deeply than broad work platforms and governs agentic work more clearly than code-hosting platforms.

The proof should come through five capabilities:

- A software-specific execution graph, not a generic task database.
- State inference from GitHub, GitLab, comments, docs, releases, incidents, and planning signals.
- Agent identity, permissions, approval boundaries, and audit from the beginning.
- Developer-first speed, keyboard UX, APIs, webhooks, SDKs, CLI, and MCP-aware surfaces.
- Evidence-backed AI outputs that reduce coordination work instead of creating review work.

The near-term roadmap should resist the temptation to build a broad agent marketplace early. The right response to the market is earlier trust infrastructure: permission-aware retrieval, source-backed summaries, AI action logs, agent identity placeholders, explicit data-use controls, and conservative approval boundaries.

See [Market Research Update](11-market-research-2026.md) for source notes and [Competitive Teardown](08-competitive-teardown.md) for competitor-specific strategy.

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
