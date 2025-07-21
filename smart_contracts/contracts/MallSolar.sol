// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract MallSolar {
    address public owner;

    struct Asset {
        uint id;
        address producer;
        string location;
        uint energyAmount;
    }

    uint public nextAssetId;
    mapping(uint => Asset) public assets;

    event AssetRegistered(uint id, address producer);

    constructor() {
        owner = msg.sender;
    }

    function registerAsset(string memory location, uint energyAmount) public {
        assets[nextAssetId] = Asset(nextAssetId, msg.sender, location, energyAmount);
        emit AssetRegistered(nextAssetId, msg.sender);
        nextAssetId++;
    }
}