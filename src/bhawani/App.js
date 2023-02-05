import React, { useState } from "react";
import Form from "./components/Form";
import Profile from "./components/Profile";
import LoginContext from "./LoginContext";

function App() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  function handleChange(e) {
    e.target.name === "username"
      ? setusername(e.target.value)
      : setpassword(e.target.value);
  }

  return (
    <div>
      <LoginContext.Provider
        value={{ setFormSubmitted, handleChange, username, password }}
      >
        {formSubmitted ? <Profile /> : <Form />}
      </LoginContext.Provider>
    </div>
  );
}

export default App;
