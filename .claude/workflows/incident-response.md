---
type: workflow
name: incident-response
primary_agents:
  - observability-reliability-architect
  - security-architect
  - release-engineering-manager
  - backend-architect
required_context:
  - ../context/engineering-principles.md
  - ../context/delivery-standards.md
---

# Incident Response Workflow

## Purpose

Provide a clear response process for production incidents.

## Incident Priorities

P0:

- Complete outage
- Data loss
- Cross-tenant exposure
- Active security compromise

P1:

- Major workflow unavailable
- Severe performance degradation
- High-volume job or event failure

P2:

- Partial degradation
- Important integration failure
- Limited user impact

P3:

- Minor issue with workaround
- Low impact operational problem

## Steps

1. Declare the incident and priority.
2. Assign incident lead.
3. Stabilize the system.
4. Preserve logs and evidence.
5. Identify customer and tenant impact.
6. Communicate status.
7. Mitigate or roll back.
8. Verify recovery.
9. Monitor for recurrence.
10. Write a post-incident review when impact is meaningful.
11. Track follow-up prevention work.

## Communication Template

```md
Status: Investigating | Mitigating | Monitoring | Resolved
Priority: P0 | P1 | P2 | P3
Started:
Impact:
Current action:
Next update:
Owner:
```

## Post-Incident Review Template

```md
# Incident Review: <Title>

## Summary

## Impact

## Timeline

## Root Cause

## What Worked

## What Did Not Work

## Action Items

## Prevention
```

## Checklist

- [ ] Incident declared
- [ ] Lead assigned
- [ ] Impact assessed
- [ ] Evidence preserved
- [ ] Mitigation started
- [ ] Status communicated
- [ ] Recovery verified
- [ ] Follow-up issues created
- [ ] Review completed if needed
