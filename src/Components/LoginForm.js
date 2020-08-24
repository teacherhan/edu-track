import React from "react";

const loginForm = () => {
  return (
    <div>
      <p>Login</p>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </div>
  );
};

export default loginForm;
