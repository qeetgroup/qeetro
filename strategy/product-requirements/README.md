# Product Requirements

Last updated: 2026-05-15

## Purpose

This folder contains phase-based product requirements for Qeetro. Requirements here translate Qeetro's strategy into execution-ready product scope, workflows, user stories, acceptance criteria, dependencies, and roadmap sequencing.

The first requirement set covers Phase 1 MVP Core Execution. It starts with the identity, tenant, actor, membership, permission, audit, notification, realtime, and AI-governance substrate, then extends into the customer-visible execution loop: teams, projects, issues, comments, docs, search, sprint/cycle planning, GitHub links, imports, and AI-assisted execution.

## Related Architecture

- [Backend Architecture](../backend-architecture/README.md)

The Phase 1 promise: a technical founder, engineering manager, product lead, or software engineer can create a workspace, invite teammates, create a project, capture issues, collaborate with comments/docs, connect work to GitHub, plan a basic sprint or cycle, search permitted context, and use source-backed AI assistance without entering an admin-heavy configuration system.

## Source Context

These requirements are grounded in:

- [../../.claude/context/product-vision.md](../../.claude/context/product-vision.md)
- [../../.claude/context/domain-model.md](../../.claude/context/domain-model.md)
- [../../.claude/context/architecture.md](../../.claude/context/architecture.md)
- [../../.claude/context/engineering-principles.md](../../.claude/context/engineering-principles.md)
- [../../.claude/context/delivery-standards.md](../../.claude/context/delivery-standards.md)
- [../../.claude/context/tech-stack.md](../../.claude/context/tech-stack.md)
- [../05-product-principles.md](../05-product-principles.md)
- [../06-icp.md](../06-icp.md)
- [../09-ai-philosophy.md](../09-ai-philosophy.md)
- [../10-roadmap-strategy.md](../10-roadmap-strategy.md)

## MVP Requirement Set

### MVP Core Execution

Phase 1 must deliver the smallest coherent AI-native execution loop, not a generic project-management suite and not only an admin foundation. The requirements deliberately sequence substrate before daily workflows, but Phase 1 is not complete until both exist.

The MVP execution loop is:

1. Create workspace.
2. Invite teammates.
3. Create team.
4. Create project.
5. Capture and organize issues.
6. Collaborate through comments, mentions, and lightweight docs.
7. View work in lists, boards, backlog, and sprint/cycle context.
8. Connect PRs and commits from GitHub.
9. Import a small existing project from CSV, GitHub Issues, or Linear.
10. Search and summarize permitted context with source-backed AI.
11. Explain progress and blockers with trustworthy events, audit, and observability.

## Phase Index

| Phase   | Document                                | Product Outcome                                                            |
| ------- | --------------------------------------- | -------------------------------------------------------------------------- |
| Phase 1 | [MVP Core Execution](phase-1/README.md) | Establish a governed workspace and deliver the first usable execution loop |

## Phase 1 File Index

| Phase    | Document                                                                            | Product Outcome                                                                                 |
| -------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| Phase 1A | [Identity And Tenant Creation](phase-1/a-identity-and-tenant-creation.md)           | A verified user can create an organization and first workspace with strong tenant boundaries    |
| Phase 1B | [Membership And Invites](phase-1/b-membership-and-invites.md)                       | Admins can invite teammates, assign basic roles, and activate collaboration                     |
| Phase 1C | [Governance And Observability](phase-1/c-governance-and-observability.md)           | Sensitive actions are authorized, audited, observable, and safe to operate                      |
| Phase 1D | [Realtime And Notifications](phase-1/d-realtime-and-notifications.md)               | Workspace and membership state updates live, and invite/member notifications are reliable       |
| Phase 1E | [Execution Domain Handoff](phase-1/e-execution-domain-handoff.md)                   | Foundational contracts are ready for customer-visible execution domains                         |
| Phase 1F | [Teams, Projects, And Issues](phase-1/f-teams-projects-and-issues.md)               | Teams can create projects and manage core issue workflows quickly                               |
| Phase 1G | [Views, Search, And Sprint Planning](phase-1/g-views-search-and-sprint-planning.md) | Users can scan, search, filter, board, backlog, and plan basic sprint/cycle work                |
| Phase 1H | [Collaboration, Docs, And Activity](phase-1/h-collaboration-docs-and-activity.md)   | Teams can discuss work, mention teammates, attach lightweight docs, and see activity context    |
| Phase 1I | [GitHub, Imports, And Migration](phase-1/i-github-imports-and-migration.md)         | Work can connect to GitHub signals and small teams can migrate existing work into Qeetro        |
| Phase 1J | [AI Execution Intelligence](phase-1/j-ai-execution-intelligence.md)                 | AI can draft, summarize, search, and explain work within strict permission and audit boundaries |
| Phase 1K | [Execution Plan And Validation](phase-1/k-execution-plan-and-validation.md)         | Phase 1 is decomposed into epics, dependencies, validation, rollout, and release criteria       |

