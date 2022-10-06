const util = require("util");
const Multer = require("multer");


let processFile = Multer({
  storage: Multer.memoryStorage(),
  limits: { fileSize: 2000000000 },
}).single("file");

let processFileMiddleware = util.promisify(processFile);
module.exports = processFileMiddleware;