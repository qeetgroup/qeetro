# Phase 1A: Identity And Tenant Creation

Last updated: 2026-05-15

## Phase Summary

Phase 1A establishes the first usable Qeetro tenant. A verified user must be able to create an account, create an organization, create the first workspace, and land inside a clear execution context. This phase creates the foundation for all later membership, permissions, realtime, notifications, analytics, integrations, and AI capabilities.

This phase must feel fast and light to the user while being strict about tenant isolation and actor identity behind the scenes.

## Product Goal

Enable a new software team to move from signup to first workspace in under 5 minutes with a secure organization tenant and a clear initial workspace.

## Business Outcomes

| Outcome               | Metric                                                                                               |
| --------------------- | ---------------------------------------------------------------------------------------------------- |
| Fast activation       | Median signup-to-workspace time under 5 minutes                                                      |
| Tenant foundation     | 100 percent of protected records scoped by organization where applicable                             |
| Workspace readiness   | 100 percent of new organizations have at least one workspace or a resumable workspace creation state |
| Governance foundation | Organization owner exists and cannot be missing                                                      |
| AI readiness          | Actor model supports human now and future service or AI actor types                                  |

## MVP Scope

### In Scope

- Signup, login, logout, and secure session creation.
- Email verification before protected tenant setup completion.
- Basic user profile: name, email, avatar-ready field, timezone-ready field.
- Organization creation with name and generated slug.
- Organization owner assignment for the first creator.
- First workspace creation with name and generated key or slug.
- Organization and workspace lifecycle states.
- Organization and workspace context in the product shell.
- Workspace switcher foundation showing the first workspace.
- Audit-ready creation events, even if full audit UI ships later.
- Product analytics for signup, verification, organization creation, and workspace creation.

### Out Of Scope

- Multiple workspace templates.
- Complex onboarding questionnaires.
- Billing setup.
- SSO and SCIM UI.
- Custom domains.
- Guest access.
- Custom roles.
- Organization deletion UI.
- AI assistant onboarding flow.

## Core Workflow

### Workflow: Create Account, Organization, And First Workspace

#### Entry

User starts from signup, product landing page, or an invite-less self-serve onboarding flow.

#### Steps

1. User creates an account.
2. User verifies email.
3. User enters organization name.
4. System generates organization slug.
5. System creates organization and assigns user as owner.
6. User enters first workspace name or accepts a suggested default.
7. System creates workspace inside the organization.
8. User lands inside the workspace home.
9. Product shell shows organization and workspace context.
10. Empty state prompts the user toward inviting teammates or creating the next execution object when available.

#### Completion State

- User is authenticated and email verified.
- User has a profile.
- Organization exists and has one owner.
- First workspace exists and belongs to the organization.
- User has owner-level organization access and workspace access.
- Product analytics and creation events are recorded.

#### Edge Cases

- Email verification is pending.
- User abandons after signup but before organization creation.
- User abandons after organization creation but before workspace creation.
- Organization slug is already taken.
- Workspace key is already taken inside organization.
- Auth provider callback fails.
- User already belongs to another organization.
- Browser session expires during onboarding.

## User Stories

| ID         | Persona           | Story                                                                                                        | Priority |
| ---------- | ----------------- | ------------------------------------------------------------------------------------------------------------ | -------- |
| IOW-1A-001 | Technical Founder | As a founder, I want to sign up and create my company organization so my team has a secure Qeetro tenant.    | Must     |
| IOW-1A-002 | Technical Founder | As a founder, I want to create a first workspace immediately so my team can begin organizing execution work. | Must     |
| IOW-1A-003 | Software Engineer | As a user, I want my profile to be simple so onboarding does not feel like administration.                   | Must     |
| IOW-1A-004 | Product Manager   | As a user, I want to see my current organization and workspace so I always know what context I am in.        | Must     |
| IOW-1A-005 | Enterprise Admin  | As a future admin, I want organization ownership to be explicit so governance starts from day one.           | Must     |
| IOW-1A-006 | AI Agent Owner    | As a future agent owner, I want identity to support actor types so AI actions can later be accountable.      | Should   |

## Functional Requirements

### Identity

- User can create an account.
- User can log in and log out.
- User has a verified email state.
- User has basic profile fields.
- User sessions can be created, refreshed, and revoked.
- Identity records support an actor type field or equivalent future-ready distinction.

