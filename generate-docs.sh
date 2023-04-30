
#call graphs
mkdir ./docs/call-graphs
surya graph contracts/SecurityManager.sol | dot -Tpng > ./docs/call-graphs/SecurityManager.sol.png
surya graph contracts/Whitelist.sol | dot -Tpng > ./docs/call-graphs/Whitelist.sol.png
surya graph contracts/Vault.sol | dot -Tpng > ./docs/call-graphs/Vault.sol.png
surya graph contracts/BondToken.sol | dot -Tpng > ./docs/call-graphs/BondToken.sol.png
surya graph contracts/DepositVault.sol | dot -Tpng > ./docs/call-graphs/DepositVault.sol.png

#inheritance
mkdir ./docs/inheritance
surya inheritance contracts/SecurityManager.sol | dot -Tpng > ./docs/inheritance/SecurityManager.sol.png
surya inheritance contracts/Whitelist.sol | dot -Tpng > ./docs/inheritance/Whitelist.sol.png
surya inheritance contracts/Vault.sol | dot -Tpng > ./docs/inheritance/Vault.sol.png
surya inheritance contracts/BondToken.sol | dot -Tpng > ./docs/inheritance/BondToken.sol.png
surya inheritance contracts/DepositVault.sol | dot -Tpng > ./docs/inheritance/DepositVault.sol.png

#markdown
mkdir ./docs/markdown
surya mdreport ./docs/markdown/SecurityManager.md ./contracts/SecurityManager.sol
surya mdreport ./docs/markdown/Whitelist.md ./contracts/Whitelist.sol
surya mdreport ./docs/markdown/Vault.md ./contracts/Vault.sol
surya mdreport ./docs/markdown/BondToken.md ./contracts/BondToken.sol
surya mdreport ./docs/markdown/DepositVault.md ./contracts/DepositVault.sol
