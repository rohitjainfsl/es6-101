import React, {useContext} from "react";
import LoginContext from "../LoginContext";

function Profile() {

  const {username, password} = useContext(LoginContext)
  return (
    <>
      <h2>Username: {username}</h2>
      <h3>Password: {password}</h3>
    </>
  );
}

export default Profile;