### Organization

- User can create an organization after email verification.
- Organization has ID, name, slug, lifecycle state, created timestamp, and owner relationship.
- Organization slug is globally unique.
- First creator becomes organization owner.
- Organization cannot exist without at least one owner.
- Organization state supports active, suspended-ready, and deleted-ready states.

### Workspace

- User can create first workspace inside organization.
- Workspace has ID, organization ID, name, key or slug, lifecycle state, and created timestamp.
- Workspace key or slug is unique inside organization.
- Workspace belongs to exactly one organization.
- User has access to the workspace immediately after creation.
- Workspace state supports active and archived-ready states.

## UX Expectations

- Onboarding should feel like one guided path, not separate admin screens.
- Required fields should be minimal: email, password or auth provider, organization name, workspace name.
- Slugs and workspace keys should be generated automatically and editable only if needed.
- Current organization and workspace should be visible in the product shell.
- Empty state should lead to the next action, not lengthy product explanation.
- Errors should be specific and recoverable.
- Mobile web should support account creation, verification, and invite acceptance readiness.

## Permissions Model

| Action                 | Requirement                                  |
| ---------------------- | -------------------------------------------- |
| Create account         | Public with rate limits                      |
| Create organization    | Verified authenticated user                  |
| Create first workspace | Organization owner                           |
| Rename organization    | Organization owner or future org admin       |
| Rename workspace       | Organization owner or future workspace admin |
| View organization      | Organization member                          |
| View workspace         | Workspace member or authorized org role      |

Permission guardrails:

- Deny by default.
- Tenant boundary check happens before resource access.
- Resource existence must not leak to unauthorized users.
- Last-owner protection is required from the start.

## Security Requirements

- Email verification required before tenant setup is considered complete.
- Signup, login, and verification endpoints must be rate-limited.
- Authentication errors must avoid account enumeration.
- Session tokens must never be logged.
- Organization ID must scope all organization-owned records.
- Workspace ID must scope workspace-owned records.
- Cache keys, logs, analytics, events, jobs, and future AI retrieval must include tenant-safe scoping.

## Analytics Requirements

Track:

- Signup started.
- Signup completed.
- Email verification sent.
- Email verified.
- Organization creation started.
- Organization created.
- Workspace creation started.
- Workspace created.
- Onboarding abandoned after signup.
- Onboarding abandoned after organization creation.
- Time from signup to first workspace.
- Organization slug conflict.
- Workspace key conflict.
- Auth failure rate.

Analytics guardrails:

- Do not store passwords, tokens, or sensitive auth payloads.
- Do not expose individual productivity scoring.
- Ensure all analytics payloads are tenant-safe.

## Acceptance Criteria

- A new user can sign up and verify email.
- A verified user can create an organization.
- The first organization creator becomes organization owner.
- The organization cannot be ownerless.
- A workspace can be created inside the organization.
- Workspace belongs to exactly one organization.
- Product shell shows current organization and workspace context.
- Workspace switcher foundation lists the created workspace.
- Protected organization and workspace data cannot be accessed cross-tenant.
- Creation events are recorded for product analytics.
- Audit-ready events exist for organization and workspace creation.
- Actor model is compatible with future service and AI actors.

## Dependencies

- Authentication approach selected.
- Session management available.
- Tenant-aware data model approved.
- Product shell design available.
- Organization and workspace naming rules agreed.
- Analytics event schema available.
- Logging and correlation ID strategy available.

## Risks And Mitigations

| Risk                               | Impact                        | Mitigation                                                     |
| ---------------------------------- | ----------------------------- | -------------------------------------------------------------- |
| Onboarding asks too many questions | Activation drops              | Require only organization and workspace essentials             |
| Tenant scoping is added later      | Security redesign             | Make organization ID part of the foundation now                |
| Workspace scope is unclear         | User confusion                | Persistent organization and workspace context in product shell |
| Owner model is weak                | Enterprise trust gap          | Enforce at least one owner from day one                        |
| AI actor model is ignored          | Future AI governance redesign | Reserve actor type and audit attribution now                   |

## Exit Criteria

Phase 1A is complete when a new verified user can create an organization and first workspace, land in the workspace context, and all tenant, identity, analytics, and audit-ready foundations are in place for Phase 1B membership and invites.