## Product Goals

| Goal                   | Why It Matters                                        | Success Signal                                                          |
| ---------------------- | ----------------------------------------------------- | ----------------------------------------------------------------------- |
| Fast activation        | Early teams must reach value quickly                  | Median time from signup to first workspace under 5 minutes              |
| Secure multi-tenancy   | Tenant isolation is foundational to trust             | Zero cross-tenant data access defects                                   |
| Team onboarding        | Collaboration starts with inviting teammates          | Invite acceptance and first-week team activation                        |
| First execution value  | Users must manage real work, not just configure space | Time to first project and first issue under 5 minutes                   |
| Developer workflow fit | Engineers need Qeetro to respect code workflows       | GitHub PR or commit linked to issue in first week                       |
| Migration confidence   | Teams need a low-friction path from existing tools    | Successful CSV, GitHub Issues, or Linear import completion              |
| Enterprise credibility | Future enterprise sales require governance primitives | Owner/admin roles, audit foundation, SSO-ready model                    |
| AI readiness           | Future AI search and agents require governed identity | Actor model supports humans, service accounts, and future AI agents     |
| Developer trust        | Software teams reject opaque or slow systems          | Clear permissions, fast workspace switching, API-ready boundaries       |
| AI utility             | AI must save work inside the execution loop           | AI drafts, summaries, and search answers are accepted or lightly edited |

## User Personas

| Persona             | Core Need                                   | MVP Requirement                                                      |
| ------------------- | ------------------------------------------- | -------------------------------------------------------------------- |
| Technical Founder   | Create a shared execution space quickly     | Self-serve signup, org creation, first workspace, teammate invites   |
| Product Manager     | Turn product intent into trackable work     | Project creation, issue triage, docs, AI summaries, views            |
| Engineering Manager | Plan execution and reduce status overhead   | Teams, backlog, sprint/cycle, blockers, GitHub links, metrics        |
| Software Engineer   | Find, update, and connect work quickly      | Fast issues, comments, mentions, PR links, keyboard-first UX         |
| Enterprise Admin    | Validate governance and access control path | Owner/admin roles, audit foundation, SSO-ready identity model        |
| AI Agent Owner      | Ensure future AI actors are accountable     | Actor model that can represent future AI agents and service accounts |

## Product Domain Definitions

### Identity

Identity represents the actor using or acting within Qeetro. MVP identity includes human users and must reserve clean product and data model space for future service accounts and AI agents.

Identity must answer:

- Who is this actor?
- Is this actor verified?
- Which organizations can this actor access?
- Which workspaces can this actor access?
- Which actions can this actor perform?
- Can future AI actions be attributed to this actor type or owner?

### Organization

An organization is the top-level tenant boundary. It represents a company, startup, product group, or enterprise division using Qeetro.

Organization must answer:

- Which tenant owns the data?
- Who owns the tenant?
- Which users belong to the tenant?
- Which workspaces exist inside the tenant?
- Which governance policies apply?
- Which audit events belong to this tenant?

