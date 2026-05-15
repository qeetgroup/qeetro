# Phase 1J: AI Execution Intelligence

Last updated: 2026-05-15

## Phase Summary

Phase 1J delivers the first governed AI workflows in Qeetro: issue drafting, issue and project summaries, workspace search or question answering, source-backed outputs, AI action logs, and basic AI controls. This phase proves that AI reduces coordination work while respecting permissions, tenant boundaries, evidence, and human accountability.

AI in Phase 1 should be embedded into execution surfaces, not presented as a generic chatbot. The product should make AI useful, inspectable, conservative, and easy to disable or control.

## Product Goal

Enable users to draft, summarize, and search work context with AI in ways that are source-backed, permission-aware, logged, observable, and useful in the first week of adoption.

## Business Outcomes

| Outcome                | Metric                                                                |
| ---------------------- | --------------------------------------------------------------------- |
| Coordination reduction | Users accept or lightly edit AI drafts and summaries                  |
| Search time reduction  | Users find answers from permitted workspace context faster            |
| AI trust               | Outputs include sources and action logs                               |
| Governance confidence  | AI respects permissions, enablement controls, and approval boundaries |
| Quality discipline     | AI workflows have evaluation fixtures, fallback behavior, and metrics |

## MVP Scope

### In Scope

- AI-assisted issue drafting from short prompt, doc, comment thread, or rough notes.
- Issue refinement suggestions for title, description, labels, priority, and acceptance criteria.
- Issue, project, thread, or sprint/cycle summary where source context is available.
- Workspace semantic search or question answering over permitted projects, issues, docs, comments, and GitHub link metadata.
- Source-backed answers for factual claims.
- Permission-aware retrieval across search and vector indexes.
- AI action log for summaries, suggestions, drafts, and generated changes.
- Basic organization or workspace AI enable/disable control.
- Basic data-use and approval boundary representation.
- Agent identity placeholders for future first-party and customer-created agents.
- Evaluation fixtures for issue drafting, summarization, and workspace search.
- AI latency, error, cost-ready, correction, and acceptance metrics.

### Out Of Scope

- Fully autonomous agents.
- Public agent marketplace.
- Chat-first assistant as the primary product surface.
- AI performing destructive actions without approval.
- Bulk issue edits by AI without explicit confirmation.
- Custom prompt builder.
- Model marketplace.
- Fine-tuning on customer data.
- Individual developer scoring.

## Core Workflows

### Workflow 1: Draft Issue With AI

#### Entry

User opens quick create or project issue creation and chooses AI draft or paste rough notes.

#### Steps

1. User provides brief intent or selects source context.
2. System validates AI is enabled for organization/workspace.
3. System retrieves only permitted context.
4. AI drafts issue title, description, suggested type, labels, priority, and acceptance criteria.
5. User reviews, edits, accepts, or rejects.
6. System creates issue only after user confirmation.
7. AI action log records workflow, actor, target, sources, output state, approval state, and safe model metadata.

#### Completion State

- User has a created or refined issue.
- AI output is attributable, inspectable, and measured.

### Workflow 2: Summarize Work Context

#### Entry

User opens issue, project, sprint/cycle, or thread summary action.

#### Steps

1. System resolves target and actor permissions.
2. System retrieves relevant permitted source context.
3. AI generates concise summary with source references.
4. User can copy, use in update, or dismiss.
5. Action log and metrics are recorded.

#### Completion State

- User receives a source-backed summary that reduces manual status writing.

### Workflow 3: Ask Workspace Question

#### Entry

User searches or asks a question from workspace search.

#### Steps

1. User enters natural language query.
2. System filters retrieval by effective actor permissions.
3. AI returns answer with source links and uncertainty handling.
4. User opens sources or refines question.
5. System logs safe search and AI metadata.

#### Completion State

- User can inspect the evidence behind the answer.
- No unauthorized context is retrieved or shown.

## User Stories

| ID         | Persona             | Story                                                                                                  | Priority |
| ---------- | ------------------- | ------------------------------------------------------------------------------------------------------ | -------- |
| IOW-1J-001 | Product Manager     | As a PM, I want AI to draft issues from rough notes so I can capture work faster.                      | Must     |
| IOW-1J-002 | Engineering Manager | As a manager, I want AI to summarize project or sprint state so status updates take less time.         | Must     |
| IOW-1J-003 | Software Engineer   | As an engineer, I want AI answers to cite sources so I can trust or correct them quickly.              | Must     |
| IOW-1J-004 | Security Reviewer   | As a reviewer, I want AI retrieval permission-filtered so private context never leaks.                 | Must     |
| IOW-1J-005 | Enterprise Admin    | As an admin, I want AI enable/disable and action logs so usage is governable.                          | Must     |
| IOW-1J-006 | AI Agent Owner      | As a future agent owner, I want agent identity placeholders so later agent actions can be accountable. | Should   |

## Functional Requirements

### AI Controls

- Organization or workspace has AI enablement state.
- AI workflows check enablement before execution.
- Data-use control placeholder exists for future policy expansion.
- High-impact AI actions require explicit user approval and are blocked if approval model is not implemented.

### Retrieval

- Retrieval uses organization, workspace, and effective actor permissions.
- Retrieval sources include permitted projects, issues, comments, docs, sprint/cycle summaries, and GitHub link metadata.
- Retrieval excludes archived or deleted content according to visibility policy.
- Removed users lose AI retrieval access immediately or at next permission refresh.
- Prompt and retrieval payloads must not include inaccessible context.

