import NextAuth from "next-auth";
import KeycloakProvider from "next-auth/providers/keycloak";
import { jwtDecode } from "jwt-decode";
// import { encrypt } from "@/app/utils/encryption";

// async function refreshAccessToken(token) {
//   const resp = await fetch(
//     `${process.env.KEYCLOAK_HOST}/realms/${process.env.KEYCLOAK_REALM}/protocol/openid-connect/token`,
//     {
//       headers: { "Content-Type": "application/x-www-form-urlencoded" },
//       body: new URLSearchParams({
//         client_id: process.env.KEYCLOAK_CLIENT_ID,
//         client_secret: process.env.KEYCLOAK_CLIENT_SECRET,
//         grant_type: "refresh_token",
//         refresh_token: token.refresh_token,
//       }),
//       method: "POST",
//     }
//   );
//   const refreshToken = await resp.json();
//   if (!resp.ok) throw refreshToken;

//   return {
//     ...token,
//     access_token: refreshToken.access_token,
//     decoded: jwtDecode(refreshToken.access_token),
//     id_token: refreshToken.id_token,
//     expires_at: Math.floor(Date.now() / 1000) + refreshToken.expires_in,
//     refresh_token: refreshToken.refresh_token,
//   };
// }

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const authOptions: any = {
  providers: [
    KeycloakProvider({
      clientId: `${process.env.KEYCLOAK_CLIENT_ID}`,
      clientSecret: `${process.env.KEYCLOAK_CLIENT_SECRET}`,
      issuer: `${process.env.KEYCLOAK_HOST}/realms/${process.env.KEYCLOAK_REALM}`,
    }),
  ],

  callbacks: {
    async jwt({ token, account }: unknown) {
      const nowTimeStamp = Math.floor(Date.now() / 1000);

      if (account) {
        token.decoded = jwtDecode(account.access_token);
        token.access_token = account.access_token;
        token.id_token = account.id_token;
        token.expires_at = account.expires_at;
        token.refresh_token = account.refresh_token;
        return token;
      }
      if (nowTimeStamp < token.expires_at) {
        return token;
      }

      //   try {
      //     const refreshedToken = await refreshAccessToken(token);

      //     return refreshedToken;
      //   } catch (error) {
      //     return { ...token, error: "RefreshAccessTokenError" };
      //   }
    },
    async session({ session, token }: unknown) {
      session.access_token = token.access_token;
      session.id_token = token.id_token;
      session.roles = token.decoded.realm_access.roles;
      session.error = token.error;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
