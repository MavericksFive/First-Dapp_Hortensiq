var HDWalletProvider = require("/Users/arnaudberger/hortensiq/Client/node_modules/truffle-hdwallet-provider");
const mnemonic = "a09d4f033c237e2b5afdbee167fa3942e52dc6a61deb9cf29e77cf7f8b5cb667";

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 7545,
      network_id: "*", // Match any network id
      gas: 5000000
    },
  },
  contracts_directory: "/Users/arnaudberger/hortensiq/Client/src/contracts",
  contracts_build_directory: "/Users/arnaudberger/hortensiq/Client/src/Abis",
  
  compilers: {
    solc: {
      version: "^0.8.0",
    }
  }
};
