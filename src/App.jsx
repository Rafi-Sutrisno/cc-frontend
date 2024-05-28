import React from "react";
import GetuserObject from "./assets/get-user-new/getUser";
import TokenObject from "./assets/Token/showToken";
import RegisterObject from "./assets/Register/Register";
import LoginObject from "./assets/Login/Login-test";
import HomeObject from "./assets/home/home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeObject />,
  },
  {
    path: "/register",
    element: <RegisterObject />,
  },
  {
    path: "/login",
    element: <LoginObject />,
  },
  {
    path: "/getuser",
    element: <GetuserObject />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
