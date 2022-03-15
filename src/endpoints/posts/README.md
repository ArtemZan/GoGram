# Posts endpoints

## POST /post

Creates a new post. Should be used with `Content-Type`: `multipart/form-data` header= See https://www.npmjs.com/package/multer for more
<br>
Payload: 
 * description: `string`
 * image: `binary`

<br>

 --- 

## GET /post
Gets a list of posts, published earlier than the post refernced by `lastPostId`, or if `lastPostId` was null, the most fresh posts
<br>
Payload:
 * lastPostId: `string` | `null`
 
 --- 

## DELETE /post
Payload:
 * postId: `string`
 
 --- 

<br>

## POST /post/comment
<br>
Payload:

 * postId: `string`
 * comment: `string`

---

## POST /post/like
<br>
Payload:

 * postId: `string`

Response codes:
<br>

`400` if the post doesn't exist

`201` if successfully liked the post

`200` if the post has already been liked