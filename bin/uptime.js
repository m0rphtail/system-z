const os = require("os");

module.exports = () => {
  const full = String(Math.floor(os.uptime() / 60));
  const hrs=String(Math.floor(full/60))
  const mins=String(Math.floor(full % 60))

  return `${hrs} hours ${mins} mins`;
};
