const router = require('express').Router();
const {Blog, User} = require('../models');
const withAuth = require('../utils/auth')

router.use('/users', userRoutes);
router.use('/projects', blogRoutes);

module.exports = router;
