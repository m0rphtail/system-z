const os = require("os");

module.exports = function () {
  const cpu = os.cpus();
  const model = cpu[0].model;
  const speed = cpu[0].speed;

  console.log(`cpu: ${model}`);
  console.log(`clock speed: ${speed} MHz`);
};
