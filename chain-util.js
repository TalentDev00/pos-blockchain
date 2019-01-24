const EC = require("elliptic").eddsa;
const ec = new EC("ed25519");

const uuidV1 = require("uuid/v1");

const SHA256 = require("crypto-js/sha256");

class ChainUtil {
  static genKeyPair(secret) {
    return ec.keyFromSecret(secret);
  }

  static id() {
    return uuidV1();
  }

  static hash(data) {
    return SHA256(JSON.stringify(data)).toString();
  }

  static verifySignature(publicKey, signature, dataHash) {
    console.log(publicKey);
    console.log(signature);
    console.log(dataHash);
    return ec.keyFromPublic(publicKey).verify(dataHash, signature);
  }
}

module.exports = ChainUtil;