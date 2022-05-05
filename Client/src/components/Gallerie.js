import {React, useState, useEffect} from 'react'
import { AiTwotoneUpSquare } from 'react-icons/ai';
import "./Gallerie.css"
import HortensiaNFT from '/Users/arnaudberger/hortensiq/Client/src/Abis/HortensiaNFT.json';
import { ethers } from "ethers";


function  Gallerie () {
    var [defaultAccount, setdefaultAccount] = useState(null);
    var [userBalance, setuserBalance] = useState([]);
    const ABI = HortensiaNFT.abi;
    const address = '0xef85496602c8188d5315cc0f18eace4760dac41a';
    const provider =  new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    const HortensiaNFTContract = new ethers.Contract(address, ABI ,signer);

    
   

  if (window.ethereum) {
    window.ethereum.request({method: 'eth_requestAccounts'})
    .then(result => {
      accountChangedHandler(result[0]);
   
    })
  
  } else {
    console.log('Install MetaMask');
  }
  const getUserBalance = async (address) => {
    const balance = [];
    const result = await HortensiaNFTContract.balanceOf(address)
    for (let i =0; i < result;i++){
      const tokenId = await HortensiaNFTContract.tokenOfOwnerByIndex(address, i)
      let metadataURI = await HortensiaNFTContract.tokenURI(tokenId)
      metadataURI = await fetch(metadataURI).then((response) => response.json())
      balance.push(metadataURI[0].Image)
    }
    setuserBalance(balance)
  }
  const accountChangedHandler = (newAccount) => {
    setdefaultAccount(newAccount);
    getUserBalance(newAccount);
  }

  window.ethereum.on('accountsChanged', accountChangedHandler)
  
  const mintToken = async () => {
    var tokenId = await HortensiaNFTContract.count()
    console.log(tokenId.toString())
    const contentId = 'QmYrjfAN1wCSr9U2X5g2GhSBUg4i1em1rLBEdLCx5vLnJv';
    const metadataURI = `${contentId}/${tokenId}.json`;
    HortensiaNFTContract.connect(signer)
    await HortensiaNFTContract.paytoMint(defaultAccount, metadataURI, {gasLimit:23000,gasPrice:ethers.utils.parseEther("0.000002"), value: ethers.utils.parseEther("0.05")})
    getUserBalance(defaultAccount)
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

