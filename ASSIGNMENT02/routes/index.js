const express = require('express');
const router = express.Router();
const passport = require('passport');
const { ensureAuthenticated } = require('../middleware/auth');
var UserController = require('../controllers/UserController');

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/login', (req, res) => {
    res.render('login');
});





router.post('/login', passport.authenticate('local', {
    failureRedirect: '/login',
    failureFlash: true
}), (req, res) => {
    // Redirect to the appropriate dashboard based on the role
    const role = req.user.role;
    if (role === 'admin') {
        res.redirect('/admin/dashboard');
    } else if (role === 'faculty') {
        res.redirect('/faculty/dashboard');
    } else if (role === 'student') {
        res.redirect('/student/dashboard');
    } else {
        res.redirect('/login');
    }
});


// Render the registration page
router.get('/register', (req, res) => {
    res.render('register');
});

// Handle user registration
router.post('/register', UserController.register);

router.get('/logout', ensureAuthenticated, (req, res) => {
    req.logout(err => {
        if (err) { return next(err); }
        res.redirect('/login');
    });
});

module.exports = router;
