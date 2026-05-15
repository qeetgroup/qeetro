# Qeetro - Tech Stack Context

## Purpose

This file defines the recommended technology direction for Qeetro. It is a planning baseline, not proof of implementation.

## Current Repository State

No application source code is present yet. The stack below should guide first implementation decisions unless the project owner intentionally changes direction.

## Recommended Monorepo Shape

```text
apps/
  web/
  api/

packages/
  config/
  database/
  domain/
  events/
  ui/
  utils/

infra/
  docker/
  terraform/
  helm/

docs/
  adr/
  product/
  runbooks/
```

## Frontend

Recommended stack:

- Next.js
- React
- TypeScript
- Tailwind CSS
- shadcn/ui or Radix-based primitives
- TanStack Query
- Zustand for focused client state
- React Hook Form
- Zod
- Playwright
- Vitest
- Storybook when component volume justifies it

Frontend principles:

- Prefer server data through TanStack Query.
- Keep client state small and local.
- Use URL state for navigable filters and views.
- Design for keyboard-first work management.
- Use virtualized lists for large issue boards and tables.
- Treat realtime updates as patches over durable server state.

## Backend

Recommended stack:

- Node.js
- TypeScript
- NestJS or Fastify-based modular API
- PostgreSQL
- Prisma or Drizzle for database access
- Redis
- BullMQ or equivalent job queue for early stage
- REST-first APIs
- GraphQL only where query complexity justifies it
- WebSocket gateway for realtime collaboration

Backend principles:

- Keep domain modules explicit.
- Centralize authorization policy checks.
- Validate all external input.
- Use idempotency keys for retry-sensitive mutations.
- Emit events for async workflows.
- Keep request paths observable.

## Data

Primary:

- PostgreSQL for transactional state

Supporting:

- Redis for cache, rate limits, queue support, and ephemeral collaboration helpers
- Search index for full-text and faceted search
- Object storage for attachments and exports
- Vector database/index for tenant-scoped AI retrieval

Candidate technologies:

- PostgreSQL
- Redis
- OpenSearch or Elasticsearch
- S3-compatible object storage
- pgvector, Pinecone, Weaviate, or Qdrant depending on hosting strategy

## Events And Jobs

Early stage:

- BullMQ or equivalent Redis-backed queue
- Outbox pattern for durable event publication where needed

Scale stage:

- Kafka, NATS, or managed event bus
- Schema registry or equivalent schema discipline
- Dead-letter queues
- Replay strategy

## AI Platform

Recommended components:

- Model gateway abstraction
- Versioned prompt registry
- Retrieval service
- Tenant-scoped vector indexes
- AI task queue
- Evaluation fixtures
- AI audit log
- Safety policy layer

Potential libraries:

- OpenAI APIs
- Vercel AI SDK
- LangGraph or equivalent orchestration only where graph workflows are truly needed
- Zod for structured output validation

AI principles:

- Store prompt/template versions.
- Validate structured outputs.
- Log safe metadata, not sensitive prompt bodies by default.
- Make source context visible for user-facing AI claims.
- Require confirmation for high-impact actions.

## Infrastructure

Early stage:

- Docker Compose for local development
- GitHub Actions
- Managed PostgreSQL
- Managed Redis
- Managed object storage
- Environment-specific configuration

Scale stage:

- Kubernetes
- Terraform
- Helm
- Centralized secrets manager
- Feature flag platform
- Preview environments
- Progressive delivery

## Observability

Recommended stack:

- OpenTelemetry
- Prometheus-compatible metrics
- Grafana dashboards
- Structured JSON logs
- Sentry or equivalent error tracking
- Distributed tracing with Tempo, Jaeger, or managed equivalent

Minimum telemetry:

- API latency and errors
- Database latency
- Queue depth and job failures
- Event consumer lag
- Realtime connection counts and errors
- AI provider latency, cost, and failures
- Search indexing lag

## Testing

Recommended tools:

- Vitest for unit tests
- Playwright for end-to-end tests
- Testing Library for React components
- API integration tests through the app server
- Contract tests for event payloads and public APIs
- Accessibility checks in key UI flows

## Security

Recommended foundations:

- Strong session/auth provider or well-reviewed auth framework
- RBAC policy layer
- Tenant-aware database access helpers
- Rate limiting
- Request validation
- Audit log tables
- Secret scanning
- Dependency scanning
- Webhook signature verification

## Coding Conventions

When the codebase is created:

- Prefer TypeScript everywhere.
- Use one package manager consistently.
- Keep formatting automated.
- Keep lint rules shared.
- Keep environment variables typed and documented.
- Keep migrations reviewed.
- Avoid adding global shared utilities until at least two domains need them.

## Open Decisions

These decisions should be made before implementation starts:

- Package manager: pnpm, npm, or yarn
- Monorepo tool: Turborepo, Nx, or simple workspace scripts
- Backend framework: NestJS or Fastify-first
- ORM/query layer: Prisma, Drizzle, or SQL-first
- Auth approach: managed provider or self-hosted
- Realtime engine: custom WebSocket gateway, Liveblocks, Yjs stack, or equivalent
- Search provider: OpenSearch, Elasticsearch, or managed search
- Vector store: pgvector or dedicated vector database
