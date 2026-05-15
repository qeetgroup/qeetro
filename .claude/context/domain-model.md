# Qeetro - Domain Model Context

## Purpose

This file defines the first-pass product domain model. Use it when designing schemas, APIs, permissions, events, and workflows.

## Tenant Hierarchy

```text
Organization
  Workspace
    Team
    Project
      Issue
      Sprint
      Roadmap Item
      Doc Page
      Automation Rule
```

## Core Entities

### Organization

Top-level tenant and billing/governance boundary.

Key relationships:

- Has many workspaces
- Has many members
- Owns billing, audit, SSO, and enterprise settings

### Workspace

Operational space inside an organization.

Key relationships:

- Belongs to one organization
- Has teams and projects
- Defines workspace-level settings and defaults

### User

Human account identity.

Key relationships:

- Can belong to many organizations through memberships
- Can be assigned to issues
- Can author comments, docs, and changes

### Membership

Connects a user to an organization or workspace.

Expected properties:

- Role
- Status
- Joined date
- Invitation metadata

### Team

Group of users responsible for work.

Key relationships:

- Belongs to a workspace
- Owns projects or issue queues
- Has members

### Project

Container for related work.

Expected properties:

- Name
- Key
- Status
- Visibility
- Workflow configuration
- Default assignee/team

### Issue

Primary work item.

Expected properties:

- Title
- Description
- Status
- Priority
- Type
- Assignee
- Reporter
- Labels
- Due date
- Estimate
- Parent issue
- Project
- Sprint

Issue types:

- Epic
- Story
- Task
- Bug
- Subtask

### Sprint

Timeboxed planning and delivery unit.

Expected properties:

- Name
- Goal
- Start date
- End date
- Status
- Capacity
- Committed issues

### Roadmap Item

Planning artifact for future product direction.

Expected properties:

- Title
- Time horizon
- Confidence
- Linked projects/issues
- Owner
- Status

### Doc Page

Collaborative documentation object.

Expected properties:

- Title
- Markdown or rich text body
- Parent page
- Workspace/project scope
- Author
- Version metadata

### Comment

Conversation attached to domain objects.

Expected properties:

- Body
- Author
- Target object type
- Target object ID
- Mentions
- Created/updated timestamps

### Automation Rule

User-defined workflow rule.

Expected properties:

- Trigger
- Conditions
- Actions
- Enabled status
- Scope
- Actor model
- Last run status

### Integration Connection

Connection to an external service.

Expected properties:

- Provider
- Scope
- Credentials reference
- Installed by
- Permissions
- Webhook configuration

## Common Domain Events

- `organization.created.v1`
- `workspace.created.v1`
- `project.created.v1`
- `issue.created.v1`
- `issue.updated.v1`
- `issue.status_changed.v1`
- `issue.assigned.v1`
- `comment.created.v1`
- `sprint.created.v1`
- `sprint.started.v1`
- `sprint.completed.v1`
- `doc.created.v1`
- `doc.updated.v1`
- `automation.rule_created.v1`
- `automation.rule_triggered.v1`
- `integration.connected.v1`

## Permission Scopes

Recommended scopes:

- Organization owner
- Organization admin
- Workspace admin
- Team lead
- Project admin
- Member
- Guest/viewer
- Integration actor
- Automation actor

Permission checks should consider:

- Tenant boundary
- Workspace membership
- Project visibility
- Role
- Object ownership
- Integration/automation actor permissions

## Audit Events

Audit logs should be created for:

- Role changes
- Invitations
- SSO changes
- Integration installs/removals
- Automation rule changes
- Bulk issue updates
- Data exports
- AI-assisted bulk actions
- Permission changes
- Billing/admin changes

## Modeling Guidelines

- Use stable IDs for all persisted entities.
- Include tenant identifiers on tenant-owned rows.
- Avoid deriving tenant scope through long joins in authorization-critical paths.
- Keep workflow statuses configurable per project, but map them to platform-level categories.
- Keep issue history append-only where auditability matters.
- Treat AI-generated content as attributed content with generation metadata.
