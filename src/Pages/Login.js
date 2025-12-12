import "./../Styles/Login.css";
import React, {useState } from "react";
const Login = () => {
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
  return (
    <div className="login">
      <form className="loginForm">
        <h2>Login Page</h2>
        <label>Email</label>
        <input type="email" placeholder="Email" required></input>
        <label>Password</label>
        <input type="password" placeholder="Password" required></input>
        <button className="loginButton" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;