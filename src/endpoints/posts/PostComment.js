const Post = require('../../models/Post')

async function PostComment(req, res)
{
    const comment = req.body.comment

    console.log(req.body.postId)

    try{
        const post = await Post.findById(req.body.postId)

        console.log(post)

        post.comments.push({content: comment, authorName: req.user.name, date: Date.now()})

        post.save()
    }
    catch(e)
    {
        res.status(400).send("Post with given id doesn't exist")
        return
    }

    res.sendStatus(201)
}

module.exports = PostComment