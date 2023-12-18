import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import MainProvider from "./contexts/MainProvider.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <MainProvider>
        <App />
      </MainProvider>
    </BrowserRouter>
  </React.StrictMode>
);
