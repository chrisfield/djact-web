import React from "react";
import LoginForm, { LoginFunction } from "./form";
import useAuthentication from "../use-authentication";

export type User = {
  username: string;
};

const Login: React.FC = () => {
  const { persistUserLogin } = useAuthentication();
  const handleLogin: LoginFunction = async ({ username, password }) => {
    const res = await fetch(
      `${process.env.REACT_APP_DJACT_API_URL}token-auth/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      }
    );
    const {
      token,
      username: un,
    }: { token: string; username: string } = await res.json();
    persistUserLogin({ token, username: un });
  };

  return <LoginForm onLogin={handleLogin} />;
};

export default Login;
