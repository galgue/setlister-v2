import spotifyProvider from 'next-auth/providers/spotify';
import { env } from '@setlister/env/web';
import { AuthOptions } from 'next-auth';

export const authOptions: AuthOptions = {
  providers: [
    spotifyProvider({
      clientId: env.SPOTIFY_CLIENT_ID,
      clientSecret: env.SPOTIFY_CLIENT_SECRET,
    }),
  ],
};