### Workspace

A workspace is the primary collaboration and execution scope inside an organization. It may represent a product area, engineering team, business unit, or cross-functional execution space.

Workspace must answer:

- Where does this team execute work?
- Who can access this work context?
- Which projects, issues, docs, and future AI context belong here?
- Which realtime channels and notification rules apply?
- Which permissions are inherited or assigned inside this scope?

### Team

A team is the smallest durable ownership group inside a workspace. It represents the engineering, product, or cross-functional group responsible for projects, issue queues, and sprint/cycle execution.

Team must answer:

- Which people own a meaningful stream of work?
- Which projects and issues belong to that team by default?
- Who can triage, prioritize, and plan work for the team?
- Which sprint/cycle metrics and views apply?

### Project

A project is a bounded initiative or product area inside a workspace, usually owned by a team. It groups issues, docs, GitHub links, comments, and activity into a coherent execution context.

Project must answer:

- What outcome or workstream is this team executing?
- Which issues, docs, and GitHub signals belong to it?
- Who owns the project?
- What is its lifecycle state?

### Issue

An issue is the primary work item in Qeetro. It must be fast to create, update, search, comment on, assign, and move through status, while preserving history and tenant-safe permissions.

Issue must answer:

- What work needs to happen?
- Who owns it?
- What is its priority, status, and type?
- Which project, sprint/cycle, docs, comments, and code signals explain it?
- What changed, when, and by whom?

## MVP Scope

### In Scope

- Signup, login, logout, email verification, and secure sessions.
- User profile with name, email, avatar-ready field, timezone-ready field, and notification preferences.
- Organization creation with name, slug, lifecycle state, and owner.
- Workspace creation with name, key or slug, description-ready field, lifecycle state, and organization ownership.
- Membership across organizations and workspaces.
- Email invitations with role, scope, expiration, acceptance, and revocation.
- Simple role-based access control.
- Member removal and immediate access revocation.
- Audit foundation for sensitive actions.
- Notification foundation for invites and membership events.
- Realtime readiness for workspace and membership updates.
- AI-ready actor model for future human, service, and agent distinctions.
- Observability for onboarding, invite, permission, audit, notification, and realtime paths.
- Team creation and team membership inside a workspace.
- Project creation, ownership, status, activity, and archive-ready lifecycle.
- Issues with title, description, type, status, priority, assignee, reporter, labels, comments, mentions, and history.
- Fast list and board views with basic filters and sorting.
- Backlog and basic sprint/cycle planning.
- Lightweight docs tied to projects or issues.
- GitHub PR and commit links with tenant-scoped integration records.
- Import path from CSV, GitHub Issues, or Linear with preview and error reporting.
- AI-assisted issue drafting, summarization, source-backed workspace search, AI action log, and AI enable/disable controls.
- Evaluation fixtures, observability, and fallback behavior for Phase 1 AI workflows.

### Post-MVP Scope

- SAML and OIDC SSO.
- SCIM provisioning.
- Verified domains and domain-based joining.
- Advanced RBAC and custom permission sets.
- Guest access.
- Groups and team sync.
- Searchable audit log UI and export.
- Organization-level data retention controls.
- Agent governance UI.
- Workspace templates.
- Billing admin role and plan management.
- Roadmaps, release planning, dependencies, and multi-team coordination.
- Slack, Discord, GitLab, and deeper GitHub integrations.
- Advanced analytics, forecasting, and reporting.

### Out Of Scope

- Custom workflow builder.
- Custom permission matrix.
- Deep enterprise policy engine.
- Guest users.
- Nested teams or groups.
- Full billing system.
- Multi-region data residency controls.
- Public agent marketplace.
- Autonomous AI agents.
- Advanced notification routing.
- Native mobile app.
- Generic department workspace templates.
- Organization chart or HR directory features.
- Individual developer productivity scoring.
- Custom fields and arbitrary workflow scripting.
- Full roadmap, Gantt, timeline, or calendar planning.
- Planning poker and advanced velocity analytics.
- Full Confluence-style wiki tree or collaborative document editor.
- Deep bidirectional GitHub workflow sync.
- Large-scale Jira migration services.
- Chat-first AI assistant as the primary workflow surface.

