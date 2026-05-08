import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import { Toaster } from "react-hot-toast";
import "./index.css";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <React.StrictMode>

    <Toaster position="top-right" />

    <App />

  </React.StrictMode>
);