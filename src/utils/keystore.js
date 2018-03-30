import os from 'os';
import fs from 'fs';
import path from 'path';

const filePath = os.homedir() + '/.goatnickels/keystore.json';

export const keystore = require(filePath);