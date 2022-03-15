const Post = require("../../models/Post");
const Delete = require("../../utils/Delete");

async function DeletePost(req, res)
{
    const post = await Post.findOne({_id: req.body.postId, authorName: req.user.name})

    if(!post)
    {
        res.status(403).send("Cannot delete post with given id, because either it doesn't exist or it belongs to other user")
        return
    }

    try{        
        await Delete(post.image)
        await Post.deleteOne({_id: post._id})
    }
    catch(e)
    {
        res.status(400).send(e.message)
        return
    }


    res.sendStatus(200)
}

module.exports = DeletePost