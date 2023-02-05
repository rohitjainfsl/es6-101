import React, { useContext } from "react";
import LoginContext from "../LoginContext";

function Profile() {
  const { username, password } = useContext(LoginContext);
  return (
    <>
      <h2>Username: {username}</h2>
      <h2>Password: {password}</h2>
    </>
  );
}

export default Profile;
