const { assert } = require("console");
var expect = require('chai').expect;
const HortensiaNFT = artifacts.require("./HortensiaNFT.sol");
const Web3 = require("web3");
var ethers = require('ethers');


contract("HortensiaNFT", account => {
    let HortensiaNFTInstance;
    let recipient ;
    let metadataURI;

    beforeEach(async () => {
        HortensiaNFTInstance = await HortensiaNFT.new();
        console.log(HortensiaNFTInstance);
        recipient = "0x66E988507C0194011E112c19871D2694Ad25C160";
        metadataURI = '1';
        await HortensiaNFTInstance.paytoMint(recipient, metadataURI, {value: ethers.utils.parseEther('0.06')})
    })

    it("Mint and transfer to the recipient", async () => {
        balance = await HortensiaNFTInstance.balanceOf(recipient);
        expect(balance.toString()).to.equal("1");
    })

    it("Should not be able to mint the same NFT", async () => {
        recipient2 = "0xbC98de713315Aea5404b527cdbD7362ab4650008"
        await HortensiaNFTInstance.paytoMint(recipient2, "2", {value: ethers.utils.parseEther('0.05')});

    })
    it("Should Count the NFT" , async() => {
        await HortensiaNFTInstance.paytoMint(recipient2, "3", {value: ethers.utils.parseEther('0.05')});
        await HortensiaNFTInstance.paytoMint(recipient2, "4", {value: ethers.utils.parseEther('0.05')});
        const result = await HortensiaNFTInstance.count();
        expect(result.toString()).to.equal("3");
    })
})