# Binit web launch notes

## What is included

The web experience is a responsive civic-waste product surface built around the existing FastAPI workflow:

- Public landing page with responsive mobile-first layout.
- Citizen, collection crew and operator role entry points.
- AI classification and explainable severity messaging.
- Privacy-aware map language and dual-zone coverage story.
- Binit Copilot: a lightweight in-product guide for reporting, AI and privacy questions.
- Existing authenticated workspaces for reporting, maps, queues, routes, tasks and analytics.

## Run locally

```bash
cd docker && docker compose up --build -d
cd ../apps/web && npm install && npm run dev
```

Open `http://localhost:3000`. The API is available at `http://localhost:8000`.

## Product direction

The interface intentionally uses a dark, high-contrast operations palette with green/teal action states and amber/red urgency states. Content is structured around the eight-step loop: Spot, Snap, Analyze, Prioritize, Locate, Dispatch, Resolve and Improve.
