'use client';
import { Button } from '@setlister/ui/button';
import { signOut } from 'next-auth/react';

export const LogoutButton = () => {
  return (
    <Button
      onClick={() => {
        signOut();
      }}
    >
      Sign out
    </Button>
  );
};
