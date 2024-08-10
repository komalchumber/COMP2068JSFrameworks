const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../middleware/auth');

// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) => {
    res.render('student/dashboard', {
        user: req.user
    });
});

// Projects
router.get('/projects', ensureAuthenticated, (req, res) => {
    const projects = [
        { id: 1, title: "Project 1", description: "Description of project 1" },
        { id: 2, title: "Project 2", description: "Description of project 2" }
    ];
    res.render('student/projects', { projects });
});

// Profile
router.get('/profile', ensureAuthenticated, (req, res) => {
    res.render('student/profile', { user: req.user });
});

// Notifications
router.get('/notifications', ensureAuthenticated, (req, res) => {
    const notifications = [
        { title: "Notification 1", message: "Message for notification 1", date: "2024-08-10" },
        { title: "Notification 2", message: "Message for notification 2", date: "2024-08-09" }
    ];
    res.render('student/notifications', { notifications });
});

// Settings
router.get('/settings', ensureAuthenticated, (req, res) => {
    res.render('student/settings');
});

module.exports = router;
