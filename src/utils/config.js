import os from 'os';
import fs from 'fs';
import path from 'path';

const filePath = os.homedir() + '/.goatnickels/config.json';
let config = {};
let node = '';
let accountId = '';
let hasConfig = false;

export function readConfig(){
  try {
    config = require(filePath);
    node = config.nodes[0];
    accountId = config.account;
    hasConfig = true;
  } catch (e) {
    console.log('no config found');
    hasConfig = false;
    throw Error('no config found');
  }
}

export {accountId, node, hasConfig};

export function writeConfig(config) {
  const dir = os.homedir() + '/.goatnickels/';
  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
  }

  fs.writeFile(filePath, JSON.stringify(config), (err) => {
    if (err) {
      return console.log(err);
    }
    readConfig();
  })
  console.log('config written to '+ filePath);
}

export function writeDefaultConfig(accountId) {
  writeConfig({
    directory: os.homedir() + '/.goatnickels/',
    nodes: ['localhost'],
    account: accountId,
  })
}