// Creates the server and handles the endpoints

const express = require('express')
const mongoose = require('mongoose')
require('dotenv/config')

// Middleware
const { Authenticate } = require('./endpoints/auth/JWT')
const upload = require('./utils/Upload')

// Endpoins handlers (find documentation inside src/endpoints directory)
const Signup = require('./endpoints/auth/Signup')
const Login = require('./endpoints/auth/Login')
const GetProfile = require('./endpoints/profile/GetProfile')
const SetProfileDescription = require('./endpoints/profile/SetDescription')
const PostComment = require('./endpoints/posts/PostComment')
const CreatePost = require('./endpoints/posts/CreatePost')
const GetPosts = require('./endpoints/posts/GetPosts')
const DeletePost = require('./endpoints/posts/DeletePost')
const LikePost = require('./endpoints/posts/Like')
const GetImage = require('./endpoints/GetImage')
const SetProfilePicture = require('./endpoints/profile/SetPicture')
const { SendPasswordRecoveryCode, VerifyCode, ChangePassword } = require('./endpoints/auth/RecoverPassword')
const GetPerformance = require('./endpoints/profile/GetPerformance')

// Create the server
const app = express()

// Access control headers middleware
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
});

// Middleware for parsing request body as json
app.use(express.json())

// Endpoints declaration (see documentation in src/endpoints)

app.post('/signup', upload.array("picture"), Signup)

app.post('/login', Login)

app.post('/password/send_code', SendPasswordRecoveryCode)

app.post('/password/verify_code', VerifyCode)

app.post('/password', ChangePassword)


app.get('/image', GetImage)


app.get('/profile', Authenticate, GetProfile)

app.post('/profile/description', Authenticate, SetProfileDescription)

app.post('/profile/picture', [Authenticate, upload.single("picture")], SetProfilePicture)

app.get('/profile/performance', Authenticate, GetPerformance)


app.post('/post', [Authenticate, upload.array("image")], CreatePost)

app.get('/post', Authenticate, GetPosts)

app.delete('/post', Authenticate, DeletePost)

app.post('/post/comment', Authenticate, PostComment)

app.post('/post/like', Authenticate, LikePost)

//app.post('/post/image', [Authenticate, upload.single("image")], SetPostImage)


mongoose.connect(process.env.DB_URL, () => {
    console.log("Connected to the database")

    new mongoose.mongo.GridFSBucket(mongoose.connection.db, {
        bucketName: "images"
    })
})

app.listen(process.env.PORT)