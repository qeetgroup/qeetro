# AI Philosophy

> **AI in Qeetro is not a feature. It is the substrate.**

This document defines how Qeetro thinks about AI — architecturally, strategically, ethically, and operationally. Every AI decision in the company traces back to this document.

## The core thesis

Most "AI-powered" products in 2026 are products with AI features bolted onto an architecture designed before AI was useful. They have a chatbot in the corner. They have a "summarize" button. They have a "draft this for me" affordance. These are useful, but they are tactical.

Qeetro is built on the inverse premise: **the architecture itself is AI-native, and the AI capabilities flow from the architecture.** This is the difference between a car with a GPS and a car designed for autonomous driving. Both have screens. Only one is the future.

## The five architectural commitments

### 1. The data model is AI-readable from day one

Every piece of state in Qeetro is:

- **Semantically typed** — we know what it means, not just what it stores.
- **Richly contextualized** — entities know their relationships to other entities.
- **Event-sourced** — the history of how a state came to be is preserved and queryable.
- **Embedded** — every meaningful entity has a vector representation kept in sync with its semantic content.
- **Grounded** — when AI generates output about an entity, it can be traced back to the source data.

This is what makes AI in Qeetro fundamentally different from AI in legacy PM tools. Their data models were designed for transactional CRUD. Ours is designed for inference.

### 2. The event spine is the AI's nervous system

Every state change in Qeetro emits a structured event. The event log is queryable, replayable, and consumable by AI agents and integrations. AI capabilities are built as consumers of this event spine, not as polling overlays on top of a transactional database.

This means:

- AI can react to events in real time, not on a cron.
- AI can reason about causality, not just current state.
- AI can be tested against historical event streams (replayable evaluation).
- AI agents can be deployed and rolled back without disturbing the substrate.

### 3. AI agents are first-class entities

In Qeetro, AI agents are not background processes. They are first-class entities with:

- **Identity** — a unique, addressable handle distinct from any human.
- **Owner** — a human (or team) accountable for what the agent does.
- **Scoped permissions** — explicit grants on what the agent can read and modify.
- **Audit trail** — every action the agent takes is logged with context, inputs, and rationale.
- **Lifecycle management** — agents can be deployed, paused, updated, deprecated, and decommissioned cleanly.
- **Metering** — agent activity is measured and billable.

This treatment is what allows agents to be deployed safely in enterprise contexts. No other PM tool comes close.

### 4. Context is the moat

The quality of AI in Qeetro is a function of the quality of context the substrate captures. We invest, continuously and aggressively, in:

- **Native context** — what happens inside Qeetro is captured with full fidelity.
- **Integrated context** — every meaningful integration (Git, CI/CD, Slack, Figma, customer systems) feeds the context graph.
- **Inferred context** — relationships, ownership, dependencies, and intent are extracted continuously.
- **Historical context** — patterns over time inform predictions about the present.

The context graph is unique to each customer's organization. The capability to build the graph is unique to Qeetro. This is the long-term moat.

### 5. AI is composed of layers, not magic

Qeetro's AI stack is layered, evaluable, and composable:

```
┌─────────────────────────────────────────────────────────┐
│ User-facing surfaces (chat, inline, suggestions, agents)│
├─────────────────────────────────────────────────────────┤
│ Agent runtime (orchestration, permissions, audit)        │
├─────────────────────────────────────────────────────────┤
│ Capability layer (drafting, summarizing, routing,        │
│   classifying, planning, predicting, querying)           │
├─────────────────────────────────────────────────────────┤
│ Retrieval & grounding (RAG, structured query, semantic   │
│   search, entity resolution)                             │
├─────────────────────────────────────────────────────────┤
│ Context graph (entities, embeddings, events, history)    │
├─────────────────────────────────────────────────────────┤
│ Model layer (frontier models, fine-tunes, small models)  │
└─────────────────────────────────────────────────────────┘
```

