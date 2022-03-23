const fs = require("fs");
function readFile(filePath, encoding) {
  return fs.readFileSync(filePath, encoding);
}

module.exports = { readFile };
