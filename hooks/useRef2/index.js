import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import Timer from './Timer';

function App() {
  return (
    <>
      <Timer />
    </>
  );
}

// ========================================
const rootElement = document.getElementById('app');
ReactDOM.render(<App />, rootElement);