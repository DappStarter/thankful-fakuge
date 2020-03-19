require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner drink fortune strategy guard render remain slow hidden private sun giggle'; 
let testAccounts = [
"0x2944fb6daa8a79083c9265666e93d92f463ce44c21e3323aac2dbd9a23589ba0",
"0x3a8c92dba2a1619044c8fbad597632b4ef0346fbef74d0d8487919f7c94ae1b1",
"0x6423bc215df451da22c385941213c1132464264ce4137414577a310fbb8e540f",
"0x3ac0f0df358c7b4520b35458efa2c0ed31358a055242372be07c92f295cadd68",
"0x2f8c6f1b09862e194f706743085502d2bafb0c330f19a7eac4d8361a323478be",
"0xa5ac944253be342b309b4d758936302b6cb1ab70884dd32c312f2c3e78f81232",
"0x2d79631603738eeb91e86a308f7d7ccaee3258f51f8224c1fc3134df4960c988",
"0x58e2460fc3208c81c2131e552243ea86c13b3f814a6a21d51a91dad6893804de",
"0xfaa16ac1b6eaa7992dece29a7122397400ca7db4a10ff171245ff4ea8afcf1dd",
"0x3ae253964d10175d28090f92743515e1798a85eaf471b5671010e6b28270a356"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
