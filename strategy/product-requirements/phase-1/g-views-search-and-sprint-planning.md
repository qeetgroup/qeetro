# Phase 1G: Views, Search, And Sprint Planning

Last updated: 2026-05-15

## Phase Summary

Phase 1G makes work scannable and plannable. Users can view issues in list and board formats, filter and sort work, search permitted workspace context, maintain a backlog, and run a basic sprint or cycle without advanced agile ceremony.

The product should feel fast and operational, with dense but clear views for repeated daily use. Configuration-heavy dashboards, custom saved view systems, and advanced analytics are deferred.

## Product Goal

Enable teams to understand, search, and plan current work quickly enough that Qeetro supports daily execution and first-week adoption.

## Business Outcomes

| Outcome             | Metric                                                             |
| ------------------- | ------------------------------------------------------------------ |
| Work visibility     | Users can find relevant issues through default views and filters   |
| Search trust        | Search returns permitted projects, issues, docs, and comments only |
| Planning activation | Team creates first backlog or sprint/cycle in first week           |
| Speed               | Common filters, sorts, search, and board movement feel responsive  |
| Manager value       | Engineering managers reduce manual sprint and status coordination  |

## MVP Scope

### In Scope

- Issue list view.
- Kanban-style board view by status category.
- Basic filters: assignee, status, priority, label, project, team, sprint/cycle.
- Basic sorts: updated, created, priority, due date where present.
- Workspace search over permitted projects, issues, docs, and comments.
- Search indexing events and reindex readiness.
- Backlog view for uncommitted issues.
- Basic sprint/cycle creation with name, goal, start date, end date, status, and committed issues.
- Add/remove issues from sprint/cycle.
- Start and complete sprint/cycle.
- Simple completion summary from issue state.

### Out Of Scope

- Custom dashboard builder.
- Complex saved views.
- Advanced query language.
- Gantt, timeline, calendar, or roadmap views.
- Planning poker.
- Burndown and burnup dashboards.
- Velocity forecasting.
- Capacity planning beyond simple estimate-ready fields.
- Cross-team dependency planning.

## Core Workflows

### Workflow 1: Scan And Filter Issues

#### Entry

User opens workspace, team, project, or issue list.

#### Steps

1. System loads accessible issues with default sort.
2. User applies filters for assignee, status, priority, label, project, team, or sprint/cycle.
3. User edits issue fields inline where permission allows.
4. User opens an issue or moves to board view.

#### Completion State

- User can identify assigned work, high-priority work, blocked work, and current sprint/cycle work without custom setup.

### Workflow 2: Move Work On Board

#### Entry

User opens board view for project, team, or sprint/cycle.

#### Steps

1. Board groups issues by default status categories.
2. User drags or keyboard-moves issue to a new status.
3. System validates permission and transition.
4. System updates issue status, history, events, board state, search index, and notifications where applicable.

#### Completion State

- Board reflects current durable issue state.
- Other active clients receive update or refetch signal.

### Workflow 3: Search Workspace Context

#### Entry

User searches from global search, workspace search, command palette, or AI search entry point.

#### Steps

1. User enters query.
2. System filters search by actor permissions.
3. System returns projects, issues, docs, and comments ranked for software execution relevance.
4. User opens result or applies filter.
5. Search logs safe metadata for quality and latency.

#### Completion State

- User finds permitted work context without leaking restricted resources.

### Workflow 4: Plan Sprint Or Cycle

#### Entry

Engineering manager or team lead opens backlog or planning view.

#### Steps

1. User creates sprint/cycle with name, goal, start date, and end date.
2. User adds issues from backlog.
3. System shows committed issue count and estimate-ready total if estimates exist.
4. User starts sprint/cycle.
5. Team works issues through normal issue and board views.
6. User completes sprint/cycle and sees simple completion summary.

#### Completion State

- Sprint/cycle has committed issues and lifecycle history.
- Completed state can feed summaries, analytics, and AI status synthesis.

## User Stories

| ID         | Persona             | Story                                                                                               | Priority |
| ---------- | ------------------- | --------------------------------------------------------------------------------------------------- | -------- |
| IOW-1G-001 | Software Engineer   | As an engineer, I want a fast list of my assigned work so I can start without status meetings.      | Must     |
| IOW-1G-002 | Product Manager     | As a PM, I want filters by project, priority, status, and label so I can triage product work.       | Must     |
| IOW-1G-003 | Engineering Manager | As a manager, I want a basic sprint or cycle so the team can commit to near-term execution.         | Must     |
| IOW-1G-004 | Software Engineer   | As an engineer, I want board moves to be fast so updating status does not feel like administration. | Must     |
| IOW-1G-005 | Security Reviewer   | As a reviewer, I want search to respect permissions so private work is not exposed.                 | Must     |
| IOW-1G-006 | AI Agent Owner      | As a future agent owner, I want search documents to support permission-aware retrieval.             | Should   |

## Functional Requirements

### Views

