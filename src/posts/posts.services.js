const postController = require('../posts/posts.controllers')


const getAllPost = (req, res) => {
    postController.findAllPosts()
    .then( data => {
        res.status(200).json(data)
    })
    .catch( err => {
        res.status(400).json(err)
    })
}


const getPostById = (req, res) => {
    const id = Number(req.params.id)

    postController.findPostById(id)
    .then( data => {
        if(data) {
            res.status(200).json(data)
        } else {
            res.status(400).json({message: 'Post not found'})
        }
    })
    .catch( err => {
        res.status(400).json(err)
    })
}

const postNewPost = (req, res) => {
    const newObj = req.body
    postController.createPost(newObj)
    .then(data => {
        res.stuatus(201).json(data)
    })
    .catch( err => {
        res.status(400).json(err)
    })
}

const putPost = (req, res) => {
    const id = req.params.id
    const postingObj = req.body

    if(!postingObj.content || !postingObj.userName || !postingObj.isPublished){
        return res.status(400).json({
            message: 'Missing Data',
            example_fields: {
                content: 'String',
                userName: 'String',
                isPublished: Boolean
            }
        })
    }

    postController.updatePost(id, postingObj)
    .then( data => {
        if(data){
            res.status(200).json({message:`Post with id: ${id} updated succesfully`})
        } else{
            res.status(404).json({message: 'Post not found'})
        }
    })
    .catch( err => {
        res.status(400).json(err)
    })

}

const deletePost = (req, res) => {
    const id = req.params.id 

    postController.deletePost(id)
        .then(data => {
            if(data){
                res.status(204).json()
            } else {
                res.status(404).json({message: 'Post not found'})
            }
        })
        .catch(err => {
            res.status(400).json(err)
        })
}

module.exports = {
    getAllPost,
    getPostById,
    postNewPost,
    putPost,
    deletePost
}