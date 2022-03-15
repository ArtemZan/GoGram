const Post = require("../../models/Post");

async function GetPerformance(req, res) {
    const username = req.user.name
    const date = req.body.date

    try {
        const posts = (await Post.find({ authorName: username })).filter(post => post.date >= date)

        // Retreives liked posts
        const likes = {
            posts: (await Post.find()).filter(post => {
                const like = post.likes.find(like => like.authorName === username)
                if (!like)
                    return false

                return like.date >= date
            })
        }

        // Retreives commented posts
        const comments = (await Post.find()).map(post => {
            const comment = post.comments.find(comment => comment.authorName === username)

            if (!comment || comment.date < date)
                return false

            return {
                date: comment.date,
                authorName: comment.authorName,
                content: comment.content,
                postId: post._id
            }
        }).filter(comment => comment)

        res.status(200).json({
            posts,
            likes,
            comments
        })

    }
    catch (e) {
        res.status(500).send({ error: e.message })
    }
}

module.exports = GetPerformance