import React from "react";
import ReactDOM from "react-dom/client";

// import "./index.css";

// minified css
import "./build.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