Each layer is independently testable, replaceable, and evaluable. We are not locked to any single model provider. We are not locked to any single retrieval strategy. We can replace components as the underlying technology evolves — which it will, rapidly.

## The product philosophy of AI in Qeetro

### AI augments, never replaces accountability

Humans (or agent owners) remain accountable for every decision. AI may draft, recommend, route, summarize, or surface — but never absorbs accountability.

### AI must reduce work, not produce it

An AI feature that creates more reviewing, prompting, or correcting than the work it replaces is a regression. We measure this. We ship AI that quietly removes coordination tax. We refuse to ship AI that demos well and operates poorly.

### AI is integrated, not segregated

AI lives where the work lives. The chat interface is one surface among many. Inline AI in the issue editor, the sprint planner, the roadmap, and the docs is more important than the sidebar chatbot.

### Hallucinations are bugs, not "limitations"

When AI produces incorrect output, we treat it as a defect. We invest in retrieval, grounding, evaluation, and constrained generation to reduce the rate. We measure hallucination rates per capability. We publish them internally. We regress when they grow.

### AI capabilities are evaluated like code

Every AI capability has an evaluation suite — golden datasets, regression tests, quality dashboards. AI quality is monitored continuously. Regressions block deployment. We do not ship "AI is non-deterministic" as an excuse.

### Latency is a UX commitment

AI features that take longer than the user expects break the experience. We invest in streaming, caching, predictive prefetching, and small-model fallbacks to make AI feel instant where it matters.

### The customer controls the autonomy frontier

For every agent, the customer decides what the agent can do autonomously and what requires human approval. The default frontier is conservative. Customers can expand it deliberately. They can never have it expanded for them.

## What we will _not_ do

### We will not ship AI features for the demo

"Look, it can write a roadmap!" is a demo. "It writes a roadmap that the team accepts without rewriting" is a product. We ship the latter or we ship nothing.

### We will not use customer data to train shared models without explicit consent

Per-tenant data isolation is absolute. Customers may opt in to per-tenant fine-tuning with full transparency. We do not sneak training data out of one customer to benefit another. Ever.

### We will not build a "general-purpose AI assistant"

We are not building Claude or ChatGPT. We are building AI that is deeply specialized for software execution. Generality is a trap. Depth is the moat.

### We will not lock customers to a single model provider

The model layer evolves rapidly. We architect for swappability. Customers should benefit from frontier improvements without our intervention.

### We will not ship AI that surveils developers

We measure outcomes, not keystrokes. We do not build features that score individual contributors on AI-derived metrics. The product must be safe for engineers to love.

### We will not ship AI that replaces decision-making in high-stakes contexts

Sprint planning, prioritization, and architectural decisions are recommended by AI but decided by humans. Closing tickets, drafting summaries, routing notifications — those are appropriate for autonomous action with audit. The dividing line is documented per capability.

## How AI features are sequenced

We ship AI in waves of escalating ambition. We do not ship a wave until the prior wave is operationally healthy.

### Wave 1: AI that reduces friction (Year 1)

- Inline drafting (issue descriptions, PRDs, comments)
- Summarization (threads, sprints, docs)
- Smart classification (priority, type, ownership)
- Semantic search across the workspace
- Inline answer surfaces ("ask anything about your work")

### Wave 2: AI that reduces coordination (Year 1–2)

- Status synthesis (from raw signals to executive-ready summaries)
- Risk and blocker detection
- Smart routing (the right person notified at the right time)
- Sprint composition recommendations
- Dependency surfacing

### Wave 3: AI agents (Year 2–3)

- First-party Qeetro agents (planner, scribe, router, librarian, analyst)
- First-class agent identity, permissions, audit
- Agent marketplace beta — third-party agents can be deployed in customer workspaces
- Per-tenant agent observability

### Wave 4: Autonomous coordination (Year 3–5)

- Continuous reconciliation between intent and execution
- Proactive sprint and roadmap optimization
- Cross-team dependency negotiation
- Predictive risk modeling at the portfolio level
- Agent-to-agent collaboration within organizational guardrails

