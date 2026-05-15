# Phase 1F: Teams, Projects, And Issues

Last updated: 2026-05-15

## Phase Summary

Phase 1F turns the workspace substrate into the first daily execution surface. Users can create a team, create a project, capture issues, assign work, prioritize work, label work, move work through status, and preserve issue history without configuring a workflow system.

This phase is where Qeetro must start feeling faster than existing tools. The product should prefer opinionated defaults, keyboard-first creation, inline editing, and clear ownership over custom fields or complex workflow design.

## Product Goal

Enable software teams to create the first team, project, and useful issue workflow quickly enough that Qeetro becomes a daily execution surface during the first session.

## Business Outcomes

| Outcome               | Metric                                                               |
| --------------------- | -------------------------------------------------------------------- |
| First execution value | Median time from workspace creation to first project under 5 minutes |
| Work capture speed    | Median time from project creation to first issue under 5 minutes     |
| Developer adoption    | Engineers create or update issues without admin assistance           |
| Project clarity       | Projects have clear ownership, status, and issue context             |
| Data foundation       | Issues can support comments, docs, GitHub links, search, and AI      |

## MVP Scope

### In Scope

- Team creation inside a workspace.
- Team membership derived from workspace membership.
- Team lead role or team ownership marker.
- Project creation inside a workspace, optionally owned by a team.
- Project key generation and uniqueness inside workspace.
- Project status with opinionated defaults.
- Project archive-ready lifecycle.
- Issue creation, edit, assignment, status movement, priority, type, labels, estimate-ready field, and due-date-ready field.
- Issue reporter, creator, assignee, and actor attribution.
- Default issue types: task, bug, story, and subtask.
- Epic represented as a project-level grouping or deferred roadmap item unless implementation chooses a simple parent issue pattern.
- Issue history for important changes.
- Issue archive or soft delete behavior.
- Product analytics for project and issue activation.

### Out Of Scope

- Custom fields.
- Custom workflow builder.
- Arbitrary transition rules.
- Cross-workspace projects.
- Guest project access.
- Advanced project templates.
- Portfolio roadmap management.
- Gantt, timeline, or calendar planning.
- Individual developer productivity scoring.

## Core Workflows

### Workflow 1: Create Team

#### Entry

Workspace admin opens the team creation action from workspace setup, command palette, settings, or project creation.

#### Steps

1. User enters team name.
2. System generates team key or slug.
3. User optionally selects team lead from workspace members.
4. System creates team inside workspace.
5. Team becomes available for project ownership and issue filtering.

#### Completion State

- Team exists inside exactly one workspace.
- Team has a lifecycle state and optional lead.
- Team is visible to authorized workspace members.

### Workflow 2: Create Project

#### Entry

User selects create project from workspace home, command palette, empty state, or team page.

#### Steps

1. User enters project name.
2. System generates project key.
3. User optionally selects owning team.
4. System creates project with default status and visibility.
5. User lands in project issue view with an empty state that encourages first issue creation.

#### Completion State

- Project belongs to one organization and one workspace.
- Project optionally belongs to one team.
- Project has a key, status, owner context, lifecycle state, and activity foundation.

### Workflow 3: Create And Manage Issue

#### Entry

User opens quick create, command palette, project empty state, list view, or board view.

#### Steps

1. User enters title.
2. User optionally enters description, assignee, priority, type, labels, estimate, due date, and parent.
3. System applies default status and project/team context.
4. System creates issue and records creator/reporter.
5. User or teammate edits fields inline.
6. System records history for status, assignee, priority, label, project, sprint/cycle, and parent changes.

#### Completion State

- Issue is visible in project, team, list, board, search, and backlog contexts according to permissions.
- Issue history and events are available for activity, notifications, analytics, search, and AI.

## User Stories

| ID         | Persona             | Story                                                                                                      | Priority |
| ---------- | ------------------- | ---------------------------------------------------------------------------------------------------------- | -------- |
| IOW-1F-001 | Technical Founder   | As a founder, I want to create the first project quickly so my team can track real work immediately.       | Must     |
| IOW-1F-002 | Engineering Manager | As a manager, I want teams to own projects and issue queues so execution responsibility is clear.          | Must     |
| IOW-1F-003 | Product Manager     | As a PM, I want to capture issues with priority, labels, and status so product intent becomes trackable.   | Must     |
| IOW-1F-004 | Software Engineer   | As an engineer, I want fast issue creation and inline edits so updating work does not interrupt flow.      | Must     |
| IOW-1F-005 | Software Engineer   | As an engineer, I want issue history so I can understand what changed without asking teammates.            | Should   |
| IOW-1F-006 | Enterprise Admin    | As an evaluator, I want project and issue actions scoped to tenants and audit-ready for sensitive changes. | Must     |

## Functional Requirements

### Team

- Team has ID, organization ID, workspace ID, name, key or slug, lifecycle state, optional lead, created timestamp, and updated timestamp.
- Team key is unique inside workspace.
- Team membership must not grant access beyond workspace membership in MVP.
- Team can be used as default owner for projects and default filter for issues.

### Project

- Project has ID, organization ID, workspace ID, optional team ID, name, key, status, lifecycle state, description-ready field, created by, created timestamp, and updated timestamp.
- Project key is unique inside workspace.
- Project status defaults should be simple: planned, active, paused, done, archived.
- Project archive hides project from default active views without destroying history.
- Project access inherits workspace access in MVP.

