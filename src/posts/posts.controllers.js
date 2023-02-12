const Post = require('../models/posts.models')


const findAllPosts = async() => {
    const data = await Post.findAll()
    return data

}

const findPostById = async( id ) => {
    const data = await Post.findOne({
        where: {
            id : id 
        }
    })
    return data
}

const createPost = async(postObj) => {
    
    const newPost = {
        content: postObj.content,
        userName: postObj.userName,
        isPublished: postObj.isPublished
    }
    const data = await Post.create(newPost)
    return data
}

const updatePost = async(id, postingObj) => {
   const data = await Post.update(postingObj, {
    where: {
        id: id
    }
   })
   return data[0]
}

const deletePost = async( id ) => {
    const data = await Post.destroy({
        where: {
            id: id
        }
    })
    return data
}

module.exports = {
    findAllPosts,
    findPostById,
    createPost,
    updatePost,
    deletePost
}
