<a href="https://next-saas-stripe-starter.vercel.app">
  <img alt="SaaS Starter" src="public/_static/og.jpg">
  <h1 align="center">Next SaaS Stripe Starter</h1>
<a href="https://launchfast.sh">
  <img alt="LaunchFast" src="public/_static/og.jpg">
  <h1 align="center">LaunchFast – AI-Native SaaS Boilerplate</h1>
</a>

<p align="center">
  Start at full speed with SaaS Starter !
  The fastest way to build, launch, and scale an AI SaaS.  
</p>

<p align="center">
  <a href="https://twitter.com/miickasmt">
    <img src="https://img.shields.io/twitter/follow/miickasmt?style=flat&label=miickasmt&logo=twitter&color=0bf&logoColor=fff" alt="Mickasmt Twitter follower count" />
  </a>
</p>

<p align="center">
  <a href="#introduction"><strong>Introduction</strong></a> ·
  <a href="#overview"><strong>Overview</strong></a> ·
  <a href="#features"><strong>Features</strong></a> ·
  <a href="#installation"><strong>Installation</strong></a> ·
  <a href="#tech-stack--features"><strong>Tech Stack + Features</strong></a> ·
  <a href="#author"><strong>Author</strong></a> ·
  <a href="#credits"><strong>Credits</strong></a>
  <a href="#stack"><strong>Tech Stack</strong></a> ·
  <a href="#license"><strong>License</strong></a>
</p>
<br/>

## Introduction

Empower your next project with the stack of Next.js 14, Prisma, Neon, Auth.js v5, Resend, React Email, Shadcn/ui, and Stripe.
<br/>
All seamlessly integrated with the SaaS Starter to accelerate your development and saas journey.

## Installation
---

Clone & create this repo locally with the following command:
## Overview

```bash
npx create-next-app my-saas-project --example "https://github.com/mickasmt/next-saas-stripe-starter"
```
LaunchFast is a production-grade starter kit for builders who want to ship an AI SaaS fast, without fighting setup, configuration, analytics, billing, or security.

Or, deploy with Vercel:
This boilerplate includes:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fmickasmt%2Fnext-saas-stripe-starter)
- SaaS membership
- Authentication
- Stripe subscriptions
- Admin dashboard structure
- User dashboard structure
- AI analytics instrumentation
- Sentry error tracking
- PostHog event tracking, session replay, and full Web Analytics
- Modern UI with Shadcn
- Email flows
- Secure database schema with Prisma + Neon

### Steps
Everything is wired, tested, and battle-ready so you can focus on your product.

1. Install dependencies using pnpm:
---

```sh
pnpm install
```
## Features

2. Copy `.env.example` to `.env.local` and update the variables.
### ✔ AI-native architecture  
PostHog LLM analytics, custom events, and AI usage tracking baked in.

```sh
cp .env.example .env.local
```
### ✔ Billing & subscriptions  
Stripe monthly and yearly plans ready to use.

3. Start the development server:
### ✔ Auth & user management  
Google OAuth, email auth, session management, and protected routes.

```sh
pnpm run dev
```
### ✔ Production error monitoring  
Sentry with full trace propagation.

