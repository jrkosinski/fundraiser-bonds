const utils = require("./lib/utils");
const constants = require("./constants"); 
const { ethers } = require("hardhat");

async function deploySecurityManager(adminAddress) {
    return await utils.deployContract(constants.SECURITY_CONTRACT_ID, [adminAddress]); 
}

async function deployToken() {
    return await utils.deployContractUpgradeableSilent(constants.TOKEN_CONTRACT_ID, [
        constants.TOKEN_NAME,
        constants.TOKEN_SYMBOL,
        constants.DEFAULT_TOKEN_DECIMALS,
        constants.INITIAL_SUPPLY, 
        constants[constants.NETWORK].SECURITY_MANAGER_ADDRESS
    ]);
}

async function deployVault(
    baseTokenAddress,
    bondTokenAddress = null,
    minimumDeposit = constants.DEFAULT_MIN_DEPOSIT, 
    securityManagerAddress = null,
) {
    
    //deploy bond token 
    if (!bondTokenAddress) {
        const bondToken = await deployToken();
        bondTokenAddress = bondToken.address;
    }

    //deploy vault 
    const vault = await utils.deployContractUpgradeableSilent(constants.VAULT_CONTRACT_ID, [
        baseTokenAddress,
        bondTokenAddress,
        minimumDeposit,
        securityManagerAddress
    ]);

    return vault;
}

async function deployStableCoin(initialMint = 1_000_000_000_000, decimals = 6) {
    return await utils.deployContractSilent(constants.STABLECOIN_CONTRACT_ID, [initialMint, decimals]);
}

async function deployWhitelist() {
    return await utils.deployContractSilent(constants.WHITELIST_CONTRACT_ID, [constants[constants.NETWORK].SECURITY_MANAGER_ADDRESS]);
}

async function deployContractSizer() {
    return await utils.deployContractSilent("ContractSizer", []);
}

async function deployAll(withOracle = true) {
    const baseToken = await deployToken();
    const vault = await deployVault(baseToken.address);
    const bondToken = await ethers.getContractAt(constants.TOKEN_CONTRACT_ID, await vault.bondToken());

    let whitelistOracle = null;
    if (withOracle) {
        whitelistOracle = await deployWhitelist();
        vault.setWhitelist(whitelistOracle.address);
    }

    return [
        bondToken, vault, baseToken, whitelistOracle
    ];
}

module.exports = {
    deployToken,
    deployVault,
    deployStableCoin,
    deployWhitelist,
    deploySecurityManager,
    deployContractSizer,
    deployAll
};