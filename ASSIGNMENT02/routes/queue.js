var express = require('express');
var router = express.Router();
var Queue = require('../models/queue'); 

// GET /queue - Render the queue page
router.get('/', async function(req, res, next) {
  try {
    // Fetch queue data from the database
    const queue = await Queue.find().sort({ timestamp: 1 }); 
    res.render('queue', { queue });
  } catch (err) {
    next(err);
  }
});

router.post('/', async function(req, res, next) {
  try {
    const { name } = req.body;
    if (!name) {
      req.flash('error', 'Name is required.');
      return res.redirect('/queue');
    }

    const newQueueItem = new Queue({
      name,
      timestamp: new Date()
    });

    await newQueueItem.save();
    req.flash('success', 'Ticket added successfully.');
    res.redirect('/queue');
  } catch (err) {
    next(err);
  }
});

module.exports = router;
