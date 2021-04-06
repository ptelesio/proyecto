const express = require('express');
const router = express.Router();

const expressValidatorMiddleware = require('../../../app/Http/Middlewares/expressValidatorMiddleware.js');
const forecastsRequest = require('../../../app/Http/Request/API/V1/forecastsRequest');
const forecastsController = require('../../../app/Http/Controllers/API/V1/forecastsController');

router.get('/', forecastsController.index);
router.get('/location', forecastsController.getLocation);
router.get('/current/:city', forecastsRequest(), expressValidatorMiddleware, forecastsController.getCurrentCity);
router.get('/forecasts/:city', forecastsRequest(), expressValidatorMiddleware, forecastsController.getForecastsCity);
module.exports = router;