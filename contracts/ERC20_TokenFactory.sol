// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "./ERC20_Token.sol";

contract ERC20_TokenFactory {
    mapping(address => ERC20_Token[]) public erc20Adresses;
    constructor() {}

    function createERC20(string memory _tokenName, string memory _symbol) public {
        ERC20_Token erc20_Token = new ERC20_Token(_tokenName, _symbol);
        erc20Adresses[msg.sender].push(erc20_Token);
    }

    function ownerERC20s(address _owner) public view returns( ERC20_Token[] memory) {
        return erc20Adresses[_owner];
    }

    function getMyERC20() public view returns(ERC20_Token[] memory) {
        return erc20Adresses[msg.sender];
    }
}