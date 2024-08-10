const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const passport = require('passport');
const User = require('../models/user');

// Registration Page
router.get('/register', (req, res) => {
    res.render('register');
});

// Handle Registration
router.post('/register', async (req, res) => {
    const { name, email, password, role } = req.body;
    let errors = [];

    if (!name || !email || !password || !role) {
        errors.push({ msg: 'Please fill in all fields' });
    }

    if (password.length < 6) {
        errors.push({ msg: 'Password should be at least 6 characters' });
    }

    if (errors.length > 0) {
        res.render('register', {
            errors,
            name,
            email,
            password,
            role
        });
    } else {
        try {
            const user = await User.findOne({ email });
            if (user) {
                errors.push({ msg: 'Email is already registered' });
                res.render('register', {
                    errors,
                    name,
                    email,
                    password,
                    role
                });
            } else {
                const newUser = new User({
                    name,
                    email,
                    password,
                    role
                });

                // Hashing Password
                const salt = await bcrypt.genSalt(10);
                newUser.password = await bcrypt.hash(password, salt);

                await newUser.save();
                req.flash('success_msg', 'You are now registered and can log in');
                res.redirect('/');
            }
        } catch (err) {
            console.error(err);
            res.render('register', { errors: [{ msg: 'Server Error' }] });
        }
    }
});

// Handle Logout
router.get('/logout', (req, res) => {
    req.logout();
    req.flash('success_msg', 'You are logged out');
    res.redirect('/');
});

module.exports = router;
