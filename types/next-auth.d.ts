/* eslint-disable @typescript-eslint/no-unused-vars */
import { JWT } from "next-auth/jwt";
import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth/jwt" {
  interface JWT {
    access_token?: string;
    expiresAt?: number;
  }
}

declare module "next-auth" {
  interface Session {
    access_token: string;
  }
}