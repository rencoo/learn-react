import React from 'react'
import { log } from '../../../utils/index'

class NewComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    log('class component componentDidMount invoked')
    // 挂载后，开始fetch数据啥的（时机是上一次渲染稳定）
    // 状态
  }

  render() {
    return (
      <div>component child</div>
    )
  }
}

export default NewComponent
