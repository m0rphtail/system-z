#! /usr/bin/env node

const { Command } = require("commander");
const cpu = require("./cpu");
const package = require("../package.json");
const arch = require("./arch");
const memory = require("./memory");
const hostname = require("./hostname");
const type = require("./type");
const kernel = require("./kernel");
const uptime = require("./uptime");
const boxen = require("boxen");

const tool = new Command();

tool.name(package.name).version(package.version);

tool
  .option("-a, --arch", "show system architecture")
  .option("-c, --cpu", "show CPU info")
  .option("-m, --memory", "show RAM usage")
  .option("-H, --hostname", "show system hostname")
  .option("-o, --os", "show system OS")
  .option("-k, --kernel", "show currently running kernel version")
  .option("-u, --uptime", "show system uptime");

tool.parse(process.argv);

display = (title, func) => {
  var space = "";
  const count = 10;
  for (var i = 0; i <= count - title.length; i++) {
    space += " ";
  }
  line = title + space + ": " + func;
  console.log(boxen(line, { padding: 1, borderStyle: "round" }));
};

displayAll = () => {
  const H = "Hostname  : " + hostname();
  const o = "OS        : " + type();
  const k = "Kernel    : " + kernel();
  const a = "Arch      : " + arch();
  const c = "CPU       : " + cpu();
  const m = "RAM       : " + memory();
  const u = "Uptime    : " + uptime();

  console.log(
    boxen(`${H}\n${o}\n${k}\n${a}\n${c}\n${m}\n${u}`, { padding: 1, borderStyle: "round" })
  );
};

const options = tool.opts();
if (options.arch) display("Arch", arch());
else if (options.cpu) display("CPU", cpu());
else if (options.memory) display("RAM", memory());
else if (options.hostname) display("Hostname", hostname());
else if (options.os) display("OS", type());
else if (options.kernel) display("Kernel", kernel());
else if (options.uptime) display("Uptime", uptime());
else {
  // console.log(
  //   boxen(
  //     `${hostname()}\n${type()}\n${kernel()}\n${arch()}\n${cpu()}\n${memory()}\n${uptime()}`,
  //     { padding: 1, borderStyle: "round" }
  //   )
  //);
  displayAll();
}
