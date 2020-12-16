import { useContext } from "react";
import { AuthContext, PersistUserLoginType, LogoutType } from "./context";
import UserType from "./use-typer";

type Return = {
  user?: UserType;
  isLoggedIn: boolean;
  persistUserLogin: PersistUserLoginType;
  logout: LogoutType;
};

const useAuthentication = (): Return => {
  const { isLoggedIn, user, persistUserLogin, logout } = useContext(
    AuthContext
  );

  return {
    user,
    isLoggedIn,
    persistUserLogin,
    logout,
  };
};

export default useAuthentication;
