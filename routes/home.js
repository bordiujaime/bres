const express = require('express');
const router = express.Router();

// GET Home page

router.get('/', (req, res, next) => {
  res.render('home');

});



module.exports = router;
