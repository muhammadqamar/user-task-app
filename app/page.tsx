import { UserTaskInit } from "@/app/components/userTaskInit";
import { keycloakconfigType } from "@/types/keycloak";
import styles from "./page.module.css";

const keycloakconfig: keycloakconfigType = {
  serverUrl: process.env.SERVER_URL,
  tenantId: process.env.KEYCLOAK_REALM,
};

export default function Home() {
  return (
    <div className={styles.page}>
      <UserTaskInit {...keycloakconfig} />
    </div>
  );
}
