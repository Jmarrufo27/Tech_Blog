const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
//What is router.use doing? what are the two things it needs?
router.use('/users', userRoutes);
router.use('/posts', postRoutes);

module.exports = router;