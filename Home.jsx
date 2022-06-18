import React,{useRef,useEffect} from 'react';

export default function Home() {

const renderCount  = useRef(0);
useEffect(()=> {renderCount.current = renderCount.current + 1}
)

  return (
    <div>
        <h1>test HOME</h1>
        <h2>Render count: {renderCount.current}</h2>
    </div>
  )
}