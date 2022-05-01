module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 7545,
      network_id: "*", // Match any network id
      gas: 5000000
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
