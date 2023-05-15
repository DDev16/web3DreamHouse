// SPDX-License-Identifier: MIT


pragma solidity >=0.4.22 <0.9.0;

contract UserRegistration {
    mapping(address => bool) public users;

    function register() public {
        require(!users[msg.sender], "This user is already registered");
        users[msg.sender] = true;
    }

    function isRegistered(address user) public view returns (bool) {
        return users[user];
    }
}
