import React from "react";
import { Link } from "react-router-dom";
import useAuthentification from "./auth/use-authentication";

const HeaderBar: React.FC = () => {
  const { user, logout, isLoggedIn } = useAuthentification();

  let userInfo = null;
  if (isLoggedIn && user) {
    userInfo = (
      <div>
        Username is: {user.username}{" "}
        <button onClick={logout} type="button">
          logout
        </button>
      </div>
    );
  } else {
    userInfo = (
      <div>
        <Link to={{ pathname: "/login" }}>Login</Link>
      </div>
    );
  }

  return <header className="App-header">{userInfo}</header>;
};

export default HeaderBar;
