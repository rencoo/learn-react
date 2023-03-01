import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { log } from '../../utils/index';

class NewComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      oldInfo: '',
      info: ''
    }
  }

  // 在调用**render方法之前**调用；如果返回null则不更新任何内容。
  // 类似于Angular的ngOnChanges，根据changes来更新组件内的state，适合封装纯渲染组件的时候使用
  static getDerivedStateFromProps(nextProps, prevState) {
    log(nextProps)
    log(prevState)
    // 相当于watch自己的state变更，然后统一做一些处理；需要自己记录oldValue
    // if (prevState.info !== prevState.oldInfo) {
    //   log('child info change')
    // }

    // state中的info根据props中的info保持同步
    if (nextProps.info !== prevState.info) { // 相当于子组件watch了父info属性
      return {
        info: nextProps.info
      }
    }

    return null;
  }

  // componentDidUpdate()方法在组件**更新后**被调用（类似于vue的updated）。首次渲染不会执行此方法。当组件更新后，可以在此处操作DOM、执行setState或者执行异步请求操作。
  // 可以在componentDidUpdate()对更新前后的props进行比较，执行异步操作
  // 如果shouldComponentUpdate()返回值为false，则不会调用componentDidUpdate()
  // componentDidUpdate
  componentDidUpdate(prevProps, prevState, snapshot) {
  }

  handleChangeInfo = () => { // 子组件自己修改state，不会触发内容更新；使用的是父props的数据
    log('child handleInfoChange invoked')
    this.setState({
      info: 'hello world'
    })
  }

  render() {
    const { info } = this.state;
    const { handleChangeInfo } = this;
    return <div>
      <span>{info}</span>
      <button onClick={handleChangeInfo}>change info by own</button>
    </div>
  }
}

function App() {
  const [info, setInfo] = useState('hello')
  const handleInfoChange = (e) => {
    log('parent handleInfoChange invoked')
    setInfo(e.target.value)
  }
  return (
    <div>
      <input type="text" value={info} onChange={handleInfoChange} />
      <NewComponent info={info}/>
    </div>
  )
}
// ========================================

ReactDOM.render(<App />, document.getElementById('app'))