import React, { createContext, useState } from "react";
import Login from "./components/Login";
import Profile from "./components/Profile";
import LoginContext from "./LoginContext";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  function handleChange(e) {
    console.log(e.target.name)
    e.target.name === "username"
      ? setUsername(e.target.value)
      : setPassword(e.target.value);
  }

  

  return (
    <div>
      <LoginContext.Provider value={{ username, password, setUsername, setPassword, setFormSubmitted, handleChange }}>
        {(formSubmitted) ? <Profile /> : <Login />}
      </LoginContext.Provider>
    </div>
  );
}

export default App;
