import React from "react";
import { useState } from "react";
import "./login.css";

const LoginUser = () => {
  const [token, setToken] = useState(false);
  const [bearerToken, setBearerToken] = useState("");

  function handlefetch(email, pass) {
    const data = {
      email: email,
      pass: pass,
    };
    console.log(data);
    // Configure the fetch request with method, headers, and body
    fetch("http://localhost:8080/inscure/login", {
      method: "POST", // Use POST method to send data
      headers: {
        "Content-Type": "application/json", // Specify content type as JSON
      },
      body: JSON.stringify(data), // Convert data to JSON string
    })
      .then(function (response) {
        if (!response.ok) {
          // Check if the response status is not OK
          return response.json().then((errorData) => {
            throw new Error(
              errorData.message || `HTTP error! status: ${response.status}`
            );
          });
        }
        return response.json(); // Parse response JSON
      })
      .then(function (data) {
        // Handle data from response
        console.log(data); // Log or process the received data
        setToken(!token);
        console.log(data.data);
        setBearerToken(data.data);
        // alert(`Success Login`); // Show success message
      })
      .catch(function (error) {
        // Handle errors
        console.error("Error:", error);
        alert(`Error: ${error.message}`); // Show error message in a window
      });
  }

  function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission behavior
    const formData = new FormData(event.target); // Get form data

    const email = formData.get("email"); // Get value of "email" input
    const password = formData.get("password"); // Get value of "password" input

    handlefetch(email, password); // Call handleFetch with form input values

    event.target.reset();
  }

  return (
    <>
      <form action="" onSubmit={handleSubmit} className="form-register">
        <h2>Login Page</h2>
        <input type="text" name="email" placeholder="email" />
        <input type="text" name="password" placeholder="password" />
        <button type="submit" className="button-register">
          submit
        </button>
      </form>

      <div className="token-div">
        <h2>{token ? "You are logged in" : "Not login yet"}</h2>
        <h3>{token ? `Here is your token :` : ""}</h3>
        <p>{token ? `${bearerToken}` : ""}</p>
      </div>
    </>
  );
};

export default LoginUser;
