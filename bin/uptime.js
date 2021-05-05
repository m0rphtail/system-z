const os = require("os");

module.exports = () => {
  //TODO do better math
  const uptime = String(Math.floor(os.uptime() / 60));
  return `${uptime} mins`;
};
