# Phase 1B: Membership And Invites

Last updated: 2026-05-15

## Phase Summary

Phase 1B turns a single-user organization into a collaborative workspace. Admins can invite teammates, assign simple roles, view pending invites, accept invites, revoke invites, and remove members from workspace or organization scope.

This phase should prioritize activation and access safety. The invite flow must feel lightweight to users but must be secure, auditable-ready, idempotent, tenant-scoped, and future-compatible with SSO, SCIM, groups, and AI agent ownership.

## Product Goal

Enable organization and workspace admins to onboard teammates quickly while preserving clear access boundaries and role ownership.

## Business Outcomes

| Outcome              | Metric                                                          |
| -------------------- | --------------------------------------------------------------- |
| Team activation      | First teammate invited during first session                     |
| Invite quality       | High invite acceptance rate within 24 hours                     |
| Access clarity       | Low permission support issues during onboarding                 |
| Governance readiness | Member role and removal events are event-backed and audit-ready |
| Enterprise path      | Membership model can support future SCIM and groups             |

## MVP Scope

### In Scope

- Invite users by email.
- Invite to organization and optionally specific workspace.
- Assign intended role during invite.
- Accept invite as new or existing user.
- Expire invite.
- Revoke invite.
- Prevent invite reuse.
- Show pending invites to authorized admins.
- Add organization membership on invite acceptance.
- Add workspace membership on invite acceptance where applicable.
- Change workspace role.
- Remove workspace member.
- Remove organization member and revoke all workspace access under that organization.
- Send invite email.
- Emit membership and invite events for future audit, notifications, realtime, and analytics.

### Out Of Scope

- Guest users.
- Bulk CSV invite import.
- SCIM provisioning.
- Domain-based auto-join.
- Nested groups.
- Custom roles.
- Advanced invite approval workflows.
- External customer collaboration spaces.

## Core Workflows

### Workflow 1: Admin Invites Teammate

#### Entry

Admin opens invite dialog from workspace empty state, member list, settings, or command palette.

#### Steps

1. Admin enters one or more email addresses.
2. Admin selects organization scope and optional workspace scope.
3. Admin selects role, defaulting to workspace member.
4. System validates admin permissions.
5. System creates pending invite records.
6. System sends invite emails.
7. System records invite-created event.
8. Pending invites appear in the member management view.

#### Completion State

- Invite exists with pending status.
- Invitee receives email.
- Admin can revoke the invite.
- Pending invite is visible to authorized users.

#### Edge Cases

- Invitee already belongs to workspace.
- Invitee belongs to organization but not workspace.
- Invite email fails to deliver.
- Invitee email is malformed.
- Admin exceeds invite rate limit.
- Admin loses permission before invite is accepted.

### Workflow 2: Invitee Accepts Invite

#### Entry

Invitee clicks invite link.

#### Steps

1. System validates invite token.
2. Invitee logs in or creates account.
3. System verifies email ownership.
4. System creates organization membership if needed.
5. System creates workspace membership if included.
6. System assigns intended role.
7. System marks invite accepted.
8. Invitee lands in the invited workspace.
9. Admin-visible member state updates.

#### Completion State

- Invitee has intended access.
- Invite cannot be reused.
- Membership event is emitted.
- Invite acceptance analytics are recorded.

#### Edge Cases

- Invite expired.
- Invite revoked.
- Invite email does not match authenticated user.
- User already accepted another invite.
- Organization is suspended.
- Workspace is archived.

### Workflow 3: Admin Revokes Invite

#### Entry

Admin views pending invite list.

#### Steps

1. Admin selects revoke.
2. System validates permission.
3. System marks invite revoked.
4. System blocks future invite acceptance.
5. System emits invite-revoked event.
6. Pending invite list updates.

#### Completion State

- Invite cannot grant access.
- Admin can see revoked state or removal from pending list.

### Workflow 4: Admin Removes Member

#### Entry

Admin opens member management.

#### Steps

1. Admin selects member.
2. Admin chooses workspace removal or organization removal.
3. System validates permission.
4. System prevents removal of the last organization owner.
5. System removes membership.
6. System revokes access.
7. System emits member-removed event.
8. Member list updates.

#### Completion State

- Removed user can no longer access the affected scope.
- Future notifications stop.
- Future realtime and AI retrieval scopes exclude the removed user.

## User Stories

| ID         | Persona             | Story                                                                                                 | Priority |
| ---------- | ------------------- | ----------------------------------------------------------------------------------------------------- | -------- |
| IOW-1B-001 | Organization Owner  | As an owner, I want to invite teammates by email so I can onboard my team without manual setup.       | Must     |
| IOW-1B-002 | Workspace Admin     | As a workspace admin, I want pending invites visible so I know who has not joined yet.                | Must     |
| IOW-1B-003 | Invitee             | As an invitee, I want to accept an invite and land in the correct workspace so I know where to start. | Must     |
| IOW-1B-004 | Engineering Manager | As a manager, I want to assign workspace roles so access matches responsibility.                      | Must     |
| IOW-1B-005 | Organization Admin  | As an admin, I want to remove members so access can be revoked when people leave or move teams.       | Must     |
| IOW-1B-006 | Admin               | As an admin, I want invite links to expire and be revocable so stale access paths do not remain open. | Must     |
| IOW-1B-007 | Product Manager     | As a PM, I want workspace membership to be clear so I know who can see team work.                     | Should   |
| IOW-1B-008 | Enterprise Admin    | As an evaluator, I want membership records to be SCIM-ready so future provisioning is possible.       | Should   |

