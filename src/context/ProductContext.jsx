import { createContext, useContext, useState } from "react";

const ContextInstance = createContext();

const ProductContext = ({ children }) => {
  const [color, setColor] = useState("blue");
  return (
    <ContextInstance.Provider value={{ color }}>
      {children}
    </ContextInstance.Provider>
  );
};

const useProductContext = () => {
  return useContext(ContextInstance);
};

export { useProductContext };
export default ProductContext;
