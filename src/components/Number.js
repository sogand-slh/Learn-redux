import React from "react";
import { increaseNum, decreaseNum } from "../redux/number/numberActions";
import { useSelector, useDispatch } from "react-redux";

const Number = () => {
  const number = useSelector((state) => state.numberState.number);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Number</h1>
      <div>
        <button onClick={() => dispatch(increaseNum())}>+</button>
        <span>{number}</span>
        <button onClick={() => dispatch(decreaseNum())}>-</button>
      </div>
    </div>
  );
};

export default Number;
