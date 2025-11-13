<a href="https://launchfast.sh">
  <img alt="LaunchFast" src="public/_static/og.jpg">
  <h1 align="center">LaunchFast – AI-Native SaaS Boilerplate</h1>
</a>

<p align="center">
  The fastest way to build, launch, and scale an AI SaaS.  
</p>

<p align="center">
  <a href="#overview"><strong>Overview</strong></a> ·
  <a href="#features"><strong>Features</strong></a> ·
  <a href="#installation"><strong>Installation</strong></a> ·
  <a href="#stack"><strong>Tech Stack</strong></a> ·
  <a href="#license"><strong>License</strong></a>
</p>

<br/>

---

## Overview

LaunchFast is a production-grade starter kit for builders who want to ship an AI SaaS fast, without fighting setup, configuration, analytics, billing, or security.

This boilerplate includes:

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

Everything is wired, tested, and battle-ready so you can focus on your product.

---

## Features

### ✔ AI-native architecture  
PostHog LLM analytics, custom events, and AI usage tracking baked in.

### ✔ Billing & subscriptions  
Stripe monthly and yearly plans ready to use.

### ✔ Auth & user management  
Google OAuth, email auth, session management, and protected routes.

### ✔ Production error monitoring  
Sentry with full trace propagation.

### ✔ Full analytics  
PostHog Web Analytics, session replay, funnels, event tracking, and feature usage metrics.

### ✔ Modern UI system  
Shadcn UI, Radix Primitives, Tailwind CSS, Lucide Icons, Framer Motion.

### ✔ Developer happiness  
Prisma, Typescript, sensible structure, clean patterns, and CLI shortcuts.

---

## Installation

Clone and create a new project using this repo:

```bash
npx create-next-app my-saas --example "https://github.com/sree-pm/launchfast-base-v1"

Or deploy instantly on Vercel:
Local Setup
	1.	Install dependencies:
  pnpm install

  2.	Copy environment variables:
  cp .env.example .env.local

  3.	Run development server:
  pnpm dev

  Stack

Frameworks
	•	Next.js 14
	•	Typescript
	•	Prisma ORM
	•	Auth.js v5

Infrastructure
	•	Neon (Postgres)
	•	Vercel (deploy + analytics)
	•	Resend (emails)

AI, analytics, monitoring
	•	PostHog (events, web analytics, session replay, heatmaps)
	•	Sentry (errors, performance, trace correlation)

UI
	•	Tailwind CSS
	•	Shadcn/UI
	•	Radix UI
	•	Framer Motion
	•	Lucide Icons

⸻

Roadmap
	•	CEO analytics dashboard
	•	AI usage guardrails
	•	Role-based admin panel
	•	Multi-tenant mode
	•	Full onboarding funnels
	•	Email sequences for SaaS lifecycle
	•	Deployable AI agents toolkit

⸻

License

MIT License. See LICENSE￼ for details.

Credits
This project is inspired by:
	•	shadcn’s Taxonomy
	•	Steven Tey’s Precedent
	•	Many open-source SaaS starters

Fully rebuilt, extended, and production-hardened for the LaunchFast ecosystem.