## Global Permissions Model

| Role               | Scope        | Intended User                                | Permissions Summary                                                                      |
| ------------------ | ------------ | -------------------------------------------- | ---------------------------------------------------------------------------------------- |
| Organization Owner | Organization | Founder, CTO, primary admin                  | Full org control, workspace control, member control, ownership-sensitive actions         |
| Organization Admin | Organization | Ops lead, engineering manager                | Manage members, invites, workspaces, and org settings except ownership-sensitive actions |
| Workspace Admin    | Workspace    | Team lead, product lead                      | Manage workspace settings, workspace invites, and workspace members                      |
| Team Lead          | Team         | Engineering manager, tech lead, product lead | Manage team queue, project defaults, triage, and sprint/cycle planning                   |
| Project Admin      | Project      | Project owner, product lead, tech lead       | Manage project settings, project issue defaults, and project archival                    |
| Workspace Member   | Workspace    | Engineer, PM, designer, QA                   | Access and participate in workspace work                                                 |
| Integration Actor  | Scoped app   | GitHub app or imported service               | Perform scoped integration or import actions under explicit installation permissions     |
| Guest              | Deferred     | External collaborator                        | Not in MVP                                                                               |
| AI Agent Actor     | Reserved     | Future first-party or customer-created agent | No MVP autonomy, model must support future scoping                                       |

Permission principles:

- Deny by default.
- Tenant boundary is checked before role permissions.
- Workspace membership is required for workspace access unless explicit organization policy grants broader access.
- Permission failures must not leak private resource existence.
- Sensitive permission changes must emit audit events.
- AI retrieval must never exceed the effective permissions of the requesting actor.
- Integration and import actors must be scoped to their installation, source, and authorized organization/workspace/project.
- Project and issue permissions inherit from workspace membership by default unless a later phase introduces explicit sharing.

## Phase 1 Non-Functional Requirements

| Area           | Requirement                                                                                                                              |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Performance    | Common issue create, edit, assign, move, filter, search, and workspace switch interactions must feel fast.                               |
| Availability   | Core auth, issue, comment, search, notification, GitHub webhook, import, and AI task paths need health signals.                          |
| Reliability    | Background jobs and event consumers must be idempotent, retry-safe, and observable.                                                      |
| Security       | Tenant isolation, permission checks, token secrecy, and safe errors are release-blocking requirements.                                   |
| Accessibility  | Onboarding, invite acceptance, issue workflows, lists, boards, comments, docs, search, and AI outputs must support keyboard-first usage. |
| Data Integrity | Search, vector, import, and integration state must derive from durable records and recover through reindex or replay.                    |
| AI Quality     | AI outputs require source grounding, fallback behavior, evaluation fixtures, and quality metrics.                                        |

## Phase 1 Event And API Contract

Phase 1 APIs must use stable IDs, explicit organization/workspace context, pagination where lists can grow, consistent error shapes, idempotency keys for retryable mutations, and correlation IDs across request, job, event, notification, import, GitHub, search, and AI paths.

Phase 1 events must be versioned with `.v1`, tenant-scoped, retry-safe, and safe to consume idempotently. Minimum event families:

- `organization.*.v1`
- `workspace.*.v1`
- `team.*.v1`
- `project.*.v1`
- `issue.*.v1`
- `comment.*.v1`
- `mention.*.v1`
- `doc.*.v1`
- `sprint.*.v1`
- `github.*.v1`
- `import.*.v1`
- `search.*.v1`
- `notification.*.v1`
- `ai.*.v1`
- `audit.*.v1`

## Cross-Phase Acceptance Criteria

