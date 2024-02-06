import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";

import "./assets/styles/index.css";
import "react-toastify/dist/ReactToastify.css";

import Login from "./pages/Login";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Login />
    <ToastContainer
      autoClose={2000}
      hideProgressBar={true}
      icon={false}
      closeButton={false}
    />
  </React.StrictMode>
);
