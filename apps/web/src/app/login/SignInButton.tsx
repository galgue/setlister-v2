'use client';

import { Button } from '@setlister/ui/button';
import { signIn } from 'next-auth/react';

export default function SignInButton() {
  return (
    <Button
      onClick={() =>
        signIn('spotify', {
          callbackUrl: '/app',
        })
      }
    >
      Sign in To Spotify
    </Button>
  );
}
