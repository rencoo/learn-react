import React, { useEffect, useRef, useState } from "react";
import ReactDOM from 'react-dom';
import {log} from '../../utils/index'

export default function App() {
  const [n, setN] = useState(0);
  const [m, setM] = useState(1);
  useEffect(() => {
    log('useEffect invoked')
  }, [m]); // 第一次以及依赖项发生变化后执行；仅第一次和m变化时会执行
  return (
    <div className="App">
      <h1>n:{n}</h1>
      <h1>m:{m}</h1>
      <button
        onClick={() => {
          setN(n + 1);
        }}
      >
        {" "}
        +1
      </button>
      <button
        onClick={() => {
          setM(m + 1);
        }}
      >
        {" "}
        +1
      </button>
    </div>
  );
}

// ========================================
const rootElement = document.getElementById('app');
ReactDOM.render(<App />, rootElement);
