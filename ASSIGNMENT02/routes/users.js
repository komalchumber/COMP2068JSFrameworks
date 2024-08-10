// const express = require('express');
// const router = express.Router();
// const passport = require('passport');

// // Login Page
// router.get('/login', (req, res) => {
//   res.render('login', { 
//     title: 'Login',
//     flash: { error: req.flash('error') }
//   });
// });

// // Handle Login
// router.post('/login', (req, res, next) => {
//   passport.authenticate('local', (err, user, info) => {
//     if (err) { return next(err); }
//     if (!user) {
//       req.flash('error', 'Invalid email or password');
//       return res.redirect('/users/login');
//     }

//     req.logIn(user, (err) => {
//       if (err) { return next(err); }
//       return res.redirect('/faculty'); 
//     });
//   })(req, res, next);
// });

// // Logout
// router.get('/logout', (req, res) => {
//   req.logout();
//   res.redirect('/users/login');
// });

// module.exports = router;
const express = require('express');
const router = express.Router();
const passport = require('passport');
const ensureAuthenticated = require('../middleware/ensureAuthenticated');

// Login Page
router.get('/login', (req, res) => {
  res.render('login'); 
});

// Handle Login POST
router.post('/login', passport.authenticate('local', {
  successRedirect: '/views/faculty/dashboard',  
  failureRedirect: '/users/login',  
  failureFlash: true  
}));

// Logout
router.get('/logout', (req, res) => {
  req.logout();
  req.flash('success_msg', 'You are logged out');
  res.redirect('/users/login');
});

module.exports = router;
