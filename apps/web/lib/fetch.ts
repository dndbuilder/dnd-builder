export type AppFetchConfig = {
  baseURL?: string;
};

export class Fetch {
  constructor(
    public config: AppFetchConfig = {},
    public fetchConfig: RequestInit = {}
  ) {}

  private getFetchConfig(): RequestInit {
    return {
      cache: "no-store",
      ...this.fetchConfig,
      headers: {
        "Content-Type": "application/json",
      },
    };
  }

  public async get<T>(url: string): Promise<Response> {
    const baseURL = process.env.NEXT_PUBLIC_API_URL;
    const fullURL = new URL(url, baseURL).toString();
    const response = await fetch(fullURL, this.getFetchConfig());
    return response;
  }

  public async post<T>(
    url: string,
    body: Record<string, unknown>,
    options: RequestInit = {}
  ): Promise<Response> {
    const baseURL = process.env.NEXT_PUBLIC_API_URL;
    const fullURL = new URL(url, baseURL).toString();
    const mergeConfig = {
      ...this.getFetchConfig(),
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
    };

    return await fetch(fullURL, {
      ...mergeConfig,
      method: "POST",
      body: JSON.stringify(body),
    });
  }

  public async patch<T>(
    url: string,
    body: Record<string, unknown>,
    options: RequestInit = {}
  ): Promise<Response> {
    const baseURL = process.env.NEXT_PUBLIC_API_URL;
    const fullURL = new URL(url, baseURL).toString();
    const mergeConfig = {
      ...this.getFetchConfig(),
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
    };
    return await fetch(fullURL, {
      ...mergeConfig,
      method: "PATCH",
      body: JSON.stringify(body),
    });
  }

  public async delete<T>(url: string, options: RequestInit = {}): Promise<Response> {
    const baseURL = process.env.NEXT_PUBLIC_API_URL;
    const fullURL = new URL(url, baseURL).toString();
    const mergeConfig = {
      ...this.getFetchConfig(),
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
    };
    return await fetch(fullURL, {
      ...mergeConfig,
      method: "DELETE",
    });
  }
}
