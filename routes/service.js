const express = require('express');
const router  = express.Router();

// GET service page

router.get('/', (req, res, next) => {
  res.render('service');
});

module.exports = router;
