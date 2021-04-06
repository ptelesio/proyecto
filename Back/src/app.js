const cors = require('cors');
const express = require("express");
const forecastsRouter = require('./routers/api/v1/forecasts');
const app = express();
app.use(cors({origin: process.env.BASE_URL}));
app.use('/v1', forecastsRouter);
module.exports = app