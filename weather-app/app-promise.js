const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
})
    .help()
    .alias('help', 'h')
    .argv;

const encodedAddress = encodeURIComponent(argv.address);
const url = 'https://maps.googleapis.com/maps/api/geocode/json';
const apiKey = 'AIzaSyAvRzl6lGGzcjxO3o3wOy18V2hwSoE65Xc';
const fullUrl = `${url}?address=${encodedAddress}&key=${apiKey}`;


axios.get(fullUrl).then((response) => {
    if(response.data.status === 'ZERO_RESULTS') {
        throw new Error('Address not found');
    }
    let lat = response.data.results[0].geometry.location.lat;
    let lng = response.data.results[0].geometry.location.lng;
    const weatherURL = `https://api.darksky.net/forecast/ffce5597cfe3bb1bf8b772092386ecb3/${lat},${lng}`;
    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherURL);
}).then((response) => {
    console.log(response.data.currently.summary);
    console.log('Temperature:', response.data.currently.temperature);
}).catch((error) => {
    if(error.code === 'ENOTFOUND') {
        console.log('Unable to connect to API server.');
    } else {
        console.log(error.message);
    }
});





