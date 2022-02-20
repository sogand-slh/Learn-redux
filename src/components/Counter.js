import React, { useState } from "react";
import { increase, decrease } from "./../redux/counter/counterActions";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const [value, setValue] = useState(1);
  const counter = useSelector((state) => state.counterState.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter</h1>
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <div>
        <button onClick={() => dispatch(increase(+value))}>+</button>

        <span>{counter}</span>
        <button onClick={() => dispatch(decrease(+value))}>-</button>
      </div>
    </div>
  );
};

export default Counter;