## Functional Requirements

### Invitations

- Invite has ID, organization ID, optional workspace ID, email, intended role, status, expiration, inviter, created timestamp, and accepted timestamp.
- Invite statuses include pending, accepted, expired, and revoked.
- Invite tokens are secure, expiring, and single-use.
- Invite acceptance is idempotent.
- Invite can be revoked before acceptance.
- Expired or revoked invites cannot grant access.
- Invite records are visible only to authorized users.

### Membership

- Organization membership includes user ID, organization ID, role, status, created timestamp, and source-ready field for future SCIM or invite origin.
- Workspace membership includes user ID, organization ID, workspace ID, role, status, and created timestamp.
- Organization-level removal revokes all workspace memberships under that organization.
- Workspace-level removal affects only that workspace.
- Last organization owner cannot be removed or demoted without replacement.

### Roles

- Organization owner can manage all members and workspaces.
- Organization admin can manage members, invites, and workspaces except ownership-sensitive actions.
- Workspace admin can manage workspace invites and workspace members.
- Workspace member can access workspace but cannot manage membership.

## UX Expectations

- Invite dialog defaults to workspace member role.
- Role labels must be plain and explainable.
- Member list separates active members and pending invites.
- Pending invites show sent date and expiration state.
- Revoking invites should be one clear action with confirmation where useful.
- Removing organization members should require confirmation.
- Invite acceptance should land users directly in the intended workspace.
- Invite errors should clearly distinguish expired, revoked, invalid, and permission-blocked states.

## Permissions Model

| Action                     | Owner        | Org Admin                 | Workspace Admin      | Workspace Member |
| -------------------------- | ------------ | ------------------------- | -------------------- | ---------------- |
| Invite organization member | Yes          | Yes                       | No                   | No               |
| Invite workspace member    | Yes          | Yes                       | Yes                  | No               |
| Revoke organization invite | Yes          | Yes                       | No                   | No               |
| Revoke workspace invite    | Yes          | Yes                       | Yes                  | No               |
| Accept invite              | Invitee only | Invitee only              | Invitee only         | Invitee only     |
| Change organization role   | Yes          | Limited, no owner changes | No                   | No               |
| Change workspace role      | Yes          | Yes                       | Yes inside workspace | No               |
| Remove workspace member    | Yes          | Yes                       | Yes inside workspace | No               |
| Remove organization member | Yes          | Yes except owners         | No                   | No               |

## Collaboration Requirements

- Member list must update after invite acceptance, role change, and member removal.
- Pending invite state must be visible to authorized admins.
- Membership events must support future activity feed and realtime propagation.
- Collaboration state must never leak across organizations.

## Notification Requirements

- Invite email is required.
- Invite acceptance can create an in-app or event-backed notification for inviting admin.
- Role change can create an in-app or event-backed notification for affected user.
- Removed users stop receiving notifications for affected scopes.
- Notification records must include tenant-safe organization and workspace scope.

## Security Requirements

- Invite tokens must be unguessable and stored securely.
- Invite tokens must not be logged.
- Invite sending must be rate-limited.
- Invite acceptance must validate email ownership or use a secure confirmation path.
- Invite reuse must be blocked.
- Permission checks must happen before invite creation, revocation, role change, or removal.
- Organization-level removal must revoke all workspace access.
- User removal must invalidate active access paths where possible.

## Analytics Requirements

Track:

- Invite created.
- Invite email sent.
- Invite email delivery failed.
- Invite accepted.
- Invite expired.
- Invite revoked.
- Member added to organization.
- Member added to workspace.
- Workspace role changed.
- Organization role changed.
- Workspace member removed.
- Organization member removed.
- Invite acceptance time.
- Invite failure reason.

## Acceptance Criteria

- Admin can invite a teammate by email.
- Invite contains organization scope, optional workspace scope, role, expiration, and secure token.
- Invitee can accept invite as new or existing user.
- Invitee lands in the intended workspace after acceptance.
- Invite can be revoked before acceptance.
- Expired or revoked invite cannot grant access.
- Invite cannot be reused after acceptance.
- Pending invites are visible to authorized admins.
- Admin can change workspace role.
- Admin can remove workspace member.
- Organization admin or owner can remove organization member without leaving organization ownerless.
- Member removal revokes affected access immediately.
- Invite and membership events are available for audit, notifications, realtime, and analytics.

## Dependencies

- Phase 1A identity, organization, and workspace models.
- Email delivery provider.
- Background job or event-backed email delivery path.
- Central permission checks for role and membership actions.
- Member management UI.
- Invite email template.
- Analytics event schema.

## Risks And Mitigations

| Risk                                     | Impact                  | Mitigation                                  |
| ---------------------------------------- | ----------------------- | ------------------------------------------- |
| Invite flow is too complex               | Team activation suffers | Default role and scope intelligently        |
| Invite tokens leak                       | Security incident       | Never log tokens and use secure storage     |
| Role labels confuse users                | Admin mistakes          | Use plain role names and progressive detail |
| Member removal does not revoke all paths | Access breach           | Centralize access revocation and test it    |
| Last owner can be removed                | Tenant becomes orphaned | Enforce last-owner protection               |

## Exit Criteria

Phase 1B is complete when an admin can invite teammates, invitees can join the intended organization and workspace, roles can be managed, members can be removed safely, and all invite and membership events are ready for Phase 1C governance and observability.
