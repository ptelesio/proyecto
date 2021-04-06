const forecastsService = require('../../services/forecastsService');

class ForecastsRepository {

    getLocation() {
        return forecastsService.getLocation();
    }

    getCurrentCity(city) {
      return forecastsService.getCurrentCity(city);
    }

    getForecastsCity(city) {
      return forecastsService.getForecastsCity(city);
    }


}

module.exports = ForecastsRepository;