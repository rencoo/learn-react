import React, { useRef } from 'react';
import ReactDOM from 'react-dom';

function App() {
  const r = useRef(0);
  console.log(r);
  const add = () => {
    r.current += 1;
    console.log(`r.current:${r.current}`);
  };
  return (
    <div className="App">
      <h1>r的current:{r.current}</h1>
      <button onClick={add}>点击+1</button>
    </div>
  );
}

// ========================================
const rootElement = document.getElementById('app');
ReactDOM.render(<App />, rootElement);

// ref.current属性的值发生变化，不会跟useState或者useReducer一样触发页面变化
