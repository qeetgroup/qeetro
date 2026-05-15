---
type: workflow
name: feature-delivery
primary_agents:
  - product-manager
  - system-architect
  - frontend-architect
  - backend-architect
  - qa-reliability-engineer
required_context:
  - ../context/product-vision.md
  - ../context/architecture.md
  - ../context/domain-model.md
  - ../context/delivery-standards.md
related_prompts:
  - ../prompts/product-requirements.md
  - ../prompts/feature-planning.md
  - ../prompts/implementation-plan.md
  - ../prompts/qa-test-plan.md
---

# Feature Delivery Workflow

## Purpose

Move a feature from idea to release-ready implementation.

## Entry Criteria

- Feature idea or request exists.
- Target user and problem are known or discoverable.
- Product owner can accept or reject scope.

## Steps

1. Define the product problem.
2. Create or update the PRD using `product-requirements.md`.
3. Review domain impact using `domain-model.md`.
4. Review architecture impact using `architecture.md`.
5. Create a delivery plan using `feature-planning.md`.
6. Break the work into implementation issues if needed.
7. Create an implementation plan for each issue.
8. Implement in small, reviewable changes.
9. Add tests and observability.
10. Run QA using `qa-test-plan.md`.
11. Update documentation.
12. Prepare release notes if user-facing behavior changed.

## Quality Gates

Do not proceed to implementation until:

- Goals and non-goals are clear.
- Domain ownership is clear.
- Permission and tenant boundaries are defined.
- Data model changes are understood.
- Release risk is understood.

Do not release until:

- Acceptance criteria pass.
- Tests cover the risky paths.
- Observability exists for important workflows.
- Documentation is updated.
- Rollback or mitigation is known.

## Handoff Outputs

- PRD or feature spec
- Delivery plan
- Issue breakdown
- Implementation notes
- Test plan
- Release notes

## Checklist

- [ ] Product problem defined
- [ ] PRD complete
- [ ] Architecture reviewed
- [ ] Data model reviewed
- [ ] Permissions reviewed
- [ ] Work broken into issues
- [ ] Implementation complete
- [ ] Tests complete
- [ ] Observability complete
- [ ] Docs updated
- [ ] Release readiness confirmed
