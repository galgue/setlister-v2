import { getSession } from '@setlister/auth/server';
import SignInButton from './SignInButton';

const LoginPage = async () => {
  const session = await getSession();

  if (session) {
    return <p>Already signed in</p>;
  }

  return (
    <div>
      <h1>Login</h1>
      <SignInButton />
    </div>
  );
};

export default LoginPage;
