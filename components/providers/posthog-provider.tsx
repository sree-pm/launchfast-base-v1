"use client";

import { useEffect } from "react";
import posthog from "posthog-js";

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Do NOT init here because we use the HTML snippet
    console.log("PostHog provider loaded");
  }, []);

  return <>{children}</>;
}