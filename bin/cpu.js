const os = require("os");
const chalk = require("chalk");

module.exports = function () {
  const cpu = os.cpus();
  const fullName = cpu[0].model;
  const speed = "@" + String(cpu[0].speed);

  for (var i = 0; i < fullName.length; i++) {
    var maker = fullName.substr(0, fullName.indexOf(" "));
  }

  for (var i = 0; i < fullName.length; i++) {
    var model = fullName.substr(maker.length + 1, fullName.length);
  }

  if (maker == "AMD") {
    console.log("CPU         :", chalk.red(maker), model, speed, "MHz");
  } else if (maker == "INTEL") {
    console.log("CPU         :", chalk.blue(maker), model, speed, "MHz");
  } else {
    console.log("CPU         :", maker, model, speed, "MHz");
  }
};
