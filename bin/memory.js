const os = require("os");

module.exports = () => {
  const totalMemory = os.totalmem();
  const usage = Math.round(totalMemory / (Math.pow(1024,2))/1000)+ " GB";
  return `${usage}`;
};
