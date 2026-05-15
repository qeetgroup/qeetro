# Phase 1: Identity, Organizations, Workspaces

Last updated: 2026-05-15

## Purpose

Phase 1 defines the MVP product requirements for Qeetro's identity, tenant, workspace, membership, governance, realtime, notification, and AI-ready foundation.

This phase is the prerequisite for Qeetro's core execution loop: projects, issues, docs, search, GitHub integration, and AI-assisted workflows. The goal is to make Qeetro safe and fast for software teams to start using without turning the product into an admin-heavy configuration system.

## Phase 1 Goal

A technical founder, engineering manager, or product lead can sign up, create an organization, create a workspace, invite teammates, assign basic roles, and establish a secure team execution environment in under 5 minutes.

## File Index

| File                                                                   | Requirement Area             | Product Outcome                                                                                 |
| ---------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------------------------------------------------- |
| [a-identity-and-tenant-creation.md](a-identity-and-tenant-creation.md) | Identity and tenant creation | A verified user can create an organization and first workspace with strong tenant boundaries    |
| [b-membership-and-invites.md](b-membership-and-invites.md)             | Membership and invites       | Admins can invite teammates, assign basic roles, and activate collaboration                     |
| [c-governance-and-observability.md](c-governance-and-observability.md) | Governance and observability | Sensitive actions are authorized, audited, observable, and safe to operate                      |
| [d-realtime-and-notifications.md](d-realtime-and-notifications.md)     | Realtime and notifications   | Workspace and membership state updates live, and invite/member notifications are reliable       |
| [e-execution-domain-handoff.md](e-execution-domain-handoff.md)         | Execution domain handoff     | The substrate is ready for projects, issues, docs, search, GitHub integration, and AI workflows |

## Phase 1 Scope

### In Scope

- Signup, login, logout, email verification, and secure sessions.
- Organization creation with owner role and tenant boundary.
- Workspace creation and workspace switching.
- Organization and workspace membership.
- Email invitations, invite acceptance, expiration, and revocation.
- Simple RBAC for organization owners, organization admins, workspace admins, and workspace members.
- Member removal and immediate access revocation.
- Audit foundation for sensitive actions.
- Notification foundation for invite and membership events.
- Realtime readiness for workspace and membership updates.
- AI-ready actor model for future human, service, and agent distinctions.
- Observability for onboarding, invite, permission, audit, notification, and realtime paths.

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

### Out Of Scope

- Custom workflow builder.
- Custom permission matrix.
- Deep enterprise policy engine.
- Public agent marketplace.
- Autonomous AI agents.
- Advanced notification routing.
- Native mobile app.
- Generic department workspace templates.
- Individual developer productivity scoring.

## Sequencing

1. Phase 1A creates the secure tenant and first workspace.
2. Phase 1B activates collaboration through invites and membership.
3. Phase 1C makes access changes governed, audited, and observable.
4. Phase 1D makes membership and workspace state realtime-ready with reliable notifications.
5. Phase 1E hands off a stable substrate to projects, issues, docs, search, integrations, and AI.

## Exit Criteria

Phase 1 is complete when Qeetro has a tenant-safe, permission-aware, realtime-ready, notification-ready, audit-ready, AI-ready foundation that can support projects, issues, docs, search, GitHub integration, and AI-assisted execution workflows without redesign.
