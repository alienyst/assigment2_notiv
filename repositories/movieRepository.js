const { Movie } = require('../models');

const findAllMovies = async () => {
    return Movie.findAll();
};

const createMovie = async (movieData) => {
    return Movie.create(movieData);
};

module.exports = {
    findAllMovies,
    createMovie
};
