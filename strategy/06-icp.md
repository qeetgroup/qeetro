# Ideal Customer Profiles (ICP)

This document defines, in operational detail, who Qeetro is for. It is the source of truth for marketing targeting, sales qualification, product prioritization, customer success focus, and partnership selection.

ICPs are described in tiers, in the sequence we pursue them. We do not skip tiers. Pursuing later tiers before mastering earlier ones is the most common cause of go-to-market failure in enterprise software.

---

## ICP Tier 1: The Wedge — AI-Native Scale-Ups (Years 0–2)

### Firmographics

- **Company type:** AI-native software companies, modern SaaS scale-ups, dev-tool companies, infrastructure companies, fintech and vertical SaaS with strong engineering cultures.
- **Headcount:** 50–500 employees, of which 30–80% are technical (engineering, design, PM, devrel, data).
- **Engineering team size:** 10–200 engineers.
- **Stage:** Series A through Series C. Revenue $1M–$100M ARR.
- **Geography:** Concentrated in SF, NYC, London, Berlin, Amsterdam, Stockholm, Tel Aviv, Toronto, Sydney, Singapore.
- **Funding posture:** Well-capitalized, growth-mode, willing to invest in tooling that improves velocity.
- **Tech stack signals:** Modern monorepo or polyrepo with strong CI/CD, GitHub or GitLab, Slack, Linear or GitHub Projects today, Notion for docs, Figma for design, Vercel/Cloudflare/AWS, modern observability (Datadog, Honeycomb).

### Current state (the pain)

- Currently on **Linear** (most common) or **GitHub Projects + Notion + Slack** (second most common).
- Have actively rejected Jira at some point in their history. Will not reconsider.
- Hitting the seams of the current stack: roadmap visibility is poor, cross-team coordination is breaking down, status synthesis takes hours per week per manager, AI is being used ad-hoc and inconsistently.
- The CEO/CTO is reading every "AI changes everything" essay and wants their tooling to reflect the future they believe in.
- Engineers are frustrated with status meetings, sprint planning theater, and the volume of tickets they have to update manually.

### Buying triggers

- A scaling event: 50 → 100 engineers, 100 → 250 engineers.
- A reorg: a new VPE or CTO is hired and reassesses the toolchain.
- An AI strategy moment: leadership commits publicly to "becoming an AI-native company" and the toolchain is audited.
- A pain event: a missed release, a coordination failure that becomes visible to executives, a Linear/Notion outage, a Jira mandate from a parent company.
- An ecosystem signal: a respected peer company adopts Qeetro and writes about it.

### Buyer

- **Economic buyer:** VP of Engineering or CTO. Sometimes Head of Product.
- **Champion:** Senior engineering manager, staff engineer, or director-of-engineering type. Lives in the tools daily.
- **Influencers:** Engineers (veto power), designers, PMs.
- **Procurement:** Lightweight. Often <2 weeks for sub-$100K deals. Self-serve possible up to ~$25K ACV.

### Sales motion

- **Primarily product-led.** Free tier or trial. First-touch is product, not sales.
- **Sales engages** at ~25 seats or when the customer signals enterprise needs (SSO, audit, security review).
- **Cycle:** 2–8 weeks from first touch to close.
- **ACV:** $10K–$250K depending on seat count and tier.

### Success criteria

