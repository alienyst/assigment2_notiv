const { Bookmark } = require('../models');
const { Movie } = require('../models');

const createBookmark = async (bookmarkData) => {
    return Bookmark.create(bookmarkData);
};

const findBookmarksByUser = async (userId) => {
    return Bookmark.findAll({
        where: { userId },
        include: [{ model: Movie, as: 'Movie' }]
    });
};

module.exports = {
    createBookmark,
    findBookmarksByUser
};
