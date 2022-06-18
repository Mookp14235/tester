import logo from './logo.svg';
import './App.css';
import NavBar from './component/Navbar/NavBar';
import Home from "./component/page/Home";
import Test1 from "./component/page/Test1";
import Test2 from "./component/page/Test2";
import { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);
  const previousValue = useRef(0);

  useEffect(() => {previousValue.current = count;},setCount)

  console.log({count});
 
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Test1" element={<Test1 setCount={setCount}/>} />
        <Route path="/Test2" element={<Test2 />} />
      </Routes>
    </Router>
  );
}

export default App;