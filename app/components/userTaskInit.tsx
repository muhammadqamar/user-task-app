"use client";
import { useSession } from "next-auth/react";
import {
  useInitLH,
  ListTasks,
  UserInfo,
} from "@littlehorse-enterprises/user-tasks";

import { keycloakconfigType } from "@/types/keycloak";

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

  return (
    <>
      <UserInfo />
      <ListTasks />
    </>
  );
};
