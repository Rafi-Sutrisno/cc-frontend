import React from "react";
import GetuserObject from "./assets/Get-user/button-get-user";
import TokenObject from "./assets/Token/showToken";
import RegisterObject from "./assets/Register/Register";
import "./App.css";

function App() {
  return (
    <>
      <div className="flex">
        <h1>Hello World!</h1>
        <RegisterObject />
        <TokenObject />
        <GetuserObject />
      </div>
    </>
  );
}

export default App;
