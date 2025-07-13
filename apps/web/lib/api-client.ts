"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "./auth";
import { BASE_URL } from "./constants";
import { revalidateTag } from "next/cache";

type RequestOptions = {
  method?: string;
  body?: any;
  headers?: Record<string, string>;
  cache?: RequestCache;
  tags?: string[];
};

/**
 * Server-side API client for making authenticated fetch requests
 */
export const apiClient = {
  /**
   * Make a fetch request with authentication from the server
   */
  async fetch<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
    const {
      method = "GET",
      body,
      headers: customHeaders = {},
      cache = "no-store",
      tags,
    } = options;

    // Get the session to include the auth token
    const session = await getServerSession(authOptions);

    // Set up headers with authentication if available
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
      ...customHeaders,
    };

    // Add authorization header if session exists
    if (session?.accessToken) {
      headers["Authorization"] = `Bearer ${session.accessToken}`;
    }

    // Build the complete URL
    const url = endpoint.startsWith("http") ? endpoint : `${BASE_URL}${endpoint}`;

    // Create the request options
    const requestOptions: RequestInit = {
      method,
      headers,
      cache,
      next: {
        ...(tags && { tags }),
      },
    };

    // Add the body if it exists
    if (body) {
      requestOptions.body = JSON.stringify(body);
    }

    try {
      const response = await fetch(url, requestOptions);

      // Handle error responses
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          errorData.message || `Request failed with status ${response.status}`
        );
      }

      // Parse and return the response data
      return await response.json();
    } catch (error) {
      console.error(`API request failed: ${endpoint}`, error);
      throw error;
    }
  },

  /**
   * Make a GET request
   */
  async get<T>(endpoint: string, options: Omit<RequestOptions, "method" | "body"> = {}): Promise<T> {
    return this.fetch<T>(endpoint, { ...options, method: "GET" });
  },

  /**
   * Make a POST request
   */
  async post<T>(endpoint: string, data: any, options: Omit<RequestOptions, "method" | "body"> = {}): Promise<T> {
    return this.fetch<T>(endpoint, { ...options, method: "POST", body: data });
  },

  /**
   * Make a PUT request
   */
  async put<T>(endpoint: string, data: any, options: Omit<RequestOptions, "method" | "body"> = {}): Promise<T> {
    return this.fetch<T>(endpoint, { ...options, method: "PUT", body: data });
  },

  /**
   * Make a DELETE request
   */
  async delete<T>(endpoint: string, options: Omit<RequestOptions, "method" | "body"> = {}): Promise<T> {
    return this.fetch<T>(endpoint, { ...options, method: "DELETE" });
  },

  /**
   * Revalidate a cache tag
   */
  revalidateTag(tag: string): void {
    revalidateTag(tag);
  },
};