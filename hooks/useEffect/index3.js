import React, { useEffect, useRef, useState } from "react";
import ReactDOM from 'react-dom';
import {log} from '../../utils/index'

export default function App() {
  const [n, setN] = useState(0);
  const [m, setM] = useState(1);
  useEffect(() => {
    log('useEffect invoked');
    // callback 返回的函数（一般用于清理工作）在下一次依赖项发生变化以及组件销毁之前执行，而传统的 componentWillUnmount 只在组件销毁时才会执行。
    return () => {
      log('callback invoked'); // 首次不会调用，但下一次m发生变化之前会调用。（可以理解为上一次m副作用的清理）
    };
  }, [m]);
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
