import React, { useState } from "react";

const Login = ({ onLogin }) => {
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (password === "admin123") {
      onLogin(true);
    } else {
      alert("Incorrect password!");
    }
  };

  return (
    <div className="login">
      <h2>Admin Login</h2>
      <input
        type="password"
        placeholder="Enter admin password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
