import React, { useEffect, useRef, useState } from "react";
import ReactDOM from 'react-dom';
import {log} from '../../utils/index'

export default function App() {
  const [n, setN] = useState(0);
  useEffect(() => { // 没有依赖项，则每次 render 后都会重新执行
    log('useEffect invoked')
  });
  return (
    <div className="App">
      <h1>n:{n}</h1>
      <button
        onClick={() => {
          setN(n + 1);
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
