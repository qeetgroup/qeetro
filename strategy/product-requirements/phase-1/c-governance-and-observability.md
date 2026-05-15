# Phase 1C: Governance And Observability

Last updated: 2026-05-15

## Phase Summary

Phase 1C makes the identity, organization, and workspace substrate governable and operable. This phase hardens RBAC, audit events, permission denial handling, rate limits, session revocation, and operational telemetry.

The product should still feel light to daily users. Governance must exist mostly as foundation, policy, and admin-safe behavior rather than heavy configuration screens.

## Product Goal

Ensure sensitive access and tenant actions are authorized, auditable, observable, and safe to operate before Qeetro expands into projects, issues, docs, search, and AI workflows.

## Business Outcomes

| Outcome                 | Metric                                                                      |
| ----------------------- | --------------------------------------------------------------------------- |
| Governance credibility  | Sensitive actions produce audit events                                      |
| Security confidence     | Permission denial behavior is safe and non-leaky                            |
| Operational reliability | Core auth, invite, and membership paths are observable                      |
| Enterprise readiness    | SSO, SCIM, audit UI, and policy expansion are structurally supported        |
| AI readiness            | Future AI actions can use the same actor, permission, and audit foundations |

## MVP Scope

### In Scope

- Centralized authorization checks for organization and workspace actions.
- Deny-by-default permission behavior.
- Last-owner protection.
- Session revocation readiness for member removal and role changes.
- Audit event foundation for sensitive actions.
- Safe permission error responses.
- Rate limits for signup, login, verification, invite creation, and invite acceptance.
- Structured logs with tenant-safe correlation IDs.
- Product analytics for activation, invites, membership, permissions, and reliability.
- Operational metrics for auth, invite delivery, audit event writes, and permission denials.
- Security-sensitive event taxonomy.

### Out Of Scope

- Full audit log UI.
- Audit export.
- Compliance reports.
- Custom policy builder.
- Advanced enterprise admin console.
- Data retention controls.
- Legal hold.
- Device management.

## Core Workflows

### Workflow 1: Sensitive Action Authorization

#### Entry

User attempts a sensitive action such as role change, invite revocation, member removal, workspace rename, or organization setting update.

#### Steps

1. System resolves actor identity.
2. System resolves organization and workspace scope.
3. System checks tenant boundary.
4. System checks action-specific permission.
5. System applies mutation if allowed.
6. System emits audit event.
7. System records product and operational metrics.
8. System returns success or safe error.

#### Completion State

- Authorized action succeeds and is auditable.
- Unauthorized action fails without leaking private resource details.

### Workflow 2: Member Removal Access Revocation

#### Entry

Admin removes a member from workspace or organization.

#### Steps

1. System validates admin permission.
2. System blocks last-owner removal.
3. System removes membership.
4. System revokes affected sessions or workspace access paths.
5. System blocks future API access for affected scope.
6. System prepares realtime revocation event for Phase 1D.
7. System stops future notification delivery for affected scope.
8. System emits audit event and metrics.

#### Completion State

- Removed member no longer has access.
- Access change is observable and auditable.

### Workflow 3: Permission Denial

#### Entry

User attempts an action without sufficient permission.

#### Steps

1. System validates tenant scope.
2. System determines whether the resource can be safely acknowledged.
3. System returns safe denial.
4. System records permission-denied metric.
5. System logs tenant-safe diagnostic metadata.

#### Completion State

- User receives a clear error where safe.
- Private resource existence is not leaked.
- Product team can detect confusing permission patterns.

## User Stories

| ID         | Persona            | Story                                                                                                      | Priority |
| ---------- | ------------------ | ---------------------------------------------------------------------------------------------------------- | -------- |
| IOW-1C-001 | Security Reviewer  | As a reviewer, I want all sensitive actions authorized centrally so tenant access is consistent.           | Must     |
| IOW-1C-002 | Organization Owner | As an owner, I want important access changes recorded so I can understand what happened.                   | Must     |
| IOW-1C-003 | Developer          | As a developer, I want clear permission errors so I can resolve access issues quickly.                     | Should   |
| IOW-1C-004 | Enterprise Admin   | As an evaluator, I want audit foundations so Qeetro can pass future security review.                       | Must     |
| IOW-1C-005 | Operator           | As an operator, I want metrics for auth, invite, and permission failures so production issues are visible. | Must     |
| IOW-1C-006 | AI Agent Owner     | As a future agent owner, I want audit records to support AI actor attribution.                             | Should   |

## Functional Requirements

### Authorization

- Authorization checks are centralized and reusable.
- Tenant boundary is checked before resource action permission.
- Organization and workspace scope are explicit in protected actions.
- Deny-by-default behavior applies to unknown or unsupported actions.
- Permission responses avoid private data leakage.
- Last-owner protection is enforced.

