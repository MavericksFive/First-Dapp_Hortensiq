const HortensiaNFT = artifacts.require("/Users/arnaudberger/hortensiq/Client/src/contracts/HortensiaNFT.sol");

module.exports = function (deployer) {
  deployer.deploy(HortensiaNFT);
}
