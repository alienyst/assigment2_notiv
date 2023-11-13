const express = require('express');
const { Movie } = require('../models');
const authenticateToken = require('../middleware/token');
const router = express.Router();

// Endpoint untuk mendapatkan daftar film
router.get('/', authenticateToken, async (req, res) => {
  try {
    const movies = await Movie.findAll();
    res.json(movies);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Endpoint untuk membuat film baru
router.post('/', authenticateToken, async (req, res) => {
  try {
    const newMovie = await Movie.create(req.body);
    res.status(201).json(newMovie);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
