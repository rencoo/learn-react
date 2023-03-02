import React from 'react'

// hoc高阶组件，接收组件作为参数，同时返回一个新的组件（React.Component）
// 高阶函数，接收一个函数作为参数，然后返回一个新的函数~
export default function withTimer(WrappedComponent) {
  return class extends React.Component {
    state = {
      time: new Date()
    }

    componentDidMount() {
      this.timerID = setInterval(() => this.tick(), 1000)
    }

    render() {
      const { time } = this.state // WrappedComponent的数据来源，多了time
      return (<WrappedComponent time={time} {...this.props}></WrappedComponent>)
    }

    // methods
    tick() {
      this.setState({
        time: new Date()
      })
    }
  }
}