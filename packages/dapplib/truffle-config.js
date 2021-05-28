require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arch outer sugar warrior ridge remain minor inflict arch tail genuine'; 
let testAccounts = [
"0x682ad3756fca74070e8376f75844034284bcdc367039f4ea4a500252e68d8d85",
"0xbc6c1e5b0d1f28b5273ebe0fc9b4ef0f57eccc5caa9a1475fc7a1a8c5d4442f1",
"0x097e52539fd396b9ab051b813ee263eaaea7e641984ee3b5a108dbbda8a4667a",
"0x69056d12973b0106815774fa133c91ac23edc3d966840c74d21bf1905c1a932c",
"0xb04f35a5c5bf5d7ddbd679839c9e03cb9be9ea2f9ae9a4276ffedabec0d79d8e",
"0x931c3ceac23451ea34b0f63840b8f33f8e8bdb5d61f319f6b749cb6c56077659",
"0x617985e7083adf766d4d8a692ab548224ead7804651e6a92150266bd95c61c6f",
"0x28a9ff49816a9549505f464f3f74f18dba0ac0461d25f4c4a26113513cc52690",
"0xaf6311dcd476aeb8821ad152ba6bb290c9d2be7b96bb16bb88bf25d8e20d98e5",
"0xa1822d2d3aae4fe8adafe25fd839f7b476511f958b0357ca2fbf6f448185ef0d"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

