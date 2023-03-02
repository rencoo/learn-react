import React from 'react';
import ReactDOM from 'react-dom';
import ProfileFunction from './function/profile';
import ProfileClass from './class/profile';

class App extends React.Component {
  state = {
    user: '小明'
  }

  render() {
    return (
      <>
        <label>
          <b> : </b>
          <select
            value={this.state.user}
            onChange={e => this.setState({ user: e.target.value })}
          >
            <option value="小明">Dan</option>
            <option value="小白">Sophie</option>
            <option value="小黄">Sun</option>
          </select>
        </label>
        <h1>{this.state.user}</h1>
        <p>
          <ProfileFunction user={this.state.user} />
          <b> (function)</b>
        </p>
        <p>
          <ProfileClass user={this.state.user} />
          <b> (class)</b>
        </p>
      </>
    )
  }
}

// ========================================
const rootElement = document.getElementById('app');
ReactDOM.render(<App />, rootElement);
