import React, {useReducer} from 'react'

const initialState = {
    value: 0,
  };
  const reducer = (state, action) => {
    if (action.type === "INCREASE") {
      return { ...state, value: state.value + 1 };
    }
    if (action.type === "DECREASE") {
      return { ...state, value: state.value - 1 };
    }
    if (action.type === "RESET") {
      return { ...state, value: 0 };
    }
    
    return
  };
const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const increase = () => {
      dispatch({ type: "INCREASE" });
    };
    const decrease = () => {
      dispatch({ type: "DECREASE" });
    };
    const reset = () => {
      dispatch({ type: "RESET" });
    };
    return (
      <main className="main">
        <div className="container">
          <h1>Counter</h1>
          <span className="value">{state.value}</span>
          {/* <input type="number" className="value" /> */}
          <div className="count-btns">
            <button onClick={increase}>increase</button>
            <button onClick={reset}>reset</button>
            <button onClick={decrease}>decrease</button>
          </div>
        </div>
      </main>
    );
}

export default Counter
