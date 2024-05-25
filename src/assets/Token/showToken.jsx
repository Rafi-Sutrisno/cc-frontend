import React, { useState, useEffect } from "react";
import { TokenProvider, useToken } from "./token";
import "./token.css";

const bearertoken = "example token";

const DisplayToken = () => {
  const { token, setToken } = useToken();

  // Set the token when the component mounts
  useEffect(() => {
    setToken(bearertoken);
  }, [setToken]);

  return <div>{token}</div>;
};

const Login = () => {
  const [login, setLogin] = useState(false);
  const { token } = useToken();

  const handleClick = () => {
    setLogin(!login);
  };

  return (
    <>
      <div>
        <button onClick={handleClick} className="button">
          {login ? "Dont Show" : "Show Token"}
        </button>
        {login && <DisplayToken />}
      </div>
    </>
  );
};

const App = () => {
  return (
    <TokenProvider>
      <Login />
    </TokenProvider>
  );
};

export default App;