### AI Outputs

- Drafted issues are suggestions until user accepts.
- Summaries and answers must include source references for factual claims.
- Outputs should show uncertainty or insufficient context rather than inventing details.
- AI-created or AI-assisted content stores generation metadata where useful.

### AI Action Log

- AI action log includes event ID, organization ID, workspace ID, actor ID, actor type, workflow type, target type, target ID, source references, prompt template/version where applicable, timestamp, output state, approval state, and safe model metadata.
- Logs must exclude raw secrets and sensitive provider payloads.
- Logs must be available for future audit UI and quality review.

### Agent Identity Placeholder

- Actor model reserves service and AI actor categories.
- Future agent identity can include owner, purpose, permission scope, lifecycle state, autonomy level, and audit trail.
- No autonomous agent action ships in Phase 1.

## UX Expectations

- AI entry points appear inside issue creation, summaries, and search, not as a separate novelty surface.
- Users can accept, edit, reject, or inspect AI output.
- Source references are visible and openable.
- AI unavailable states should degrade gracefully to normal manual workflow.
- AI controls should be understandable without prompt-engineering knowledge.
- AI should not interrupt common workflows with unnecessary suggestions.

## Permissions Model

| Action                  | Owner/Admin | Workspace Admin         | Team Lead | Workspace Member                 |
| ----------------------- | ----------- | ----------------------- | --------- | -------------------------------- |
| Enable/disable AI       | Yes         | Yes where policy allows | No        | No                               |
| Draft issue with AI     | Yes         | Yes                     | Yes       | Yes where issue creation allowed |
| Summarize issue/project | Yes         | Yes                     | Yes       | Yes within access                |
| Ask workspace question  | Yes         | Yes                     | Yes       | Yes within access                |
| View AI action log      | Yes         | Yes for workspace scope | Limited   | Own-visible actions only         |

## Events And Analytics

Required events:

- `ai.workflow_requested.v1`
- `ai.retrieval_performed.v1`
- `ai.issue_draft_generated.v1`
- `ai.summary_generated.v1`
- `ai.answer_generated.v1`
- `ai.output_accepted.v1`
- `ai.output_rejected.v1`
- `ai.output_edited.v1`
- `ai.action_logged.v1`
- `ai.workflow_failed.v1`
- `ai.setting_changed.v1`

Track:

- AI draft requested.
- AI draft accepted, edited, or rejected.
- AI summary requested.
- AI answer source opened.
- AI permission denial.
- AI provider failure.
- AI latency.
- AI cost-ready metric.
- AI correction or feedback rate.
- Evaluation pass/fail by fixture.

## Non-Functional Requirements

- AI workflows must be observable for latency, failures, cost-ready metadata, and quality feedback.
- AI requests must have timeout and fallback behavior.
- Provider failure must not block manual issue, search, or summary workflows.
- Evaluation fixtures must run before meaningful AI workflow release.
- Prompt templates and structured outputs should be versioned or version-ready.
- Tenant isolation and permission filtering are release-blocking for AI retrieval.

## Acceptance Criteria

- User can generate an AI issue draft and create an issue only after reviewing or accepting it.
- User can generate an issue, project, thread, or sprint/cycle summary with source references where context exists.
- User can ask a workspace question and receive only permitted sources.
- AI retrieval never crosses organization, workspace, or effective permission boundaries.
- AI action log records workflow, actor, target, sources, output state, approval state, timestamp, and safe model metadata.
- AI can be disabled at organization or workspace scope.
- High-impact AI actions are blocked or require explicit confirmation.
- AI provider failure degrades gracefully.
- Evaluation fixtures exist for issue drafting, summarization, and workspace search.

## Dependencies

- Phase 1F issue and project model.
- Phase 1G search indexing and permission-filtered retrieval.
- Phase 1H comments, docs, and activity.
- Phase 1I GitHub link metadata.
- Phase 1C audit and observability foundation.
- Model gateway and retrieval architecture decision.
- AI policy and data-use control decision.

## Test And Validation

- Permission-filtered retrieval tests across org, workspace, project, issue, doc, comment, and removed-member scenarios.
- AI workflow contract tests for structured issue draft and summary output.
- Evaluation fixtures for accepted issue draft, rejected hallucinated summary, and no-answer search scenario.
- Provider timeout and fallback tests.
- AI action log completeness tests.
- Prompt injection and source-boundary tests for docs/comments.

## Rollout Considerations

- Ship AI features behind explicit enablement.
- Start with issue drafting and summaries before broader workspace Q&A if retrieval maturity is not ready.
- Keep autonomous actions disabled.
- Provide operational kill switch for AI provider, retrieval, and generated issue creation.
- Monitor acceptance/edit/rejection rates before adding new AI surfaces.

## Open Questions

- Which model gateway abstraction should be selected for MVP?
- What minimum source citation UX is required for trust in Phase 1?
- Should AI enablement default on for small self-serve teams or require explicit workspace admin opt-in?
- What customer data-use language is required before private beta?

## Exit Criteria

Phase 1J is complete when AI can draft, summarize, and search work context with permission-safe retrieval, visible sources, action logs, controls, fallback behavior, evaluation fixtures, and no autonomous high-impact actions.
