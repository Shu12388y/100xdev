import { Keypair } from "@solana/web3.js";
import * as ep from "@noble/ed25519";

const keypair = Keypair.generate();

const publicKey = keypair.publicKey;
const privateKey = keypair.secretKey;

console.log(publicKey);
console.log(privateKey);


const message = new TextEncoder().encode('send 10');
console.log(message);


