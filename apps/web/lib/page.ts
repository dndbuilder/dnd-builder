"use server";

import { Block } from "@dndbuilder.com/react";
import { apiClient } from "./api-client";

export type Page = {
  id?: string;
  name: string;
  content: Record<string, Block>;
};

export async function fetchPage(): Promise<Page | null> {
  try {
    const data = await apiClient.get<any[]>("/pages", {
      tags: ["page"], // Tag this request for cache invalidation
    });

    // API returns an array of pages, so we'll use the first page's content
    if (data && data.length > 0 && data[0].content && Object.keys(data[0].content).length > 0) {
      return {
        id: data[0].id,
        name: data[0].name,
        content: data[0].content as Record<string, Block>,
      };
    } else {
      // Fallback to an empty content object if no content is found
      console.warn("No content found, using empty content.");
    }

    return null;
  } catch (error) {
    console.error("Error fetching page:", error);
    throw new Error("Failed to fetch content.");
  }
}

export async function savePage(page: Page): Promise<void> {
  try {
    const endpoint = page.id ? `/pages/${page.id}` : "/pages";

    if (page.id) {
      await apiClient.put(endpoint, {
        name: page.name,
        content: page.content,
      }, {
        tags: ["page"],
      });
    } else {
      await apiClient.post(endpoint, {
        name: page.name,
        content: page.content,
      }, {
        tags: ["page"],
      });
    }

    // Revalidate the page tag to refresh cache
    apiClient.revalidateTag("page");
  } catch (error) {
    console.error("Error saving page:", error);
    throw new Error("Failed to save content.");
  }
}
