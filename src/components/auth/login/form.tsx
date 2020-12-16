import React, { useState } from "react";
import { Link } from "react-router-dom";

type UsernameAndPassword = {
  username: string;
  password: string;
};

export type LoginFunction = (unpw: UsernameAndPassword) => Promise<void>;

type Props = {
  onLogin: LoginFunction;
};

const Login: React.FC<Props> = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onLogin({ username, password });
  };

  return (
    <div>
      Not got an account? <Link to="/signup">Signup here</Link>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username01">
          Username:
          <input
            id="username01"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label htmlFor="password01">
          Password:
          <input
            id="password01"
            type="password"
            name="password"
            autoComplete="on"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
