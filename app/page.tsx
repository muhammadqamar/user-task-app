/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useSession } from "next-auth/react";

import {
  useInitLH,
  ListTasks,
  UserInfo,
  DetailTask,
} from "@littlehorse-enterprises/user-tasks";

import styles from "./page.module.css";

// type SessionType = {
//   data: {
//     user: {
//       name: string;
//       email: string;
//     };
//     expires: string;
//     access_token: string;
//     id_token: string;
//     roles: string[];
//   };
//   status: string;
//   update: () => void;
// };
export default function Home() {
  const response: any = useSession();
  const { isAuthorized } = useInitLH({
    tenantId: process.env.KEYCLOAK_REALM,
    sessionToken: response?.data?.access_token,
    url: process.env.SERVER_URL,
  });

  return (
    <div className={styles.page}>
      {isAuthorized && (
        <>
          <UserInfo />
          <ListTasks />
          <DetailTask />
        </>
      )}
    </div>
  );
}
