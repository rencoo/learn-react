import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { log } from '../../utils/index';

class NewComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { header, main, footer, children } = this.props
    return (
      <div>
        <header>{header || <div>Header content.</div>}</header>
        <main>{main || <div>Main content.</div>}</main>
        {children}
        <footer>{footer || <div>Footer content.</div>}</footer>
      </div>
    )
  }
}

function App() {
  // 传递render prop，实现类似vue中的具名插槽
  return (
    <div>
      <NewComponent
          header={<div>This is header content.</div>}
          content={<div>This is main content.</div>}
          footer={<div>This is footer content.</div>}>
          <div>
            This is new component children.
          </div>
      </NewComponent>
    </div>
  )
}
// ========================================

ReactDOM.render(<App />, document.getElementById('app'))