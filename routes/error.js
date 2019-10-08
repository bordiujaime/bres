const express = require('express');
const router  = express.Router();

// GET error page

router.get('/', (req, res, next) => {
  res.render('error');
});

module.exports = router;