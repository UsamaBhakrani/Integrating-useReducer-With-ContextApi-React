import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ProductContext from "./context/ProductContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ProductContext>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ProductContext>
);
