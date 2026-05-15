# Phase 1E: Execution Domain Handoff

Last updated: 2026-05-15

## Phase Summary

Phase 1E validates that Identity, Organizations, and Workspaces are ready to support Qeetro's Phase 1 execution domains: teams, projects, issues, comments, docs, search, GitHub integration, imports, analytics, and AI-assisted workflows.

This phase is a product and architecture contract checkpoint. It ensures the foundational substrate is not merely usable for onboarding, but structurally ready for the daily execution loop Qeetro must ship in Phase 1F through Phase 1J.

## Product Goal

Prepare the identity, tenant, workspace, membership, permission, audit, notification, realtime, analytics, integration, import, search, and AI foundations for the Phase 1 execution domains without redesign.

## Business Outcomes

| Outcome               | Metric                                                                             |
| --------------------- | ---------------------------------------------------------------------------------- |
| Execution readiness   | Teams, projects, and issues can attach to organization and workspace scope cleanly |
| AI readiness          | Phase 1 AI retrieval can reuse tenant and permission boundaries                    |
| Integration readiness | GitHub and future integrations can bind to org/workspace/project scopes            |
| Import readiness      | Import staging can safely create projects, issues, labels, comments, and links     |
| Search readiness      | Search indexing can respect organization, workspace, and actor permissions         |
| Enterprise readiness  | Audit, RBAC, SSO-ready, and SCIM-ready foundations are preserved                   |

## MVP Scope

### In Scope

- Validate domain contracts for teams, projects, issues, docs, comments, search, integrations, imports, and AI.
- Define ownership boundaries for identity, organization, workspace, membership, permissions, notifications, and audit.
- Confirm tenant scoping requirements for Phase 1 execution domains and future domains.
- Confirm event taxonomy for future execution workflows.
- Confirm workspace context behavior for product shell and API calls.
- Confirm analytics and observability handoff.
- Confirm AI actor, permission-aware retrieval, AI action log, and approval-boundary assumptions.
- Define readiness criteria for starting Phase 1F through Phase 1J implementation.

### Out Of Scope

- Implementing the execution-domain product features inside this contract checkpoint.
- Replacing the detailed PRDs in Phase 1F through Phase 1J.
- Building agents.
- Building automation.
- Building advanced analytics dashboards.

## Handoff Domains

### Teams

Teams must be able to attach to workspace scope and own work without becoming a separate tenant boundary.

Requirements inherited from this substrate:

- Team belongs to one organization and one workspace.
- Team membership cannot exceed workspace access.
- Team lead role can support project defaults, backlog ownership, and sprint/cycle planning.
- Team events include organization ID and workspace ID.

### Projects

Projects must be able to attach to organization and workspace scope.

Requirements inherited from this substrate:

- Project belongs to one organization.
- Project belongs to one workspace by default.
- Project access derives from workspace membership unless later expanded by explicit sharing rules.
- Project events include organization ID and workspace ID.
- Project audit events reuse actor and role model.

### Issues

Issues must inherit tenant and workspace access.

Requirements inherited from this substrate:

- Issue belongs to organization and workspace.
- Issue creator, assignee, reporter, commenter, and future AI actor use the actor model.
- Issue visibility respects workspace membership.
- Issue realtime events use workspace-scoped channels.
- Issue notifications respect membership and notification preferences.

### Docs And Knowledge

Docs must be prepared for permission-aware collaboration and search.

Requirements inherited from this substrate:

- Doc belongs to organization and workspace, with later support for project or issue links.
- Doc access cannot exceed workspace access unless explicit future sharing rules exist.
- Doc mentions and comments use identity and membership records.
- Future collaborative editing must use realtime auth and tenant-safe channels.

### Search

Search must be tenant-scoped and permission-aware.

Requirements inherited from this substrate:

- Search documents include organization ID and workspace ID.
- Search queries filter by actor permissions.
- Removed users lose search access immediately or on next permission refresh.
- Search indexing events use tenant-safe event payloads.
- Future vector retrieval must follow the same permission model.

### GitHub And Integrations

Integrations must bind to organization and workspace scope.

Requirements inherited from this substrate:

- Integration installation has organization ID and optional workspace/project scope.
- Integration actor can be represented as service actor or future AI/service account category.
- Integration events are audit-ready.
- Integration data access respects tenant and workspace boundaries.
- Webhook processing includes tenant-safe correlation and idempotency readiness.

