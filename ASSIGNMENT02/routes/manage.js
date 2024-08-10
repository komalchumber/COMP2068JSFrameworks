var express = require('express');
var router = express.Router();
var Queue = require('../models/queue'); 

// GET /manage - Rendering the manage page with all tickets
router.get('/', async function(req, res, next) {
  try {
    // Fetch all queue items from the database
    const queue = await Queue.find().sort({ timestamp: 1 }); 
    res.render('manage', { queue });
  } catch (err) {
    next(err);
  }
});

// POST /manage/delete - Removing a ticket from the queue
router.post('/delete', async function(req, res, next) {
  try {
    const { id } = req.body;
    if (!id) {
      req.flash('error', 'Ticket ID is required.');
      return res.redirect('/manage');
    }

    // Remove the ticket from the database
    await Queue.findByIdAndDelete(id);
    req.flash('success', 'Ticket removed successfully.');
    res.redirect('/manage');
  } catch (err) {
    next(err);
  }
});

module.exports = router;
