const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');
const auth = require('../middleware/auth');

router.use(auth);

router.post('/', reviewController.createReview);
router.get('/plant/:plantId', reviewController.getPlantReviews);

module.exports = router;