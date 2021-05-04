const os = require("os");

module.exports = () => {
  return `${os.type()}`;
};
