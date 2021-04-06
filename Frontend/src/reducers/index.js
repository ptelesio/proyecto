import { combineReducers } from 'redux';
import openWeatherMap from './openWeatherMap';


const reducers = combineReducers({
    openWeatherMap: openWeatherMap
});

export default reducers;