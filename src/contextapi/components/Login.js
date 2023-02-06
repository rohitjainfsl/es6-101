import React, { useContext } from "react";
import LoginContext from "../LoginContext";

function Login() {
  const { handleChange, setFormSubmitted } = useContext(LoginContext);
  function handleSubmit(e) {
    e.preventDefault();
    setFormSubmitted(true);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          name="username"
          onChange={handleChange}
        ></input>
        <input
          type="text"
          placeholder="Enter your password"
          name="password"
          onChange={handleChange}
        ></input>
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login;
