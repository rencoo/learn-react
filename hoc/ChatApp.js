import React from "react";
import withTimer from './withTimer'

class MessageList extends React.PureComponent {
  render() {
    const { props } = this
    return (
      <ul>
        { props.messages.map(msg => (<li key={msg}>{msg}</li>)) }
      </ul>
    )
  }
}

class ChatApp extends React.Component {
  // 写外面和写里面貌似是一致的？参照之前Angular里的Class组件确认下
  state = {
    messages: [],
    inputMsg: ''
  }

  constructor(props) {
    super(props)
  }

  handleInput = evt => {
    this.setState({
      inputMsg: evt.target.value
    })
  }

  handleSend = () => {
    const text = this.state.inputMsg
    if (text) {
      const newMessages = [...this.state.messages, text];
      this.setState({
        messages: newMessages,
        inputMsg: ''
      })
    }
  }

  render() {
    const {messages, inputMsg} = this.state
    return (
      <div>
        <MessageList messages={messages} />
        <div>
          <input value={inputMsg} onChange={this.handleInput} />
          <button onClick={this.handleSend}>发送</button>
        </div>
        {/* time的格式可根据当前组件的需求自己变换；外部决定；withTimer自身只管time值即可 */}
        {/* 如果直接用Timer组件来实现这种需求的话，那么就需要在Timer里去通过传入的prop，然后选择展示哪种time的格式，组件就很繁琐了 */}
        <h2>{this.props.time.toLocaleTimeString()}</h2>
      </div>
    )
  }
}

export default withTimer(ChatApp)