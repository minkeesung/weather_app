
import axios from 'axios'
const API_KEY = '3bf455c3561826a033d58e438575c933'


export const FETCH_WEATHER = 'FETCH_WEATHER'
export const INVALID_ZIPCODE = 'INVALID_ZIPCODE'
export const REQUEST_WEATHER = 'REQUEST_WEATHER'


export function fetchWeather(zip_code, scroll_down) {
  function requestWeather() {
    return {
      type: REQUEST_WEATHER
    }
  }

  return function(dispatch) {
    dispatch(requestWeather())
    axios.get(`http://api.openweathermap.org/data/2.5/forecast/daily?appid=${API_KEY}&zip=${zip_code},us&units=imperial`)
      .then(response => {
        scroll_down()
        dispatch( {type: FETCH_WEATHER, payload: response} )
      })
      .catch(error => dispatch({ type: INVALID_ZIPCODE }))
  }
}
