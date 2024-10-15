import { keycloakconfigType } from "@/types/enum";
export async function GET() {
  
    const keycloakconfig:keycloakconfigType = {
      serverUrl: process.env.SERVER_URL,
      tenantId: process.env.KEYCLOAK_REALM,
    };
    
    return new Response(JSON.stringify({ keycloakconfig }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  