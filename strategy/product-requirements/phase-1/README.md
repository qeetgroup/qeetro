# Phase 1: MVP Core Execution

Last updated: 2026-05-15

## Purpose

Phase 1 defines the MVP product requirements for Qeetro's core execution loop. It includes the identity, tenant, workspace, membership, governance, realtime, notification, and AI-ready foundation, then builds the first usable software execution experience on top of it.

The goal is to make Qeetro safe and fast for software teams to start using without turning the product into an admin-heavy configuration system or a generic work-management clone.

## Phase 1 Goal

A technical founder, engineering manager, product lead, or software engineer can sign up, create a workspace, invite teammates, create a project, capture issues, collaborate with comments and lightweight docs, connect GitHub work, search permitted context, and use source-backed AI assistance with clear governance.

## File Index

| File                                                                           | Requirement Area                   | Product Outcome                                                                                 |
| ------------------------------------------------------------------------------ | ---------------------------------- | ----------------------------------------------------------------------------------------------- |
| [a-identity-and-tenant-creation.md](a-identity-and-tenant-creation.md)         | Identity and tenant creation       | A verified user can create an organization and first workspace with strong tenant boundaries    |
| [b-membership-and-invites.md](b-membership-and-invites.md)                     | Membership and invites             | Admins can invite teammates, assign basic roles, and activate collaboration                     |
| [c-governance-and-observability.md](c-governance-and-observability.md)         | Governance and observability       | Sensitive actions are authorized, audited, observable, and safe to operate                      |
| [d-realtime-and-notifications.md](d-realtime-and-notifications.md)             | Realtime and notifications         | Workspace and membership state updates live, and invite/member notifications are reliable       |
| [e-execution-domain-handoff.md](e-execution-domain-handoff.md)                 | Execution domain contract          | Foundational contracts are ready for customer-visible execution domains                         |
| [f-teams-projects-and-issues.md](f-teams-projects-and-issues.md)               | Teams, projects, and issues        | Teams can create projects and manage core issue workflows quickly                               |
| [g-views-search-and-sprint-planning.md](g-views-search-and-sprint-planning.md) | Views, search, and sprint planning | Users can scan, search, filter, board, backlog, and plan basic sprint/cycle work                |
| [h-collaboration-docs-and-activity.md](h-collaboration-docs-and-activity.md)   | Collaboration, docs, and activity  | Teams can discuss work, mention teammates, attach lightweight docs, and see activity context    |
| [i-github-imports-and-migration.md](i-github-imports-and-migration.md)         | GitHub, imports, and migration     | Work can connect to GitHub signals and small teams can migrate existing work into Qeetro        |
| [j-ai-execution-intelligence.md](j-ai-execution-intelligence.md)               | AI execution intelligence          | AI can draft, summarize, search, and explain work within strict permission and audit boundaries |
| [k-execution-plan-and-validation.md](k-execution-plan-and-validation.md)       | Execution plan and validation      | Phase 1 is decomposed into epics, dependencies, validation, rollout, and release criteria       |

## MVP Execution Loop

Phase 1 is complete only when the following loop works end to end:

1. Create workspace.
2. Invite teammates.
3. Create team.
4. Create project.
5. Capture issues.
6. Add comments, mentions, and lightweight docs.
7. View work in list, board, backlog, and sprint/cycle context.
8. Connect GitHub PRs or commits to issues.
9. Import a small existing project from an approved source path.
10. Search permitted work context.
11. Use source-backed AI to draft, summarize, or answer questions.
12. Inspect activity, audit, and operational signals for important actions.

## Phase 1 Scope

### In Scope

- Signup, login, logout, email verification, and secure sessions.
- Organization creation with owner role and tenant boundary.
- Workspace creation and workspace switching.
- Organization and workspace membership.
- Email invitations, invite acceptance, expiration, and revocation.
- Simple RBAC for organization owners, organization admins, workspace admins, team leads, project admins, and workspace members.
- Member removal and immediate access revocation.
- Audit foundation for sensitive actions.
- Notification foundation for invite, membership, mention, assignment, and activity events.
- Realtime readiness for workspace, membership, issue, comment, activity, import, GitHub, and AI task updates.
- AI-ready actor model for future human, service, and agent distinctions.
- Observability for onboarding, invite, permission, audit, notification, realtime, issue, search, GitHub, import, and AI paths.
- Team creation, team membership, and team ownership of work.
- Project creation, project status, project activity, and project archive-ready lifecycle.
- Issues with status, priority, assignee, reporter, labels, comments, mentions, and history.
- Fast list and board views, basic filters, sorting, and workspace search.
- Backlog and sprint/cycle planning with committed issues.
- Lightweight docs tied to projects or issues.
- GitHub PR and commit links.
- Import path from CSV, GitHub Issues, or Linear.
- AI-assisted issue drafting, summarization, workspace search, action log, and source-backed answers.
- Basic AI enable, disable, data-use, and approval controls.

