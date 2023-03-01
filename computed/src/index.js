import React, { useMemo, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { log } from '../../utils/index';

function NewComponent(props) {
  const { num } = props
  const [size, setSize] = useState(0)
  const [name, setName] = useState('aaa')
  const max = useMemo(() => {
    log('useMemo invoked')
    return Math.max(num, size)
  }, [num, size]) // 如果添加 name，那么name的变更也会触发useMemo里函数的调用
  // 如果使用getMax方法的话，即使是name改变，那么也会触发方法调用
  // const getMax = () => {
  //   log('max method invoked')
  //   return Math.max(num, size);
  // };
  const handleSizeChange = (e) => { // size的变更会触发useMemo函数，因为依赖了size
    log('handleSizeChange invoked')
    setSize(e.target.value)
  }
  const handleNameChange = (e) => { // name的变更不会触发useMemo函数
    log('handleNameChange invoked')
    setName(e.target.value)
  }

  return (
    <div>
      <input type="number" value={size} onChange={handleSizeChange} />
      <div>Current {size}</div>
      <div>Max {max}</div>
      <input type="text" value={name} onChange={handleNameChange}/>
      <div>Name {name}</div>
    </div>
  )
}

function App() {
  const num = 10

  return (
    <div>
      <NewComponent num={num} />
    </div>
  )
}
// ========================================

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Game />);
ReactDOM.render(<App />, document.getElementById('app'))