const os = require("os");

module.exports = function () {
  console.log(`Kernel      : ${os.release()}`);
};
