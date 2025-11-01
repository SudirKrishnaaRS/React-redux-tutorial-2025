import Counter from "./components/Counter";
import { useDispatch } from "react-redux";
import "./styles.css";

export default function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <Counter />
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </div>
  );
}
