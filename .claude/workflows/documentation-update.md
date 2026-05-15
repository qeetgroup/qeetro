---
type: workflow
name: documentation-update
primary_agents:
  - documentation-architect
  - product-manager
  - system-architect
required_context:
  - ../context/product-vision.md
  - ../context/engineering-principles.md
  - ../context/delivery-standards.md
---

# Documentation Update Workflow

## Purpose

Keep Qeetro documentation accurate as product, architecture, and implementation change.

## Use For

- Product behavior changes
- Architecture decisions
- Setup changes
- Workflow changes
- Prompt or agent improvements
- Release documentation

## Steps

1. Identify what changed.
2. Identify the audience.
3. Find affected docs.
4. Update source-of-truth context first when durable facts changed.
5. Update workflow docs when a repeated process changed.
6. Update prompt docs when a reusable AI task changed.
7. Update README or user docs when setup or usage changed.
8. Remove stale statements.
9. Verify links and references.
10. Note open documentation gaps.

## Documentation Ownership

- Product truths: `.claude/context/product-vision.md`
- Architecture truths: `.claude/context/architecture.md`
- Engineering standards: `.claude/context/engineering-principles.md`
- Tech choices: `.claude/context/tech-stack.md`
- Domain model: `.claude/context/domain-model.md`
- Delivery process: `.claude/context/delivery-standards.md`
- Reusable AI tasks: `.claude/prompts/`
- Repeatable procedures: `.claude/workflows/`

## Quality Checklist

- [ ] Current repository reality is accurate
- [ ] Future plans are labeled as target state
- [ ] Stale guidance removed
- [ ] Links work
- [ ] Markdown renders cleanly
- [ ] User-facing docs are concise
- [ ] Internal docs include enough operational detail
