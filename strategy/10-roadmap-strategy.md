# Roadmap Strategy

The roadmap is not a feature list. It is the sequencing of strategic bets.

Qeetro must build in an order that preserves speed, clarity, AI-native differentiation, developer trust, and enterprise readiness without becoming broad or heavy too early.

## Roadmap Philosophy

Qeetro should sequence work across three investment categories:

| Category  | Purpose                                                                                                                  | Early Allocation   |
| --------- | ------------------------------------------------------------------------------------------------------------------------ | ------------------ |
| Substrate | Foundations that compound: data model, auth, tenant isolation, event spine, APIs, realtime, observability, AI governance | High               |
| Wedge     | Capabilities that win the initial ICP: issues, projects, sprints, Git integration, summaries, search, lightweight docs   | High               |
| Frontier  | Long-term differentiation: agents, marketplace, predictive execution, autonomous coordination                            | Low but deliberate |

The mistake is to overfund frontier before the wedge is loved or to overfund features before the substrate can support them.

## 2026 Research Adjustment

Public competitor research changes the sequencing pressure. Agents, connected AI context, enterprise search, AI teammates, and workflow automation are now visible across Linear, GitHub, GitLab, Notion, ClickUp, Asana, Plane, and Motion.

Qeetro should not respond by building a broad agent marketplace early. That would be premature.

It should respond by moving trust primitives earlier:

- AI action logs.
- Permission-aware retrieval.
- Source-backed AI outputs.
- Agent identity placeholders.
- Basic approval boundaries.
- Explicit data-use controls.
- Evaluation fixtures for core AI workflows.

The marketplace can wait. The governance substrate cannot.

## Phase 0: Seed And Planning State

### Objective

Create strategic clarity and implementation discipline before writing application code.

### Required Outcomes

- Strategy directory exists and is internally consistent.
- `.claude/context/` stays aligned with strategy.
- Tech stack decisions are explicit and phase-aware.
- MVP scope is written before implementation.
- Architecture starts modular and simple.

### Decisions To Make Before Code

- Package manager.
- Monorepo tool or simple workspace approach.
- Backend framework.
- ORM or query layer.
- Auth approach.
- Realtime foundation.
- Search foundation.
- AI provider abstraction.
- Local development model.

## Phase 1: MVP Core Execution

### Objective

Earn daily use from engineering-led software teams.

### Build

- Organization, workspace, team, and member model.
- Authentication and basic RBAC.
- Projects.
- Issues with status, priority, assignee, labels, comments, and history.
- Fast issue create, edit, search, and list/board views.
- Basic backlog and sprint/cycle model.
- GitHub integration for PR and commit links.
- Basic notifications and mentions.
- Lightweight docs tied to projects or issues.
- AI-assisted issue drafting, summarization, and workspace search.
- Permission-aware AI retrieval and source-backed AI answers.
- AI action log for summaries, suggestions, and generated changes.
- Agent identity placeholders for first-party and external AI actors.
- Basic AI enable, disable, and approval controls.
- Audit foundations for sensitive actions.
- Observability for core paths.
- Import path from Linear, GitHub Issues, or CSV.

### Do Not Build Yet

- Full custom workflow builder.
- Marketplace.
- Complex automation editor.
- Deep analytics suite.
- Native chat.
- Whiteboards.
- Broad OKR product.
- Complex enterprise policy builder.
- Multi-region infrastructure.
- Public agent marketplace.
- Fully autonomous agents that modify meaningful work without approval.
- Full mobile app beyond essential companion workflows.

### Success Criteria

- A team can create a workspace and reach value in under 5 minutes.
- Daily issue workflows feel fast.
- Engineers do not feel administrative burden.
- AI saves time in a visible first-week workflow.
- GitHub integration makes work state more trustworthy.
- Teams can migrate small projects without heavy services.

## Phase 2: Multi-Team Coordination

### Objective

Solve the scaling pain that appears when teams outgrow simple issue tracking.

### Build

- Multi-team project views.
- Dependencies and blockers.
- Roadmap items and initiatives.
- Sprint planning improvements.
- Release planning basics.
- Better activity streams.
- Realtime board and issue updates.
- Slack integration.
- Improved docs and decision capture.
- AI status synthesis.
- AI blocker and risk detection.
- Role and permission refinement.

### Success Criteria

