import React from 'react';

const WeatherInfo = ({ temperature, windSpeed }) => ( // 直接解构 props
  <div className='weather'>
    <div>temperature: {temperature}</div>
    <div>wind: {windSpeed}</div>
  </div>
);

export default WeatherInfo;
