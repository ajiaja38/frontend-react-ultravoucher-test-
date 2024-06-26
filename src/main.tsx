import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App.tsx";
import "./app/style/index.css";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