- Time-to-first-value under 5 minutes for the first user.
- Team-wide adoption (not just champion's team) within 30 days.
- Measurable reduction in status-meeting time within 60 days.
- Net retention >130% in Year 1 cohort.

### Pains we must demonstrably solve

1. The scaling failure of Linear/GitHub Projects beyond ~100 engineers (cross-team roadmap coherence, dependency tracking, exec visibility).
2. The Notion-as-source-of-operational-truth fragility (slow, no native execution, decoupled from work).
3. The status-synthesis tax (managers spending 5–10 hours/week translating reality into reports).
4. The ad-hoc AI workflow (engineers using ChatGPT/Claude in browser tabs disconnected from work context).
5. The growing dependency-management chaos as the org crosses team-of-teams thresholds.

---

## ICP Tier 2: Mid-Market Software Orgs (Years 2–4)

### Firmographics

- **Company type:** Established SaaS companies, dev-tool companies, fintech, vertical SaaS, marketplaces, modern enterprises with significant in-house software development.
- **Headcount:** 500–5,000 employees.
- **Engineering team size:** 200–2,000 engineers.
- **Revenue:** $100M–$1B.
- **Geography:** Same as Tier 1, plus Tokyo, Bangalore, São Paulo, secondary US/EU cities.
- **Tech stack:** Mixed legacy and modern. Often Jira-as-mandated alongside Linear-on-some-teams. Confluence as docs. Microsoft + Google. Modern CI/CD.

### Current state (the pain)

- Currently on **Jira**, often with bottom-up Linear adoption in pockets that the CTO has tolerated or encouraged.
- Have a **toolchain consolidation initiative** — too many tools, too much spend, too much fragmentation.
- Have **reached the limit of Jira's usability** at scale: configuration debt, slow performance, inability to provide coherent cross-org views.
- Are **investing in AI** but struggling to operationalize it across teams.
- Have a **VPE or CTO who knows Jira must die** but lacks a credible replacement at their scale.

### Buying triggers

- A toolchain rationalization initiative.
- A digital transformation budget cycle.
- A new VPE/CTO hire.
- An AI strategy mandate from the board or CEO.
- Public adoption of Qeetro by a peer mid-market company.
- Atlassian pricing increase or Jira Data Center end-of-life event.

### Buyer

- **Economic buyer:** CTO, sometimes CIO for the larger end.
- **Champion:** VP of Engineering or VP of Engineering Operations.
- **Influencers:** Engineering directors, senior PMs, engineering productivity teams.
- **Procurement:** Formal. RFP-style sometimes. 8–16 weeks. Security and procurement review mandatory.

### Sales motion

- **Hybrid product-led + enterprise sales.** Bottom-up adoption in 1–3 teams precedes the enterprise deal.
- **AE + SE** owns the deal. Customer success engineers run pilot.
- **Cycle:** 2–6 months.
- **ACV:** $250K–$2M.

### Success criteria

- Successful migration of >1,000 seats from Jira within 6 months of contract.
- Measurable reduction in toolchain spend (Jira + Confluence + supplemental tools) of 20%+ within Year 1.
- Executive-level dashboards that previously required dedicated headcount become self-service.

### Pains we must demonstrably solve

1. Jira performance and configuration debt at scale.
2. Cross-team coordination across product, engineering, design, devrel, TPM.
3. Lack of unified visibility for engineering leadership.
4. Inability to operationalize AI consistently across 50+ teams.
5. Toolchain sprawl and the integration tax.

---

## ICP Tier 3: Enterprise Software Orgs (Years 4–7)

### Firmographics

- **Company type:** Public SaaS companies, large traditional enterprises with major software organizations (banks, insurers, retailers, automakers, telcos with strong digital divisions), big tech firms below the FAANG tier.
- **Headcount:** 5,000–50,000 employees.
- **Engineering team size:** 2,000–20,000 engineers.
- **Geography:** Global.
- **Tech stack:** Heterogeneous. Jira Data Center or Cloud Enterprise dominant. Confluence. Multiple secondary tools. ServiceNow for ITSM (out of scope for us).

### Current state (the pain)

- Massive Jira footprint with massive operational debt: thousands of projects, hundreds of workflows, dedicated Jira admin teams.
- Engineering productivity initiatives have become standing departments.
- AI initiatives have executive sponsorship and budget but lack a coherent execution substrate.
- Internal "platform engineering" teams have built bespoke wrappers around Jira because Jira itself is unusable.

### Buying triggers

- CIO or CTO mandate to replace Jira.
- Major incident or release failure attributed to coordination breakdown.
- AI center-of-excellence formation that needs an execution substrate.
- M&A integration where toolchain consolidation is on the critical path.
- Atlassian relationship deterioration (pricing, EOL, support).

### Buyer

- **Economic buyer:** CIO or CTO. Sometimes Chief Digital Officer.
- **Champion:** SVP of Engineering Productivity, VP of Platform Engineering, or VP of AI.
- **Influencers:** Multiple — security, procurement, architecture review board, individual engineering VPs.
- **Procurement:** Heavy. RFP. Security review. Architecture review. 6–18 months.

### Sales motion

- **Enterprise field sales.** Multiple stakeholders. Multi-year contracts. Often phased deployment.
- **Lighthouse pilot** in one division (1,000–5,000 seats), expanding org-wide over 18–36 months.
- **ACV:** $2M–$25M+.

### Success criteria

- Phased deployment hitting milestones on schedule.
- Net new ARR expansion within the account exceeding 50% per year for 3 years.
- Reference-level satisfaction from the C-suite sponsor.

### Pains we must demonstrably solve

1. The cost (in dollars and headcount) of operating Jira at enterprise scale.
2. The inability to govern AI usage across thousands of engineers consistently.
3. The lack of a coherent execution substrate for cross-org initiatives.
4. The compliance and audit burden of fragmented toolchains.
5. The inability to attract modern engineering talent who reject the legacy stack.

---

## Anti-ICP: Who we will not serve in the early years

We turn these prospects away — politely, deliberately, without apology. Saying no protects the product.

### Anti-ICP 1: Jira-loyal IT departments

Organizations whose primary use case is ITSM, change management, or ITIL-process tracking. ServiceNow's market. We do not compete for it.

### Anti-ICP 2: Marketing and HR teams as primary buyers

Generic "work management" use cases. We will lose to Asana, Monday, ClickUp, or Notion in these deals — and we should. They are not our customers.

### Anti-ICP 3: Companies asking for deep workflow customization on day one

Prospects whose first three questions are about custom statuses, conditional transitions, and custom field types are signaling that they want Jira. We disqualify cleanly.

### Anti-ICP 4: Government and defense in the early years

Procurement complexity, certification overhead, and feature distortion are not worth the revenue at our stage. We earn the right to serve them later.

### Anti-ICP 5: Solopreneurs and freelancers

Free tier may exist for adoption purposes, but they are not a strategic segment.

### Anti-ICP 6: Companies whose CEO is hostile to AI

Cultural mismatch. Sales cycle becomes a re-education exercise. Not our fight to win.

### Anti-ICP 7: "Innovation labs" inside large traditional enterprises that have no path to broader adoption

These deals look exciting and end as $50K shelf-ware. We disqualify aggressively.

---

## ICP scoring rubric (used in qualification)

For every inbound lead, sales evaluates on the following rubric. Score 0–2 per dimension. Total of 16. Threshold for full sales engagement: ≥11.

| Dimension               | 0                         | 1                      | 2                                        |
| ----------------------- | ------------------------- | ---------------------- | ---------------------------------------- |
| Engineering-led culture | No technical leadership   | Mixed                  | Strong technical leadership              |
| Current tool            | Jira-loyal                | Mixed Jira/modern      | Linear, GitHub Projects, or Notion-based |
| Headcount fit           | <10 or >10K (early years) | Edges of range         | Squarely in tier                         |
| AI posture              | Skeptical                 | Exploring              | Committed AI-native strategy             |
| Buyer access            | Champion only             | Champion + buyer aware | Direct buyer engagement                  |
| Buying trigger          | None apparent             | Soft trigger           | Active, dated trigger                    |
| Champion seniority      | IC                        | Manager                | Director or above                        |
| Geographic fit          | Outside core geos         | Adjacent               | Core geo                                 |

This rubric is a tool, not a tyrant. Discretion overrides — but with documentation.

---

## How ICPs evolve

The ICP definition is reviewed quarterly with the head of GTM and the founder. Material expansion of the ICP requires:

- Evidence of consistent inbound from the new segment.
- Demonstrated product fit (>30% of pilots converting).
- Sales motion economics that work (CAC payback under 18 months).

Expansion of ICP without these three signals is the most common cause of organizational drift in growth-stage companies. We resist it.
