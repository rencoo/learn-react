import React from 'react'
import ReactDOM from 'react-dom'
import TaskApp from './App';

function App() {
  return (
    <>
      <TaskApp />
    </>
  )
}

// ========================================
const rootElement = document.getElementById('app');
// ReactDOM.createRoot(rootElement);
ReactDOM.render(<App />, rootElement);
