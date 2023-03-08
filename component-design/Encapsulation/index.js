import React from "react";

// 不好的设计
// 这样的组件实现，问题很明显：App组件不具备**封装性**（自我封闭），它将实例传给 Controls 组件，Controls 组件可以直接更改 App state中的内容。
// 事实上，我们并不是不允许Controls组件修改App组件中的内容，只是不建议使用Controls组件直接调用App组件的方法，
// 因为Controls组件如果要调用App的setState，就需要知道App组件state的结构，需要了解this.props.parent.state.number等详情。

// 紧耦合是指两个或多个组件之间需要了解彼此的组件内设计，这样的情况是我们不想看到的，这破坏了组件的独立性
// 我们希望组件是松耦合的，不需要了解其他组件的设计（比如parent上有没有这个属性，有没有这个方法啥的）
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0
    };
  }

  render() {
    return (
      <div className="app">
        <span className="number">{this.state.number}</span>
        <Controls parent={this} />
      </div>
    );
  }
}

class Controls extends React.Component {
  constructor(props) {
    super(props);
  }

  updateNumber(toAdd) {
    this.props.parent.setState(prevState => ({
      number: prevState + toAdd
    }));
  }

  render() {
    return (
      <div className="controls">
        <button onClick={() => this.updateNumber(+1)}>Increase</button>
        <button onClick={() => this.updateNumber(-1)}>Decrease</button>
      </div>
    );
  }
}
