const Post = require("../../models/Post");

// Retuns some posts. The algorithm, which posts are going to be returned is very primitive yet and will be implemented in the future
async function GetPosts(req, res)
{
    const maxPostsInTime = 5

    const allPosts = await Post.find({}, {_v: 0})

    let foundLastPost = (req.body.lastPostId == null)
    let currentNumberOfPosts = 0
    const posts = allPosts.filter(post => {
        if(currentNumberOfPosts++ > maxPostsInTime)
        {
            return false
        }

        if(foundLastPost)
            return true

        if(post._id === req.body.lastPostId)
        {
            foundLastPost = true
        }

        return false
    }).map(post => ({
        id: post._id,
        authorName: post.authorName,
        description: post.description,
        image: post.image,
        date: post.date,
        likes: post.likes,
        comments: post.comments
    }))


    res.status(200).json({posts: posts})
}

module.exports = GetPosts