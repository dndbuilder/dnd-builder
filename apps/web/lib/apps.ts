import { BASE_URL } from "./constants";
import { getSession } from "next-auth/react";

export type App = {
  id: string;
  name: string;
  appId: string;
  appKey: string;
  createdAt: string;
  updatedAt: string;
};

export async function createApp(name: string): Promise<App & { appKey: string }> {
  const session = await getSession();

  try {
    const response = await fetch(`${BASE_URL}/apps`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${session?.accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({ message: "Failed to create app" }));
      throw new Error(error.message || "Failed to create app");
    }

    return (await response.json()) as App & { appKey: string };
  } catch (error) {
    console.error("Error creating app:", error);
    throw error;
  }
}

export async function getApps(): Promise<App[]> {
  const session = await getSession();

  try {
    const response = await fetch(`${BASE_URL}/apps`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${session?.accessToken}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({ message: "Failed to fetch apps" }));
      throw new Error(error.message || "Failed to fetch apps");
    }

    return (await response.json()) as App[];
  } catch (error) {
    console.error("Error fetching apps:", error);
    throw error;
  }
}

export async function deleteApp(appId: string): Promise<void> {
  const session = await getSession();

  try {
    const response = await fetch(`${BASE_URL}/apps/${appId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${session?.accessToken}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({ message: "Failed to delete app" }));
      throw new Error(error.message || "Failed to delete app");
    }
  } catch (error) {
    console.error("Error deleting app:", error);
    throw error;
  }
}

