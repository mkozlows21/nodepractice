const request = require('request');

const geocodeAddress = (address) => {
    const encodedAddress = encodeURIComponent(address);
    const url = 'https://maps.googleapis.com/maps/api/geocode/json';
    const apiKey = 'AIzaSyAvRzl6lGGzcjxO3o3wOy18V2hwSoE65Xc';
    return new Promise((resolve, reject) => {
        request({
            url: `${url}?address=${encodedAddress}&key=${apiKey}`,
            json: true
        }, (error, response, body) => {
            if (!error && response.statusCode === 200 && body.status === 'OK') {
                resolve({
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                });
            } else {
                reject('Could not retrieve data from server.');
            }
        });
    });
};

geocodeAddress('1600 pen ave').then((data) => {
    console.log(JSON.stringify(data, undefined, 2));
}).catch((error) => {
    console.log(error);
});

