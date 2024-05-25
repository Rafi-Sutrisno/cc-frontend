import React from "react";
import { useState } from "react";
import "./register.css";

const registerUser = () => {
  //   const [user, setUser] = useState(null);

  function handlefetch() {
    const data = {
      name: "Daffa",
      email: "daffa@gmail.com",
      notelp: "081350361135",
      pass: "daffasutrisno",
    };

    // Configure the fetch request with method, headers, and body
    fetch("http://localhost:8080/inscure/add", {
      method: "POST", // Use POST method to send data
      headers: {
        "Content-Type": "application/json", // Specify content type as JSON
      },
      body: JSON.stringify(data), // Convert data to JSON string
    })
      .then(function (response) {
        // Handle response
        return response.json(); // Parse response JSON
      })
      .then(function (data) {
        // Handle data from response
        console.log(data); // Log or process the received data
      })
      .catch(function (error) {
        // Handle errors
        console.error("Error:", error);
      });
  }

  return (
    <>
      <button onClick={() => handlefetch()} className="button">
        Register User
      </button>
    </>
  );
};

export default registerUser;
