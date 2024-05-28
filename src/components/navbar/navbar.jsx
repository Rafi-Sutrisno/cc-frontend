import React from "react";
import { useNavigate } from "react-router-dom";
import "./navbar.css";

const navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="navbar">
        <h3>Hello World!</h3>
        <div className="home">
          <button onClick={() => navigate("/")} className="button">
            Go Back Home
          </button>
        </div>
      </div>
    </>
  );
};

export default navbar;
