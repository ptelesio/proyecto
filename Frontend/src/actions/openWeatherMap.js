import openWeatherMapConstants from "../constants/openWeatherMap";
import { getLocationsService,getForecastsLocationsService } from "../services/openWeatherMap";

const getLocationsRequest = () => ({
  type: openWeatherMapConstants.GET_OPEN_WEATHER_MAP_LOCATIONS_REQUEST,
});

const getLocationsFailure = (error) => ({
  type: openWeatherMapConstants.GET_OPEN_WEATHER_MAP_LOCATIONS_FAILURE,
  error,
});

const getLocationsSuccess = (locations) => ({
  type: openWeatherMapConstants.GET_OPEN_WEATHER_MAP_LOCATIONS_SUCCESS,
  data: locations,
});

const markedLocation = (location) => ({
  type: openWeatherMapConstants.SET_MARKED_LOCATION,
  location,
});

const getForecastsLocationsRequest = () => ({
  type: openWeatherMapConstants.GET_OPEN_WEATHER_MAP_FORECASTS_LOCATIONS_REQUEST,
});

const getForecastsLocationsFailure = (error) => ({
  type: openWeatherMapConstants.GET_OPEN_WEATHER_MAP_FORECASTS_LOCATIONS_FAILURE,
  error,
});

const getForecastsLocationsSuccess = (locations) => ({
  type: openWeatherMapConstants.GET_OPEN_WEATHER_MAP_FORECASTS_LOCATIONS_SUCCESS,
  data: locations,
});

export const getLocations = () => {
  return async (dispatch) => {
    try {
      dispatch(getLocationsRequest());

      const locations = await getLocationsService();

      dispatch(getLocationsSuccess(locations.data));
    } catch (error) {
      dispatch(getLocationsFailure(error));
    }
  };
};

export const setMarkedLocation = (location) => {
  return async (dispatch) => {
    dispatch(markedLocation(location));
  };
};

export const getForecastsLocations = (city) => {
  return async (dispatch) => {
    try {
      dispatch(getForecastsLocationsRequest());

      const forecastsLocations = await getForecastsLocationsService(city);

      dispatch(getForecastsLocationsSuccess(forecastsLocations.data));
    } catch (error) {
      dispatch(getForecastsLocationsFailure(error));
    }
  };
};