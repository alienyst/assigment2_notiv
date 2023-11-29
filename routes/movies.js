const express = require('express');
const movieController = require('../controllers/movieController');
const authenticateToken = require('../middleware/token');
const router = express.Router();

router.get('/', authenticateToken, movieController.getMovies);
router.post('/', authenticateToken, movieController.createMovie);

module.exports = router;