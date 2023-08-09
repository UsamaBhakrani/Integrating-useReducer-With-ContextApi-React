import { createContext, useContext, useReducer } from "react";

const ContextInstance = createContext();

const ProductContext = ({ children }) => {
    
  const reducer = (action, state) => {};

  const [state, dispatch] = useReducer(reducer, {
    color: "blue",
  });

  return (
    <ContextInstance.Provider value={{ ...state }}>
      {children}
    </ContextInstance.Provider>
  );
};

// Custom Hook
const useProductContext = () => {
  return useContext(ContextInstance);
};

export { useProductContext };
export default ProductContext;
