const express = require('express');
const router = express.Router();
const plantController = require('../controllers/plantController');
const auth = require('../middleware/auth');

router.use(auth);

router.post('/', plantController.createPlant);
router.get('/', plantController.getPlants);
router.get('/:id', plantController.getPlantById);
router.put('/:id', plantController.updatePlant);
router.delete('/:id', plantController.deletePlant);

module.exports = router;