/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useSession } from "next-auth/react";

import {
  useInitLH,
  ListTasks,
  UserInfo,
} from "@littlehorse-enterprises/user-tasks";

import styles from "./page.module.css";

<<<<<<< HEAD
export default function Home() {
  const response: any = useSession();
=======
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
>>>>>>> a2cd4e3e740bfa8471f818986c83116f5dbc807b

  const { isAuthorized } = useInitLH({
    tenantId: process.env.NEXT_PUBLIC_KEYCLOAK_REALM,
    sessionToken: response?.data?.access_token,
    url: process.env.NEXT_PUBLIC_SERVER_URL,
  });
  
  return (
    <div className={styles.page}>
      {isAuthorized && (
        <>
          <UserInfo />
          <ListTasks admin />
        </>
      )}
    </div>
  );
}
