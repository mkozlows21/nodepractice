const request = require('request');

const getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/ffce5597cfe3bb1bf8b772092386ecb3/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemp: body.currently.apparentTemperature,
                dewPoint: body.currently.dewPoint,
                summary: body.currently.summary
            });
        } else {
            callback('Unable to fetch weather data.', undefined);
        }
    });

};

module.exports = {
    getWeather
};