- List and board views must accept organization, workspace, project, team, assignee, label, priority, status, and sprint/cycle filters.
- Board columns map to platform status categories while preserving project issue statuses.
- Inline edits must use the same permission checks as issue mutation APIs.
- Board movement must create issue history and `issue.status_changed.v1` event.

### Search

- Search documents include organization ID, workspace ID, source entity type, source entity ID, title, body excerpt, labels, status, timestamps, and permission scope metadata.
- Search queries filter by actor access before returning results.
- Removed users lose search access immediately or at next permission refresh, with a release-blocking goal of no stale accessible private results.
- Search indexing handles create, update, archive, delete, permission change, and import events.
- Reindex and backfill must be possible without changing source-of-truth records.

### Sprint Or Cycle

- Sprint/cycle has ID, organization ID, workspace ID, optional team ID, name, goal, start date, end date, status, created by, created timestamp, and completed timestamp.
- Sprint/cycle statuses are planned, active, completed, and canceled.
- Issue can belong to zero or one active sprint/cycle in MVP.
- Completing sprint/cycle records completed, incomplete, and removed issue counts.

## UX Expectations

- List view should support keyboard navigation, quick filtering, inline edit, and open issue shortcuts.
- Board view should support pointer and keyboard status movement.
- Backlog should make it obvious which issues are unplanned and which are committed.
- Search empty states should suggest narrowing or broadening query without exposing hidden resources.
- Sprint/cycle planning should feel lightweight, not ceremony-heavy.
- Mobile web should support basic issue list scanning, search, and issue opening.

## Permissions Model

| Action                | Owner/Admin | Workspace Admin | Team Lead | Workspace Member             |
| --------------------- | ----------- | --------------- | --------- | ---------------------------- |
| View list/board       | Yes         | Yes             | Yes       | Yes within access            |
| Search workspace      | Yes         | Yes             | Yes       | Yes within access            |
| Create sprint/cycle   | Yes         | Yes             | Yes       | No by default                |
| Start sprint/cycle    | Yes         | Yes             | Yes       | No by default                |
| Complete sprint/cycle | Yes         | Yes             | Yes       | No by default                |
| Move issue on board   | Yes         | Yes             | Yes       | Yes where issue edit allowed |

## Events And Analytics

Required events:

- `search.document_indexed.v1`
- `search.document_removed.v1`
- `search.reindex_requested.v1`
- `sprint.created.v1`
- `sprint.started.v1`
- `sprint.completed.v1`
- `sprint.issue_added.v1`
- `sprint.issue_removed.v1`

Track:

- List view loaded.
- Board view loaded.
- Filter applied.
- Board move completed.
- Search query latency.
- Search result clicked.
- Search no-result rate.
- Sprint/cycle created, started, completed.
- Issues committed to sprint/cycle.

## Non-Functional Requirements

- Common filters and board moves should feel responsive for first ICP team sizes.
- Search query latency must be monitored with explicit degradation handling.
- Search index freshness must be observable.
- Realtime updates must reconcile against durable issue state.
- Sprint/cycle operations must be idempotent where retries are likely.

## Acceptance Criteria

- User can view issues in list and board formats.
- User can filter by assignee, status, priority, label, project, team, and sprint/cycle.
- User can sort by updated, created, priority, and due date where present.
- User can move an issue on board and history records the status change.
- User can search permitted workspace context across projects, issues, docs, and comments.
- Search never returns unauthorized resources.
- Team lead can create, start, and complete a basic sprint/cycle.
- Issues can be added to and removed from sprint/cycle.
- Sprint/cycle completion produces a simple summary.

## Dependencies

- Phase 1F teams, projects, and issues.
- Phase 1C authorization and observability.
- Phase 1D realtime foundation.
- Search index infrastructure.
- Event abstraction or outbox-ready publishing.
- Product shell and command palette.

## Test And Validation

- End-to-end tests for list filter, board movement, and sprint/cycle planning.
- Search permission tests for removed members and cross-tenant boundaries.
- Search indexing integration tests for issue, doc, comment, archive, and permission-change events.
- Reindex test from durable source records.
- Accessibility checks for list, board, search, and planning views.
- Load smoke test for first ICP issue volume.

## Rollout Considerations

- Launch list view before board if needed to preserve speed.
- Keep saved views deferred unless default views are insufficient in dogfood.
- Roll out search with reindex tooling and index freshness monitoring before AI search depends on it.
- Keep sprint/cycle naming configurable in copy only after product decision, not as a user setting.

## Open Questions

- Should Phase 1 default to sprint, cycle, or support both labels through workspace preference?
- What is the minimum expected issue volume for first public MVP performance testing?
- Should personal saved filters ship in Phase 1 or wait until repeated usage proves need?
- Which search engine should be selected for the first implementation?

## Exit Criteria

Phase 1G is complete when users can scan, filter, board, search, backlog, and plan work with tenant-safe performance and enough structure for collaboration, GitHub, imports, and AI summaries to depend on the same execution state.
