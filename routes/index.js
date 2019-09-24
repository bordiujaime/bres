const express = require('express');
const router = express.Router();

// GET login page
router.get('/', (req, res, next) => {
  res.render('index');
  const yelp = require('yelp-fusion');
  // Place holder for Yelp Fusion's API Key. Grab them
  // from https://www.yelp.com/developers/v3/manage_app
  const apiKey = '7kmCw3URdwJ-Mik8CpM4c6fKfaeeGhosvx3tMdqo4fBsCM6f6VBdMBAjZHxjpaaEGVOQC48SdgOHlxeuEcrSzRYBzh901KyU_N2x0uVjk0lVWCVIZ75NZqk6QsODXXYx';
  const searchRequest = {
    location: "berlin",
    categories: "electricians,aquariums",
    sort_by: "rating"
  };
  const client = yelp.client(apiKey);
  client.search(searchRequest).then(response => {
    const firstResult = response.jsonBody.businesses;
  }).catch(e => {
    console.log(e);
  });

});


module.exports = router;


