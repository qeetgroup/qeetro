# Phase 1H: Collaboration, Docs, And Activity

Last updated: 2026-05-15

## Phase Summary

Phase 1H gives work context a collaborative layer. Users can comment on issues, mention teammates, receive basic notifications, attach lightweight docs to projects or issues, and understand recent activity without leaving the execution flow.

This phase must avoid becoming a full chat, wiki, or activity-stream product. Collaboration should make work clearer and reduce coordination overhead.

## Product Goal

Enable teams to discuss, document, and understand work in place, with enough notification and activity context to replace lightweight status chasing.

## Business Outcomes

| Outcome                  | Metric                                                      |
| ------------------------ | ----------------------------------------------------------- |
| Reduced coordination     | Comments, mentions, and docs capture context near work      |
| Faster handoffs          | Users can understand issue/project context without meetings |
| Notification trust       | Mention and assignment notifications are useful, not noisy  |
| Search and AI readiness  | Docs and comments are indexed and permission-filtered       |
| Collaboration activation | First comment, mention, or doc occurs during first week     |

## MVP Scope

### In Scope

- Comments on issues.
- Mentions in comments.
- Basic activity feed on issue and project context.
- Notification records for mentions, assignments, role changes, and relevant issue updates.
- Read/unread notification state.
- Lightweight markdown docs tied to project or issue.
- Doc create, edit, view, archive-ready lifecycle.
- Doc search indexing.
- Activity and history integration for issue, comment, doc, and GitHub link events.
- Realtime or refetch-on-event updates for comments and activity.

### Out Of Scope

- Native chat.
- Full wiki hierarchy.
- Collaborative rich-text editor.
- Docs template marketplace.
- Whiteboards.
- Advanced notification routing.
- Weekly digests.
- Slack or Discord notification delivery.
- External guest comments.

## Core Workflows

### Workflow 1: Comment And Mention

#### Entry

User opens an issue and adds a comment.

#### Steps

1. User writes comment.
2. User mentions one or more workspace members.
3. System validates issue access.
4. System creates comment.
5. System records mention targets.
6. System creates notification records for mentioned users according to preferences and access.
7. Issue activity updates for authorized viewers.

#### Completion State

- Comment appears on issue.
- Mentioned users are notified if eligible.
- Comment is searchable and available to AI retrieval only within permissions.

### Workflow 2: Attach Lightweight Doc

#### Entry

User creates a doc from project or issue context.

#### Steps

1. User selects create doc.
2. User enters title and markdown body.
3. System associates doc with project or issue.
4. System validates inherited workspace/project access.
5. System records doc activity and search indexing event.

#### Completion State

- Doc is linked to the project or issue.
- Doc appears in relevant context and search.

### Workflow 3: Review Activity

#### Entry

User opens issue or project activity.

#### Steps

1. System loads activity derived from durable events and history.
2. User sees comments, status changes, assignment changes, doc links, GitHub links, and AI summaries where permitted.
3. User can open the underlying item from activity.

#### Completion State

- User understands recent work context without asking for manual status updates.

## User Stories

| ID         | Persona             | Story                                                                                             | Priority |
| ---------- | ------------------- | ------------------------------------------------------------------------------------------------- | -------- |
| IOW-1H-001 | Software Engineer   | As an engineer, I want to comment on issues so technical context stays attached to work.          | Must     |
| IOW-1H-002 | Product Manager     | As a PM, I want to mention teammates so decisions and questions reach the right people.           | Must     |
| IOW-1H-003 | Engineering Manager | As a manager, I want activity context so I can understand progress without interrupting the team. | Must     |
| IOW-1H-004 | Software Engineer   | As an engineer, I want lightweight docs tied to work so decisions do not disappear in chat.       | Should   |
| IOW-1H-005 | Enterprise Admin    | As an evaluator, I want comments and docs permission-filtered so private work context stays safe. | Must     |
| IOW-1H-006 | AI Agent Owner      | As a future agent owner, I want comments and docs indexed safely for AI summaries and search.     | Should   |

## Functional Requirements

### Comments And Mentions

- Comment has ID, organization ID, workspace ID, target type, target ID, author actor ID, body, lifecycle state, created timestamp, and updated timestamp.
- Comment target for MVP is issue. Project comments may be represented through project activity or deferred unless needed.
- Mentions reference accessible workspace members.
- Mention notifications are created only for users with access to the target.
- Comment edit and archive preserve audit-relevant metadata.

