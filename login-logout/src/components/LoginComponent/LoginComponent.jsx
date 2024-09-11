import React from "react";
import { useState } from "react";
import "./LoginComponent.css";

const LoginComponent = ({onLogin}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({username, password});
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username..."
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password..."
            required
          />
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default LoginComponent;
