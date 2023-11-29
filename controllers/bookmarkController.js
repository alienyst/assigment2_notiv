const bookmarkService = require('../services/bookmarkService');

const createBookmark = async (req, res) => {
    try {
        const { movieId } = req.params;
        const userId = req.user.id;
        const bookmark = await bookmarkService.addBookmark(userId, movieId);
        res.status(201).json(bookmark);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getMyBookmarks = async (req, res) => {
    try {
        const userId = req.user.id;
        const bookmarks = await bookmarkService.getUserBookmarks(userId);
        res.json(bookmarks);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = {
    createBookmark,
    getMyBookmarks
};
