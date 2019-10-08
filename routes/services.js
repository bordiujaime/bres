const express = require('express');
const router  = express.Router();

// GET service page

router.get('/services', (req, res, next) => {
  res.render('services');
});

module.exports = router;
