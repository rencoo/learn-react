import React from 'react';
import axios from 'axios';
import WeatherInfo from './WeatherInfo';

// 好的组件设计
// 如果我们想对代码进行重构，使用async/await代替Promise，那么只需要直接更改WeatherFetch组件即可，不会对WeatherInfo组件有任何影响
// 相应地，如果将显示风速的逻辑从"Wind: 0km/h"改为文字描述"Wind: 风平浪静"，也只需要改动 WeatherInfo 组件，而不会对 WeatherFetch 组件有任何影响
class WeatherFetch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: 'N/A',
      windSpeed: 'N/A'
    };
  }

  componentDidMount() {
    axios.get('http://weather.com/api').then(response => {
      const { current } = response.data;
      this.setState({
        temperature: current.temperature,
        windSpeed: current.windSpeed
      });
    });
  }

  render() {
    const { temperature, windSpeed } = this.state;
    return (
      <WeatherInfo temperature={temperature} windSpeed={windSpeed}></WeatherInfo>
    );
  }
}

export default WeatherFetch;
