const ForecastsRepository = require("../../../../Repositories/ForecastsRepository");

module.exports.index = async function (req, res, next) {
  try {
    return res.send({
        status:true
    });
  } catch (error) {
    next(error);
  }
};

module.exports.getLocation = async function (req, res, next) {
  try {
    const repository = new ForecastsRepository();
    const response = await repository.getLocation();
    return res.send({
        data: response
    });
  } catch (error) {
    next(error);
  }
};

module.exports.getCurrentCity = async function (req, res, next) {
  try {
    const repository = new ForecastsRepository();
    const response = await repository.getCurrentCity(req.params.city);
    return res.send({
        data: response
    });
  } catch (error) {
    next(error);
  }
};

module.exports.getForecastsCity = async function (req, res, next) {
  try {
    const repository = new ForecastsRepository();
    const response = await repository.getForecastsCity();
    return res.send({
        data: response
    });
  } catch (error) {
    next(error);
  }
};
