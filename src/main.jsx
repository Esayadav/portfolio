import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App.jsx";

// Import global styles so layout/Tailwind classes apply
import "./index.css";
import "./App.css";

const rootEl = document.getElementById("root");
if (!rootEl) {
  throw new Error("Root element with id 'root' not found. Make sure index.html contains <div id=\"root\"></div>.");
}

ReactDOM.createRoot(rootEl).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
