// generating public and private keys

import * as ed from "@noble/ed25519";

async function main() {
  // Generate a secure random  private key
  const privKey = ed.utils.randomPrivateKey();

  // enter the messing in uint8Array form
  const message = new TextEncoder().encode("Shubham");

  // Generate a public key using private key
  const pubKey = await ed.getPublicKeyAsync(privKey);

  // sign the message
  const sign = await ed.signAsync(message, privKey);

    
  // verify the sign
  const isValidSign = await ed.verifyAsync(sign, message, pubKey );

  console.log(isValidSign);
}

main();
