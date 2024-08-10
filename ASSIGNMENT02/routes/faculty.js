const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../middleware/auth');

// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) => {
    res.render('faculty/dashboard', {
        user: req.user
    });
});

// Managing Projects
router.get('/manage-projects', ensureAuthenticated, (req, res) => {
    const projects = [
        { id: 1, title: "Research Project 1", description: "Overview of research project 1" },
        { id: 2, title: "Research Project 2", description: "Overview of research project 2" }
    ];
    res.render('faculty/manage-projects', { projects });
});

// Profile
router.get('/profile', ensureAuthenticated, (req, res) => {
    res.render('faculty/profile', { user: req.user });
});

// Notifications
router.get('/notifications', ensureAuthenticated, (req, res) => {
    const notifications = [
        { title: "Reminder: Submit Grades", message: "Final grades submission due on 2024-08-15", date: "2024-08-10" },
        { title: "Faculty Meeting", message: "Faculty meeting scheduled for 2024-08-12", date: "2024-08-09" }
    ];
    res.render('faculty/notifications', { notifications });
});

// Settings
router.get('/settings', ensureAuthenticated, (req, res) => {
    res.render('faculty/settings');
});

module.exports = router;
