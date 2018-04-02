import os from 'os';
import fs from 'fs';
import path from 'path';

const filePath = os.homedir() + '/.goatnickels/keystore.json';

let keystore = {};
let hasKey = false;

export function readKey() {
  try {
    keystore = require(filePath);
    hasKey = true;
  }
  catch(e) {
    console.log('no keystore found');
    hasKey = false;
    throw Error('no keystore found');
  }
}

export {keystore, hasKey};

export function writeKey(key) {
  const dir = os.homedir() + '/.goatnickels/';
  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
  }
  
  fs.writeFile(filePath, JSON.stringify(key), (err) => {
    if (err) {
      return console.log(err);
    }
    readKey();
  })
  console.log('keystore written to '+ filePath);
}