### Audit Events

Audit event is required for:

- Organization created.
- Organization renamed.
- Workspace created.
- Workspace renamed.
- Invite created.
- Invite revoked.
- Invite accepted.
- Organization role changed.
- Workspace role changed.
- Workspace member removed.
- Organization member removed.
- Security-sensitive setting changed.
- Session revoked due to access change.

Minimum audit fields:

- Event ID.
- Organization ID.
- Workspace ID where applicable.
- Actor ID.
- Actor type.
- Action.
- Target type.
- Target ID.
- Timestamp.
- Correlation ID.
- Source IP or safe request metadata where policy allows.
- Safe metadata.

### Observability

- Structured logs for auth, invite, membership, permission, and audit flows.
- Metrics for latency, failure rate, and event write success.
- Correlation IDs propagated through request, job, event, and notification paths.
- Security-sensitive failures surfaced to error reporting.
- Tenant-safe diagnostic fields only.

### Rate Limits

Apply rate limits to:

- Signup.
- Login.
- Email verification request.
- Password reset request.
- Invite creation.
- Invite acceptance.
- Role changes where abuse risk exists.

## UX Expectations

- Governance should not add friction to common user workflows.
- Permission errors should be clear when safe, for example: "Workspace admin access required."
- Sensitive destructive actions should require confirmation.
- Users should not see audit UI unless explicitly available by role and phase.
- Admin settings should show role and membership state clearly.

## Security Requirements

- Cross-tenant data leakage is a release-blocking defect.
- Sensitive data must be excluded from logs.
- Invite tokens, session tokens, passwords, and raw secrets must never be logged.
- Permission failures must not confirm existence of private organizations or workspaces.
- Member removal must revoke future access across API, UI, notifications, realtime-ready channels, and future AI retrieval.
- Audit writes for sensitive actions should be reliable and monitored.

## Analytics Requirements

### Product Analytics

- Permission denied.
- Role changed.
- Member removed.
- Invite revoked.
- Invite accepted.
- Workspace switched.
- Onboarding conversion.
- Invite acceptance conversion.

### Operational Metrics

- API latency and errors for auth and membership endpoints.
- Database latency for tenant-scoped permission checks.
- Audit event write success rate.
- Permission denial count by action category.
- Invite job failure count.
- Rate limit hit count.
- Session revocation success and failure count.

## Enterprise Requirements

MVP foundations:

- Owner/admin separation.
- Audit event table or event store.
- SSO-ready identity abstraction.
- SCIM-ready membership model.
- Domain-ready organization model.
- Tenant-safe logging.
- AI-governance-ready actor attribution.

Deferred:

- Audit log viewer.
- Audit export.
- Data retention.
- SAML/OIDC setup UI.
- SCIM provisioning UI.
- Advanced policy builder.

## Acceptance Criteria

- All sensitive actions use centralized authorization checks.
- Unauthorized users receive safe permission responses.
- Last-owner removal is blocked.
- Member removal revokes affected access.
- Audit event is written for all defined sensitive actions.
- Audit event includes actor, actor type, scope, action, target, timestamp, correlation ID, and safe metadata.
- Logs exclude secrets and sensitive tokens.
- Signup, login, invite creation, and invite acceptance are rate-limited.
- Product analytics track activation and access lifecycle.
- Operational metrics expose auth, invite, audit, and permission health.
- Foundation supports future AI actor attribution.

## Dependencies

- Phase 1A identity, organization, workspace foundation.
- Phase 1B membership and invite events.
- Authorization policy layer.
- Logging, metrics, and tracing foundation.
- Correlation ID propagation.
- Rate limiting infrastructure.
- Audit event persistence.
- Error reporting integration.

## Risks And Mitigations

| Risk                                  | Impact                       | Mitigation                                              |
| ------------------------------------- | ---------------------------- | ------------------------------------------------------- |
| Governance becomes visible complexity | Slower user workflows        | Keep governance mostly behind policy and admin surfaces |
| Permission checks are duplicated      | Inconsistent access control  | Centralize authorization layer                          |
| Audit writes fail silently            | Security trust gap           | Monitor audit write success and failure                 |
| Permission errors leak private data   | Tenant security issue        | Use safe denial patterns                                |
| Observability stores sensitive data   | Security and compliance risk | Define safe metadata and scrub secrets                  |

## Exit Criteria

Phase 1C is complete when sensitive identity, organization, workspace, invite, and membership actions are centrally authorized, audited, observable, rate-limited where needed, and ready for realtime and notification propagation in Phase 1D.
