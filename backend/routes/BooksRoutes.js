
const express = require('express');
const router = express.Router();
const { addBooks,updateBook,addedLike,deleteBook,deleteLike,getAllBooks,getBookById } = require('../controllers/BooksController');
const auth=require("../middleware/auth");
const authAdmin=require("../middleware/authAdmin");

router.route('/').get(auth,getAllBooks);
router.route('/:id').get(auth,getBookById);
router.route('/').post(auth,authAdmin,addBooks);
router.route('/:id').put(auth,authAdmin,updateBook);
router.route('/:id').delete(auth,authAdmin,deleteBook);
router.route('/likes/:id').patch(auth,addedLike).delete(auth,deleteLike)
module.exports = router;