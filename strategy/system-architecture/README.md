# Qeetro System Architecture

Last updated: 2026-05-15

Status: Proposed Phase 1 baseline

This directory is the technical architecture source of truth for Qeetro Phase 1. It translates the strategy and product requirements into service boundaries, data ownership, event contracts, runtime topology, security controls, observability requirements, infrastructure decisions, risk analysis, and implementation sequencing.

Primary sources:

- [Qeetro Strategy](../README.md)
- [Product Principles](../05-product-principles.md)
- [AI Philosophy](../09-ai-philosophy.md)
- [Roadmap Strategy](../10-roadmap-strategy.md)
- [Phase 1 Product Requirements](../product-requirements/phase-1/README.md)
- [Backend Architecture](../backend-architecture/README.md)

## Architecture Set

| Order | Document                                                                     | Purpose                                                                                                     |
| ----- | ---------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| 01    | [Overview And Initial Architecture](01-overview.md)                          | Executive architecture decision, goals, topology, and initial modular monolith strategy                     |
| 02    | [Domains And Modules](02-domains-and-modules.md)                             | Bounded contexts, aggregate ownership, backend module topology, and CQRS rules                              |
| 03    | [Data Architecture](03-data-architecture.md)                                 | PostgreSQL ownership, multi-tenancy, tenant isolation, data ownership, and consistency boundaries           |
| 04    | [Events And APIs](04-events-and-apis.md)                                     | Event transport, event envelope, topics, event catalog, reliability, replay, REST, and GraphQL strategy     |
| 05    | [Realtime, AI, And Search](05-realtime-ai-search.md)                         | Realtime gateway, AI platform, permission-aware retrieval, vector strategy, and OpenSearch indexing         |
| 06    | [Notifications, Integrations, And Imports](06-notifications-integrations.md) | Notification model, GitHub integration, import pipeline, and future integration foundation                  |
| 07    | [Security And Observability](07-security-observability.md)                   | Identity, authorization, audit, secrets, tenant safety gates, metrics, logs, traces, dashboards, and alerts |
| 08    | [Infrastructure And Risk](08-infrastructure-risk.md)                         | Kubernetes topology, infrastructure strategy, progressive delivery, disaster recovery, and risk analysis    |
| 09    | [Roadmap, Review Checklist, And ADRs](09-roadmap-review-adrs.md)             | Phase 1 implementation roadmap, architecture review checklist, ADRs, and final architecture summary         |

## Phase 1 Baseline

Qeetro Phase 1 should start as a **hybrid modular monolith**: one product and domain codebase with strict bounded contexts, backed by PostgreSQL, a transactional outbox, event-driven workers, a separately scalable realtime gateway, and separately scalable background workers for search, imports, integrations, notifications, and AI.

The architecture is intentionally modular before it is distributed. Qeetro should not split every domain into microservices during Phase 1. It should instead preserve clean extraction paths for realtime, integrations/imports, search, AI orchestration, and notifications while keeping identity, tenancy, and execution core coherent.

Core decisions:

- Organization is the primary tenant boundary.
- Workspace is the primary execution context.
- PostgreSQL is the Phase 1 source of truth.
- Search, activity, analytics, embeddings, notifications, and AI context are derived projections.
- Transactional outbox plus NATS JetStream is the Phase 1 event spine.
- REST owns command-style mutations and external webhooks.
- GraphQL composes screen-shaped product reads.
- WebSocket realtime delivers patches, refetch signals, and revocations, while durable API state remains authoritative.
- OpenSearch is the Phase 1 search projection.
- Vector retrieval sits behind a `VectorStore` adapter.
- AI is governed assistance, not autonomous execution.
- GitHub uses a scoped GitHub App integration model.
- Kubernetes, Terraform, Helm, and GitHub Actions form the production deployment baseline.

## Reading Order

Use this order when reviewing or implementing architecture:

