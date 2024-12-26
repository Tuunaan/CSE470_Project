const CareSchedule = require('../models/CareSchedule');
const { validateCareSchedule } = require('../utils/validators');
const { ApiError } = require('../utils/errors');

exports.createTask = async (req, res, next) => {
  try {
    const validatedData = validateCareSchedule(req.body);
    const task = new CareSchedule({
      ...validatedData,
      userId: req.user._id
    });
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    next(error);
  }
};

exports.getUserTasks = async (req, res, next) => {
  try {
    const tasks = await CareSchedule.find({ userId: req.user._id })
      .populate('plantId', 'name');
    res.json(tasks);
  } catch (error) {
    next(error);
  }
};

exports.toggleTaskCompletion = async (req, res, next) => {
  try {
    const task = await CareSchedule.findOne({
      _id: req.params.id,
      userId: req.user._id
    });
    if (!task) throw new ApiError(404, 'Task not found');
    
    task.completed = !task.completed;
    await task.save();
    res.json(task);
  } catch (error) {
    next(error);
  }
};