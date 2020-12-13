import React from 'react';
import useAuthentification from './auth/use-authentication';
import { Link } from 'react-router-dom';

const HeaderBar: React.FC = () => {

  const { user, logout, isLoggedIn } = useAuthentification();

  let userInfo = null;
  if (isLoggedIn && user) {
    userInfo = <div>Username is: {user.username} <span onClick={logout}>logout</span></div>;
  } else {
    userInfo = (
      <div>
        <Link to={{pathname: "/login"}}>Login</Link>
      </div>
    );
  }

  return (
    <header className="App-header">
      {userInfo}
    </header>
  );
}

export default HeaderBar;
