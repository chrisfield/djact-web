import SignupForm, {SignupFunction} from './form'
import useAuthentication from '../use-authentication';

export type User = {
  username: string;
};

const Login: React.FC = () => {
  const { persistUserLogin } = useAuthentication();
  const handleSignup: SignupFunction = async ({username, password}) => {
    const res = await fetch(`${process.env.REACT_APP_DJACT_API_URL}core/users/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username, password})
    });
    const { token, username: un }: {token: string; username: string} = await res.json();
    persistUserLogin({token, username: un})
  };

  return <SignupForm onSignup={handleSignup} />
};

export default Login;
