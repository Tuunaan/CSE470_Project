const { ApiError } = require('./errors');

exports.validatePlant = (data) => {
  const { name, image, careLevel, wateringFrequency, sunlight, temperature, description } = data;
  
  if (!name || !image || !careLevel || !wateringFrequency || !sunlight || !temperature || !description) {
    throw new ApiError(400, 'Missing required fields');
  }

  if (!['Easy', 'Moderate', 'Expert'].includes(careLevel)) {
    throw new ApiError(400, 'Invalid care level');
  }

  return data;
};

exports.validateReview = (data) => {
  const { plantId, rating, comment } = data;
  
  if (!plantId || !rating || !comment) {
    throw new ApiError(400, 'Missing required fields');
  }

  if (rating < 1 || rating > 5) {
    throw new ApiError(400, 'Rating must be between 1 and 5');
  }

  return data;
};

exports.validateCareSchedule = (data) => {
  const { plantId, taskType, date } = data;
  
  if (!plantId || !taskType || !date) {
    throw new ApiError(400, 'Missing required fields');
  }

  if (!['watering', 'fertilizing', 'pruning'].includes(taskType)) {
    throw new ApiError(400, 'Invalid task type');
  }

  return data;
};