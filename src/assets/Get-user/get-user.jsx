import React from "react";
import useSWR from "swr";
import "./get-user.css";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijg4NGEwZWU3LTZmN2EtNGFiMS1hYWQzLWE2YjhlZjgxY2IxNCIsIm5hbWUiOiJmaWx6YSIsImlzcyI6ImFkbWluIiwiZXhwIjoxNzE2NjA4OTc1LCJpYXQiOjE3MTY2MDE3NzV9.MOjbCjGU12vpKhn4SFeAC2SF7LmwXlqhrtbQqK_hTTA";

const fetcher = (url) =>
  fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  }).then((res) => {
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    return res.json();
  });

const fetcherNotoken = (...args) => fetch(...args).then((res) => res.json());

const getUser = () => {
  const { data, error, isValidating } = useSWR(
    "http://localhost:8080/user",
    fetcher
  );

  if (error) return <div className="failed">failed to load</div>;
  if (isValidating) return <div className="Loading">Loading...</div>;

  const users = data?.data;
  return (
    <>
      <div>
        <h1>User Information</h1>
        {users && users.length > 0 ? (
          users.map((user) => (
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
