"use client";
import { useSession } from "next-auth/react";
import { NEXT_AUTH_STATUS } from "@/types/enum";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { LHContextProvider } from "@littlehorse-enterprises/user-tasks";

const ClientProvider = ({ children }) => {
  const { status } = useSession();
  const router = useRouter();

  if (status === NEXT_AUTH_STATUS.LOADING) {
    return "loading";
  }
  if (status === NEXT_AUTH_STATUS.SUCCESS) {
    return (
      <LHContextProvider>
        <button onClick={() => signOut()}>logout</button>
        {children}
      </LHContextProvider>
    );
  } else {
    router.push("/api/auth/signin");
  }

  return <></>;
};

export default ClientProvider;
