const bookmarkRepository = require('../repositories/bookmarkRepository');

const addBookmark = async (userId, movieId) => {
    return bookmarkRepository.createBookmark({ userId, movieId });
};

const getUserBookmarks = async (userId) => {
    return bookmarkRepository.findBookmarksByUser(userId);
};

module.exports = {
    addBookmark,
    getUserBookmarks
};
