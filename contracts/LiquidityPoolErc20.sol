pragma solidity ^0.6.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract LiquidityPoolErc20 is ERC20, Ownable {
    constructor(string memory name, string memory symbol)
        public
        ERC20(name, symbol)
    {}

    function mint(address to, uint256 amount) public onlyOwner returns (bool) {
        _mint(to, amount);
        return true;
    }
}
