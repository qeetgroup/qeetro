# Phase 1D: Realtime And Notifications

Last updated: 2026-05-15

## Phase Summary

Phase 1D makes workspace and membership state feel live while creating a reliable notification foundation. This phase covers realtime-ready membership updates, workspace list updates, invite state updates, access revocation propagation, and invite/member notifications.

Realtime is a primitive in Qeetro, but durable server state remains authoritative. This phase should make collaboration feel responsive without compromising correctness or tenant safety.

## Product Goal

Ensure workspace and membership changes propagate quickly to active users and that invite and access lifecycle notifications are reliable, tenant-safe, and extensible.

## Business Outcomes

| Outcome                         | Metric                                                                                   |
| ------------------------------- | ---------------------------------------------------------------------------------------- |
| Live collaboration readiness    | Member and workspace changes update without full manual refresh where practical          |
| Access safety                   | Removed users stop receiving realtime events for affected scopes                         |
| Notification reliability        | Invite email delivery is observable and retry-safe                                       |
| Future collaboration foundation | Event patterns can support comments, mentions, docs, issue updates, and AI task progress |

## MVP Scope

### In Scope

- Workspace list update events after create, rename, archive-ready state, or access change.
- Member list update events after invite acceptance, role change, or removal.
- Pending invite state updates after invite accepted, revoked, or expired.
- Active access revocation handling for removed members.
- Realtime channel scoping by organization and workspace.
- Reconnect permission revalidation.
- Realtime or refetch-on-event contracts for issue updates, board movement, comments, activity, import progress, GitHub link changes, and AI task progress.
- Durable-state reconciliation after missed execution-domain events.
- Invite email notification.
- Event-backed notification records for invite acceptance, role change, and member removal.
- Notification preference foundation.
- Realtime and notification health metrics.

### Out Of Scope

- Slack integration.
- Discord integration.
- Advanced notification routing.
- Weekly digests.
- Per-project notification controls.
- Full activity feed UI.
- Advanced collaborative docs editing.
- Presence indicators beyond readiness foundations.
- Push notifications.

## Core Workflows

### Workflow 1: Invite Accepted Updates Member List

#### Entry

Invitee accepts an invite.

#### Steps

1. System validates invite and creates membership.
2. System marks invite accepted.
3. System emits member-added event.
4. Authorized open clients receive member list update.
5. Pending invite list removes or updates invite state.
6. Relevant notification record is created where configured.

#### Completion State

- Invitee appears as active member.
- Pending invite no longer appears as pending.
- Admins see updated state without manual refresh where realtime is available.

### Workflow 2: Role Change Updates Active Clients

#### Entry

Admin changes a workspace or organization role.

#### Steps

1. System validates permission.
2. System applies role change.
3. System emits role-changed event.
4. Affected clients update role display and available actions.
5. If the role reduces access, affected sessions revalidate permissions.
6. Notification record is created where configured.

#### Completion State

- Member sees updated access state.
- Admin member list reflects new role.
- Unauthorized actions are no longer available.

### Workflow 3: Member Removed Revokes Realtime Access

#### Entry

Admin removes member from workspace or organization.

#### Steps

1. System removes membership after authorization.
2. System emits member-removed event.
3. Active subscriptions for affected scopes are invalidated or forced to revalidate.
4. Removed user stops receiving realtime events for affected scopes.
5. Workspace list and member list update for authorized remaining users.
6. Notification delivery stops for affected scopes.

#### Completion State

- Removed user no longer receives protected realtime data.
- Remaining members see accurate member state.
- Audit and operational metrics capture the revocation.

### Workflow 4: Invite Email Delivery

#### Entry

Admin creates invite.

#### Steps

1. Invite record is created.
2. Email delivery job is queued or sent.
3. Delivery success or failure is recorded.
4. Failure is retryable and observable.
5. Admin-visible pending state remains accurate.

#### Completion State

- Invitee receives email or failure is visible operationally.
- Invite remains pending until accepted, expired, or revoked.

## User Stories

| ID         | Persona            | Story                                                                                                  | Priority |
| ---------- | ------------------ | ------------------------------------------------------------------------------------------------------ | -------- |
| IOW-1D-001 | Workspace Admin    | As an admin, I want member lists to update when invites are accepted so I know who has joined.         | Must     |
| IOW-1D-002 | Organization Admin | As an admin, I want removed users to lose live access immediately so sensitive data remains protected. | Must     |
| IOW-1D-003 | Invitee            | As an invitee, I want reliable invite email delivery so I can join without asking for manual help.     | Must     |
| IOW-1D-004 | Software Engineer  | As a user, I want workspace access changes reflected quickly so the UI does not show stale state.      | Should   |
| IOW-1D-005 | Operator           | As an operator, I want realtime and notification metrics so delivery issues are visible.               | Must     |
| IOW-1D-006 | Product Manager    | As a PM, I want workspace membership state to feel live so collaboration is trustworthy.               | Should   |

