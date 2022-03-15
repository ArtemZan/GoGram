// Upload images to the database

const multer = require("multer");
const { GridFsStorage } = require("multer-gridfs-storage");

const storage = new GridFsStorage({
    url: process.env.DB_URL,
    options: { useNewUrlParser: true, useUnifiedTopology: true },
    file: (req, file) => {
        // Generate unique file name
        const filename = `${Date.now()}${file.originalname}`

        // Pass the file name to the endpoint or to the next middleware
        req.file = { path: filename }

        if (file.mimetype !== "image/png" && file.mimetype !== "image/jpeg") {
            return filename;
        }

        return {
            // Images data will be stored inside 'images.chunks' and 'images.files' collections
            bucketName: "images",
            filename,
        };
    },
});

module.exports = multer({storage})
