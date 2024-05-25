import React from "react";
import GetuserObject from "./assets/get-user-new/getUser";
import TokenObject from "./assets/Token/showToken";
import RegisterObject from "./assets/Register/Register";
import LoginObject from "./assets/Login/Login-test";
import "./App.css";

function App() {
  return (
    <>
      <div className="flex">
        <h1>Hello World!</h1>
        <LoginObject />
        <RegisterObject />
        <TokenObject />
        <GetuserObject />
      </div>
    </>
  );
}

export default App;
