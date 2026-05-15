# Product Requirements

Last updated: 2026-05-15

## Purpose

This folder contains phase-based product requirements for Qeetro. Requirements here translate Qeetro's strategy into execution-ready product scope, workflows, user stories, acceptance criteria, dependencies, and roadmap sequencing.

The first requirement set covers the MVP foundation for Identity, Organizations, and Workspaces. This area establishes the tenant, actor, membership, permission, audit, notification, realtime, and AI-governance substrate required before projects, issues, docs, search, integrations, and AI agents can safely scale.

## Source Context

These requirements are grounded in:

- [../../.claude/context/product-vision.md](../../.claude/context/product-vision.md)
- [../../.claude/context/engineering-principles.md](../../.claude/context/engineering-principles.md)
- [../../.claude/context/tech-stack.md](../../.claude/context/tech-stack.md)
- [../05-product-principles.md](../05-product-principles.md)
- [../06-icp.md](../06-icp.md)
- [../09-ai-philosophy.md](../09-ai-philosophy.md)
- [../10-roadmap-strategy.md](../10-roadmap-strategy.md)

## MVP Requirement Set

### Identity, Organizations, Workspaces

Identity, Organizations, and Workspaces are the foundational trust layer for Qeetro. The MVP must let a software team create a secure tenant, establish a shared execution space, invite collaborators, manage access, and prepare for project execution without creating an admin-heavy product experience.

The MVP promise: a technical founder, engineering manager, or product lead can sign up, create an organization, create a workspace, invite teammates, assign basic roles, and establish a secure team execution environment in under 5 minutes.

## Phase Index

| Phase   | Document                                                 | Product Outcome                                                                                                   |
| ------- | -------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| Phase 1 | [Identity, Organizations, Workspaces](phase-1/README.md) | Establish the tenant, identity, workspace, membership, governance, realtime, notification, and AI-ready substrate |

## Phase 1 File Index

| Phase    | Document                                                                  | Product Outcome                                                                                 |
| -------- | ------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| Phase 1A | [Identity And Tenant Creation](phase-1/a-identity-and-tenant-creation.md) | A verified user can create an organization and first workspace with strong tenant boundaries    |
| Phase 1B | [Membership And Invites](phase-1/b-membership-and-invites.md)             | Admins can invite teammates, assign basic roles, and activate collaboration                     |
| Phase 1C | [Governance And Observability](phase-1/c-governance-and-observability.md) | Sensitive actions are authorized, audited, observable, and safe to operate                      |
| Phase 1D | [Realtime And Notifications](phase-1/d-realtime-and-notifications.md)     | Workspace and membership state updates live, and invite/member notifications are reliable       |
| Phase 1E | [Execution Domain Handoff](phase-1/e-execution-domain-handoff.md)         | The substrate is ready for projects, issues, docs, search, GitHub integration, and AI workflows |

## Product Goals

| Goal                   | Why It Matters                                        | Success Signal                                                      |
| ---------------------- | ----------------------------------------------------- | ------------------------------------------------------------------- |
| Fast activation        | Early teams must reach value quickly                  | Median time from signup to first workspace under 5 minutes          |
| Secure multi-tenancy   | Tenant isolation is foundational to trust             | Zero cross-tenant data access defects                               |
| Team onboarding        | Collaboration starts with inviting teammates          | Invite acceptance and first-week team activation                    |
| Enterprise credibility | Future enterprise sales require governance primitives | Owner/admin roles, audit foundation, SSO-ready model                |
| AI readiness           | Future AI search and agents require governed identity | Actor model supports humans, service accounts, and future AI agents |
| Developer trust        | Software teams reject opaque or slow systems          | Clear permissions, fast workspace switching, API-ready boundaries   |

## User Personas

| Persona             | Core Need                                   | MVP Requirement                                                      |
| ------------------- | ------------------------------------------- | -------------------------------------------------------------------- |
| Technical Founder   | Create a shared execution space quickly     | Self-serve signup, org creation, first workspace, teammate invites   |
| Product Manager     | Understand where work lives and who belongs | Workspace switcher, member visibility, role clarity                  |
| Engineering Manager | Add and remove team members safely          | Invite flow, workspace membership, role management, audit events     |
| Software Engineer   | Join the right workspace and start working  | Invite acceptance, workspace landing, profile, notification defaults |
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

## Global Permissions Model

| Role               | Scope        | Intended User                                | Permissions Summary                                                                      |
| ------------------ | ------------ | -------------------------------------------- | ---------------------------------------------------------------------------------------- |
| Organization Owner | Organization | Founder, CTO, primary admin                  | Full org control, workspace control, member control, ownership-sensitive actions         |
| Organization Admin | Organization | Ops lead, engineering manager                | Manage members, invites, workspaces, and org settings except ownership-sensitive actions |
| Workspace Admin    | Workspace    | Team lead, product lead                      | Manage workspace settings, workspace invites, and workspace members                      |
| Workspace Member   | Workspace    | Engineer, PM, designer, QA                   | Access and participate in workspace work                                                 |
| Guest              | Deferred     | External collaborator                        | Not in MVP                                                                               |
| AI Agent Actor     | Reserved     | Future first-party or customer-created agent | No MVP autonomy, model must support future scoping                                       |

Permission principles:

- Deny by default.
- Tenant boundary is checked before role permissions.
- Workspace membership is required for workspace access unless explicit organization policy grants broader access.
- Permission failures must not leak private resource existence.
- Sensitive permission changes must emit audit events.
- Future AI retrieval must never exceed the effective permissions of the requesting actor.

## Cross-Phase Acceptance Criteria

- A new user can sign up, verify email, create an organization, and create a first workspace.
- Organization has at least one owner at all times.
- Workspace belongs to exactly one organization.
- Workspace switcher shows only accessible workspaces.
- Admins can invite users, revoke invites, assign roles, and remove members.
- Role changes apply immediately.
- Removing a member revokes access across UI, API, realtime, notifications, search-ready scope, and future AI retrieval.
- Sensitive actions emit audit events with actor, actor type, organization ID, workspace ID where applicable, action, target, timestamp, correlation ID, and safe metadata.
- Invite tokens are secure, expiring, single-use, revocable, and never logged.
- Tenant isolation is enforced across API handlers, database queries, cache keys, events, search records, future vector retrieval, logs, analytics, background jobs, realtime channels, and notification delivery.
- Actor model supports future human, service, and AI actor distinctions.

## Global Dependencies

### Product Dependencies

- Final authentication approach.
- Organization and workspace hierarchy decision.
- Default role definitions.
- MVP invite policy.
- Audit event minimum fields.
- AI actor model assumptions.

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

### Design Dependencies

- Product shell with organization and workspace context.
- Workspace switcher.
- Invite dialog.
- Member management view.
- Role selector.
- Settings layout.
- Empty state patterns.

## Roadmap Recommendation

Build this area in the following order:

1. Phase 1A: create the secure tenant and first workspace.
2. Phase 1B: activate collaboration through invites and membership.
3. Phase 1C: make access changes governed, audited, and observable.
4. Phase 1D: make membership and workspace state realtime-ready with reliable notifications.
5. Phase 1E: hand off a stable substrate to projects, issues, docs, search, integrations, and AI.

The product guardrail is simple: do not build an admin platform in MVP. Build the smallest governed collaboration substrate that lets software teams start execution work immediately and lets Qeetro add AI, realtime collaboration, and enterprise governance without redesigning the foundation.
