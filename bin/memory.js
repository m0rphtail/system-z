const os = require("os");

module.exports = function () {
  const totalMemory = os.totalmem();
  const freeMemory = os.freemem();
  console.log(
    "RAM         :",
    String(Math.round((totalMemory - freeMemory) / (1024 * 1024))),
    "MiB /",
    String(Math.round(totalMemory / (1024 * 1024))),
    "MiB"
  );
};
