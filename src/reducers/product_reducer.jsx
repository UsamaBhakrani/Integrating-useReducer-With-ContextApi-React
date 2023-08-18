import {
  CHANGE_COLOR_TO_GRAY,
  CHANGE_COLOR_TO_BLACK,
  CHANGE_COLOR_TO_GREEN,
} from "../actions";

const product_reducer = (state, action) => {
  if (action.type === CHANGE_COLOR_TO_GRAY) {
    return { ...state, color: "Gray" };
  }
  if (action.type === CHANGE_COLOR_TO_BLACK) {
    return { ...state, color: "Black" };
  }
  if (action.type === CHANGE_COLOR_TO_GREEN) {
    return { ...state, color: "Green", size: "large" };
  }
  throw Error("Does not Match any Color");
};

export default product_reducer;
