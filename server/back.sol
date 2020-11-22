pragma solidity ^0.7.5;

contract Bank {
    mapping(address => uint) internal account;
    uint money = 0;

    constructor() payable public{
        money = msg.value;
    }

    function send() payable public{
        money = msg.value;
    }
    
    function getMoney() payable public{
        msg.sender.transfer(money);
    }
}
