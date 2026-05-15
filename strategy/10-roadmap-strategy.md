# Roadmap Strategy

> **The roadmap is not a list of features. It is the sequencing of strategic bets.**

This document defines _how_ we sequence what we build, not _what_ the next sprint contains. The tactical roadmap lives elsewhere; the strategic logic lives here.

## The sequencing principle

Every meaningful product investment falls into one of three categories:

| Category      | Purpose                                                                                                                                           | % of capacity |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| **Substrate** | Architectural foundations that compound across all future product (data model, event spine, agent platform, context graph, performance, security) | ~40%          |
| **Wedge**     | Capabilities that win our current ICP today                                                                                                       | ~40%          |
| **Frontier**  | Bets on where the category is going (agent marketplace, autonomous coordination, novel surfaces)                                                  | ~20%          |

The percentages shift over time:

- **Year 1:** 60% substrate, 35% wedge, 5% frontier (we earn the right to exist).
- **Year 2:** 40% substrate, 40% wedge, 20% frontier.
- **Year 3:** 30% substrate, 40% wedge, 30% frontier (frontier becomes wedge).
- **Year 5+:** 25% substrate, 35% wedge, 40% frontier (we are the category).

## Year 1: Earn the right to exist

### Strategic objective

Become the obvious choice for AI-native software teams of 50–200 engineers currently on Linear or GitHub Projects. Achieve undeniable speed-of-execution, AI-native depth, and operational reliability.

### Substrate priorities (Year 1)

1. **Core data model.** AI-native, semantically typed, event-sourced from day one. The most important architectural decisions of the company are made here. Re-platforming this later is impossible.
2. **Event spine.** Every state change emits structured events. Replayable, queryable, consumable by AI and integrations.
3. **Realtime collaboration substrate.** CRDT-based or equivalent. Presence, shared cursors, conflict-free editing as primitives.
4. **API / CLI / SDK / webhook surface.** Comprehensive from launch. Same APIs internally as externally.
5. **Authentication, authorization, audit.** SSO, SCIM, RBAC, complete audit logs. Built in, not added.
6. **Performance budget enforcement.** CI gates on latency. Cultural commitment to sub-100ms.
7. **Observability platform.** For us internally and for customers. Customers can introspect their own usage.
8. **Foundational integrations.** GitHub (deep), GitLab, Slack, Linear (import), Jira (import), Figma, Notion (read), Google Calendar.

### Wedge priorities (Year 1)

1. **Issue tracking that beats Linear on speed and parity on UX.**
2. **Sprints / cycles with intelligent defaults.**
3. **Roadmaps and initiatives that solve Linear's scaling ceiling.**
4. **Docs as a first-class primitive (lightweight Notion replacement for execution-adjacent docs).**
5. **Inline AI: drafting, summarization, classification, search.**
6. **Realtime status synthesis for managers (no more weekly status meetings).**
7. **Onboarding under 5 minutes to first value.**
8. **Migration tools from Linear, Jira, GitHub Projects.**

### Frontier priorities (Year 1)

1. **First-class AI agent identity model** (architectural; no marketplace yet).
2. **Two first-party agents** in beta: a "scribe" (notes, summaries, status) and a "planner" (sprint composition recommendations).
3. **Open standards work** on agent identity and execution semantics (positioning for category authorship).

### Year 1 success criteria

- 100+ paying customers in the wedge ICP.
- $5M+ ARR.
- Net retention >130%.
- p95 latency <100ms on core interactions.
- Time-to-first-value <5 minutes (95th percentile).
- 3+ named lighthouse customers willing to publicly evangelize.
- Analyst awareness (briefings booked with Forrester, Gartner equivalents).
- Founding category narrative published and circulating in industry conversations.

### What we explicitly will not build in Year 1

- Cross-functional surfaces beyond engineering/product/design.
- Native chat/messaging (Slack/Teams integration is the answer).
- Custom workflow engines or workflow builders.
- Time tracking (we are not a billable-hours product).
- OKR-shaped goals product (post-Year 1).
- Whiteboards.
- Native video.
- Mobile apps beyond a competent companion (full-featured mobile is Year 2).
- Enterprise compliance certifications beyond SOC2 Type 2 (more come in Year 2).
- Self-hosted offering (we evaluate in Year 2 based on demand).
- Asia-Pacific data residency (Year 2).
- A public agent marketplace (Year 2 beta).

## Year 2: Define the category

### Strategic objective

Establish "AI-Native Execution Systems" as a recognized category and Qeetro as its defining instance. Move upmarket without losing the bottom-up DNA.

### Substrate priorities (Year 2)

1. **Context graph enrichment.** Deeper extraction, broader integration, better embeddings.
2. **Agent runtime maturity.** Production-grade orchestration, permissions, audit.
3. **Multi-region infrastructure.** EU residency, beginning APAC presence.
4. **Enterprise security hardening.** SOC2 Type 2, ISO 27001, GDPR, customer-managed keys.
5. **Performance at scale.** Validated at 10,000-seat workspaces.

### Wedge priorities (Year 2)

1. **Coordination automation features** (auto-routing, blocker detection, status synthesis at executive level).
2. **Portfolio / multi-team roadmapping** for the 200–1000 engineer tier.
3. **Customer signal integration** (deep CRM, support, customer-systems integrations to feed the context graph).
4. **Mobile.**
5. **Advanced reporting and analytics.**
6. **Migration tooling for Jira at meaningful scale** (the upmarket wedge).

### Frontier priorities (Year 2)

