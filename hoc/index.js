import React from 'react'
import ReactDOM from 'react-dom'
import ChatApp from './ChatApp'

function App() {
  return (
    <>
      <ChatApp />
    </>
  )
}

// ========================================
const rootElement = document.getElementById('app');
// ReactDOM.createRoot(rootElement);
ReactDOM.render(<App />, rootElement);