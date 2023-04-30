const { expect } = require("chai");
const { ethers } = require("hardhat");
const constants = require("../util/constants");
const deploy = require("../util/deploy");
const { expectRevert, expectEvent } = require("../util/testUtils");

describe(constants.VAULT_CONTRACT_ID + ": Constructor", function () {
    let bondToken, baseToken, whitelist;        //contracts
    let owner, addr1, addr2, addr3; 	        //accounts

    beforeEach(async function () {
        [owner, addr1, addr2, addr3, ...addrs] = await ethers.getSigners();

        //contract
        let v;
        [bondToken, v, baseToken] = await deploy.deployAll(false);
        whitelist = await deploy.deployWhitelist(await v.securityManager()); 
    });

    describe("Security Manager", function () {

        it("can't pass zero address for security manager", async function () {
            const bondToken = await deploy.deployToken();
            await expectRevert(
                () => deploy.deployVault(
                    baseToken.address,
                    bondToken.address,
                    0,
                    false,
                    constants.ZERO_ADDRESS),
                constants.errorMessages.ZERO_ADDRESS
            );
        });

        it("can't pass bogus security manager", async function () {
            const bondToken = await deploy.deployToken();
            await expectRevert(
                () => deploy.deployVault(
                    baseToken.address,
                    bondToken.address,
                    0,
                    false,
                    baseToken.address),
                constants.errorMessages.LOWLEVEL_DELEGATE_CALL
            );
        });
    });

    describe("Tokens", function () {
        it("can't pass zero address for base token", async function () {
            await expectRevert(
                () => deploy.deployVault(constants.ZERO_ADDRESS),
                'Base Token 0 address'
            );
        });

        it("can't pass zero address for bond token", async function () {
            await expectRevert(
                () => deploy.deployVault(baseToken.address, constants.ZERO_ADDRESS),
                'Bond Token 0 address'
            );
        });

        it("can't pass non-contract for base token", async function () {
            //const expectedError = constants.errorMessages.VAULT_INVALID_TOKEN_CONTRACT(addr1.address); 
            await expectRevert(
                () => deploy.deployVault(addr1.address),
                'BaseToken invalid contract'
            );
        });

        it("can't pass non-contract bond token", async function () {
            //const expectedError = constants.errorMessages.VAULT_INVALID_TOKEN_CONTRACT(addr1.address); 
            await expectRevert(
                () => deploy.deployVault(baseToken.address, addr1.address),
                'BondToken invalid contract'
            );
        });

        it("can't pass non-ERC20 for base token", async function () {
            await expectRevert(
                () => deploy.deployVault(whitelist.address),
                constants.errorMessages.VAULT_NOT_ERC20
            );
        });

        it("can't pass non-ERC20 bond token", async function () {
            await expectRevert(
                () => deploy.deployVault(baseToken.address, whitelist.address),
                constants.errorMessages.VAULT_NOT_ERC20
            );
        });

        it("can't pass an already-used bond token", async function () {
            const testToken = await deploy.deployTestToken(); 
            await testToken.setVaultAddress(testToken.address); 
            
            await expectRevert(
                () => deploy.deployVault(baseToken.address, testToken.address),
                'Bond Token already in use'
            );
        });
    });
});