const os = require("os");

module.exports = () => {
  const cpu = os.cpus();
  const fullName = cpu[0].model;
  //const speed = "@" + String(cpu[0].speed);

  for (var i = 0; i < fullName.length; i++) {
    var maker = fullName.substr(0, fullName.indexOf(" "));
  }

  for (var i = 0; i < fullName.length; i++) {
    var model = fullName.substr(maker.length + 1, fullName.length);
  }

  return `${maker} ${model}`;
};
