import { generateMnemonic, mnemonicToSeedSync } from "bip39";

// generate mnemoic
const mnemonic = generateMnemonic(128);


// generate seed phase
const seed = await mnemonicToSeedSync(mnemonic);
console.log(seed);


// derivation path
//  m/purpose/coin_type/account/change/address_index 