- A new user can sign up, verify email, create an organization, and create a first workspace.
- Organization has at least one owner at all times.
- Workspace belongs to exactly one organization.
- Workspace switcher shows only accessible workspaces.
- Admins can invite users, revoke invites, assign roles, and remove members.
- A workspace admin can create a team, create a project, and create the first issue without leaving the main execution flow.
- A user can create, edit, assign, prioritize, label, comment on, mention from, and move an issue.
- A user can view issues in list, board, backlog, and sprint/cycle context.
- A team can create and start a basic sprint or cycle with committed issues.
- A lightweight doc can be attached to a project or issue.
- A PR or commit can be linked to an issue.
- A small team can import work from at least one approved source path: CSV, GitHub Issues, or Linear.
- Search returns only permitted projects, issues, docs, and comments.
- AI can draft an issue, summarize permitted work context, and answer workspace questions with source evidence.
- Role changes apply immediately.
- Removing a member revokes access across UI, API, realtime, notifications, search-ready scope, and AI retrieval.
- Sensitive actions emit audit events with actor, actor type, organization ID, workspace ID where applicable, action, target, timestamp, correlation ID, and safe metadata.
- Invite tokens are secure, expiring, single-use, revocable, and never logged.
- Tenant isolation is enforced across API handlers, database queries, cache keys, events, search records, future vector retrieval, logs, analytics, background jobs, realtime channels, and notification delivery.
- Actor model supports future human, service, and AI actor distinctions.
- AI action logs capture actor, workflow type, target, sources, timestamp, output state, approval state, and safe model metadata.
- Phase 1 has a documented rollout, test, monitoring, and rollback plan.

## Global Dependencies

### Product Dependencies

- Final authentication approach.
- Organization and workspace hierarchy decision.
- Default role definitions.
- MVP invite policy.
- Audit event minimum fields.
- AI actor model assumptions.
- Team ownership model.
- Issue type and default status model.
- Sprint versus cycle naming decision.
- MVP import source priority.
- GitHub integration installation model.
- AI source citation and action log minimum fields.

### Engineering Dependencies

- Tenant-aware database model.
- Centralized authorization policy layer.
- Session management.
- Email delivery provider.
- Event abstraction or outbox-ready architecture.
- Realtime gateway decision.
- Structured logging and correlation IDs.
- Metrics and tracing foundation.
- Background job support for email and async workflows.
- Search index and reindex strategy.
- Vector retrieval boundary and storage decision.
- GitHub app or OAuth integration foundation.
- Import staging and idempotency model.
- Event schema versioning and dead-letter handling.

### Design Dependencies

- Product shell with organization and workspace context.
- Workspace switcher.
- Invite dialog.
- Member management view.
- Role selector.
- Settings layout.
- Empty state patterns.
- Team, project, issue, list, board, backlog, sprint/cycle, comment, doc, GitHub connection, import, search, and AI output surfaces.

## Roadmap Recommendation

Build this area in the following order:

1. Phase 1A: create the secure tenant and first workspace.
2. Phase 1B: activate collaboration through invites and membership.
3. Phase 1C: make access changes governed, audited, and observable.
4. Phase 1D: make membership and workspace state realtime-ready with reliable notifications.
5. Phase 1E: confirm execution-domain contracts on top of the substrate.
6. Phase 1F: deliver teams, projects, and issues.
7. Phase 1G: deliver list, board, search, backlog, and sprint/cycle planning.
8. Phase 1H: deliver comments, mentions, docs, activity, and daily collaboration notifications.
9. Phase 1I: deliver GitHub PR/commit linking and MVP import/migration.
10. Phase 1J: deliver governed AI issue drafting, summaries, search, action logs, and controls.
11. Phase 1K: validate Phase 1 through epics, release criteria, testing, rollout, and operational readiness.

The product guardrail is simple: do not build an admin platform or a small Jira in MVP. Build the smallest governed execution loop that lets software teams start real work immediately and lets Qeetro deepen AI, realtime collaboration, integrations, and enterprise governance without redesigning the foundation.
