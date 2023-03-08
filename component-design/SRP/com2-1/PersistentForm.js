import React from 'react';

class PersistentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: props.initialValue // 不再直接从localStorage里读取
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
    this.props.saveValue(this.state.inputValue); // 不再直接调用localStorage.setItem存储
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
