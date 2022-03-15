const mongoose = require('mongoose')

const Comment = mongoose.Schema({
    date: 
    {
        type: Number,
        required: true
    },
    content: 
    {
        type: String,
        required: true
    },
    authorName: {
        type: String,
        required: true
    }
})

const Like = mongoose.Schema({
    date: {
        type: Number,
        required: true
    },
    authorName: String
})

const Post = mongoose.Schema({
    authorName: {
        type: String,
        required: true
    },
    description: String,
    //Image id
    image: String,
    date: {
        type: Number,
        required: true
    },

    // Keeps array of usernames, who have liked this publication
    likes: [Like],
    comments: [Comment]
})

module.exports = mongoose.model("posts", Post)