> [!NOTE]  
> I use [npm-check-updates](https://www.npmjs.com/package/npm-check-updates) package for update this project.
>
> Use this command for update your project: `ncu -i --format group`
### ✔ Full analytics  
PostHog Web Analytics, session replay, funnels, event tracking, and feature usage metrics.

## Roadmap
- [ ] Upgrade eslint to v9
- [ ] Add resend for success subscriptions
### ✔ Modern UI system  
Shadcn UI, Radix Primitives, Tailwind CSS, Lucide Icons, Framer Motion.

## Tech Stack + Features
### ✔ Developer happiness  
Prisma, Typescript, sensible structure, clean patterns, and CLI shortcuts.

https://github.com/mickasmt/next-saas-stripe-starter/assets/62285783/828a4e0f-30e3-4cfe-96ff-4dfd9cd55124
---

### Frameworks
## Installation

- [Next.js](https://nextjs.org/) – React framework for building performant apps with the best developer experience
- [Auth.js](https://authjs.dev/) – Handle user authentication with ease with providers like Google, Twitter, GitHub, etc.
- [Prisma](https://www.prisma.io/) – Typescript-first ORM for Node.js
- [React Email](https://react.email/) – Versatile email framework for efficient and flexible email development
Clone and create a new project using this repo:

```bash
npx create-next-app my-saas --example "https://github.com/sree-pm/launchfast-base-v1"

### Platforms
Or deploy instantly on Vercel:
Local Setup
	1.	Install dependencies:
  pnpm install

- [Vercel](https://vercel.com/) – Easily preview & deploy changes with git
- [Resend](https://resend.com/) – A powerful email framework for streamlined email development
- [Neon](https://neon.tech/) – Serverless Postgres with autoscaling, branching, bottomless storage and generous free tier.
  2.	Copy environment variables:
  cp .env.example .env.local

### UI
  3.	Run development server:
  pnpm dev

- [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS framework for rapid UI development
- [Shadcn/ui](https://ui.shadcn.com/) – Re-usable components built using Radix UI and Tailwind CSS
- [Framer Motion](https://framer.com/motion) – Motion library for React to animate components with ease
- [Lucide](https://lucide.dev/) – Beautifully simple, pixel-perfect icons
- [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) – Optimize custom fonts and remove external network requests for improved performance
- [`ImageResponse`](https://nextjs.org/docs/app/api-reference/functions/image-response) – Generate dynamic Open Graph images at the edge
  Stack

### Hooks and Utilities
Frameworks
	•	Next.js 14
	•	Typescript
	•	Prisma ORM
	•	Auth.js v5

- `useIntersectionObserver` – React hook to observe when an element enters or leaves the viewport
- `useLocalStorage` – Persist data in the browser's local storage
- `useScroll` – React hook to observe scroll position ([example](https://github.com/mickasmt/precedent/blob/main/components/layout/navbar.tsx#L12))
- `nFormatter` – Format numbers with suffixes like `1.2k` or `1.2M`
- `capitalize` – Capitalize the first letter of a string
- `truncate` – Truncate a string to a specified length
- [`use-debounce`](https://www.npmjs.com/package/use-debounce) – Debounce a function call / state update
Infrastructure
	•	Neon (Postgres)
	•	Vercel (deploy + analytics)
	•	Resend (emails)

### Code Quality
AI, analytics, monitoring
	•	PostHog (events, web analytics, session replay, heatmaps)
	•	Sentry (errors, performance, trace correlation)

- [TypeScript](https://www.typescriptlang.org/) – Static type checker for end-to-end typesafety
- [Prettier](https://prettier.io/) – Opinionated code formatter for consistent code style
- [ESLint](https://eslint.org/) – Pluggable linter for Next.js and TypeScript
UI
	•	Tailwind CSS
	•	Shadcn/UI
	•	Radix UI
	•	Framer Motion
	•	Lucide Icons

### Miscellaneous
⸻

- [Vercel Analytics](https://vercel.com/analytics) – Track unique visitors, pageviews, and more in a privacy-friendly way
Roadmap
	•	CEO analytics dashboard
	•	AI usage guardrails
	•	Role-based admin panel
	•	Multi-tenant mode
	•	Full onboarding funnels
	•	Email sequences for SaaS lifecycle
	•	Deployable AI agents toolkit

## Author
⸻

Created by [@miickasmt](https://twitter.com/miickasmt) in 2023, released under the [MIT license](https://github.com/shadcn/taxonomy/blob/main/LICENSE.md).
License

## Credits
MIT License. See LICENSE￼ for details.

This project was inspired by shadcn's [Taxonomy](https://github.com/shadcn-ui/taxonomy), Steven Tey’s [Precedent](https://github.com/steven-tey/precedent), and Antonio Erdeljac's [Next 13 AI SaaS](https://github.com/AntonioErdeljac/next13-ai-saas).
Credits
This project is inspired by:
	•	shadcn’s Taxonomy
	•	Steven Tey’s Precedent
	•	Many open-source SaaS starters

- Shadcn ([@shadcn](https://twitter.com/shadcn))
- Steven Tey ([@steventey](https://twitter.com/steventey))
- Antonio Erdeljac ([@YTCodeAntonio](https://twitter.com/AntonioErdeljac))
Fully rebuilt, extended, and production-hardened for the LaunchFast ecosystem.
