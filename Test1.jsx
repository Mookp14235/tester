import React,{useState,useCallback} from "react";
import {Link} from "react-router-dom";
import Test2 from "./Test2";

function Test1(props) {
  const [scount,setSCount] = useState(0); 

  const increaseCount = () => {
    props.setCount((c) => c + 1);
  };

  const decreaseCount = () => {
    setCount((c) => c - 1);
  };



  return (
  <div>
    <h1>THIS IS THE TEST1 PAGE</h1>
    <button onClick={decreaseCount}>-</button>
    <span>{count}</span>
    <button onClick={increaseCount}>+</button>
  </div>
  )
}

export default Test1