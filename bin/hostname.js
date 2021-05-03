const os = require("os");

module.exports = function () {
  console.log(`Hostname    : ${os.hostname()}`);
};
