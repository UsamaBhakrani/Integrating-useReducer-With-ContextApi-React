import { useProductContext } from "./context/ProductContext";

const App = () => {
  const { color, changeColorToGray, changeColorToBlack, changeColorToGreen } =
    useProductContext();
  return (
    <div>
      <div>{color}</div>
      <button onClick={changeColorToGray}>Gray</button>
      <button onClick={changeColorToBlack}>Black</button>
      <button onClick={changeColorToGreen}>Green</button>
    </div>
  );
};

export default App;
