// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TestToken is ERC20 {
  constructor(string memory _name, string memory _symbol) ERC20(_name, _symbol) {}

  function mint(address sender, uint256 amount) external {
    _mint(sender, amount);
  }

  function decimals() public view virtual override returns (uint8) {
    return 18;
  }
}
