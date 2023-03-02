import React from 'react';
import ReactDOM from 'react-dom';
import { log } from '../../utils/index'

export default class Clock extends React.Component {
  constructor(props) {
    super(props)
    log('constructor invoked')
    this.timerID = null // TODO
    this.state = {
      data: new Date()
    }
  }

  componentDidMount() {
    log('componentDidMount invoked')
    this.timerID = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    log('componentWillUnmount invoked')
    clearInterval(this.timerID)
  }

  componentDidUpdate() {
    log('componentDidUpdate invoked')
  }

  // methods
  tick() {
    this.setState({
      data: new Date()
    })
  }

  render() {
    const { data } = this.state
    return (
      <div>
        <h2>
          It is { data.toLocaleTimeString() }
        </h2>
      </div>
    )
  }

}

function App() {
  return (<>
    <Clock />
  </>)
}

// ========================================
const rootElement = document.getElementById('app');
ReactDOM.render(<App />, rootElement);