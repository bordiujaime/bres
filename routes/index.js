const express = require('express');
const router = express.Router();

// GET login page
router.get('/', (req, res, next) => {
  res.render('layout');
});

module.exports = router;
