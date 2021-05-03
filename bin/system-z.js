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

const options = tool.opts();
if (options.arch) arch();
else if (options.cpu) cpu();
else if (options.memory) memory();
else if (options.hostname) hostname();
else if (options.type) type();
else if (options.kernel) kernel();
else if (options.uptime) uptime();
else {
  hostname();
  type();
  kernel();
  arch();
  cpu();
  memory();
  uptime();
}
