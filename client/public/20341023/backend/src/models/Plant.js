const mongoose = require('mongoose');

const plantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  careLevel: { 
    type: String, 
    enum: ['Easy', 'Moderate', 'Expert'],
    required: true 
  },
  wateringFrequency: { type: String, required: true },
  sunlight: { type: String, required: true },
  temperature: { type: String, required: true },
  description: { type: String, required: true },
  problems: [{
    issue: { type: String, required: true },
    solution: { type: String, required: true }
  }],
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User',
    required: true 
  }
}, { timestamps: true });

module.exports = mongoose.model('Plant', plantSchema);