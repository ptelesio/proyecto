const {param} = require('express-validator');

const currentCityValidator = () => param('city')
    .trim()
    .not()
    .isEmpty();

module.exports = () => {
    return [
        currentCityValidator()
    ]
}