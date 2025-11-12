export interface ValidateAppResponse {
  valid: boolean;
}

const DEFAULT_API_BASE_URL = "http://localhost:3000";

export async function validateApp(
  appId: string,
  appKey: string,
  apiBaseUrl?: string
): Promise<ValidateAppResponse> {
  const baseUrl = apiBaseUrl || DEFAULT_API_BASE_URL;

  try {
    const response = await fetch(`${baseUrl}/apps/validate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        appId,
        appKey,
      }),
    });

    if (!response.ok) {
      return { valid: false };
    }

    const data = await response.json();
    return { valid: data.valid === true };
  } catch (error) {
    console.error("Error validating app:", error);
    return { valid: false };
  }
}
