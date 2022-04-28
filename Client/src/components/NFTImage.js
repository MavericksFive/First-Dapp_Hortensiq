import react from 'react';
import {HortensiaNFTContract,account} from './Gallerie.js'

function NFTImage({tokenId}) {
    const contentId = 'QmSgPXc89RdEipYMJUeu1pY6ZqYCxyDGQQEyspnSsraqLB';
    const imageURI = `https://gateway.pinata.cloud/ipfs/${contentId}/${tokenId}.png`;

    return (
      <div>
        <img src={imageURI}></img>
          <h5>ID #{tokenId}</h5>
      </div>
    );
  }
  
  export default NFTImage