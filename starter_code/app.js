const SpotifyWebApi = require('spotify-web-api-node');
const express       = require('express');
const app           = express();
const hbs           = require('hbs');

// Remember to paste here your credentials
const clientId = '29cfba169d6e4a2d8958a8cafe548047',
    clientSecret = '27166424a7474908b7fedaa14d621d3d';

const spotifyApi = new SpotifyWebApi({
  clientId : clientId,
  clientSecret : clientSecret
});

// Retrieve an access token.
spotifyApi.clientCredentialsGrant()
  .then(function(data) {
    spotifyApi.setAccessToken(data.body['access_token']);
  }, function(err) {
    console.log('Something went wrong when retrieving an access token', err);
});