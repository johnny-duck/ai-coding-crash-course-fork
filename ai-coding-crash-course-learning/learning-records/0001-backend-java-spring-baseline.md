# Baseline: strong Java/Spring backend, near-zero front-end

The user is a working Java/Spring Boot backend engineer. Their HTML, CSS and JS (plus a bit of Angular) is only exposure, not working skill. Backend ideas such as HTTP request/response, controllers, services, ORMs, migrations and unit tests don't need teaching; we can use them as anchors. Front-end ideas such as components, JSX, server vs browser execution, hydration and TypeScript types do need teaching from scratch, and only as far as navigating and steering requires.

**Evidence**: Self-reported at the first `/teach` session (2026-11-11).

**Implications**: Start from the parts of the repo that look most like Spring (routes → loader → service → Drizzle → SQLite) and move outward to the UI.