- Engineering managers reduce manual reporting work.
- Cross-team dependencies are visible earlier.
- Product managers trust roadmap state more.
- Multi-team adoption grows from initial team wedges.

## Phase 3: Automation And Integrations

### Objective

Turn Qeetro into the execution hub connected to the surrounding software toolchain.

### Build

- Webhooks and public API maturity.
- GitLab integration.
- Deeper GitHub integration.
- Slack and Discord notification routing.
- Integration connection management.
- Practical automation rules with opinionated templates.
- Scheduled summaries.
- Import and export maturity.
- Search indexing improvements.
- Event-driven background workflows.

### Guardrail

Automation must not become Jira workflow configuration under a new name. Prefer common templates and clear explanations over arbitrary rule complexity.

## Phase 4: AI Execution Intelligence

### Objective

Move from AI assistance to governed execution intelligence.

### Build

- Versioned prompt registry.
- AI task queue.
- Retrieval service with tenant scoping.
- AI evaluation harness.
- AI audit trail.
- Planning assistant.
- Triage assistant.
- Release and sprint summary assistant.
- Dependency intelligence.
- Advanced agent approval workflows and policy controls.
- Early first-party agents under conservative scopes.

### Success Criteria

- AI outputs are trusted and traceable.
- Users can inspect why AI made a recommendation.
- Security and admin users can govern AI behavior.
- AI reduces coordination work measurably.

## Phase 5: Enterprise Readiness And Platform Expansion

### Objective

Support large software organizations without corrupting the user experience.

### Build

- Advanced RBAC.
- SSO and SCIM.
- Audit log exploration and export.
- Data retention controls.
- Compliance reporting.
- Enterprise analytics.
- Migration tooling for Jira at scale.
- Feature flags and release controls.
- Regional data strategy where justified.
- Marketplace foundations for integrations and agents.

### Guardrail

Enterprise features should live in admin and policy layers. They should not make everyday engineering workflows feel heavier.

## Sequencing Rules

### 1. Wedge Before Platform

Qeetro must be loved by the first target users before becoming a platform. Platform work that does not improve the wedge or substrate should wait.

### 2. Substrate Before Autonomy

Do not ship broad agent autonomy before identity, permissions, audit, evaluation, and tenant-safe retrieval are in place.

### 3. Integrations Before Inference

State inference depends on signals. Build deep GitHub and collaboration integrations before claiming broad execution intelligence.

### 4. Templates Before Builders

When customers ask for customization, first determine whether an opinionated template solves the problem. Builders come later and must be constrained.

### 5. Observability Before Scale

Production-critical workflows require logs, metrics, traces, and operational dashboards before they are scaled.

### 6. Migration Is Product

Migration from Linear, Jira, GitHub Projects, and Notion is not an afterthought. It is part of winning the market.

### 7. AI Must Be Evaluable

No meaningful AI workflow ships without evaluation, fallback behavior, and quality monitoring.

## MVP Contract

The MVP is not "small Jira." It is the smallest coherent AI-native execution loop:

1. Create workspace.
2. Create project.
3. Capture issues and context.
4. Connect work to GitHub signals.
5. Plan a sprint or cycle.
6. Collaborate through comments and lightweight docs.
7. Search and summarize with AI.
8. Explain progress and blockers.

Everything outside this loop must justify itself.

## Roadmap Governance

Roadmap reviews should ask:

- Which ICP pain does this solve?
- Which product principle does this strengthen?
- Which moat does this compound?
- Which phase does this belong to?
- What complexity does this introduce?
- What do we delay by saying yes?
- How will we know it worked?

## Strategic Risk Register

### Risk: Becoming A Broad PM Suite Too Early

Response: Keep the wedge narrow and measure adoption quality before expansion.

### Risk: Overbuilding Infrastructure Before Product Pull

Response: Start with modular architecture, not premature distributed systems.

### Risk: Shipping AI That Users Do Not Trust

Response: Ground outputs, evaluate quality, expose evidence, and keep approval boundaries conservative.

### Risk: Enterprise Requirements Distorting UX

Response: Build governance under the product, not in the user's way.

### Risk: Copying Competitor Checklists

Response: Tie roadmap items to principles, ICP pain, and moats, not feature parity.

## Roadmap North Star

Each phase should make Qeetro more capable without making it feel heavier.

If the product becomes slower, more configurable, more generic, or more administrative as it grows, the roadmap has failed.
