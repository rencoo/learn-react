import React from 'react';
import ReactDOM from 'react-dom';
import ImpureCup from './impure';
import PureCup from './pure';

// 使用严格模式，在开发模式下calling 2次的特性，来检测是否是纯组件
function App() {
  return (
    <>
      {/*  impure, so calling it twice broke it. */}
      {/* Notice how the example displayed “Guest #2”, “Guest #4”, and “Guest #6” instead of “Guest #1”, “Guest #2”, and “Guest #3”.  */}
      <ImpureCup />
      <ImpureCup />
      <ImpureCup />
      {/* But the fixed pure version works even if the function is called twice every time. Pure functions only calculate, so calling them twice won’t change anything */}
      <PureCup guest={1} />
      <PureCup guest={2} />
      <PureCup guest={3} />
    </>
  );
}

// ========================================
const rootElement = document.getElementById('app');
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
rootElement);
