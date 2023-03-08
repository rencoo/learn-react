import React from 'react';
import axios from 'axios';

// 组件不符合单一职责。
// 组件将数据获取与渲染逻辑耦合在一起了
// 如果数据请求有变化，就需要在componentDidMount生命周期进行改动；
// 如果展示天气的逻辑有变化，就需要对render方法进行更改。
class Weather extends React.Component {
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
      <div className='weather'>
        <div>temperature: {temperature}</div>
        <div>wind: {windSpeed}</div>
      </div>
    );
  }
}

export default Weather;
