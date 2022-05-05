var HDWalletProvider = require("/Users/arnaudberger/hortensiq/Client/node_modules/truffle-hdwallet-provider");
const mnemonic = "2a1be606a4026ebf092d21cbc9f81dc5de468e7d0231b8349338d6eb9663b5b2";

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 7545,
      network_id: "*", // Match any network id
      gas: 5000000
    },

    rinkeby: {
      provider: function() { 
       return new HDWalletProvider(mnemonic,"https://rinkeby.infura.io/v3/c5f7890fee9141739841b310a607f31e");
      },
      network_id: 4,
      gas: 5500000,
  }
  },
  contracts_directory: "/Users/arnaudberger/hortensiq/Client/src/contracts",
  contracts_build_directory: "/Users/arnaudberger/hortensiq/Client/src/Abis",
  
  compilers: {
    solc: {
      version: "^0.8.0",
    }
  }
};
