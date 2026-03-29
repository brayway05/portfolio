# Salon Inventory (Salon AI Agent)

AI-assisted inventory for a hair salon: natural-language updates and lookups for hair color stock, backed by PostgreSQL and exposed through a chat UI. Built for a real salon workflow where a generic booking or retail system does not cover hair color tracking in enough detail.

## What it does

- **Inventory agent** — Mastra-powered assistant that reads and updates hair color inventory (quantities, brands, codes, usage) from conversational input.
- **Database** — PostgreSQL models for brands, colors, per-user inventory, usage logs, and low-stock notifications (via Prisma).
- **Tools** — Fetch, update, and restock inventory; optional web search helpers for product context from URLs; alerting hooks (e.g. email).

Planned enhancements include usage graphs and deeper Open WebUI integration.

## Architecture (production)

Production uses a **hybrid deployment**:

| Layer | Role |
|--------|------|
| **Raspberry Pi** | Hosts PostgreSQL and the Mastra API (Node.js / TypeScript). |
| **AWS (EC2 or Lightsail)** | Hosts **Open WebUI** as the staff-facing chat frontend. |
| **WireGuard** | Private encrypted tunnel between AWS and the Pi so the API is not exposed on the public internet. |

Open WebUI is configured to call the Mastra API over the VPN (for example `OPENWEBUI_API_BASE_URL` pointing at the Pi’s WireGuard- or LAN-reachable address and API port). The Mastra service and Postgres run in Docker on the Pi, with schema changes applied via Prisma migrations in production.

**Operations**

- The Pi runs Raspberry Pi OS (64-bit Lite), Docker, and Compose; Postgres data is persisted on disk; Mastra runs in a container built from the application image.
- The AWS instance runs WireGuard (`wg-quick` / `wg-quick@wg0`) with a client profile from the existing WireGuard server; Open WebUI runs via Docker Compose and serves HTTP (for example port 80 mapped to the app on 8080).
- The Pi firewall limits exposure (SSH, WireGuard, and only what must be reachable locally or over the VPN); Postgres is not published to the open internet.
- Backups use automated PostgreSQL dumps; containers and code are refreshed with periodic pulls and rebuilds; lightweight monitoring uses `htop` and `docker stats`.

For local development, an all-in-one `docker-compose` stack can run Postgres, Mastra, and Open WebUI on one machine; production splits the frontend on AWS from the database and agent on the Pi.

## Open-source stack

**Runtime and language**

- [Node.js](https://nodejs.org/) (≥ 20.9)
- [TypeScript](https://www.typescriptlang.org/)

**Agent and AI**

- [Mastra](https://mastra.ai/) — `@mastra/core`, Mastra CLI (`mastra dev` / `build` / `start`), `@mastra/memory`, `@mastra/libsql`, `@mastra/loggers`, `@mastra/evals`
- [Vercel AI SDK — OpenAI provider](https://sdk.vercel.ai/) (`@ai-sdk/openai`) for model calls

**Data**

- [PostgreSQL](https://www.postgresql.org/)
- [Prisma](https://www.prisma.io/) — ORM, migrations, `@prisma/client`, `@prisma/adapter-pg`
- [pg](https://github.com/brianc/node-postgres) — PostgreSQL driver

**Validation and utilities**

- [Zod](https://zod.dev/) — schemas and validation
- [dotenv](https://github.com/motdotla/dotenv) — environment configuration
- [node-cron](https://github.com/node-cron/node-cron) — scheduled jobs
- [nodemailer](https://nodemailer.com/) — email for alerts

**Search and enrichment (libraries; some backends are third-party APIs)**

- [exa-js](https://github.com/exa-labs/exa-js) — Exa client (API usage may require an Exa account)
- [web-search](https://www.npmjs.com/package/web-search) — search helper package

**UI and infrastructure**

- [Open WebUI](https://github.com/open-webui/open-webui) — chat UI (`ghcr.io/open-webui/open-webui`)
- [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/) — containers and orchestration
- [WireGuard](https://www.wireguard.com/) — VPN between AWS and the home or Pi network
- Container images often use [Alpine Linux](https://alpinelinux.org/) as a base
