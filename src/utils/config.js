import os from 'os';
import fs from 'fs';
import path from 'path';

const filePath = os.homedir() + '/.goatnickels/config.json';

const config = require(filePath);
export const accountId = config.account;
export const node = config.nodes[0];