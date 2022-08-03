const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
    {
        user: {
            id: Number,
            name: String,
            text: String,
            content: String,
            img: String, 
            url: String,
        },
        posts: Array,
        followers: Array,
        following: Array,
        videos: Array,
        tagged: Array,
        notifications : Array,
        messages: Array,
    },
    {
        collection: 'users',
        skipVersioning: true,
    }
)

const User = new mongoose.model('User', UserSchema)

module.exports = {User}