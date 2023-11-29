const movieRepository = require('../repositories/movieRepository');

const getAllMovies = async () => {
    return movieRepository.findAllMovies();
};

const addNewMovie = async (movieData) => {
    return movieRepository.createMovie(movieData);
};

module.exports = {
    getAllMovies,
    addNewMovie
};
