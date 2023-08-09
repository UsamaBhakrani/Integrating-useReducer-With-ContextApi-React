import { useProductContext } from "./context/ProductContext";

const App = () => {
  const { color } = useProductContext();
  return <div>{color}</div>;
};

export default App;
