import React from "react";

// 好的设计 秉承封装性
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0
    };
  }

  updateNumber(toAdd) {
    this.setState(prevState => ({
      number: prevState + toAdd
    }));
  }

  render() {
    return (
      <div className="app">
        <span className="number">{this.state.number}</span>
        <Controls
          onIncrease={() => this.updateNumber(+1)}
          onDecrease={() => this.updateNumber(-1)}
        />
      </div>
    );
  }
}

const Controls = ({ onIncrease, onDecrease }) => {
  return (
    <div className="controls">
      <button onClick={onIncrease}>Increase</button>
      <button onClick={onDecrease}>Decrease</button>
    </div>
  );
};
