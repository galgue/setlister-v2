import { getSession } from '@setlister/auth/server';
import { LogoutButton } from './Logout';

const AppPage = async () => {
  const session = await getSession();
  return (
    <div>
      <h1>App Page</h1>
      <p>
        {session ? (
          <>
            <p>Signed in as {session.user?.name}</p>
            <LogoutButton />
          </>
        ) : (
          <p>Not signed in</p>
        )}
      </p>
    </div>
  );
};

export default AppPage;
