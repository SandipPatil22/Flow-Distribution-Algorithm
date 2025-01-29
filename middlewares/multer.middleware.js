import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, "/uploads");
  },
  filename: function (req, file, cb) {
    const unique = Math.round(Math.random() * 1e9);
    cb(null, file.originalname + "_" + unique);
  },
});

const maxSize = 1024 * 1024 * 100;
const uploads = multer({ storage, limits: { fileSize: maxSize } });
const fileupload = uploads.fields([{name:"profile", maxcount:1}])


export {fileupload}