### Imports And Migration

Imports must safely create or map execution objects inside tenant and workspace scope.

Requirements inherited from this substrate:

- Import run belongs to one organization and one workspace, optionally one project.
- Import staging records include tenant scope and source external IDs.
- Import jobs are idempotent and retry-safe.
- Import-created issues, labels, comments, docs, and links use normal permissions and events.
- Import errors and previews are tenant-safe.

### AI Workflows

AI must use governed identity and permission boundaries.

Requirements inherited from this substrate:

- AI outputs are attributed to an actor or agent identity when created.
- AI retrieval is scoped by organization, workspace, and effective actor permissions.
- AI action logs can reuse audit event concepts or link to audit events.
- High-impact AI actions, such as role changes or bulk edits, require explicit human approval in future phases.
- Organization settings reserve future controls for AI enablement and data usage.

## Core Workflow

### Workflow: New Execution Domain Uses Workspace Context

#### Entry

Product team begins design or implementation for teams, projects, issues, docs, search, GitHub, import, or AI workflow.

#### Steps

1. Domain identifies organization and workspace ownership requirements.
2. Domain defines actor actions and permission checks.
3. Domain defines event behavior and audit needs.
4. Domain defines notification behavior.
5. Domain defines realtime behavior if applicable.
6. Domain defines analytics and observability requirements.
7. Domain validates tenant isolation across API, data, cache, events, search, vector retrieval, logs, jobs, import staging, integration webhooks, and realtime channels.
8. Domain receives approval to build on the substrate.

#### Completion State

- New domain has clear ownership, scope, permissions, events, observability, and tenant boundaries.
- Domain can build without reworking Identity, Organizations, or Workspaces.

## User Stories

| ID         | Persona             | Story                                                                                                     | Priority |
| ---------- | ------------------- | --------------------------------------------------------------------------------------------------------- | -------- |
| IOW-1E-001 | Product Manager     | As a PM, I want teams, projects, and issues to inherit workspace context so work stays organized.         | Must     |
| IOW-1E-002 | Engineering Manager | As a manager, I want permissions to carry into execution workflows so access remains predictable.         | Must     |
| IOW-1E-003 | Software Engineer   | As an engineer, I want workspace context to stay consistent across issues, docs, GitHub, imports, and AI. | Must     |
| IOW-1E-004 | Security Reviewer   | As a reviewer, I want search and AI retrieval to respect tenant and workspace permissions.                | Must     |
| IOW-1E-005 | Enterprise Admin    | As an evaluator, I want audit and RBAC foundations to support future enterprise features.                 | Should   |
| IOW-1E-006 | AI Agent Owner      | As a future agent owner, I want agent actions to be scoped, attributed, and auditable.                    | Should   |

## Readiness Requirements

### Domain Ownership

- Identity owns actors, sessions, profile, and actor type.
- Organization owns tenant boundary, org membership, org roles, org lifecycle, and org settings.
- Workspace owns execution context, workspace membership, workspace roles, workspace lifecycle, and workspace settings.
- Team owns team identity, team lead, team membership projection, and team-owned work defaults.
- Project owns project identity, project lifecycle, project activity, and project issue defaults.
- Work item owns issues, status, priority, labels, assignments, history, and parent/child relationships.
- Permission layer owns action checks across organization and workspace scope.
- Audit foundation owns sensitive action records.
- Notification foundation owns notification records and delivery eligibility.
- Realtime foundation owns scoped subscription and update behavior.

### API And Data Requirements

- Organization ID is available for all tenant-owned records.
- Workspace ID is available for workspace-owned records.
- Actor context is available to API handlers.
- Permission checks are reusable by future domains.
- Event payloads include tenant-safe scope fields.
- Background jobs include organization ID and workspace ID where applicable.
- Search and vector indexes can include organization and workspace scope.
- Integration and import staging records include external IDs, idempotency keys, and tenant scope.
- AI action logs can reference source context without storing secrets or unauthorized content.

### AI Readiness Requirements

