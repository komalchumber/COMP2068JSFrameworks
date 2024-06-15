var express = require('express');
var router = express.Router();

/* GET HOME page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Express' });
});

/* GET ABOUT page. */
router.get("/about", function (req, res, next) {
  res.render("about", { title: 'About Me' });
});

/* GET PROJECTS page. */
router.get("/projects", function (req, res, next) {
  res.render("projects", { title: 'Projects' });
});

/* GET CONTACT page. */
router.get("/contact", function (req, res, next) {
  res.render("contact", { title: 'Contact Me' });
});

module.exports = router;
