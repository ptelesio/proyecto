import {axios} from '../helpers';

export const getLocationsService = () => {
    return axios.get(`${process.env.REACT_APP_BASE_API}/v1/location`);
};

export const getForecastsLocationsService = (city) => {
    return axios.get(`${process.env.REACT_APP_BASE_API}/v1/forecasts/${city}`);
};