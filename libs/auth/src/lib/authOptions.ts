import spotifyProvider from 'next-auth/providers/spotify';
import { env } from '@setlister/env/web';
import { AuthOptions, Session } from 'next-auth';
import { JWT } from 'next-auth/jwt';

export const authOptions: AuthOptions = {
  providers: [
    spotifyProvider({
      clientId: env.SPOTIFY_CLIENT_ID,
      clientSecret: env.SPOTIFY_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async jwt({ token, account, ...rest }) {
      if (account && account.access_token) {
        token.access_token = account.access_token;
        token.provider = account.provider;
      }
      return token;
    },
    async session({ session, token, ...rest }) {
      return {
        ...session,
        token,
      };
    },
  },
};
declare module 'next-auth/jwt' {
  interface JWT {
    access_token: string;
    provider: string;
  }
}

declare module 'next-auth' {
  interface Session {
    token: JWT;
  }
}