### Issue

- Issue has ID, organization ID, workspace ID, project ID, optional team ID, optional parent issue ID, title, description, status, status category, priority, type, assignee, reporter, creator, labels, estimate-ready field, due-date-ready field, lifecycle state, created timestamp, and updated timestamp.
- Required fields for issue creation are title and project.
- Default status category is backlog or todo based on project configuration default.
- Default priorities are no priority, low, medium, high, urgent.
- Default types are task, bug, story, and subtask.
- Issue history records meaningful field changes with actor, timestamp, previous value, new value, and correlation ID.
- Issue archive or soft delete preserves history and audit-sensitive references.

## UX Expectations

- Quick create must work from global command palette and project context.
- Required issue fields must stay minimal.
- Inline editing should support title, status, assignee, priority, label, and project where permission allows.
- Empty states should drive users to create first issue, invite teammates, connect GitHub, or ask AI for a draft when appropriate.
- Issue pages should prioritize title, status, assignee, priority, description, comments, linked docs, linked GitHub signals, and history.
- Team, project, and issue labels must be plain and avoid methodology jargon unless useful.

## Permissions Model

| Action          | Owner/Admin | Workspace Admin | Team Lead | Workspace Member                        |
| --------------- | ----------- | --------------- | --------- | --------------------------------------- |
| Create team     | Yes         | Yes             | No        | No                                      |
| Update team     | Yes         | Yes             | Limited   | No                                      |
| Create project  | Yes         | Yes             | Yes       | Yes                                     |
| Archive project | Yes         | Yes             | Yes owned | No                                      |
| Create issue    | Yes         | Yes             | Yes       | Yes                                     |
| Edit issue      | Yes         | Yes             | Yes       | Yes                                     |
| Assign issue    | Yes         | Yes             | Yes       | Yes                                     |
| Archive issue   | Yes         | Yes             | Yes       | Creator or assignee where policy allows |
| View history    | Yes         | Yes             | Yes       | Yes within accessible workspace         |

Permission guardrails:

- Workspace access is required before project or issue access.
- Project and issue existence must not leak outside workspace permission.
- Future project-specific sharing cannot weaken tenant checks.
- Integration and AI actors may only modify issues through explicit scoped permissions.

## Events And Analytics

Required events:

- `team.created.v1`
- `team.updated.v1`
- `project.created.v1`
- `project.updated.v1`
- `project.archived.v1`
- `issue.created.v1`
- `issue.updated.v1`
- `issue.status_changed.v1`
- `issue.assigned.v1`
- `issue.priority_changed.v1`
- `issue.label_changed.v1`
- `issue.archived.v1`

Track:

- Team created.
- Project created.
- First project created after workspace creation.
- First issue created after project creation.
- Issue created by source: UI, command palette, import, GitHub, AI suggestion.
- Issue edit latency.
- Issue status movement.
- Issue assignment.
- Project archive.

## Non-Functional Requirements

- Common issue create, edit, assign, status move, and label operations should feel instant.
- List and board consumers must be able to update from durable state and realtime events.
- Issue history writes must be reliable for meaningful changes.
- Project and issue records must include explicit tenant and workspace scope.
- Issue mutation APIs should support idempotency keys where client retries are likely.

## Acceptance Criteria

- Workspace admin can create a team.
- Workspace member can create a project where policy allows.
- Project has workspace scope, key, owner context, status, and lifecycle state.
- User can create an issue with only title and project.
- User can assign, prioritize, label, edit, and move an issue.
- Issue history records meaningful changes.
- Project and issue access is denied outside authorized organization and workspace scope.
- Project and issue events are available for search, realtime, notifications, analytics, and AI workflows.
- Archived project or issue is removed from default active views without destroying history.

## Dependencies

- Phase 1A workspace and tenant foundation.
- Phase 1B membership model.
- Phase 1C authorization and audit foundations.
- Phase 1D realtime and notification foundations.
- Phase 1E domain contract approval.
- Product shell navigation and command palette foundation.

## Test And Validation

- Unit tests for default status, priority, type, and lifecycle rules.
- API integration tests for team, project, and issue CRUD.
- Permission matrix tests for workspace admin, team lead, member, integration actor, and AI actor.
- Tenant isolation tests for project and issue reads, writes, events, search documents, and analytics payloads.
- End-to-end test for workspace to project to first issue.
- Accessibility checks for quick create, issue editor, and inline fields.

## Rollout Considerations

- Release behind workspace-level feature flag if app shell and identity are still stabilizing.
- Start with opinionated default statuses and types.
- Keep project archive reversible during early testing.
- Add import and AI-created issue sources only after human-created issue flow is stable.

## Open Questions

- Should MVP use sprint or cycle language by default?
- Should epics be a first-class MVP issue type or represented by projects until Phase 2?
- Should any workspace member create projects by default, or should project creation be limited to admins/team leads?
- Which issue fields are required for first release beyond title and project?

## Exit Criteria

Phase 1F is complete when teams can create projects and issues quickly, issue ownership and status are clear, issue history is preserved, and the data/events are ready for views, search, planning, collaboration, GitHub, imports, and AI.
