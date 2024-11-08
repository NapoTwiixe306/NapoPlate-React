// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";
import { HelmetProvider } from "react-helmet-async";
import CustomProvider from "./CustomProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HelmetProvider>
      <CustomProvider>
        <App />
      </CustomProvider>
    </HelmetProvider>
  </React.StrictMode>,
);
