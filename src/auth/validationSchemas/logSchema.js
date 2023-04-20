const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
  changedField: String,
  type: {
    type: String,
    enum: ['DELETE', 'UPDATE', 'CREATE'],
  },
  dataType: {
    type: String,
    enum: ['USER', 'PRODUCT'],
  },
  previousValue: String,
  currentValue: String,
  dataTypeId: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Log = mongoose.model('Log', logSchema);

module.exports = Log;
