import React from 'react'
import ReactDOM from 'react-dom';

class MyComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { children } = this.props // children本身是个函数React.CreateElement创建的渲染函数
    return (
      <div>
        { children('Nate Wang') }
      </div>
    )
  }
}

function App() {
  return (<>
    <MyComponent>
      {/* 函数作为组件，非静态；这是一种设计模式 */}
      {(name) => (
        <div>{name}</div>
      )}
    </MyComponent>
  </>)
}

// ========================================

ReactDOM.render(<App />, document.getElementById('app'))