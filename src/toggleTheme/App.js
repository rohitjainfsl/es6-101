import React, { useState } from "react";
import Switch from "react-switch";
import "./style.css";
import Form from "./Form";

function App() {
  const [Theme, setTheme] = useState("light");
  function ChangeThemeColour() {
    setTheme(Theme === "dark" ? "light" : "dark");
  }
  return (
    <>
      <div className={`fullscreen ${Theme}`}>
        <Form />
        <Switch checked={Theme === "dark"} onChange={ChangeThemeColour} />
      </div>
    </>
  );
}

export default App;
