const express = require('express');
const bookmarkController = require('../controllers/bookmarkController');
const authenticateToken = require('../middleware/token'); // Pastikan ini middleware autentikasi Anda
const router = express.Router();

router.post('/:movieId', authenticateToken, bookmarkController.createBookmark);
router.get('/mybookmark', authenticateToken, bookmarkController.getMyBookmarks);

module.exports = router;
