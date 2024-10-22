"use client";
import { useSession } from "next-auth/react";
import {
  useInitLH,
  ListTasks,
  UserInfo,
} from "@littlehorse-enterprises/user-tasks";

import { keycloakconfigType } from "@/types/keycloak";
import { KEYCLOAK_ROLES } from "@/types/enum";

export const UserTaskInit: React.FC<keycloakconfigType> = ({
  serverUrl,
  tenantId,
}) => {
  const session = useSession();
  const { isAuthorized } = useInitLH({
    tenantId: tenantId,
    sessionToken: session.data?.access_token,
    url: serverUrl,
  });

  if (!isAuthorized) {
    return <></>;
  }

  const isAdmin = () => {
    if (session.data?.roles?.includes(KEYCLOAK_ROLES.ADMIN)) {
      return true;
    }
    return false;
  };
  
  return (
    <>
      <UserInfo />
      <ListTasks admin={isAdmin()} />
    </>
  );
};
