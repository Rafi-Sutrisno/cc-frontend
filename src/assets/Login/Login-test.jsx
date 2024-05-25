import React from "react";
import "./login.css";

const LoginUser = () => {
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
        alert(`Success here is your token : ${data.message}`); // Show success message
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
        <h2>Input your data</h2>
        <input type="text" name="email" placeholder="email" />
        <input type="text" name="password" placeholder="password" />
        <button type="submit" className="button-register">
          submit
        </button>
      </form>
    </>
  );
};

export default LoginUser;
