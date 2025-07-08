// types/next-auth.d.ts
import NextAuth, { DefaultSession, DefaultUser } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and `getServerSession`
   * @example
   * const { data: session } = useSession()
   */
  interface Session {
    user: {
      id: string; // Example custom property
    } & DefaultSession["user"];
    accessToken?: string; // Optional access token
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
  }
}
