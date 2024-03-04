import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

document.addEventListener("load", () => {
    console.log('page loaded')
  const root = createRoot(
    document.body.appendChild(document.createElement("div"))
  );
  root.render(<App />);
});