---
type: workflow
name: release-management
primary_agents:
  - release-engineering-manager
  - qa-reliability-engineer
  - documentation-architect
  - observability-reliability-architect
required_context:
  - ../context/delivery-standards.md
  - ../context/engineering-principles.md
related_prompts:
  - ../prompts/release-notes.md
  - ../prompts/qa-test-plan.md
---

# Release Management Workflow

## Purpose

Prepare, validate, ship, and monitor a Qeetro release.

## Entry Criteria

- Release candidate or merge set is identified.
- Target release date or milestone is known.
- Scope is reasonably stable.

## Steps

1. Confirm release scope.
2. Identify user-facing changes.
3. Identify migrations and operational changes.
4. Review feature flags and rollout controls.
5. Run automated test suite.
6. Run release-focused QA.
7. Review observability and alert readiness.
8. Prepare release notes.
9. Confirm rollback or mitigation plan.
10. Ship release.
11. Monitor post-release metrics.
12. Capture follow-up work.

## Release Readiness Checklist

- [ ] Scope confirmed
- [ ] Tests passing
- [ ] Migrations reviewed
- [ ] Rollback plan known
- [ ] Feature flags configured
- [ ] Observability dashboards ready
- [ ] Alerts reviewed
- [ ] Release notes drafted
- [ ] Support notes prepared
- [ ] Known issues documented

## Post-Release Monitoring

Watch:

- Error rate
- API latency
- Realtime connection health
- Queue depth
- Database saturation
- Search indexing lag
- AI provider errors/cost if AI features changed
- User reports

## Exit Criteria

- Release is deployed.
- Health checks are normal.
- Known issues are tracked.
- Release notes are published or handed off.
- Follow-up tasks are created.