1. **Agent marketplace beta.** First third-party agents deployed in customer workspaces.
2. **Open agent identity standard** published.
3. **Autonomous capabilities expansion** (agents act with greater scope, under increasingly sophisticated guardrails).
4. **First "predictive" features** (release risk, sprint risk, dependency risk).

### Year 2 success criteria

- 500+ customers; 5+ in the >1,000-seat tier.
- $25M+ ARR.
- Analyst category recognition (Forrester wave or equivalent positioning).
- Marketplace with 25+ third-party agents/integrations.
- Public reference customers in 3+ verticals.
- Net retention >135%.

## Year 3: Become the obvious choice for ambitious orgs

### Strategic objective

Win the majority of net-new AI-native software organization deals. Establish meaningful enterprise footprint. Marketplace becomes a flywheel.

### Substrate priorities

- Multi-region, multi-cloud architecture maturity.
- Per-tenant fine-tuning infrastructure for AI capabilities.
- FedRAMP and regulated-industry readiness.
- Self-hosted / sovereign-cloud offering.

### Wedge priorities

- Cross-functional expansion (devrel, TPM, support engineering, sales engineering as first-class).
- Customer-context integrations (closing the loop with revenue, support, product analytics).
- Advanced governance for enterprise (data classification, retention policies, agent governance frameworks).

### Frontier priorities

- Agent marketplace at scale (thousands of agents).
- Cross-organization agent collaboration patterns.
- "Continuous coordination" — the substrate proactively reconciles intent and execution.

### Year 3 success criteria

- 2,000+ customers; meaningful enterprise wins.
- $75M+ ARR.
- Analyst recognition as category leader.
- Marketplace generating measurable third-party revenue and customer value.
- AI features driving measurable, customer-attested coordination-tax reduction (target: 30% reduction in status-meeting time, attested by ≥50% of customers).

## Year 4–5: Become the substrate

### Strategic objective

Be the default execution substrate for AI-native software organizations. Cross the threshold where Qeetro is on every relevant evaluation, and the burden of proof is on alternatives.

### Bets

- Adjacent function expansion (devops, customer success engineering, technical sales).
- Industry-specific configurations (regulated industries, public sector, defense).
- The agent marketplace becomes a meaningful business in its own right.
- International expansion at full scale.

### Year 5 outcomes

- $250M–$500M ARR.
- Category-defining position with no credible challenger of equal depth.
- Marketplace ecosystem of 10,000+ integrations and agents.
- Ready for IPO or principled long-duration private growth.

## Sequencing principles

These principles govern _how_ the roadmap is built and re-built each quarter.

### 1. Substrate first within a horizon

Within any horizon, foundational architecture work precedes capabilities that depend on it. We do not build agent features before the agent platform exists. We do not build coordination automation before the event spine is mature.

### 2. Wedge before adjacency

We win our current ICP completely before we expand. The temptation to chase adjacent markets is constant; the cost of premature expansion is the failure mode of growth-stage companies.

### 3. Frontier bets are time-boxed and funded discretely

Frontier work has its own dedicated capacity. It does not steal from substrate or wedge work. It does not get backlog-merged with feature requests. Its output is evaluated on category-creation impact, not on quarterly ARR.

### 4. Performance and reliability are funded as substrate, not as overhead

Performance work is not "engineering excellence time." It is product investment, with quantified outcomes (latency reduction, regression elimination, reliability target attainment).

### 5. Migration tooling is a wedge investment, not a side project

Every meaningful displacement (from Linear, from Jira, from GitHub Projects, from Notion) requires investment in migration tools, parity coverage, and switch-over UX. We treat these as first-class wedge capabilities.

### 6. Compliance and enterprise readiness are sequenced ahead of demand

We earn enterprise certifications before the deals require them, not after. SOC2 Type 2 in Year 1, ISO 27001 in Year 2, FedRAMP-readiness in Year 3+. The certification is a sales accelerator and a competitive moat.

### 7. Integration depth, not breadth

We invest deeply in fewer integrations (GitHub, Slack, Figma, Linear, Jira) before we invest in more. Depth wins the context graph; breadth fragments engineering effort.

### 8. AI capabilities ship in evaluable form

No AI capability ships without an evaluation suite, a quality dashboard, and a regression gate. AI quality is measured continuously, like any other system.

### 9. We say no often

The ratio of features requested to features shipped is large and intentional. Every "no" protects the principle that "configuration is failure." Every "yes" must strengthen a moat.

### 10. The roadmap is not a promise

The roadmap is a current best understanding. Customers know that priorities adjust. We commit to outcomes (the category position, the customer success criteria), not to feature-level dates.

## How the roadmap is governed

- **Quarterly:** Founder + heads of product/engineering set the next quarter's substrate/wedge/frontier allocation.
- **Monthly:** Heads of product approve major roadmap shifts.
- **Weekly:** Product engineering teams own sprint-level decisions within approved guardrails.
- **Continuously:** Customer feedback, competitive intelligence, and AI-evaluation results inform priority shifts.

The strategic priorities in this document are reviewed each quarter and amended through a written proposal process. Material shifts to the multi-year sequencing require founder approval.

## What success of the roadmap looks like

- We ship less than our competitors and win the category.
- Each quarter's work compounds with the prior. No throwaway sprints. No reactive feature pile-on.
- Every customer-facing feature traces back to a documented strategic objective.
- Five years from now, looking back at this document, the major bets are recognizable in the product we shipped.

The roadmap is the most important artifact of strategy execution. Treat it accordingly.
