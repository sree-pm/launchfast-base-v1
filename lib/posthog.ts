import { PostHog } from "posthog-node";

export const serverPosthog =
  process.env.POSTHOG_KEY && process.env.POSTHOG_HOST
    ? new PostHog(process.env.POSTHOG_KEY, {
        host: process.env.POSTHOG_HOST,
      })
    : null;