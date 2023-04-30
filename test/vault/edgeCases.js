const { expect } = require("chai");
const { ethers } = require("hardhat");
const constants = require("../util/constants");
const deploy = require("../util/deploy");
const { expectRevert, expectEvent } = require("../util/testUtils");

describe(constants.VAULT_CONTRACT_ID + ": Edge Cases", function () {
    let vault, bondToken, baseToken, whitelist, securityManager;     //contracts
    let owner, depositor, addr2, addr3;                                     //accounts

    beforeEach(async function () {
        [owner, depositor, addr2, addr3, ...addrs] = await ethers.getSigners();
    });

    describe("Base Token Transfer Returns False", function () {

        beforeEach(async function () {
            //contracts
            baseToken = await deploy.deployStableCoin(); 
            vault = await deploy.deployVault(baseToken.address);
            bondToken = await deploy.getBondToken(vault); 
            
            await baseToken.mint(vault.address, 1_000_000_000);
            await baseToken.mint(depositor.address, 1_000_000_000);
        });

        it("stabletoken rejects transfer during deposit", async function () {
            const amount = constants.DEFAULT_MIN_DEPOSIT;

            await baseToken.connect(depositor).approve(vault.address, amount);
            baseToken.setTransferFromEnabled(false);

            //deposit 
            await expectRevert(
               () => vault.connect(depositor).deposit(amount),
                constants.errorMessages.VAULT_TOKEN_TRANSFER_FAILED
            );
        });

        it("stabletoken rejects transfer during withdraw", async function () {
            const amount = constants.DEFAULT_MIN_DEPOSIT;

            //deposit 
            await baseToken.connect(depositor).approve(vault.address, amount);
            await vault.connect(depositor).deposit(amount);

            //next phase 
            await vault.progressToNextPhase(constants.exchangeRates.PARITY);
            await vault.progressToNextPhase(constants.exchangeRates.PARITY);

            await bondToken.connect(depositor).approve(vault.address, amount);
            baseToken.setTransferEnabled(false);

            //withdraw
            await expectRevert(
                () => vault.connect(depositor).withdraw(amount),
                constants.errorMessages.VAULT_TOKEN_TRANSFER_FAILED
            );
        });
    });

    describe("Bond Token Transfer Returns False", function () {

        beforeEach(async function () {
            //contracts
            [bondToken, vault, baseToken] = await deploy.deployVaultWithTestToken();
            await baseToken.mint(vault.address, 1_000_000_000);
            await baseToken.mint(depositor.address, 1_000_000_000);
        });

        it("bond token rejects transfer during deposit", async function () {
            const amount = constants.DEFAULT_MIN_DEPOSIT;

            await baseToken.connect(depositor).approve(vault.address, amount);
            bondToken.setTransferEnabled(false);

            //deposit 
            await expectRevert(
                () => vault.connect(depositor).deposit(amount),
                constants.errorMessages.VAULT_TOKEN_TRANSFER_FAILED
            );
        });

        it("bond token rejects transfer during withdraw", async function () {
            const amount = constants.DEFAULT_MIN_DEPOSIT;

            //deposit 
            await baseToken.connect(depositor).approve(vault.address, amount);
            await vault.connect(depositor).deposit(amount);

            //next phase 
            await vault.progressToNextPhase(constants.exchangeRates.PARITY);
            await vault.progressToNextPhase(constants.exchangeRates.PARITY);

            await bondToken.connect(depositor).approve(vault.address, amount);
            bondToken.setTransferFromEnabled(false);

            //withdraw
            await expectRevert(
                () => vault.connect(depositor).withdraw(amount),
                constants.errorMessages.VAULT_TOKEN_TRANSFER_FAILED
            );
        });
    });

    describe("Weird Transfers", function () {

        beforeEach(async function () {
            //contracts
            [bondToken, vault, baseToken, whitelist, securityManager] = await deploy.deployAll(false);
            await baseToken.mint(vault.address, 1_000_000_000);
            await baseToken.mint(depositor.address, 1_000_000_000);
        });
    });
});