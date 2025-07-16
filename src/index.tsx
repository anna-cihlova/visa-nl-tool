import React from "react";
import ReactDOM from "react-dom/client";
import "./App.scss";
import App from "./App";
// Import the styles:
import "@visa/nova-styles/styles.css";
// Import your desired theme:
import "@visa/nova-styles/themes/visa-light/index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