1. Start with [Overview And Initial Architecture](01-overview.md) to understand the main architecture decision.
2. Read [Domains And Modules](02-domains-and-modules.md) before adding a new domain, table, module, or ownership boundary.
3. Read [Data Architecture](03-data-architecture.md) before designing persistence, tenancy, caching, search, vector, or consistency behavior.
4. Read [Events And APIs](04-events-and-apis.md) before adding commands, queries, webhooks, events, workers, or projections.
5. Read [Realtime, AI, And Search](05-realtime-ai-search.md) before adding live collaboration, AI workflows, retrieval, or indexing.
6. Read [Notifications, Integrations, And Imports](06-notifications-integrations.md) before adding notification fanout, GitHub, import, or future integration work.
7. Read [Security And Observability](07-security-observability.md) before approving any protected workflow, audit event, metric, trace, dashboard, or log schema.
8. Read [Infrastructure And Risk](08-infrastructure-risk.md) before changing deployment topology, scaling assumptions, DR posture, or operational risk controls.
9. Read [Roadmap, Review Checklist, And ADRs](09-roadmap-review-adrs.md) before sequencing Phase 1 work or approving major technical decisions.

## Coverage Map

The original single-file architecture blueprint has been split without dropping sections:

| Original Section                                  | New Location                                                                 |
| ------------------------------------------------- | ---------------------------------------------------------------------------- |
| Executive Decision                                | [Overview And Initial Architecture](01-overview.md)                          |
| Architecture Goals                                | [Overview And Initial Architecture](01-overview.md)                          |
| High-Level System Topology                        | [Overview And Initial Architecture](01-overview.md)                          |
| Initial Architecture Strategy                     | [Overview And Initial Architecture](01-overview.md)                          |
| Bounded Contexts And Domain Ownership             | [Domains And Modules](02-domains-and-modules.md)                             |
| Service And Module Topology                       | [Domains And Modules](02-domains-and-modules.md)                             |
| Database Ownership And Multi-Tenant Data Strategy | [Data Architecture](03-data-architecture.md)                                 |
| Event-Driven Architecture                         | [Events And APIs](04-events-and-apis.md)                                     |
| API Strategy                                      | [Events And APIs](04-events-and-apis.md)                                     |
| Realtime Architecture                             | [Realtime, AI, And Search](05-realtime-ai-search.md)                         |
| AI Platform Architecture                          | [Realtime, AI, And Search](05-realtime-ai-search.md)                         |
| Search And Indexing Architecture                  | [Realtime, AI, And Search](05-realtime-ai-search.md)                         |
| Notification Architecture                         | [Notifications, Integrations, And Imports](06-notifications-integrations.md) |
| Integration And Import Architecture               | [Notifications, Integrations, And Imports](06-notifications-integrations.md) |
| Security Architecture                             | [Security And Observability](07-security-observability.md)                   |
| Observability Architecture                        | [Security And Observability](07-security-observability.md)                   |
| Kubernetes And Deployment Topology                | [Infrastructure And Risk](08-infrastructure-risk.md)                         |
| Scalability And Risk Analysis                     | [Infrastructure And Risk](08-infrastructure-risk.md)                         |
| Phase 1 Implementation Roadmap                    | [Roadmap, Review Checklist, And ADRs](09-roadmap-review-adrs.md)             |
| Architecture Review Checklist                     | [Roadmap, Review Checklist, And ADRs](09-roadmap-review-adrs.md)             |
| Architecture Decision Records                     | [Roadmap, Review Checklist, And ADRs](09-roadmap-review-adrs.md)             |
| Summary                                           | [Roadmap, Review Checklist, And ADRs](09-roadmap-review-adrs.md)             |

## Governance

When architecture changes:

- Update the focused section README first.
- Update this top-level index when adding, renaming, or moving architecture documents.
- Add or revise ADRs in [Roadmap, Review Checklist, And ADRs](09-roadmap-review-adrs.md) for durable technical decisions.
- Keep diagrams near the architecture they explain.
- Keep tenant isolation, permission-aware retrieval, observability, auditability, and replayability visible in every relevant design.
- Do not introduce a new service, queue, datastore, cache scope, or AI workflow without naming its owner, failure mode, observability, and extraction or rollback path.
