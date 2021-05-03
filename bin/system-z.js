#! /usr/bin/env node

const { Command } = require("commander");
const cpu = require("./cpu");
const package = require("../package.json");
const arch = require("./arch");

const tool = new Command();

tool.name(package.name).version(package.version);

tool.option("-a, --arch", "show system architecture");
tool.option("-c, --cpu", "show CPU info");

tool.parse(process.argv);

const options = tool.opts();
if (options.arch) arch();
if (options.cpu) cpu();
