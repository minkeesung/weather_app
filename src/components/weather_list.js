import React, { Component } from 'react'
import { connect } from 'react-redux'
import WeatherBox from './weather_box'
import '../css/weather_list.css'

class WeatherList extends Component {


  render() {
    let weather_forecast = []
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let { weather } = this.props
    if (weather && weather !== "error" && weather !== "requesting") {
      weather_forecast = this.props.weather.list.splice(0,6).map((day_of_week, index) => <WeatherBox weather={Math.round(day_of_week.temp.day)} day={days[index]} key={index}/>)
    }

    return (
      <section className="display_weather">
        <ul className="unordered_weather_list">
          {weather_forecast}
        </ul>
      </section>
    )
  }
}

function mapStateToProps({weather}){
  return {weather}
}


export default connect(mapStateToProps)(WeatherList)
