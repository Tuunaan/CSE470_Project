const jwt = require('jsonwebtoken');
const { ApiError } = require('../utils/errors');
const User = require('../models/User');

module.exports = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) throw new ApiError(401, 'Authentication required');

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId);
    if (!user) throw new ApiError(401, 'User not found');

    req.user = user;
    next();
  } catch (error) {
    next(new ApiError(401, 'Invalid token'));
  }
};