### Docs

- Doc has ID, organization ID, workspace ID, optional project ID, optional issue ID, title, markdown body, author actor ID, lifecycle state, created timestamp, and updated timestamp.
- Doc access inherits workspace and linked project/issue access in MVP.
- Doc can be archived without destroying history or links.
- Doc updates produce search indexing events.

### Activity

- Activity combines durable events, issue history, comments, doc links, GitHub links, import activity, and AI action logs where permitted.
- Activity items include actor, action, target, timestamp, and safe metadata.
- Activity display must not expose resources outside user permissions.

## UX Expectations

- Comment composer should be lightweight and keyboard-friendly.
- Mentions should autocomplete workspace members only.
- Notification copy should identify the source issue/project and action.
- Docs should feel like lightweight execution notes, not a separate knowledge product.
- Activity should be scannable and avoid noisy low-value system events by default.
- Users should be able to move from activity to the underlying issue, comment, doc, or GitHub link.

## Permissions Model

| Action           | Owner/Admin | Workspace Admin | Team Lead | Workspace Member                  |
| ---------------- | ----------- | --------------- | --------- | --------------------------------- |
| Comment on issue | Yes         | Yes             | Yes       | Yes within access                 |
| Edit own comment | Yes         | Yes             | Yes       | Yes                               |
| Archive comment  | Yes         | Yes             | Yes       | Own comment where policy allows   |
| Create doc       | Yes         | Yes             | Yes       | Yes within access                 |
| Edit doc         | Yes         | Yes             | Yes       | Yes where workspace policy allows |
| Archive doc      | Yes         | Yes             | Yes       | Author where policy allows        |
| View activity    | Yes         | Yes             | Yes       | Yes within access                 |

## Events And Analytics

Required events:

- `comment.created.v1`
- `comment.updated.v1`
- `comment.archived.v1`
- `mention.created.v1`
- `doc.created.v1`
- `doc.updated.v1`
- `doc.archived.v1`
- `activity.item_created.v1`
- `notification.read.v1`

Track:

- Comment created.
- Mention created.
- Mention notification opened.
- Doc created.
- Doc linked to project or issue.
- Activity viewed.
- Notification read.
- Notification muted or preference changed.

## Non-Functional Requirements

- Comment and notification creation must be reliable and retry-safe.
- Mention fanout must be idempotent.
- Comment/doc search indexing must not block durable writes.
- Notification eligibility must re-check current permissions before delivery.
- Activity views must paginate and avoid loading unbounded history.

## Acceptance Criteria

- User can comment on an accessible issue.
- User can mention an accessible workspace member in a comment.
- Mention creates a notification only for eligible users.
- User can create and edit a lightweight markdown doc tied to a project or issue.
- Docs and comments are searchable only by authorized users.
- Issue and project activity show meaningful comments, field changes, docs, GitHub links, imports, and AI actions where permitted.
- Removed users stop receiving notifications for affected scopes.
- Realtime or refetch-on-event keeps comments and activity from becoming stale.

## Dependencies

- Phase 1F issue and project model.
- Phase 1G search indexing model.
- Phase 1D notification and realtime foundation.
- Phase 1C authorization and observability.
- Markdown rendering and sanitization approach.

## Test And Validation

- Comment CRUD and mention integration tests.
- Permission tests for comment, doc, activity, notification, and search visibility.
- Tenant isolation tests for comment/doc APIs, events, indexes, and notifications.
- Markdown sanitization tests.
- Notification fanout idempotency tests.
- Accessibility checks for composer, mention picker, notification list, and docs editor.

## Rollout Considerations

- Ship issue comments before docs if sequencing requires focus.
- Keep doc hierarchy flat in Phase 1.
- Use event-backed notification records before adding external delivery channels.
- Monitor notification volume before adding broader issue update notifications.

## Open Questions

- Should project-level comments ship in Phase 1 or should project activity rely on issue/doc comments?
- Should docs support comments in Phase 1 or only issue comments?
- What markdown feature subset should be allowed for first release?
- Should notification center ship as full view or compact inbox inside the product shell?

## Exit Criteria

Phase 1H is complete when teams can discuss and document work in context, mentions and notifications are reliable and permission-aware, and comments/docs/activity are ready for search, AI summaries, GitHub context, and future collaboration depth.
