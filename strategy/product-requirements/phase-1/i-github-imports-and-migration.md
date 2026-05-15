# Phase 1I: GitHub, Imports, And Migration

Last updated: 2026-05-15

## Phase Summary

Phase 1I connects Qeetro execution state to developer workflow signals and gives early teams a credible path to bring existing work into the product. GitHub links should make issues more trustworthy, and imports should reduce adoption friction without becoming a migration-services business.

The MVP should prioritize simple, reliable PR and commit links plus one or more pragmatic import paths. Deep bidirectional sync, CI analytics, and large Jira migrations are deferred.

## Product Goal

Enable teams to connect Qeetro issues to GitHub PRs/commits and import small existing projects safely, with tenant-scoped permissions, idempotent jobs, and clear failure reporting.

## Business Outcomes

| Outcome               | Metric                                                        |
| --------------------- | ------------------------------------------------------------- |
| Developer trust       | PRs or commits linked to Qeetro issues during first week      |
| Adoption acceleration | Small teams import initial work without services help         |
| State confidence      | Linked code signals help explain issue progress               |
| Integration safety    | GitHub access is scoped, auditable, and revocable             |
| Migration quality     | Import preview and error reporting prevent corrupt work state |

## MVP Scope

### In Scope

- GitHub organization or repository connection scoped to Qeetro organization, workspace, or project.
- Integration actor identity for GitHub actions.
- Manual PR and commit URL linking to issues.
- Automatic issue key reference detection from PR title/body/branch/commit message where feasible.
- GitHub webhook readiness for PR opened, updated, closed, merged, and commit pushed events.
- Linked GitHub signal display on issue.
- Integration install, reconnect, and remove flow.
- Import from at least one approved source path: CSV, GitHub Issues, or Linear.
- Import preview with field mapping.
- Import execution as background job with progress, errors, idempotency, and audit.
- Import mapping for title, description, status, assignee, labels, priority, comments where supported, and external source ID.

### Out Of Scope

- Full CI/CD analytics.
- Bidirectional issue sync.
- GitHub workflow automation.
- GitLab integration.
- Slack or Discord integration.
- Jira enterprise migration.
- Multi-source migration orchestration.
- Historical reconstruction of all external activity.
- Customer-managed integration marketplace.

## Core Workflows

### Workflow 1: Connect GitHub Repository

#### Entry

Workspace admin opens integrations from onboarding, project setup, issue context, or settings.

#### Steps

1. User selects GitHub.
2. System starts secure install or authorization flow.
3. User selects organization/repository scope.
4. System creates integration connection with scoped permissions.
5. System creates integration actor and audit event.
6. Connected repositories become available for PR/commit links.

#### Completion State

- GitHub connection exists with explicit tenant scope.
- Installation can be revoked.
- Integration actor is visible in audit-ready records.

### Workflow 2: Link PR Or Commit To Issue

#### Entry

User pastes PR/commit URL into issue or GitHub event references Qeetro issue key.

#### Steps

1. System validates issue access and integration scope.
2. System validates GitHub URL or webhook event.
3. System creates link record with provider, repository, external ID, URL, state, and actor.
4. Issue activity updates.
5. Search and AI context receive link metadata.

#### Completion State

- Issue displays linked PR or commit.
- Activity and summaries can reference code signal.

### Workflow 3: Import Existing Work

#### Entry

Admin starts import from workspace/project setup or migration entry point.

#### Steps

1. User selects import source.
2. User uploads CSV or connects source provider.
3. System parses source data into staging records.
4. User maps fields and previews result.
5. System validates assignee, status, label, and priority mapping.
6. User starts import.
7. Background job creates or updates projects/issues/comments where supported.
8. System reports progress, errors, and completion summary.

#### Completion State

- Imported issues exist in selected project/workspace.
- External source IDs are retained for deduplication.
- Errors are actionable and tenant-safe.

## User Stories

| ID         | Persona             | Story                                                                                                | Priority |
| ---------- | ------------------- | ---------------------------------------------------------------------------------------------------- | -------- |
| IOW-1I-001 | Software Engineer   | As an engineer, I want PRs and commits linked to issues so work state reflects code reality.         | Must     |
| IOW-1I-002 | Engineering Manager | As a manager, I want GitHub signals visible on issues so I can understand progress without chasing.  | Must     |
| IOW-1I-003 | Technical Founder   | As a founder, I want to import existing work so my team can adopt Qeetro without starting empty.     | Must     |
| IOW-1I-004 | Product Manager     | As a PM, I want imported fields mapped clearly so issue state remains understandable.                | Must     |
| IOW-1I-005 | Enterprise Admin    | As an evaluator, I want integration installs and imports scoped and audited so access is controlled. | Must     |
| IOW-1I-006 | Operator            | As an operator, I want import and webhook failures observable so customer onboarding does not stall. | Must     |

