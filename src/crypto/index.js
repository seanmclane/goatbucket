import crypto from 'crypto';
import asn1 from 'asn1.js';
import BN from 'bn.js';
import {keystore} from '../utils/keystore';

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

  return r, s;
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
