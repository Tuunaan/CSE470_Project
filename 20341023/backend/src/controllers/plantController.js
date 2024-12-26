const Plant = require('../models/Plant');
const { validatePlant } = require('../utils/validators');
const { ApiError } = require('../utils/errors');

exports.createPlant = async (req, res, next) => {
  try {
    const validatedData = validatePlant(req.body);
    const plant = new Plant({
      ...validatedData,
      userId: req.user._id
    });
    await plant.save();
    res.status(201).json(plant);
  } catch (error) {
    next(error);
  }
};

exports.getPlants = async (req, res, next) => {
  try {
    const plants = await Plant.find({ userId: req.user._id });
    res.json(plants);
  } catch (error) {
    next(error);
  }
};

exports.getPlantById = async (req, res, next) => {
  try {
    const plant = await Plant.findOne({
      _id: req.params.id,
      userId: req.user._id
    });
    if (!plant) throw new ApiError(404, 'Plant not found');
    res.json(plant);
  } catch (error) {
    next(error);
  }
};

exports.updatePlant = async (req, res, next) => {
  try {
    const validatedData = validatePlant(req.body);
    const plant = await Plant.findOneAndUpdate(
      { _id: req.params.id, userId: req.user._id },
      validatedData,
      { new: true }
    );
    if (!plant) throw new ApiError(404, 'Plant not found');
    res.json(plant);
  } catch (error) {
    next(error);
  }
};

exports.deletePlant = async (req, res, next) => {
  try {
    const plant = await Plant.findOneAndDelete({
      _id: req.params.id,
      userId: req.user._id
    });
    if (!plant) throw new ApiError(404, 'Plant not found');
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};