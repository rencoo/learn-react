import React, { useEffect, useRef, useState } from "react";
import ReactDOM from 'react-dom';
import {log} from '../../utils/index'

export default function App() {
  const [n, setN] = useState(0);
  useEffect(() => { // 空数组作为依赖项，则只在首次执行时触发，对应到 Class 组件就是 componentDidMount。
    log('useEffect invoked')
  }, []);
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
