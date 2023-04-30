const utils = require("./lib/utils");
const constants = require("./constants");
const { ethers } = require("hardhat");

function getCurrentConfig() {
    return constants[constants.NETWORK]; 
}

function getVaultAddress() {
    return getCurrentConfig().VAULT_ADDRESS;
}

function getBaseTokenAddress() {
    return getCurrentConfig().STABLE_TOKEN_ADDRESS;
}

function getBondTokenAddress() {
    return getCurrentConfig().VAULT_TOKEN_ADDRESS;
}

function getSecurityManagerAddress() {
    return getCurrentConfig().SECURITY_MANAGER_ADDRESS;
}

function getWhitelistAddress() {
    return getCurrentConfig().WHITELIST_ADDRESS;
}

function getDepositVaultAddress() {
    return getCurrentConfig().DEPOSIT_VAULT_ADDRESS;
}

async function getVault() {
    return await ethers.getContractAt(constants.VAULT_CONTRACT_ID, getVaultAddress()); 
}

async function getBaseToken() {
    return await ethers.getContractAt(constants.STABLECOIN_CONTRACT_ID, getBaseTokenAddress());
}

async function getBondToken() {
    return await ethers.getContractAt(constants.TOKEN_CONTRACT_ID, getBondTokenAddress());
}

async function getSecurityManager() {
    return await ethers.getContractAt(constants.SECURITY_CONTRACT_ID, getSecurityManagerAddress());
}

async function getWhitelist() {
    return await ethers.getContractAt(constants.WHITELIST_CONTRACT_ID, getWhitelistAddress());
}

async function getDepositVault() {
    return await ethers.getContractAt(constants.DEPOSIT_VAULT_CONTRACT_ID, getDepositVaultAddress());
}

module.exports = {
    getCurrentConfig, 
    getVaultAddress, 
    getBaseTokenAddress, 
    getBondTokenAddress, 
    getVaultAddress, 
    getSecurityManagerAddress, 
    getWhitelistAddress,
    getDepositVaultAddress, 
    
    getVault,
    getBaseToken,
    getBondToken,
    getVault,
    getSecurityManager,
    getWhitelist,
    getDepositVault
}