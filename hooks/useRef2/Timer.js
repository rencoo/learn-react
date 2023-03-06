import React, { useState, useCallback, useRef } from "react";
import {log} from '../../utils/index';

// 仅用来试验useCallback传入deps是个空数组的情况
const TestCallback = React.memo(function Com(props) {
  log('Counter Com invoked');
  const { handleStart } = props;
  return <button onClick={handleStart}>开始</button>;
});

export default function Timer() {
  // 定义 time state 用于保存计时的累积时间
  const [time, setTime] = useState(0);

  // 定义 timer 这样一个容器用于在跨组件渲染之间保存一个变量
  const timer = useRef(null); // 可以把 useRef 看作是在函数组件之外创建的一个容器空间
  // 在类组件中，我们可以定义类的成员变量，以便能在对象上通过成员属性去保存一些数据。但是在函数组件中，是没有这样一个空间去保存数据的。因此，React 让 useRef 这样一个 Hook 来提供这样的功能。

  // 开始计时的事件处理函数
  const handleStart = useCallback(() => {
    // 使用current属性设置ref的值
    timer.current = window.setInterval(() => {
      setTime((time) => time + 1); // set可以接受函数？
      // setTime(time + 1);
    }, 100); // ms
  }, []); // 空数组，意味着这个方法没有依赖值将不会被更新

  // 相比于上面 useCallback 的写法，这样会导致 TestCallback 函数组件一直调用
  // const handleStart = () => {
  //   // 使用current属性设置ref的值
  //   timer.current = window.setInterval(() => {
  //     setTime((time) => time + 1);
  //     // setTime(time + 1);
  //   }, 100); // ms
  // };

  // 暂停计时的事件处理函数
  const handlePause = useCallback(() => {
    // 使用clearInterval来停止计时
    window.clearInterval(timer.current); // 跨渲染的数据
    timer.current = null; // 释放
  }, []);

  return (
    <div>
      {time / 10} seconds
      <br />
      <button onClick={handleStart}>Start</button>
      <button onClick={handlePause}>Pause</button>
      <TestCallback handleStart={handleStart} />
    </div>
  );
}