### Post-MVP Scope

- SSO and SCIM.
- Verified domains.
- Advanced RBAC and custom roles.
- Guest access.
- Groups and team sync.
- Searchable audit log UI and export.
- Data retention controls.
- Agent governance UI.
- Workspace templates.
- Billing admin and plan management.
- Roadmaps, dependencies, release planning, and multi-team coordination.
- Slack, Discord, GitLab, and deeper GitHub integrations.
- Advanced analytics, forecasting, and reporting.

### Out Of Scope

- Custom workflow builder.
- Custom permission matrix.
- Custom fields and arbitrary workflow scripting.
- Deep enterprise policy engine.
- Public agent marketplace.
- Autonomous AI agents.
- Advanced notification routing.
- Native mobile app.
- Generic department workspace templates.
- Individual developer productivity scoring.
- Full roadmap, Gantt, timeline, or calendar planning.
- Planning poker and advanced agile analytics.
- Full wiki tree, advanced collaborative editor, or docs template marketplace.
- Deep bidirectional GitHub workflow sync.
- Full Jira migration services.
- Chat-first AI assistant as the main product surface.

## Success Metrics

| Metric                  | Target Signal                                                              |
| ----------------------- | -------------------------------------------------------------------------- |
| Time to first workspace | Median under 5 minutes from signup                                         |
| Time to first project   | Median under 5 minutes after workspace creation                            |
| Time to first issue     | Median under 5 minutes after project creation                              |
| First teammate invited  | Occurs during first session for a meaningful share of new teams            |
| Issue workflow speed    | Create, edit, assign, move, filter, and search feel instant for common use |
| GitHub connection value | PR or commit linked to an issue in the first week                          |
| Import success          | Import completes with actionable error reporting and no cross-tenant leak  |
| Search trust            | Search returns only permitted projects, issues, docs, and comments         |
| AI utility              | AI drafts and summaries are accepted or lightly edited                     |
| AI trust                | AI outputs cite permitted sources and log actions                          |
| Activation quality      | New team completes workspace, project, first issue, and invite flow        |

## Phase 1 Guardrails

- Do not build a custom workflow platform.
- Do not expose admin complexity in daily execution flows.
- Do not ship AI outputs that are ungrounded for factual work summaries.
- Do not add advanced enterprise surfaces before the owner/admin/audit foundations are correct.
- Do not let projects, teams, sprints, docs, GitHub, search, or AI invent independent scope models.
- Do not optimize for broad work management personas before software execution is loved.

## Sequencing

1. Phase 1A creates the secure tenant and first workspace.
2. Phase 1B activates collaboration through invites and membership.
3. Phase 1C makes access changes governed, audited, and observable.
4. Phase 1D makes membership, workspace, and execution state realtime-ready with reliable notifications.
5. Phase 1E locks the execution-domain contracts that prevent scope, permission, event, search, and AI drift.
6. Phase 1F delivers teams, projects, and issues.
7. Phase 1G delivers views, search, backlog, and sprint/cycle planning.
8. Phase 1H delivers comments, mentions, docs, activity, and collaboration notifications.
9. Phase 1I delivers GitHub PR/commit links and MVP import/migration.
10. Phase 1J delivers governed AI issue drafting, summaries, workspace search, action logs, and controls.
11. Phase 1K validates Phase 1 through issue decomposition, tests, rollout, observability, and release gates.

## Cross-Phase Release Criteria

- Tenant isolation is tested across API, database, cache, events, search, vector retrieval, logs, analytics, jobs, realtime, notifications, GitHub, import staging, and AI paths.
- Permission checks cover organization, workspace, team, project, issue, comment, doc, GitHub, import, search, and AI workflows.
- Core mutation APIs support idempotency where retries are likely.
- Event schemas are versioned and consumers are retry-safe.
- Search and vector retrieval are derived from durable state and can recover through reindexing.
- Realtime state degrades to refetching durable server state.
- AI features have evaluation fixtures, fallback behavior, source grounding, and action logs.
- Operational dashboards exist for auth, invites, issues, comments, search, realtime, GitHub, imports, notifications, and AI.
- Rollout has feature flags or kill switches for GitHub workers, import jobs, search indexing, and AI workflows.

## Exit Criteria

Phase 1 is complete when Qeetro has a tenant-safe, permission-aware, realtime-ready, notification-ready, audit-ready, AI-ready foundation and a usable execution loop for teams, projects, issues, comments, docs, search, sprint/cycle planning, GitHub links, imports, and source-backed AI assistance.
