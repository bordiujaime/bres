const passport = require('passport')
const express = require('express')
const router = express.Router()
const User = require('../models/user')
const bcrypt = require('bcrypt');
const bcryptSalt = 10;
// GET signup
router.get('/signup', (req, res, next) => {
 res.render('auth/signup')
})
// GET login
router.get('/login', (req, res, next) => {
 res.render('auth/login', { message: req.flash("message") })
})
// POST signup
router.post('/signup', (req, res, next) => {
 const { email, username, password } = req.body
 // Validation: Check required fields
 if (username === '' || password === '' || email === '') {
   res.render('auth/signup', { message: "Please fill in all fields", email, username, password })
   return;
 }
 // Validation: check if the email already exists
 User.findOne({ email })
   .then(user => {
     console.log("here.")
     console.log(user)
     if (user !== null) {
       res.render('auth/signup', { errorMessage: "The email already exists" })
       return
     }
     // Validation passed --> create new user
     const salt = bcrypt.genSaltSync(bcryptSalt)
     const hashPass = bcrypt.hashSync(password, salt)
     // const newUser = new User({
     //   email,
     //   username,
     //   password: hashPass
     // })
     User.create({
       email: email,
       username: username,
       password: hashPass
     }).then(() => {
       res.redirect('/login');
     }).catch(err => { console.log(err) })
     // newUser.save(err => {
     //   if (err) {
     //     res.render('auth/signup', { message: "Something went wrong" })
     //   } else {
     //     req.flash('success_msg', "You created an account and can now log in")
     //     res.redirect('/login')
     //   }
     // })
   })
   .catch(err => {
     next(err)
   })
})
// POST login
router.post('/login', passport.authenticate('local', {
 successRedirect: '/home',
 failureRedirect: '/login',
 failureFlash: true
}))
// GET logout
router.get('/logout', (req, res, next) => {
 req.logout()
 req.flash('message', "You are logged out")
 res.redirect('/login')
})
module.exports = router
