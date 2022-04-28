const HortensiaNFT = artifacts.require("HortensiaNFT");

module.exports = function (deployer) {
  deployer.deploy(HortensiaNFT);
}
