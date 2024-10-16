/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import {
  useInitLH,
  ListTasks,
  UserInfo,
} from "@littlehorse-enterprises/user-tasks";

import { keycloakconfigType } from "@/types/enum";
import styles from "./page.module.css";

export default function Home() {
  const response: any = useSession();
  const [initLhConfig, setInitLhConfig] = useState<keycloakconfigType>({});

  const fetchData = async () => {
    const response = await fetch("/api/getenv");
    const data = await response.json();
    setInitLhConfig(data.keycloakconfig);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const { isAuthorized } = useInitLH({
    tenantId: initLhConfig.tenantId,
    sessionToken: response?.data?.access_token,
    url: initLhConfig.serverUrl,
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
