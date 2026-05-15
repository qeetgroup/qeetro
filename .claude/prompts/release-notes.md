---
type: prompt
name: release-notes
recommended_agents:
  - release-engineering-manager
  - documentation-architect
required_context:
  - ../context/product-vision.md
  - ../context/delivery-standards.md
---

# Release Notes Prompt

## Use When

Use this prompt to produce user-facing and internal release notes.

## Variables

- `RELEASE_VERSION`: Version or release name.
- `DATE`: Release date.
- `CHANGES`: Merged changes, tickets, commits, or summary.
- `KNOWN_ISSUES`: Known issues or limitations.
- `AUDIENCE`: Internal, external, or both.

## Prompt

Write release notes for Qeetro.

Release version:
`RELEASE_VERSION`

Date:
`DATE`

Changes:
`CHANGES`

Known issues:
`KNOWN_ISSUES`

Audience:
`AUDIENCE`

Produce:

- User-facing summary
- New features
- Improvements
- Fixes
- Breaking changes, if any
- Migration or setup notes
- Known issues
- Internal operational notes
- Monitoring or support watch items

Keep user-facing notes clear and benefit-oriented. Keep internal notes specific and operational.

## Expected Output

Release notes ready for review by product, engineering, and support.
