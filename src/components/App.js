import React, { Component } from 'react'
import SearchBar from './search_bar'
import WeatherList from './weather_list'
import { connect } from 'react-redux'

class App extends Component {
  render() {

    return (
      <div>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}

function mapStateToProps({weather}){
  return {weather}
}

export default connect(mapStateToProps)(App)
