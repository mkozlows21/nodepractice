const request = require('request');

const geocodeAddress = (address, callback) => {
    //convert address
    const encodedAddress = encodeURIComponent(address);

    //url to google API
    const url = 'https://maps.googleapis.com/maps/api/geocode/json';
    const apiKey = 'AIzaSyAvRzl6lGGzcjxO3o3wOy18V2hwSoE65Xc';
    //make the request
    request({
        url: `${url}?address=${encodedAddress}&key=${apiKey}`,
        json: true
    }, (error, response, body) => {
        if(!error && response.statusCode === 200 && body.status === 'OK') {
            callback(undefined, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            });
        } else if(body.status === 'ZERO_RESULTS') {
            callback('Unable to find that address.');
        } else {
            callback('Unable to connect to google servers', undefined);
        }
    });
};

module.exports = {
    geocodeAddress
};