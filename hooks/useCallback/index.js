import React, { useState, useCallback } from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/Counter';
import { log } from '../../utils/index';

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('aaa');
  const handleNameChange = (e) => {
    log('handleNameChange invoked');
    setName(e.target.value);
  };

  // 每次组件状态发生变化的时候，函数组件实际上都会重新执行一遍。在每次执行的时候，实际上都会创建一个新的事件处理函数 handleIncrement。
  // 这个事件处理函数中呢，包含了 count 这个变量的闭包，以确保每次能够得到正确的结果。
  // 这也意味着，即使 count 没有发生变化，但是函数组件因为其它状态发生变化而重新渲染时（重新执行整个函数时），这种写法也会每次创建一个新的函数。
  // 创建一个新的事件处理函数，虽然不影响结果的正确性，但其实是没必要的。因为这样做不仅增加了系统的开销，
  // 更重要的是：每次创建新函数的方式会让接收事件处理函数的组件，需要重新渲染。 -> 会导致Counter组件的无意义渲染（子组件需要是PureComponent，否则只要父组件重新渲染，子组件就会跟着重新渲染）
  // const handleIncrement = () => setCount(count + 1); // this way is not recommend // 每次重新执行函数组件时，该函数都是一个新函数，这样不好

  // 改写成useCallback的方式
  // 只有当 count 发生变化时，才会重新创建回调函数!
  const handleIncrement = useCallback(() => setCount(count + 1), [count]); // this way is recommend // 缓存回调函数：只要count不变，函数就复用同一个
  return (<>
    name: {name}
    <input onChange={handleNameChange} />
    count: {count}
    <Counter handleIncrement={handleIncrement}></Counter>
  </>);
}

// ========================================
const rootElement = document.getElementById('app');
ReactDOM.render(<App />, rootElement);