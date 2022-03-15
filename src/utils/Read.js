const mongodb = require('mongodb')
const mongoose = require('mongoose')

// Returns promise with the image buffer
function Read(filename) {
    return new Promise((resolve, reject) => {
        try {
            const bucket = new mongodb.GridFSBucket(mongoose.connection, {bucketName: "images"})

            const stream = bucket.openDownloadStreamByName(filename)

            let buffer = Buffer.from('')

            stream.on('data', chunk => {
                buffer = Buffer.concat([buffer, chunk])
            })

            stream.on('end', () => {
                resolve(buffer)
            })
        }
        catch (e) {
            console.log(e)
            reject(e)
        }
    })
}

module.exports = Read