- Actor model distinguishes human, service, and future AI actor categories.
- Future agent identity can include owner, purpose, permission scope, lifecycle state, and audit trail.
- AI retrieval can filter by organization, workspace, and effective actor permissions.
- AI action logs can connect to actor, target, timestamp, source context, and approval state.
- Organization settings can later control AI enablement, data usage, and approval boundaries.

### Enterprise Readiness Requirements

- Identity model can support SSO.
- Membership model can support SCIM.
- Organization model can support verified domains.
- Audit event model can support future UI and export.
- Permission model can evolve toward custom roles without breaking MVP roles.
- Tenant isolation is testable and observable.

## UX Expectations

- Users should experience organization and workspace context consistently across future domains.
- Navigation should not require users to understand tenant architecture.
- Workspace switcher should remain the primary context switcher.
- Future projects and issues should not introduce a competing scope model.
- AI controls should appear where they affect work, not as isolated novelty settings.
- Admin and governance controls should remain separate from daily execution surfaces.

## Acceptance Criteria

- Projects can be modeled as organization and workspace scoped without changing the organization/workspace model.
- Teams can be modeled inside workspace scope without becoming a separate tenant boundary.
- Issues can use current actor, membership, permission, notification, and realtime foundations.
- Docs can use workspace access and future collaborative editing readiness.
- Search can index and query by tenant and workspace scope.
- AI retrieval can reuse permission and actor model assumptions.
- GitHub integration can bind to organization and workspace scope.
- Import staging can create projects and issues through normal tenant-scoped APIs and events.
- Future service or AI actors can be represented without changing human identity records.
- Event taxonomy supports future project, issue, doc, comment, mention, search, integration, and AI events.
- Observability patterns are ready for request, job, event, notification, realtime, and AI paths.
- Product and engineering agree that no foundational redesign is needed before execution domains begin.

## Dependencies

- Phase 1A tenant and workspace models.
- Phase 1B membership and invite model.
- Phase 1C authorization, audit, and observability foundations.
- Phase 1D realtime and notification foundations.
- Phase 1F through Phase 1J product requirements.
- Product shell context model.
- API context conventions.
- Event naming conventions.
- AI actor and retrieval assumptions.
- Integration installation scope assumptions.

## Future Extensibility Considerations

### Permissions

The model must support later expansion into:

- Custom roles.
- Permission sets.
- Project-specific access.
- Integration-scoped permissions.
- Agent-scoped permissions.
- Approval boundaries for high-impact AI or automation actions.

### Realtime

The model must support later realtime features:

- Presence.
- Issue updates.
- Board movement.
- Comments.
- Mentions.
- Collaborative docs.
- AI task progress.
- Integration event updates.

### Notifications

The notification foundation must support later channels:

- In-app notifications.
- Email notifications.
- Slack.
- Discord.
- Digests.
- Smart routing.
- Mention routing.

### AI

The AI foundation must support later waves:

- Issue drafting and refinement.
- Workspace search.
- Sprint summaries.
- Handoff summaries.
- Triage suggestions.
- Planning assistant.
- Governed agents.
- AI action log.
- Source-backed AI outputs.

### Enterprise

The enterprise foundation must support:

- SAML and OIDC.
- SCIM.
- Verified domains.
- Audit log explorer.
- Audit export.
- Data retention.
- Advanced RBAC.
- Compliance reporting.

## Risks And Mitigations

| Risk                                          | Impact                     | Mitigation                                                   |
| --------------------------------------------- | -------------------------- | ------------------------------------------------------------ |
| Future domains invent their own scope model   | Fragmented UX and security | Require organization and workspace scope contracts           |
| AI retrieval bypasses workspace permissions   | Critical trust failure     | Reuse effective permission model for retrieval               |
| Integrations create hidden access paths       | Tenant leakage             | Bind integrations to org/workspace scope and audit events    |
| Realtime patterns do not scale to issues/docs | Rewrite risk               | Validate subscription and event model before handoff         |
| Enterprise hooks are missing                  | Later sales friction       | Preserve SSO, SCIM, audit, domain, and RBAC-ready fields now |

## Exit Criteria

Phase 1E is complete when product and engineering can start teams, projects, issues, docs, search, GitHub links, imports, and AI-assisted workflows using the Identity, Organizations, and Workspaces substrate without reworking tenant, actor, membership, permission, audit, notification, realtime, analytics, integration, import, search, or AI-governance foundations.
