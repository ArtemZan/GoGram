const Post = require("../../models/Post")

function CreatePost(req, res)
{
    console.log(req.body)
    console.log(res.file)
    try{
        const post = new Post({description: req.body.description, image: req.file.path, authorName: req.user.name, date: Date.now(), comments: [], likes: []})
        
        post.save()
        res.status(201).json({
            description: post.description,
            image: post.image,
            authorName: post.authorName,
            date: post.date,
            id: post._id
        })
    }
    catch(e)
    {
        res.status(400).send(e.message)
        return
    }

}

module.exports = CreatePost