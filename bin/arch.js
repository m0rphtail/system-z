const os = require("os");

module.exports = function () {
  console.log(`Arch: ${os.arch()}`);
};
