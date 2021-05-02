#! /usr/bin/env node

const { Command } = require("commander");
const os = require("os");
const cpu = require("./cpu");
const package = require("../package.json");

const tool = new Command();

tool.name(package.name).version(package.version);

tool.option("-a, --arch", "show system architecture");
tool.option("-c, --cpu", "show CPU info");

tool.parse(process.argv);

const options = tool.opts();
if (options.arch) {
  console.log(`arch: ${os.arch()}`);
}
if (options.cpu) {
  cpu();
}
