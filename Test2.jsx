import Test1 from "./Test1";
import React,{useState,useRef,useEffect} from "react";

function Test2(props) {

  const [count,setCount] = useState(props.tester1); 
  console.log({count});

  return (
  <div>
    <h1>THIS IS THE TEST2 PAGE</h1>
    <h2>Test1 value: {props.temp}</h2>
  </div>
  )
}

export default Test2