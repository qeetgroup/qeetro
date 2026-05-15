---
type: workflow
name: bug-triage
primary_agents:
  - qa-reliability-engineer
  - product-manager
  - backend-architect
  - frontend-architect
required_context:
  - ../context/product-vision.md
  - ../context/engineering-principles.md
  - ../context/delivery-standards.md
related_prompts:
  - ../prompts/implementation-plan.md
  - ../prompts/qa-test-plan.md
---

# Bug Triage Workflow

## Purpose

Classify, reproduce, prioritize, fix, and verify defects.

## Entry Criteria

- Bug report, failed test, user report, log signal, or incident follow-up exists.

## Steps

1. Capture the symptom.
2. Identify affected users, tenants, workflows, and environments.
3. Reproduce the issue or identify why reproduction is blocked.
4. Classify severity and priority.
5. Identify likely owner/domain.
6. Check for security, tenant isolation, data loss, or availability impact.
7. Create a fix plan.
8. Add regression coverage.
9. Verify the fix.
10. Update docs or workflows if the bug exposed a process gap.

## Severity Guide

Critical:

- Data loss
- Cross-tenant data exposure
- Security bypass
- Production outage
- Broken core workflow for many users

High:

- Broken important workflow
- Incorrect permissions
- Significant realtime or sync failure
- Major performance degradation

Medium:

- Partial workflow failure
- Confusing UI state
- Non-critical integration failure

Low:

- Cosmetic issue
- Minor copy issue
- Non-blocking edge case

## Required Bug Report Fields

- Summary
- Environment
- Steps to reproduce
- Expected result
- Actual result
- Impact
- Severity
- Suspected area
- Logs/screenshots if available
- Regression test plan

## Checklist

- [ ] Impact assessed
- [ ] Severity assigned
- [ ] Reproduction attempted
- [ ] Owner identified
- [ ] Security/tenant risk checked
- [ ] Fix plan created
- [ ] Regression test added
- [ ] Fix verified
- [ ] Follow-up docs/process updated if needed
