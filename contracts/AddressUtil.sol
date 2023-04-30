// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts-upgradeable/utils/AddressUpgradeable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

library AddressUtil {
    /**
     * Determines whether or not the given address refers to a valid ERC20 token contract. 
     * 
     * @param _addr The address in question. 
     * @return bool True if ERC20 token. 
     */
    function isERC20Contract(address _addr) internal view returns (bool) {
        if (_addr != address(0)) {
            if (AddressUpgradeable.isContract(_addr)) {
                IERC20 token = IERC20(_addr); 
                return token.totalSupply() >= 0;  
            }
        }
        return false;
    }
}