## Functional Requirements

### Realtime

- Realtime connections authenticate the actor.
- Realtime subscriptions are scoped by organization and workspace.
- Reconnect must revalidate permissions.
- Clients recover from missed events by refetching durable state.
- Durable server state is authoritative.
- Removed users stop receiving protected events.
- Workspace list updates after access changes.
- Member list updates after invite acceptance, role change, and removal.
- Pending invite state updates after acceptance, revocation, and expiration.
- Issue, comment, board, activity, import, GitHub, and AI task updates can be delivered as realtime patches or refetch signals.
- Clients must reconcile execution-domain realtime updates against durable state.

### Notifications

- Invite email is sent when invite is created.
- Invite acceptance notification can be event-backed for inviting admin or workspace admins.
- Role change notification can be event-backed for affected user.
- Member removal affects notification eligibility immediately.
- Notification records include organization ID and workspace ID where applicable.
- User notification preference foundation exists, even if advanced preferences are deferred.
- Assignment, mention, comment, import completion, GitHub link, and AI task completion notifications are supported by the same tenant-scoped notification foundation when enabled by later Phase 1 domains.

### Events

Events required for this phase:

- workspace.created
- workspace.updated
- workspace.member_added
- workspace.member_removed
- workspace.role_changed
- organization.member_added
- organization.member_removed
- organization.role_changed
- invite.created
- invite.accepted
- invite.revoked
- invite.expired
- notification.created
- notification.delivery_failed
- realtime.subscription_revoked
- issue.updated
- issue.status_changed
- comment.created
- mention.created
- doc.updated
- github.pull_request_linked
- import.progress_updated
- ai.workflow_completed

## UX Expectations

- Member and invite state should update without forcing users to refresh when realtime is connected.
- Stale state should self-correct on reconnect or navigation.
- Notification preferences should be simple and not interrupt onboarding.
- Invite email copy should be clear and action-oriented.
- Removed users should be redirected or shown a safe access message if they are currently inside a removed scope.
- Realtime failures should degrade gracefully to refetching server state.

## Security Requirements

- Realtime channels must be tenant-scoped.
- Realtime authorization must be checked on connect and reconnect.
- Realtime events must not include sensitive data beyond what recipients can access.
- Notification delivery must respect current permissions.
- Removed users must stop receiving notifications and realtime events for affected scopes.
- Event payloads must not include invite tokens, session tokens, or secrets.

## Analytics And Operational Metrics

Track:

- Realtime connection count.
- Realtime auth failures.
- Realtime reconnect count.
- Realtime event delivery failure count.
- Subscription revocation count.
- Permission revocation propagation time.
- Invite email delivery success.
- Invite email delivery failure.
- Notification created.
- Notification delivery failure.
- Notification preference changed.

## Acceptance Criteria

- Workspace list updates after workspace creation or access change.
- Member list updates after invite acceptance, role change, or removal.
- Pending invite state updates after invite acceptance, revocation, or expiration.
- Issue updates, board movement, comments, activity, import progress, GitHub links, and AI workflow completion can trigger realtime patches or durable refetch signals.
- Removed users cannot continue receiving realtime events for affected scopes.
- Reconnect revalidates identity and permissions.
- Invite email delivery is observable.
- Notification records are tenant-scoped.
- Notification eligibility respects current access state.
- Realtime failures recover through durable state refetch.
- Metrics exist for realtime connection, delivery, reconnect, auth failure, and notification delivery health.

## Dependencies

- Phase 1A organization and workspace scope.
- Phase 1B membership and invite flows.
- Phase 1C authorization, audit, and observability foundation.
- Realtime gateway decision.
- Event abstraction or outbox-ready event publishing.
- Email provider.
- Background job support.
- Notification persistence.
- Client state strategy for realtime patches over durable server data.

## Risks And Mitigations

| Risk                                   | Impact                    | Mitigation                                          |
| -------------------------------------- | ------------------------- | --------------------------------------------------- |
| Realtime events leak cross-tenant data | Critical security failure | Scope all channels by organization and workspace    |
| Removed user receives stale events     | Access breach             | Revalidate subscriptions and revoke affected scopes |
| Realtime state becomes source of truth | Data correctness issues   | Durable server state always wins                    |
| Notification delivery is unreliable    | Invite activation suffers | Queue, retry, and monitor invite emails             |
| Too many notifications                 | User fatigue              | Keep MVP notification types minimal                 |

## Exit Criteria

Phase 1D is complete when workspace and membership changes propagate to active clients safely, invite emails are reliable and observable, notification records are tenant-scoped, and the realtime foundation is ready for issues, comments, docs, mentions, and AI task progress.
