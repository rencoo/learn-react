import React from 'react';

// 不好的设计
// 组件包含了两个部分的职责：存储内容和渲染内容
class PersistentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: localStorage.getItem('inputValue')
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }

  handleClick() {
    localStorage.setItem('inputValue', this.state.inputValue);
  }

  render() {
    const { inputValue } = this.state;
    return (
      <div className='persistent-form'>
        <input type="text" value={inputValue} onChange={this.handleChange} />
        <button onClick={this.handleClick}>Save to storage</button>
      </div>
    );
  }
}

export default PersistentForm;
