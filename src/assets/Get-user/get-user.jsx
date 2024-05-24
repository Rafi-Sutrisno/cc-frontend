import React from "react";
import useSWR from "swr";
import "./get-user.css";

const token = "token jwt diambil setelah login";

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
  //   console.log(user[0]);

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
