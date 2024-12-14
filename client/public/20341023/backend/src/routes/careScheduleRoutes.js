const express = require('express');
const router = express.Router();
const careScheduleController = require('../controllers/careScheduleController');
const auth = require('../middleware/auth');

router.use(auth);

router.post('/', careScheduleController.createTask);
router.get('/', careScheduleController.getUserTasks);
router.patch('/:id/toggle', careScheduleController.toggleTaskCompletion);

module.exports = router;