const mongoose = require('mongoose')

const Profile = mongoose.Schema({
    username:
    {
        type: String,
        required: true
    },
    description: String,
    picture: String
})

module.exports = mongoose.model('profiles', Profile)

