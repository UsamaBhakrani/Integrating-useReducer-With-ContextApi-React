import { createContext, useContext, useReducer } from "react";
import product_reducer from "../reducers/product_reducer";
import {
  CHANGE_COLOR_TO_GRAY,
  CHANGE_COLOR_TO_BLACK,
  CHANGE_COLOR_TO_GREEN,
} from "../actions";

const ContextInstance = createContext();

const ProductContext = ({ children }) => {
  const [state, dispatch] = useReducer(product_reducer, {
    color: "Blue",
    size: "small",
  });

  console.log(state) ;

  const changeColorToGray = () => {
    dispatch({ type: CHANGE_COLOR_TO_GRAY });
  };
  const changeColorToBlack = () => {
    dispatch({ type: CHANGE_COLOR_TO_BLACK });
  };
  const changeColorToGreen = () => {
    dispatch({ type: CHANGE_COLOR_TO_GREEN });
  };

  return (
    <ContextInstance.Provider
      value={{
        ...state,
        changeColorToGray,
        changeColorToBlack,
        changeColorToGreen,
      }}
    >
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
