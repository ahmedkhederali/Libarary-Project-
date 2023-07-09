
const express = require('express');
const router = express.Router();
const { addNew,updateNews,deleteNews,getAllNews,getNewsById } = require('../controllers/NewsController');
const auth=require("../middleware/auth");
const authAdmin=require("../middleware/authAdmin");

router.route('/').get(auth,getAllNews);
router.route('/:id').get(auth,getNewsById);
router.route('/').post(auth,authAdmin,addNew);
router.route('/:id').put(auth,authAdmin,updateNews);
router.route('/:id').delete(auth,authAdmin,deleteNews);

module.exports = router;