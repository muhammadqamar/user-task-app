"use client";
import { SessionProvider } from "next-auth/react";
import ClientProvider from "./clientProvider";
const GlobalProvider = ({ children }) => {
  return (
    <main>
      <SessionProvider>
        <ClientProvider>{children}</ClientProvider>
      </SessionProvider>
    </main>
  );
};

export default GlobalProvider;
