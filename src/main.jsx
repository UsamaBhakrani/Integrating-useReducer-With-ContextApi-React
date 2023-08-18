import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ProductContext from "./context/ProductContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ProductContext>
    <App />
  </ProductContext>
);
