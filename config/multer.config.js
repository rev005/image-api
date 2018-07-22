const multer = require('multer');

var multerConfig = {
    storage: multer.diskStorage({
        destination: function (req, file, next) {
            next(null, './public/img');
        },

        //specify the filename to be unique
        filename: function (req, file, next) {
            console.log(file);

            const ext = file.mimetype.split('/')[1];
            next(null, file.fieldname + '-' + Date.now() + '.' + ext);
        }
    }),

    // filter out and prevent non-image files.
    fileFilter: function (req, file, next) {
        if (!file) {
            next();
        }

        // only permit image mimetypes
        const image = file.mimetype.startsWith('image/');
        if (image) {
            console.log('photo uploaded');
            next(null, true);
        } else {
            console.log("file not supported")
            return next();
        }
    }
};

module.exports = multerConfig;