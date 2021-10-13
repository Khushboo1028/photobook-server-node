const util = require("util");
const Multer = require("multer");
const maxSize = 2 * 1024 * 1024;

let processFile = Multer({
  storage: Multer.memoryStorage(),
  // limits: { fileSize: maxSize },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(png|jpg|jpeg)$/)) {
      cb(new Error("Please upload an image.")); //cb is callback which tells multer either to throw an error or continue
    }
    cb(undefined, true);
  },
}).single("file");

let processFileMiddleware = util.promisify(processFile);
module.exports = processFileMiddleware;
