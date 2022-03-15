const mongoose = require('mongoose')

const User = mongoose.Schema({
    username: 
    {
        type: String,
        required: true,
        minLength: 6,
        maxLength: 100
    },
    email:
    {
        type: String,
        required: true
    },
    password:
    {
        type: String,
        required: true,
        minLength: 6,
        maxLength: 100
    },
    verificationCode: {
        type: String
    },
    posts: [String]
})

module.exports = mongoose.model('users', User)