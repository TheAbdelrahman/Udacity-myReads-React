import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";


/**
 * ReactDOM.render is no longer supported in React 18
 * Didn't use createRoot in case of older node version 
 */

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById("root")
);