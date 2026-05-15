# Product Principles

These are the operating laws of Qeetro. They override personal opinion, customer requests, competitive pressure, and analyst feedback. When in conflict, principles win.

Every PR, design review, roadmap meeting, and hiring decision is governed by these principles.

---

## Tier 1: Inviolable principles

These principles are never traded against. If a feature, decision, or strategy violates one, it is rejected — regardless of the apparent business case.

### 1. Speed is correctness.

Any core interaction over 100ms is a bug. Page loads over 500ms are a bug. Sync latency over 200ms is a bug. Speed is not a tier-2 quality attribute; it is a definition of correctness. We measure it. We regress-test it. We do not ship features that degrade it.

### 2. Configuration is failure.

Every configuration option exposed to the user is an admission that we did not understand the problem well enough to choose. We reach for opinionated defaults first, configurability last. The bar for adding a customer-facing setting is high and rising over time, not lowering.

### 3. The system must explain itself.

Any state in Qeetro must be explainable. "Why is this issue assigned to me?" "Why is this sprint at risk?" "Why did the agent close this ticket?" — every such question has a structured, accurate answer surfaced in-product. No black-box automations.

### 4. AI must reduce work, not produce it.

An AI feature that creates more reviewing, prompting, or correcting than the work it replaces is a regression. We ship AI that quietly removes coordination tax. We do not ship AI that demos well and operates poorly.

### 5. Developers come first.

If a capability is not available via API, CLI, SDK, or webhook, it is not finished. Developer-facing surfaces ship at the same time as the UI, not after. Internal teams use the same APIs as customers.

### 6. Realtime is a primitive.

Presence, shared cursors, conflict-free editing, live state propagation — these are infrastructure, not premium tier features. Anything stateful in Qeetro is multiplayer by default.

### 7. Enterprise readiness is built in from day one.

SSO, SCIM, RBAC, audit logs, encryption, data residency, and observability are properties of the substrate, not features we add when we go upmarket. Ship the small-team experience on the enterprise-grade substrate.

### 8. We design for the next decade, not the last one.

Every architectural choice assumes: AI agents as collaborators, distributed teams as the norm, event-driven systems, sub-second sync globally, and 10x more software per organization. We do not optimize for legacy patterns we expect to be obsolete in 36 months.

---

## Tier 2: Strong defaults

These are the principles we follow unless we have a deliberate, documented reason to deviate.

### 9. Keyboard-first.

Every meaningful action has a keyboard shortcut. The command palette is canonical. Mouse-only flows are accepted only where the interaction is fundamentally spatial.

### 10. Minimal cognitive load.

Every screen earns its complexity. Every field, button, menu item, and badge must justify itself. When in doubt, remove it.

### 11. Convention over configuration.

We choose conventions for naming, structure, layout, and workflow. Customization is earned by evidence of broad need, not requested by individual customers.

### 12. Boring infrastructure, exciting product.

We use mature, proven infrastructure for the substrate (Postgres, Kafka, Redis, etc., as appropriate). We innovate where users feel it. We do not innovate where they don't.

### 13. Event-driven by default.

Every state change emits an event. Every event is queryable, replayable, and consumable by integrations and agents. The event log is the source of truth.

### 14. Observability is a product feature.

Customers can introspect their own usage, performance, and AI agent behavior. Observability is not internal-only.

### 15. Build for the median user, not the loudest one.

The vocal customer asking for an obscure feature is rarely representative. We instrument, we measure, we listen broadly. We do not roadmap by the squeakiest wheel.

### 16. Defaults are political.

What we ship as the default shapes how customers think about the work. Defaults are a strategic choice, not a UX detail.

### 17. Performance budgets are non-negotiable.

Every surface has a performance budget. Regressions block merge. New features either fit the budget or include the optimization work that frees the budget.

### 18. Latency is a UX problem, not just an engineering one.

Optimistic UI, predictive prefetching, and intelligent caching are design responsibilities, not just engineering responsibilities.

### 19. Onboarding is the most important feature.

A user who does not reach first value in the first session will not return. Onboarding receives founder-level attention indefinitely.

### 20. Documentation is part of the product.

Docs ship with the feature. A feature without complete documentation is incomplete and does not count as shipped.

---

## Tier 3: AI-specific principles

### 21. AI is a peer, not a chatbot.

We do not bolt a chatbot onto the corner of the screen. AI is integrated into every meaningful surface where it can reduce work. The chat interface, where it exists, is one entry point of many.

### 22. Agents have identity.

Every AI agent operating in Qeetro has a distinct identity, owner, scoped permissions, and audit trail. Agents are not anonymous automations.

### 23. Agents act with consent.

Agents act autonomously only within explicitly granted scopes. High-impact actions require human approval by default. The customer controls the autonomy frontier.

### 24. Hallucinations are bugs.

When AI generates incorrect output, we treat it as a defect, not a "limitation of the model." We invest in retrieval, grounding, evaluation, and constrained generation to reduce the rate. We measure it. We publish it internally.

### 25. AI capabilities are evaluated, not just shipped.

Every AI feature has a measurable evaluation suite. Regressions in AI quality are treated like regressions in any other system. We do not ship "AI is non-deterministic" as an excuse.

### 26. AI augments human decision-making, never replaces accountability.

The human is always accountable. AI may recommend, draft, route, or summarize. The decision authority remains with the human (or with the agent's owner, who is accountable for the agent).

### 27. Context is the moat.

The quality of AI in Qeetro is a function of the quality and breadth of context the substrate captures. We invest in capturing context (events, integrations, conversations, artifacts) because that investment compounds into AI quality that competitors cannot match without similar substrate.

### 28. Privacy and data isolation are absolute.

Customer data is never used to train shared models without explicit, granular consent. Per-tenant model fine-tuning is opt-in, transparent, and revocable.

---

## Tier 4: What Qeetro will never be

These are the explicit anti-principles. Saying no to these is the source of our quality.

### Qeetro will never be:

- **A configuration-driven workflow engine** with custom statuses, custom issue types, custom fields as the primary mode of customization.
- **A generic "work OS"** trying to serve marketing, HR, legal, finance, and engineering with one product.
- **A surveillance tool** that measures developer keystrokes, lines of code, or "productivity" via vanity metrics.
- **An implementation-services product** where success requires a six-month deployment by certified consultants.
- **A walled garden** that locks customer data behind proprietary formats or restrictive APIs.
- **A "platform of platforms"** with so many primitives that customers must build their own product on top to make it useful.
- **An AI-feature-of-the-week shop** that ships gimmicks to chase headlines.
- **A meeting-replication tool** that forces sync rituals into the product (we eliminate the meetings, not embed them).
- **A status-theater product** that helps managers look productive without enabling teams to be productive.
- **A maximalist enterprise vendor** that sells to the CIO over the heads of the engineers who will use it.

---

## How principles are amended

Tier 1 principles can be amended only by founder approval, with a written rationale and a 30-day reflection period. Tier 2 principles can be amended by the head of product. Tier 3 principles by the head of AI. Tier 4 anti-principles can never be relaxed; only added to.

The bias is toward fewer principles, more strictly held. If a principle is not load-bearing in monthly decisions, it should be removed.

## Using principles in practice

In every roadmap review, design review, and architectural review, the question is asked:

> _"Which principle is this decision strengthening? Which principle, if any, is it in tension with?"_

If the answer is "none" — the work is suspect.
If the answer involves trading off a Tier 1 principle — the work is rejected.
If the answer is unclear — the proposer needs to think harder before bringing it back.

Principles are how a small organization makes consistent decisions across thousands of micro-choices without re-litigating strategy each time. Treat them as infrastructure.
