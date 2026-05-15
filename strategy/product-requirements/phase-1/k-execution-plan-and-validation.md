# Phase 1K: Execution Plan And Validation

Last updated: 2026-05-15

## Phase Summary

Phase 1K decomposes the full MVP Core Execution scope into buildable epics, dependencies, validation criteria, rollout controls, and release gates. It exists to prevent Phase 1 from becoming either an incomplete admin foundation or a bloated project-management suite.

This document is the execution bridge from PRDs to engineering planning, QA planning, release management, and founder-level scope control.

## Phase 1 Milestones

| Milestone | Scope                                                     | Release Outcome                                            |
| --------- | --------------------------------------------------------- | ---------------------------------------------------------- |
| M1        | Identity, tenant, workspace, membership, invites          | Team can create secure workspace and invite collaborators  |
| M2        | Governance, audit, observability, realtime, notifications | Access changes are safe, live, auditable, and observable   |
| M3        | Teams, projects, issues, history                          | Team can capture and manage real software work             |
| M4        | Views, filters, board, search, backlog, sprint/cycle      | Team can scan, plan, and search execution state            |
| M5        | Comments, mentions, docs, activity                        | Team can collaborate and preserve work context             |
| M6        | GitHub links and import                                   | Team can connect code signals and migrate initial work     |
| M7        | AI drafting, summaries, search, action logs, controls     | Team can use governed AI to reduce coordination work       |
| M8        | Phase 1 release validation                                | Product, security, reliability, QA, and support gates pass |

## Epic Breakdown

### Epic 1: Identity And Tenant Foundation

Parent issues:

- Account signup, login, logout, verification, and sessions.
- Organization creation with owner and lifecycle state.
- Workspace creation with tenant boundary and switcher.
- Actor model with human, service-ready, and AI-ready distinctions.

Acceptance:

- New verified user creates organization and first workspace.
- Organization cannot be ownerless.
- Tenant scoping is enforced for protected records.

Dependencies:

- Authentication approach.
- Tenant-aware database model.
- Product shell context.

### Epic 2: Membership, Invites, And Access Revocation

Parent issues:

- Email invite creation, acceptance, expiration, and revocation.
- Organization and workspace membership.
- Role assignment and member removal.
- Immediate access revocation across UI, API, realtime, notifications, search, and AI retrieval.

Acceptance:

- Admin invites teammate and invitee lands in intended workspace.
- Revoked or expired invites cannot grant access.
- Removed member loses access in affected scopes.

Dependencies:

- Email provider.
- Background job path.
- Authorization layer.

### Epic 3: Governance, Audit, Observability, Realtime, And Notifications

Parent issues:

- Centralized authorization checks.
- Audit event persistence for sensitive actions.
- Structured logs, metrics, traces, and correlation IDs.
- Realtime subscriptions and reconnect permission validation.
- Tenant-scoped notification records and invite delivery monitoring.

Acceptance:

- Sensitive actions emit audit events.
- Permission failures are safe and non-leaky.
- Realtime and notification health is observable.

Dependencies:

- Event abstraction or outbox-ready publishing.
- Metrics and tracing foundation.
- Realtime gateway decision.

### Epic 4: Teams, Projects, Issues, And History

Parent issues:

- Team creation and ownership.
- Project creation, status, ownership, and archive.
- Issue create, edit, assign, prioritize, label, move, archive.
- Issue history and activity events.

Acceptance:

- User creates team, project, and first issue quickly.
- Issue history records meaningful changes.
- Project and issue permissions inherit workspace safely.

Dependencies:

- Epics 1 through 3.
- Product shell and command palette.

### Epic 5: Views, Search, Backlog, And Sprint/Cycle MVP

Parent issues:

- Issue list view.
- Board view by status category.
- Filters and sorts.
- Search indexing and query path.
- Backlog view.
- Sprint/cycle create, start, complete, and summary.

Acceptance:

- User can view, filter, sort, board, and search work.
- Search returns only permitted content.
- Team can run a basic sprint/cycle.

Dependencies:

- Epic 4.
- Search infrastructure.
- Realtime/refetch event model.

### Epic 6: Comments, Mentions, Docs, Activity, And Notifications

Parent issues:

- Issue comments.
- Mentions and mention notifications.
- Lightweight markdown docs tied to project or issue.
- Project and issue activity.
- Notification read/unread state.

Acceptance:

- User comments, mentions teammate, and creates linked doc.
- Activity surfaces meaningful work context.
- Notifications respect current permissions.

Dependencies:

- Epic 4 and Epic 5.
- Markdown sanitization approach.
- Notification foundation.

### Epic 7: GitHub Links And Import MVP

Parent issues:

- GitHub connection.
- PR and commit link records.
- Webhook verification and idempotency.
- Import source parser.
- Import preview, field mapping, job execution, progress, errors, and deduplication.

Acceptance:

- PR or commit can be linked to issue.
- Import creates issues safely from approved source.
- Integration and import jobs are observable and revocable.

Dependencies:

- Epic 4 and Epic 6.
- Secure credential storage.
- Background job infrastructure.

### Epic 8: AI Trust Foundations And Execution Assistance

Parent issues:

- AI enable/disable and data-use controls.
- Permission-aware retrieval.
- AI issue drafting.
- AI summaries.
- Workspace search/Q&A.
- AI action log.
- Evaluation fixtures and fallback behavior.

Acceptance:

- AI drafts or summarizes with sources.
- Retrieval never crosses permissions.
- AI action logs are complete and observable.

Dependencies:

- Epic 5 search.
- Epic 6 comments/docs/activity.
- Epic 7 GitHub metadata.
- Model gateway and retrieval decisions.

