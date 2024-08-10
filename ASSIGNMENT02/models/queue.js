var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QueueSchema = new Schema({
  name: { type: String, required: true },
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Queue', QueueSchema);
