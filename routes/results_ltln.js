const express = require('express');
const router = express.Router();
// GET service page
router.get('/', (req, res, next) => {
  let category = req.query.categories
  // let city = req.query.location
  let latitudeUser = req.query.latitude
  let longitudUser = req.query.longitude
  const yelp = require('yelp-fusion');
  // Place holder for Yelp Fusion's API Key. Grab them
  const apiKey = '7kmCw3URdwJ-Mik8CpM4c6fKfaeeGhosvx3tMdqo4fBsCM6f6VBdMBAjZHxjpaaEGVOQC48SdgOHlxeuEcrSzRYBzh901KyU_N2x0uVjk0lVWCVIZ75NZqk6QsODXXYx';
  const searchRequest = {
    // location: city,
    categories: category,
    latitude: latitudeUser,
    longitude: longitudUser,
    sort_by: "rating",
  };
  const client = yelp.client(apiKey);
  client.search(searchRequest).then(response => {
    const firstResults = response.jsonBody.businesses;
    res.render('results_ltln', { firstResults });
    console.log(firstResults)
  }).catch(error => {
    console.log(error);
  });
});
module.exports = router;
