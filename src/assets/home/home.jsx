import React from "react";
import "./home.css";
import { useNavigate } from "react-router-dom";

const home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <h1>Hello World!</h1>
        <div className="home">
          <button onClick={() => navigate("/register")} className="button">
            Go to Register
          </button>
          <button onClick={() => navigate("/login")} className="button">
            Go to Login
          </button>
          <button onClick={() => navigate("/getuser")} className="button">
            Go to Get User
          </button>
        </div>
      </div>
    </>
  );
};

export default home;
