const os = require("os");

module.exports = function () {
    //TODO do better math
  console.log("Uptime      :", String(Math.floor((os.uptime()/60))) ,"mins");
};
