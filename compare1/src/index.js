import React from "react"
import ReactDOM from 'react-dom'
import ClassComponent from './class/index'
import FunctionComponentWithLifecycle from './function'
import FunctionComponent from "./function2"

function App() {
  return (
    <>
      <ClassComponent />
      <FunctionComponentWithLifecycle />
      <FunctionComponent />
    </>
  )
}

// ========================================
const rootElement = document.getElementById('app');
// ReactDOM.createRoot(rootElement);
ReactDOM.render(<App />, rootElement);
