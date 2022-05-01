import {React, useState, useEffect} from 'react'
import { AiTwotoneUpSquare } from 'react-icons/ai';
import "./Gallerie.css"
import HortensiaNFT from '/Users/arnaudberger/hortensiq/Client/src/Abis/HortensiaNFT.json';


function  Gallerie () {
    var [erroMessage, setErrorMessage] = useState(null);
    var [defaultAccount, setdefaultAccount] = useState(null);
    var [userBalance, setuserBalance] = useState([]);
    var Web3 = require('web3/dist/web3.min.js');
    
    var web3 = new Web3("http://localhost:7545");
  
    const ABI = HortensiaNFT.abi;
    const address = '0x2f6E03df72aAB80c04d29ecdDCF653D4a77d50c0';
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
    const balance = [];
    const result = await HortensiaNFTContract.methods.balanceOf(address).call()
    for (let i =0; i < result;i++){
      const tokenId = await HortensiaNFTContract.methods.tokenOfOwnerByIndex(address, i).call()
      let metadataURI = await HortensiaNFTContract.methods.tokenURI(tokenId).call()
      metadataURI = await fetch(metadataURI).then((response) => response.json())
      balance.push(metadataURI[0].Image)
    }
    setuserBalance(balance)
  }
  
  window.ethereum.on('accountsChanged', accountChangedHandler)
  
  const mintToken = async () => {
    var tokenId = await HortensiaNFTContract.methods.count().call()
    console.log(tokenId)
    const contentId = 'QmYrjfAN1wCSr9U2X5g2GhSBUg4i1em1rLBEdLCx5vLnJv';
    const metadataURI = `${contentId}/${tokenId}.json`;
    await HortensiaNFTContract.methods.paytoMint(defaultAccount, metadataURI).send({ from: defaultAccount, value: web3.utils.toWei("0.05", "ether"), gas:2000000 })
    .then(result => getUserBalance(defaultAccount))
    }

  
    return (
        <div className ="Big-Container">
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
        </div>
        <div className ="DisplayAccount">{defaultAccount}</div>
        <div className="NFTsContainer">
        {userBalance.map((image,i) => <img src={image} key={i}></img>)}</div>
      
        
        </div>
    )
}
export default Gallerie

