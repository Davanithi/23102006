import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  function Increment() {
    setCount(count + 1);
  }
  function Decrement() {
    setCount(count - 1);
  }
  function Reset() {
    setCount(0);
  }
  return (
    
    <>

      <h1>{count}</h1>
      <button onClick={Increment} style={{ background: "blue", color: "white" }}>
        Increment
      </button>
      <button onClick={Decrement} style={{ background: "red", color: "white" }}>
        Decrement
      </button>
      <button onClick={Reset} style={{ background: "green", color: "white" }}>
        Reset
      </button>


    </>
  )
}
  