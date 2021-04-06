import openWeatherMapConstants from "../constants/openWeatherMap";

const openWeatherMapInitialState = {
  request: false,
  error: null,
  data: [],
  markedLocation: null,
  forecasts: [],
};

export default (state = openWeatherMapInitialState, action) => {
  switch (action.type) {
    case openWeatherMapConstants.GET_OPEN_WEATHER_MAP_LOCATIONS_REQUEST:
      return {
        ...state,
        request: true,
        error: null,
      };

    case openWeatherMapConstants.GET_OPEN_WEATHER_MAP_LOCATIONS_FAILURE:
      return {
        ...state,
        request: false,
        error: action.error,
      };

    case openWeatherMapConstants.GET_OPEN_WEATHER_MAP_LOCATIONS_SUCCESS:
      return {
        ...state,
        request: false,
        data: action.data,
      };

    case openWeatherMapConstants.SET_MARKED_LOCATION:
      return {
        ...state,
        markedLocation: action.location,
      };

    case openWeatherMapConstants.GET_OPEN_WEATHER_MAP_FORECASTS_LOCATIONS_REQUEST:
      return {
        ...state,
        request: true,
        error: null,
      };

    case openWeatherMapConstants.GET_OPEN_WEATHER_MAP_FORECASTS_LOCATIONS_FAILURE:
      return {
        ...state,
        request: false,
        error: action.error,
      };

    case openWeatherMapConstants.GET_OPEN_WEATHER_MAP_FORECASTS_LOCATIONS_SUCCESS:
      return {
        ...state,
        request: false,
        forecasts: action.data,
      };

    default:
      return state;
  }
};
