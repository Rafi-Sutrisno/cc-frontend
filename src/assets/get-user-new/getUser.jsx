import React from "react";
import { useState } from "react";
import "./getUser.css";

const getUser = () => {
  const [userReady, setUser] = useState(false);
  const [userList, setUserList] = useState([]);

  function handlefetch(token) {
    // Configure the fetch request with method, headers, and body
    fetch("http://localhost:8080/user", {
      method: "GET", // Use POST method to send data
      headers: {
        "Content-Type": "application/json", // Specify content type as JSON
        Authorization: `Bearer ${token}`,
      },
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
        setUser(!userReady);
        setUserList(data.data);
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

    const token = formData.get("token"); // Get value of "name" input

    handlefetch(token); // Call handleFetch with form input values

    event.target.reset();
  }

  return (
    <>
      <form action="" onSubmit={handleSubmit} className="form-register">
        <h2>Get List User Page</h2>
        <input type="text" name="token" placeholder="token" />
        <button type="submit" className="button-register">
          submit
        </button>
      </form>

      <div>
        <h2>User Information</h2>
        {userList && userList.length > 0 ? (
          userList.map((user) => (
            <div key={user.id} className="user-card">
              <p>
                <strong>ID:</strong> {user.id}
              </p>
              <p>
                <strong>Name:</strong> {user.name}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>Phone:</strong> {user.notelp}
              </p>
              <p>
                <strong>Role:</strong> {user.role}
              </p>
            </div>
          ))
        ) : (
          <div>No user data</div>
        )}
      </div>
    </>
  );
};

export default getUser;
