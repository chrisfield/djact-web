import React, { createContext, useState, useEffect, useCallback } from "react";
import { useHistory, useLocation } from "react-router-dom";
import UserType from "./use-typer";

export type PersistUserLoginType = (args: {
  token: string;
  username: string;
}) => void;

export type LogoutType = () => void;

type ContextProps = {
  isLoggedIn: boolean;
  persistUserLogin: PersistUserLoginType;
  user?: UserType;
  logout: () => void;
};

const noopPersistUserLogin: PersistUserLoginType = ({
  token,
  username,
}): void => {
  if (token && username) return undefined;
  return undefined;
};
const undefinedUser = (undefined as unknown) as UserType;

export const AuthContext = createContext<ContextProps>({
  isLoggedIn: false,
  user: undefinedUser,
  persistUserLogin: noopPersistUserLogin,
  logout: () => undefined,
});

const AuthProvider: React.FC = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(!!localStorage.getItem("token"));
  const [user, setUser] = useState(undefinedUser);

  const history = useHistory();
  const { search } = useLocation();

  useEffect(() => {
    (async () => {
      if (isLoggedIn) {
        const res = await fetch(
          `${process.env.REACT_APP_DJACT_API_URL}core/current_user/`,
          {
            headers: {
              Authorization: `JWT ${localStorage.getItem("token")}`,
            },
          }
        );
        if (res.status !== 200) {
          setLoggedIn(false);
          setUser(undefinedUser);
        } else {
          const { username } = await res.json();
          setUser({ username });
        }
      }
    })();
  }, [isLoggedIn]);

  const persistUserLogin = useCallback(
    ({ token, username }: { token: string; username: string }) => {
      localStorage.setItem("token", token);
      setLoggedIn(true);
      setUser({ username });
      const query = new URLSearchParams(search);
      const next = query.get("next") || "/";
      history.replace(next);
    },
    [history, search, setUser]
  );

  const logout = useCallback(() => {
    localStorage.removeItem("token");
    setLoggedIn(false);
    setUser(undefinedUser);
    history.replace("/");
  }, [history]);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        user,
        persistUserLogin,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
