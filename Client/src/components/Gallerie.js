import {React, useState} from 'react'
import "./Gallerie.css"
import GallerieNFTContract from './Gallerie'
import HortensiaNFT from '/Users/arnaudberger/hortensiq/Client/src/Abis/HortensiaNFT.json';
import {ethers} from 'ethers';

function  Gallerie () {
    var [erroMessage, setErrorMessage] = useState(null);
    var [defaultAccount, setdefaultAccount] = useState(null);
    var [userBalance, setuserBalance] = useState(null);
  
    var Web3 = require('web3/dist/web3.min.js')
    var web3 = new Web3("http://localhost:7545");
  
    var account;
    const ABI = HortensiaNFT.abi;
    const address = '0x88378F29068466F775adEeb0d02DC4771B7c4BD6';
    const HortensiaNFTContract = new web3.eth.Contract(ABI, address);
  if (window.ethereum) {
    window.ethereum.request({method: 'eth_requestAccounts'})
    .then(result => {
      accountChangedHandler(result[0]);
    })
  
  } else {
    setErrorMessage('Install MetaMask');
  }
  
  const accountChangedHandler = (newAccount) => {
    setdefaultAccount(newAccount);
    getUserBalance(newAccount);
  }
  
  const getUserBalance = async (address) => {
    await HortensiaNFTContract.methods.balanceOf(address).call()
    .then(result => setuserBalance(result))
  }
  
  window.ethereum.on('accountsChanged', accountChangedHandler)
  
  const mintToken = async () => {
    var tokenId = await HortensiaNFTContract.methods.count().call()
    console.log(tokenId)
    const contentId = 'QmSgPXc89RdEipYMJUeu1pY6ZqYCxyDGQQEyspnSsraqLB';
    const metadataURI = `${contentId}/${tokenId}.json`;
    const result = await HortensiaNFTContract.methods.paytoMint(defaultAccount, metadataURI).send({ from: defaultAccount, value: web3.utils.toWei("0.05", "ether"), gas:2000000 })
    getUserBalance(defaultAccount)
    }

    return (
        <>
        <div className = "Container" id="Gallerie">
        <div className= "Text" >
        <h1>Gallerie</h1>
        <h2>Welcome to the community of Hortensia</h2>
        <h3>5555 Orks ready to conquer the Metaverse.
        More than 220 traits divided into 8 families, led by 8 leaders and surrounded by 8 special Orks. We offer you the chance to be rewarded with exclusive programs, royalties, premium access and to become financially free.
        By learning, creating new opportunities, earning passive income, while having an active income option through an exclusive video game,
        </h3>
        </div>
        <div className = "Image">
        <img className = "Gallerie-image" src="Gallerie-image.png"/>
        <button onClick = {mintToken}>Mint</button>
        </div>
        <h3>{userBalance}</h3>
        <h3>{defaultAccount}</h3>
        </div>
        </>
    )
}
export default Gallerie