## Phase 1 Dependency Map

```text
Identity and tenant
  Membership and invites
    Governance, audit, observability
      Realtime and notifications
        Teams, projects, issues
          Views, search, backlog, sprint/cycle
            Comments, docs, activity
              GitHub links and imports
                AI drafting, summaries, workspace search
                  Release validation
```

## Validation Plan

### Product Validation

- New user creates organization, workspace, team, project, first issue, and first invite in under 5 minutes.
- Engineer finds assigned work, updates issue, comments, links PR, and moves status without admin help.
- PM triages backlog, prioritizes issues, creates doc, and generates source-backed summary.
- Engineering manager creates sprint/cycle, commits issues, reviews status, and completes sprint/cycle.
- Admin verifies roles, audit events, GitHub scope, import records, AI controls, and data-use settings.

### QA Validation

- End-to-end onboarding and first execution loop.
- Permission matrix across organization, workspace, team, project, issue, comment, doc, GitHub, import, search, and AI.
- Tenant isolation across APIs, data, cache, events, search, vector retrieval, logs, jobs, realtime, notifications, GitHub, import staging, and AI payloads.
- Accessibility checks for onboarding, invite acceptance, issue create/edit, list, board, search, docs, comments, notifications, import, and AI output review.
- Realtime reconnect and durable-state reconciliation.
- Import fixture coverage for success, partial failure, duplicate retry, and invalid mappings.
- AI evaluation fixtures and provider fallback tests.

### Reliability Validation

- Structured logs, metrics, traces, and correlation IDs exist for critical paths.
- Dashboards cover auth, invites, issues, comments, search, realtime, notification delivery, GitHub webhooks, imports, AI provider calls, AI retrieval, and background jobs.
- Alert thresholds exist for cross-tenant access attempts, auth failure spikes, invite delivery failures, event lag, search indexing lag, webhook failures, import failures, and AI provider degradation.
- Background jobs are idempotent and have retry/dead-letter behavior.

### Security Validation

- Invite, session, GitHub, import, and AI tokens/secrets are never logged.
- Permission denials do not leak private resource existence.
- Removed users lose access across UI, API, realtime, notifications, search, and AI retrieval.
- GitHub webhooks verify signature and installation scope.
- AI prompt and retrieval payloads exclude unauthorized context.

## Rollout Plan

1. Internal dogfood with identity, workspace, teams, projects, and issues.
2. Add list, board, filters, comments, and basic notifications.
3. Add search and sprint/cycle planning once issue volume is meaningful.
4. Add docs and activity after comments/history are stable.
5. Add GitHub manual linking before webhook-driven automation.
6. Add import for one source path before expanding import coverage.
7. Add AI issue drafting and summaries behind explicit enablement.
8. Add workspace Q&A only after search and permission-filtered retrieval pass tests.
9. Private beta with feature flags and operational dashboards.
10. Public MVP only after release gates pass.

## Release Gates

- No known cross-tenant access defects.
- No known AI retrieval permission defects.
- Critical onboarding, issue, comment, search, GitHub, import, and AI paths have passing E2E or integration tests.
- Operational dashboards and alerts are live for production-critical workflows.
- Rollback or kill switch exists for AI, GitHub webhook processing, import workers, search indexing, and realtime fanout.
- Support notes exist for invite issues, GitHub connection issues, import limitations, search degradation, and AI unavailability.
- MVP non-goals are documented and not silently added.

## Open Product Decisions

| Decision                    | Options                                            | Recommended Default                                      |
| --------------------------- | -------------------------------------------------- | -------------------------------------------------------- |
| Sprint language             | Sprint, cycle, both                                | Choose one product term before implementation            |
| First import path           | CSV, GitHub Issues, Linear                         | Start with CSV or GitHub Issues for controllability      |
| Epic model                  | First-class issue type, project grouping, deferred | Defer first-class epic unless required by early users    |
| Project creation permission | All members, team leads only, admins only          | Allow members, with admin guardrails if abuse appears    |
| AI enablement default       | On, off, opt-in by workspace                       | Opt-in for early trust, reconsider after security review |
| GitHub scope                | Org, workspace, project                            | Workspace/project scope for MVP clarity                  |

## Phase 1 Risks And Mitigations

| Risk                            | Impact                                   | Mitigation                                                                 |
| ------------------------------- | ---------------------------------------- | -------------------------------------------------------------------------- |
| MVP becomes a small Jira        | Slower adoption and lost differentiation | Keep defaults opinionated and defer builders/custom fields                 |
| Scope model confuses users      | Navigation and permission mistakes       | Organization and workspace stay primary; team/project scope is subordinate |
| Search or AI leaks content      | Critical trust failure                   | Permission-filter retrieval and tenant isolation tests are release gates   |
| GitHub creates misleading state | Users distrust Qeetro                    | Show source, timestamp, and sync state clearly                             |
| Import creates duplicates       | Onboarding confidence drops              | Source IDs, idempotency keys, preview, and retry tests                     |
| Notifications become noisy      | Users ignore collaboration signals       | Start with mentions, assignments, and high-signal updates                  |
| Sprint workflow adds ceremony   | Teams abandon planning                   | Keep sprint/cycle lightweight and defer analytics suite                    |
| Docs become separate product    | Focus drifts from execution              | Keep docs linked to project/issue context in Phase 1                       |
| AI outputs are ungrounded       | AI creates review burden                 | Require sources, fallback, evaluation, and acceptance metrics              |

## Exit Criteria

Phase 1K is complete when the full MVP Core Execution scope is decomposed into buildable epics, dependencies are explicit, validation plans are defined, rollout and release gates are documented, and product leadership can decide scope without ambiguity.
