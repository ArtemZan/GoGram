const mongodb = require('mongodb')
const mongoose = require('mongoose')

// Deletes an image
function Delete(filename) {
    return new Promise(async (resolve, reject) => {
        try {
            const bucket = new mongodb.GridFSBucket(mongoose.connection.db, {bucketName: "images"})

            const doc = (await bucket.find({filename}).toArray())[0]
            if(!doc)
            {
                reject({message: "Invalid filename: " + filename})
                return
            }
            const id = doc._id

            await bucket.delete(id)

            resolve()
        }
        catch (e) {
            console.log(e)
            reject(e)
        }
    })
}

module.exports = Delete
