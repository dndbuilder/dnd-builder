"use server";

import { Theme } from "@dndbuilder.com/react";
import { apiClient } from "./api-client";

/**
 * Fetches the active theme for the current user
 * @returns The active theme or null if no active theme exists
 */
export async function fetchActiveTheme(): Promise<Theme | null> {
  try {
    return await apiClient.get<Theme>("/themes/active", {
      tags: ["theme"], // Tag this request for cache invalidation
    });
  } catch (error) {
    console.error("Error fetching active theme:", error);
    throw new Error("Failed to fetch active theme. Please try again later.");
  }
}

export async function saveActiveTheme(theme: Partial<Theme>): Promise<void> {
  try {
    await apiClient.post("/themes/active", {
      name: theme.name,
      settings: theme.settings,
    }, {
      tags: ["theme"], // Tag this request for cache invalidation
    });

    // Revalidate the theme tag to refresh cache
    apiClient.revalidateTag("theme");
  } catch (error) {
    console.error("Error saving theme:", error);
    throw new Error("Failed to save theme.");
  }
}
