const movieService = require('../services/movieService');

const getMovies = async (req, res) => {
    try {
        const movies = await movieService.getAllMovies();
        res.json(movies);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const createMovie = async (req, res) => {
    try {
        const newMovie = await movieService.addNewMovie(req.body);
        res.status(201).json(newMovie);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = {
    getMovies,
    createMovie
};
