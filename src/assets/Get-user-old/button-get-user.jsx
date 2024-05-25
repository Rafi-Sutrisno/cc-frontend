import { useState } from "react";
import Userobject from "./get-user";
import React from "react";
import "./get-user.css";

export default function getUser() {
  const [user, setUser] = useState(false);

  function handleClick() {
    setUser(!user);
  }
  return (
    <>
      <button onClick={handleClick} className="button">
        {user ? "Hide User" : "Get User"}
      </button>
      <div>{user && <Userobject />}</div>
    </>
  );
}
