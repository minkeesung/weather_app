import { FETCH_WEATHER, INVALID_ZIPCODE, REQUEST_WEATHER } from '../actions/index'

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_WEATHER:
      return action.payload.data
    case INVALID_ZIPCODE:
      return "error"
    case REQUEST_WEATHER:
      return "requesting"
  }
  return state
}
