import React, { useReducer} from "react";
import { useCounter } from "../useCounter";

const Counter = () => {
  const {increment, decrement, reset, setValue, state} = useCounter()
 
  return (
    <main className="main">
      <div className="container">
        <h1>Counter</h1>
          <input
            type="number"
            className="value"
            value={state.count}
            onChange={(e) => setValue(e)}
            placeholder='0'
          />
        <div className="count-btns">
          <button onClick={increment}>increase</button>
          <button onClick={reset}>reset</button>
          <button onClick={decrement}>decrease</button>
        </div>
      </div>
    </main>
  );
};

export default Counter;
