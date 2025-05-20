import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);
  function incrementCounter() {
    if(counter<20) setCounter(counter + 1);
  }
  function decrementCounter() {
    if(counter>0) setCounter(counter - 1);
  }
  return (
    <>
      <h1>{counter}</h1>
      <button onClick={incrementCounter}>Increase</button>
      <button onClick={decrementCounter}>Decrease</button>
    </>
  );
}

export default App;
