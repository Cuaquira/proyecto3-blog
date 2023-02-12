const Posts = 'something,'
const{ DataTypes } = require('sequelize')
const db = require('../utils/database')

const Post = db.define('posts', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    userName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    isPublished: {
        type: DataTypes.BOOLEAN, 
        defaultValue: true
    }
})


module.exports = Post