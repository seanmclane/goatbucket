import crypto from 'crypto';
import asn1 from 'asn1.js';
import BN from 'bn.js';

import base64url from 'base64url';
import {keystore, writeKey} from '../utils/keystore';
import {writeDefaultConfig} from '../utils/config';

export function signTransaction(payload) {
  let txion = payload.to + 'goat_' + keystore.public_key + payload.amount + payload.sequence;

  // Define ECPrivateKey from RFC 5915
  let ECPrivateKey = asn1.define('ECPrivateKey', function() {
    this.seq().obj(
      this.key('version').int(),
      this.key('privateKey').octstr(),
      this.key('parameters')
        .explicit(0)
        .objid()
        .optional(),
      this.key('publicKey')
        .explicit(1)
        .bitstr()
        .optional()
    );
  });

  // Generate the PEM-encoded private key
  let pemKey = ECPrivateKey.encode(
    {
      version: new BN(1),
      privateKey: hexToBytes(keystore.private_key),
      // OID for ECDSA_P384
      parameters: toOIDArray('1.3.132.0.34'),
    },
    'pem',
    {label: 'EC PRIVATE KEY'}
  );

  // Sign data
  let sign = crypto.createSign('sha512');
  sign.update(txion);
  let signature = sign.sign(pemKey);

  //define signature format
  let Format = asn1.define('ECDSASignature', function() {
    this.seq().obj(this.key('r').int(), this.key('s').int());
  });

  //decode signature with format
  let decoded = Format.decode(signature, 'der');
  let r = decoded.r.toJSON();
  let s = decoded.s.toJSON();

  return {r: r, s: s};
}

//helper functions
function toOIDArray(oid) {
  return oid.split('.').map(function(s) {
    return parseInt(s, 10);
  });
}

// Convert a hex string to a byte array
function hexToBytes(hex) {
  for (var bytes = [], c = 0; c < hex.length; c += 2) bytes.push(parseInt(hex.substr(c, 2), 16));
  return bytes;
}

// Convert a byte array to a hex string
function bytesToHex(bytes) {
  for (var hex = [], i = 0; i < bytes.length; i++) {
    hex.push((bytes[i] >>> 4).toString(16));
    hex.push((bytes[i] & 0xf).toString(16));
  }
  return hex.join('');
}

export async function buildKeyStore() {
  let key = await generateKey();
  let pub = await getPublicKey(key).then(data => extractPublicKey(data));
  let priv = await getPrivateKey(key).then(data => extractPrivateKey(data));
  let k = {
    private_key: priv,
    public_key: pub,
  };
  writeKey(k);
  let accountId = 'goat_' + k.public_key;
  writeDefaultConfig(accountId)
  return accountId;
}

function generateKey() {
  return window.crypto.subtle.generateKey(
    {
      name: 'ECDSA',
      namedCurve: 'P-384',
    },
    true,
    ['sign', 'verify']
  );
}

function getPublicKey(key) {
  return window.crypto.subtle.exportKey('jwk', key.publicKey);
}

function extractPublicKey(keydata) {
  let x = base64url.toBuffer(keydata.x);
  let y = base64url.toBuffer(keydata.y);
  let pub = convertXYPubHex(x, y);
  return pub;
}

function getPrivateKey(key) {
  return window.crypto.subtle.exportKey('jwk', key.privateKey);
}

function extractPrivateKey(keydata) {
  let d = bytesToHex(base64url.toBuffer(keydata.d));
  return d;
}

//copied golang elliptic.Marshal + hex conversion
function convertXYPubHex(x, y) {
  let pub = '';

  let byteLen = (384 + 7) >> 3;
  let b = new Uint8Array(1 + 2 * byteLen);
  b[0] = 4;
  b.set(x, 1 + byteLen - x.length);
  b.set(y, 1 + 2 * byteLen - y.length);

  pub = bytesToHex(b);
  return pub;
}
