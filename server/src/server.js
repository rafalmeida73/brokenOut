const express = require("express");
var cors = require('cors')
const app = express();
app.use(cors());
var request = require('request');
require('dotenv/config');

app.get('/steam/game/:appid/news', function(httpRequest, httpResponse) {
    // Calculate the Steam API URL we want to use
    let url = "http://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?" + process.env.key + "&appid=" +  httpRequest.params.appid + "&count=5&format=json%27";
    request.get(url, function(error, steamHttpResponse, steamHttpBody) {
        httpResponse.setHeader('Content-Type', 'application/json');
        httpResponse.send(steamHttpBody);
    });
});


app.listen(3333);
console.log('Listening on port 3333');
