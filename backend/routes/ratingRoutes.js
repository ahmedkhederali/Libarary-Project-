const express = require('express');
const router = express.Router();
const { getAllRatings, getRatingById, getRatingByOwnerId, 
    getRatingByHallId, addRating, getRatingByBookId,deleteRating, updateRating } = require('../controllers/ratingController');
const auth=require("../middleware/auth");
const authAdmin=require("../middleware/authAdmin");
router.route('/').get(auth,getAllRatings);
router.route('/owner/:id').get(auth,getRatingByOwnerId);
router.route('/hall/:id').get(auth,getRatingByHallId);
router.route('/books/:id').get(auth,getRatingByBookId);

router.route('/:id').get(auth,getRatingById);
router.route('/').post(auth,addRating);
router.route('/:id').put(auth,updateRating);
router.route('/:id').delete(auth,deleteRating);

module.exports = router;