const express = require('express');

const router = express.Router();

const {addBlog,readBlog,updateBlog,removeBlog} = require('../Controllers/blog');



router.route('/read').get(readBlog);
router.route('/create').post(addBlog)
router.route('/edit').post(updateBlog)
router.route('/remove').post(removeBlog)






module.exports = router
