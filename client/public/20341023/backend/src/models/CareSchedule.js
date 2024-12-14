const mongoose = require('mongoose');

const careScheduleSchema = new mongoose.Schema({
  plantId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Plant',
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  taskType: {
    type: String,
    enum: ['watering', 'fertilizing', 'pruning'],
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

module.exports = mongoose.model('CareSchedule', careScheduleSchema);