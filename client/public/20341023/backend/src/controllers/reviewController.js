const Review = require('../models/Review');
const { validateReview } = require('../utils/validators');
const { ApiError } = require('../utils/errors');

exports.createReview = async (req, res, next) => {
  try {
    const validatedData = validateReview(req.body);
    const review = new Review({
      ...validatedData,
      userId: req.user._id
    });
    await review.save();
    res.status(201).json(review);
  } catch (error) {
    next(error);
  }
};

exports.getPlantReviews = async (req, res, next) => {
  try {
    const reviews = await Review.find({ plantId: req.params.plantId })
      .populate('userId', 'name');
    res.json(reviews);
  } catch (error) {
    next(error);
  }
};