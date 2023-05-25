import React from 'react'
import ReactDOM from 'react-dom'
import Page from './App';

function App() {
  return (
    <>
      <Page />
    </>
  )
}

// ========================================
const rootElement = document.getElementById('app');
// ReactDOM.createRoot(rootElement);
ReactDOM.render(<App />, rootElement);
