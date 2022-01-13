const express=require('express');
const router=express.Router();
const blogController = require('../controllers/blogController');

//blog routes
router.get('/',blogController.blog_index);

//POST request
router.post('/',blogController.blog_create_post);

//make new blog
router.get('/create',blogController.blog_create_get);

//get a single blog via id
router.get('/:id', blogController.blog_detail);

//delete blog
router.delete('/:id', blogController.blog_delete);



module.exports = router;