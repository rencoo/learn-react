import React from 'react';
import { log } from '../../../utils/index';

// function Counter(props) {
//   log('Counter invoked');
//   const { handleIncrement } = props;
//   return <button onClick={handleIncrement}>+</button>;
// }
const Counter = React.memo(function Com(props) {
  log('Counter Com invoked');
  const { handleIncrement } = props;
  return <button onClick={handleIncrement}>+</button>;
});

// React.PureComponent 与 React.Component 很相似。
// 两者的区别在于 React.Component 并未实现 shouldComponentUpdate()，而 React.PureComponent 中以浅层对比 prop 和 state 的方式来实现了该函数。
// 如果赋予 React 组件相同的 props 和 state，render() 函数会渲染相同的内容，那么在某些情况下使用 React.PureComponent 可提高性能。
// class Counter extends React.PureComponent { // 使用React.PureComponent避免每次父组件的渲染导致子组件重新渲染（有些是无意义的）
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     log('Counter Com render invoked');
//     const { handleIncrement } = this.props;
//     return <button onClick={handleIncrement}>+</button>;
//   }
// }

export default Counter;
