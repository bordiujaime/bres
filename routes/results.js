const express = require('express');
const router = express.Router();

// GET service page

router.get('/', (req, res, next) => {

  let category = req.query.categories
  console.log(category)
  let city = req.query.location

  const yelp = require('yelp-fusion');
  // Place holder for Yelp Fusion's API Key. Grab them

  const apiKey = '7kmCw3URdwJ-Mik8CpM4c6fKfaeeGhosvx3tMdqo4fBsCM6f6VBdMBAjZHxjpaaEGVOQC48SdgOHlxeuEcrSzRYBzh901KyU_N2x0uVjk0lVWCVIZ75NZqk6QsODXXYx';
  const searchRequest = {
    location: city,
    categories: category,
    sort_by: "rating",
    limit: 20,
    offset: 21,

  };

  const client = yelp.client(apiKey);
  client.search(searchRequest).then(response => {
    const firstResults = response.jsonBody.businesses;

    res.render('results', { firstResults });
    console.log(firstResults)
  }).catch(error => {
    console.log(error);
  });

});




module.exports = router;
