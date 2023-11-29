const express = require('express');
const authRoutes = require('./auth');
const movieRoutes = require('./movies');
const bookmarkRoutes = require('./bookmark');

const router = express.Router()

router.use('/auth', authRoutes);
router.use('/movies', movieRoutes);
router.use('/bookmark', bookmarkRoutes);


module.exports = router;
