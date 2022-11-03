import { useReducer } from "react"

export const useCounter = () => {
    const initialState = {
        count: 0,
      };
      const reducer = (state, action) => {
        if (action.type === "INCREASE") {
          return { ...state, count: state.count + 1 };
        }
        if (action.type === "DECREASE") {
          return { ...state, count: state.count - 1 };
        }
        if (action.type === "RESET") {
          return { ...state, count: 0 };
        }
        if (action.type === "INPUT_VALUE") {
          return { ...state, count: parseFloat(action.payload) };
        }
      
        return state;
      };
      const [state, dispatch] = useReducer(reducer, initialState);

      const increment = () => {
        dispatch({ type: "INCREASE" });
      };
      const decrement = () => {
        dispatch({ type: "DECREASE" });
      };
      const reset = () => {
        dispatch({ type: "RESET" });
      };
      const setValue = (e) => {
        dispatch({ type: "INPUT_VALUE", payload: e.target.value });
      };
      
      return {increment, decrement, reset, setValue, state}
}