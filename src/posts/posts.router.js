
const postServices = require('../posts/posts.services')

const router = require('express').Router() // Initial

router.get('/post', postServices.getAllPost),

router.post('/post', postServices.postNewPost),

router.get('/post/:id', postServices.getPostById)

router.put('/post/:id', postServices.putPost)

router.delete('/post/:id', postServices.deletePost)

module.exports = router