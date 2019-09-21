const express = require('express');
const router  = express.Router();

// GET favorite page

router.get('/', (req, res, next) => {
  res.render('favorite');
});

module.exports = router;