## Functional Requirements

### GitHub Integration

- Integration connection has ID, organization ID, optional workspace ID, optional project ID, provider, external installation ID, repository scope, credential reference, installed by, lifecycle state, created timestamp, and updated timestamp.
- Integration actor has actor type and scoped permissions.
- PR/commit link has ID, organization ID, workspace ID, issue ID, provider, repository, external ID, URL, external state, linked by actor, created timestamp, and updated timestamp.
- Webhook handling must verify signature, tenant scope, installation, idempotency, and replay safety.
- Removing integration stops future sync and webhook processing for affected scope.

### Imports

- Import run has ID, organization ID, workspace ID, optional project ID, source type, source reference, initiated by, status, mapping config, counts, error summary, created timestamp, started timestamp, and completed timestamp.
- Import item has source external ID, target entity type, target entity ID where created, status, error reason, and idempotency key.
- Import preview shows counts, field mapping, unsupported fields, and validation errors before execution.
- Import must not create duplicate issues when retried with same source IDs and mapping.
- Import job must be cancelable or safely stoppable before completion where feasible.

## UX Expectations

- GitHub connection should be discoverable from project setup and issue context.
- Linked PR/commit display should be compact and useful, showing title/reference, state, repository, and link.
- Import preview should be plain and confidence-building, not a spreadsheet product.
- Import errors should identify row/source item and fix path without exposing secrets.
- Integrations settings should show connected repositories and revocation action.

## Permissions Model

| Action                    | Owner/Admin | Workspace Admin | Project Admin | Workspace Member        |
| ------------------------- | ----------- | --------------- | ------------- | ----------------------- |
| Install GitHub connection | Yes         | Yes             | Limited       | No                      |
| Remove GitHub connection  | Yes         | Yes             | Limited       | No                      |
| Link PR/commit manually   | Yes         | Yes             | Yes           | Yes within issue access |
| Start import              | Yes         | Yes             | Yes           | No by default           |
| View import result        | Yes         | Yes             | Yes           | Limited to created work |

## Events And Analytics

Required events:

- `github.connection_created.v1`
- `github.connection_removed.v1`
- `github.webhook_received.v1`
- `github.pull_request_linked.v1`
- `github.commit_linked.v1`
- `import.created.v1`
- `import.preview_generated.v1`
- `import.started.v1`
- `import.item_processed.v1`
- `import.completed.v1`
- `import.failed.v1`

Track:

- GitHub connected.
- GitHub connection failed.
- PR linked.
- Commit linked.
- Webhook delivery failure.
- Import source selected.
- Import preview generated.
- Import started.
- Import completed.
- Import failed.
- Imported issue count.
- Import error category.

## Non-Functional Requirements

- GitHub webhook processing must be idempotent and signature-verified.
- Import jobs must be retry-safe and observable.
- Integration credentials must never be logged.
- External IDs must be stored to support deduplication and future migration repair.
- Import and webhook events must include correlation and causation IDs.

## Acceptance Criteria

- Workspace admin can connect a GitHub repository with scoped permissions.
- Integration install and removal produce audit-ready events.
- User can manually link a PR or commit to an accessible issue.
- GitHub webhook handling validates signature and installation scope.
- Linked PR/commit appears on issue and activity.
- Admin can import from at least one approved source path.
- Import preview shows mapping, counts, unsupported fields, and errors.
- Import job creates issues without duplicate creation on retry.
- Import errors are actionable and tenant-safe.
- GitHub and import paths are observable.

## Dependencies

- Phase 1F project and issue model.
- Phase 1H activity and notifications.
- Phase 1C audit, authorization, and observability.
- Background job infrastructure.
- Secure credential storage.
- GitHub app or OAuth decision.
- Import source priority decision.

## Test And Validation

- Integration tests for GitHub install, remove, manual link, webhook signature validation, and idempotency.
- Import fixture tests for valid rows, invalid rows, duplicate source IDs, missing assignees, label mapping, and status mapping.
- Tenant isolation tests for integration credentials, webhook events, import staging, and created issues.
- Background job retry tests.
- Operational alert tests for webhook/import failure rates.

## Rollout Considerations

- Launch manual PR/commit linking before webhook automation if needed.
- Launch one import source first, then add additional source paths after mapping and idempotency prove stable.
- Keep kill switches for webhook processing and import workers.
- Provide support notes for import limitations.

## Open Questions

- Which import source ships first: CSV, GitHub Issues, or Linear?
- Should GitHub connection be organization-wide by default or scoped to workspace/project for MVP?
- Should automatic issue key detection ship with first GitHub release or follow manual linking?
- What field mapping should be required before import execution?

## Exit Criteria

Phase 1I is complete when teams can connect GitHub, link PRs/commits to issues, and import an initial set of existing work safely with scoped permissions, idempotent jobs, useful errors, and operational visibility.
