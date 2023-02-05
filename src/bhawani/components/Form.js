import React, { useContext } from "react";
import LoginContext from "../LoginContext";

function Form() {
  const { setFormSubmitted, handleChange } = useContext(LoginContext);

  function handleSubmit(e) {
    e.preventDefault();
    setFormSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="Enter your name"
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Enter your Password"
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
