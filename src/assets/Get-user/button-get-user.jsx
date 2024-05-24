import { useState } from "react";
import Userobject from "./get-user";
import React from "react";

export default function Square() {
  const [user, setUser] = useState(false);

  function handleClick() {
    setUser(!user);
  }
  return (
    <>
      <button onClick={handleClick}>{user ? "Hide User" : "Get User"}</button>
      <div>{user && <Userobject />}</div>
    </>
  );
}
