const axios = require("axios");
const { forEach } = require("p-iteration");

const getCurrentCity = async (city) => {
  try {
    const result = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.APPID_OPEN_WEATHER_MAP}&mode=json`
    );
    return result.data;
  } catch (error) {
    return error;
  }
};

const getLocation = async () => {
  const idsCitys = (process.env.IDS_CITYS || "").split(",");
  try {
    const result = [];
    await forEach(idsCitys, async (idCity) => {
      const dataCity = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?id=${idCity}&appid=${process.env.APPID_OPEN_WEATHER_MAP}&mode=json`
      );
      result.push(dataCity.data);
    });
    return result;
  } catch (error) {
    return error;
  }
};

const getForecastsCity = async (city) => {
  try {
    const result = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&appid=${process.env.APPID_OPEN_WEATHER_MAP}&cnt=5&mode=json`
    );
    return result.data;
  } catch (error) {
    return error;
  }
};

module.exports.getLocation = getLocation;
module.exports.getCurrentCity = getCurrentCity;
module.exports.getForecastsCity = getForecastsCity;
