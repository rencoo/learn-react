import React, { useEffect, useRef, useState } from "react";
import ReactDOM from 'react-dom';
import {log} from '../../utils/index'

export default function App() {
  const r = useRef(0);
  const [n, setN] = useState(0);
  useEffect(() => {
    log('useEffect invoked')
    r.current += 1;
    if (r.current > 1) {
      console.log("r.current:" + r.current);
      console.log("n:" + n);
    }
  });
  return (
    <div className="App">
      <h1>n:{n}</h1>
      <h1>r.current{r.current}</h1>
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
