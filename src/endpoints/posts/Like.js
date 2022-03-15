const Post = require("../../models/Post")


async function LikePost(req, res)
{
    const postId = req.body.postId
    const post = await Post.findOne({_id: postId})

    if(!post)
    {
        res.status(400).send({error: "Invalid post id given when tried to like a post"})
        return;
    }

    if(post.likes.find(username => username === req.user.name))
    {
        req.sendStatus(200)
        return
    }

    post.likes.push({authorName: req.user.name, date: Date.now()})

    post.save()

    res.sendStatus(201)
}

module.exports = LikePost