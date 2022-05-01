const Migrations = artifacts.require("/Users/arnaudberger/hortensiq/Client/src/contracts/Migrations.sol");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
