import { getSession } from '@setlister/auth/server';
import { redirect } from 'next/navigation';
import { PropsWithChildren } from 'react';

const AppLayout = async ({ children }: PropsWithChildren) => {
  const session = await getSession();

  if (!session) {
    redirect('/login');
  }

  return children;
};

export default AppLayout;
