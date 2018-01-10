import React from 'react'
import '../css/weather_box.css'

const WeatherBox = ({day, weather}) => (

  <li className="weather_list">
    <div className="weather_box">
      <div className="day">{day}</div>
      <div className="weather"><span className="weather_num"> {weather}</span>  F</div>
    </div>
  </li>

)

export default WeatherBox