Each wave depends on the architecture of the prior. Wave 4 is not possible without the context graph, agent platform, and event spine being well-developed in Waves 1–3.

## How AI quality is measured

We measure AI on five dimensions, per capability:

| Dimension       | What we measure                                                     |
| --------------- | ------------------------------------------------------------------- |
| **Correctness** | Hallucination rate, factual accuracy, retrieval precision           |
| **Helpfulness** | User accept/edit/reject rates, downstream completion rates          |
| **Latency**     | p50, p95, p99 response times across surfaces                        |
| **Cost**        | Cost per invocation, cost per outcome, cost trajectory              |
| **Safety**      | Incidence of unsafe outputs, permission violations, audit anomalies |

Every AI capability has dashboards on all five. Regressions are treated like outages.

## Privacy, safety, and governance

### Privacy

- Customer data is never used to train shared models without explicit, granular, revocable consent.
- Per-tenant fine-tuning is opt-in, transparent, and deletable.
- Inference logs are encrypted and retained per customer policy.
- We support customer-managed encryption keys for AI-derived artifacts.

### Safety

- Every AI capability has guardrails appropriate to its risk profile.
- Autonomous agent actions in high-stakes contexts require dual control or human approval by default.
- Output filtering is layered (prompt-level, model-level, post-generation).
- Adversarial robustness is tested continuously.

### Governance

- Customers see exactly what AI agents are doing in their workspace.
- Customers control which AI capabilities are enabled per team.
- Customers control which models can be used for which capabilities.
- Customers receive complete audit logs of AI activity.
- Compliance frameworks (SOC2, ISO 27001, HIPAA-ready, GDPR, EU AI Act, US executive orders) are mapped to product features explicitly.

## The model strategy

### We use the best model for the job

Frontier models for high-stakes generation. Smaller, specialized, cheaper models for routine classification and routing. Embedding models tuned for our domain. We are not loyal to a single provider.

### We invest in our own fine-tunes where it matters

For high-volume, latency-sensitive, domain-specific capabilities (e.g., issue classification, dependency extraction), we may train our own small models on aggregated, consented data. This is a moat investment, not a cost-saving measure.

### We architect for model evolution

The model layer will improve every quarter. Our architecture must absorb improvements without rewriting capabilities. Abstractions matter.

### We are honest about what models can and cannot do

We do not market capabilities models cannot reliably deliver. We ship what works. We invest in the rest.

## The agent platform philosophy

The agent platform is the most strategically important piece of Qeetro's AI architecture. Its principles:

### Agents must be safe by default

A new agent in a workspace can do nothing until explicitly granted permissions. No implicit trust.

### Agents must be auditable, always

Every action, with context, with rationale, retrievable forever (subject to retention policy).

### Agents must be replaceable

A customer must be able to disable, replace, or roll back any agent — including ours — without disrupting their workflow.

### Agents must be inspectable

Customers must be able to see what an agent has done, what it intends to do, and why.

### Agents must compose

Agents from different vendors must be able to coexist and collaborate in a workspace under unified governance.

### Agents must be metered

Customers see what their agents cost in resources, in actions, in outcomes.

These principles are what allow the agent marketplace to exist responsibly.

## How AI shapes hiring

The AI organization at Qeetro is not a separate team. AI capability ownership lives across product engineering teams, with a small central platform team that owns:

- The context graph and retrieval infrastructure.
- The agent runtime and orchestration.
- Model integration, evaluation, and safety.
- Per-customer evaluation infrastructure.

This structure prevents AI from being siloed and ensures every product team is responsible for the AI capabilities in their surface.

## How this document evolves

The model landscape, the regulatory landscape, and the customer expectation landscape will all shift dramatically over the coming years. This document is reviewed quarterly. The five architectural commitments are stable. The waves and tactical priorities adapt.

The one constant: **AI in Qeetro is the substrate, not a feature.** That commitment never changes.
