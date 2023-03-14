import React, { useState, useCallback } from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';

function App() {
  return (
    <>
      <Counter />
    </>
  );
}

// ========================================
const rootElement = document.getElementById('app');
ReactDOM.render(<App />, rootElement);
