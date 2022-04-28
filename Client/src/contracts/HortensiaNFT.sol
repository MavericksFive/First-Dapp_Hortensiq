pragma solidity ^0.8.0;


import "/Users/arnaudberger/hortensiq/Client/node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "/Users/arnaudberger/hortensiq/Client/node_modules/@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "/Users/arnaudberger/hortensiq/Client/node_modules/@openzeppelin/contracts/access/Ownable.sol";
import "/Users/arnaudberger/hortensiq/Client/node_modules/@openzeppelin/contracts/utils/Counters.sol";

contract HortensiaNFT is ERC721, ERC721URIStorage, Ownable {
    uint NFTPrice = 0.05 ether;
    using Counters for Counters.Counter;
    string[] public hortensias;
    mapping(string => bool) hortensiasExists;

    Counters.Counter private _tokenIdCounter;

    constructor() ERC721("Hortensia", "HOR ") {

    }

    function _baseURI() internal pure override returns (string memory) {
        return "ipfs://";
    }

    function safeMint(address to, string memory uri) public onlyOwner {
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
    }

    // The following functions are overrides required by Solidity.

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }
    function isContentOwned(string memory uri) public view returns (bool){
        return hortensiasExists[uri];
    }

    function paytoMint(address _recipient, string memory _metadataURI) public payable returns(uint256){
        require(!(hortensiasExists[_metadataURI]),'NFT already Minted!');
        require(msg.value >= NFTPrice, "Need to Pay up!");
        uint _newItemID = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        hortensiasExists[_metadataURI] = true;
        _mint(_recipient, _newItemID);
        _setTokenURI(_newItemID, _metadataURI);
        return _newItemID;
    }

    function count() public view returns (uint256){
        return( _tokenIdCounter.current());
    }
}