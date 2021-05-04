const os = require("os");

module.exports = () => {
  const totalMemory = os.totalmem();
  const freeMemory = os.freemem();
  const usage =
    String(
      Math.round(totalMemory / (1024 * 1024) - freeMemory / (1024 * 1024)) +
        " MiB /" +
        Math.round(totalMemory / (1024 * 1024))
    ) + " MiB";
  return `${usage}`;
};
