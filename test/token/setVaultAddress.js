const { expect } = require("chai");
const { ethers } = require("hardhat");
const constants = require("../util/constants");
const deploy = require("../util/deploy");
const testFlags = require("../testFlags");
const { expectRevert } = require("../util/testUtils");

describe(constants.TOKEN_CONTRACT_ID + ": Set Vault Address", function () {
    let bondToken, baseToken, vault;   //contracts
    let bondToken2, baseToken2, vault2; 
    
    let owner, addr1, addr2, addr3;     //accounts

    beforeEach(async function () {
        [owner, addr1, addr2, addr3, ...addrs] = await ethers.getSigners();

        //contracts
        bondToken = await deploy.deployToken(); 
        baseToken = await deploy.deployStableCoin(); 
        vault = await deploy.deployVault(
            baseToken.address,
            bondToken.address,
            constants.DEFAULT_MIN_DEPOSIT,
            false
        ); 
        
        [bondToken2, vault2, baseToken2] = await deploy.deployAll(false); 
    });

    describe("Constraints", function () {
        it("vault can only be set once", async function () {
            await bondToken.setVaultAddress(vault.address);
            expect(await bondToken.vaultAddress()).to.equal(vault.address);
            
            //cannot set it again 
            await expectRevert(
                () => bondToken.connect(owner).setVaultAddress(vault.address),
                constants.errorMessages.VAULT_ALREADY_SET
            );
        });

        it("cannot set zero address", async function () {
            await expectRevert(
                () => bondToken.setVaultAddress(constants.ZERO_ADDRESS),
                constants.errorMessages.INVALID_VAULT_ADDRESS
            )
        });

        it("cannot set non-vault address", async function () {
            await expectRevert(
                () => bondToken.setVaultAddress(addr1.address)
            )
        });

        it("cannot set address of incorrect vault", async function () {
            await expectRevert(
                () => bondToken.setVaultAddress(vault2.address),
                constants.errorMessages.INVALID_VAULT_ADDRESS
            )
        });
    });
});