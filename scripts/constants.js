module.exports = {

    //token details 
    TOKEN_CONTRACT_ID: "BondToken",
    TOKEN_NAME: "Credit Facility for Four Week Treasury Bills",
    TOKEN_SYMBOL: "US4W",
    ZERO_ADDRESS: "0x0000000000000000000000000000000000000000",
    INITIAL_SUPPLY: 0,

    //vault details
    VAULT_CONTRACT_ID: "Vault",
    DEFAULT_TOKEN_DECIMALS: 6,
    DEFAULT_MIN_DEPOSIT: 1_000_000,

    //other contracts 
    STABLECOIN_CONTRACT_ID: "MockStableCoin",
    SECURITY_CONTRACT_ID: "SecurityManager",
    WHITELIST_CONTRACT_ID: "Whitelist",
    DEPOSIT_VAULT_CONTRACT_ID: "DepositVault",
    
    NETWORK: 'bsc_testnet4', 
    
    addresses: [
        "0xcEa845CA58C8dD4369810c3b5168C49Faa34E6F3",
        "0x959D3e208f6E0ec30ddb861E153f8a365c580753", //s
        "0x8bA35513C3F5ac659907D222e3DaB38b20f8F52A", //2nd admin
        "0xa300f3BfB34C95E1C6fbB1415b8B99FDAFa061E4" //d 
    ], 
    
    knownAddresses: {
        j1: "0xcEa845CA58C8dD4369810c3b5168C49Faa34E6F3",
        j2: "0x8bA35513C3F5ac659907D222e3DaB38b20f8F52A",
        s1: "0x959D3e208f6E0ec30ddb861E153f8a365c580753", 
        d1: "0xa300f3BfB34C95E1C6fbB1415b8B99FDAFa061E4",
        d2: "0x1775A13ddee0231080eb9662cF3ac25041cE1427",
        g1: "0xcefb233406133224AE9b19444d836F6a33593F13"
    },

    localhost: {
        VAULT_TOKEN_ADDRESS: "0xB64155045D1F71b09f011ac79175CEAD9BCB68C8",
        STABLE_TOKEN_ADDRESS: "0x4f12a1dEC8f57564A4fcff5Fb241e646e5A822Cc",
        VAULT_ADDRESS: "0x8C18a1f14348389808d407bd1975cD8b3A44ceAd",
        WHITELIST_ADDRESS: "",
        SECURITY_MANAGER_ADDRESS: "0xe22e63FCf5D24bDF84041683cAd6af35ea856AD1",
        DEPOSIT_VAULT_ADDRESS: "0x716CE2687766C687be3D115590fb2Eb528664764"
    },

    bsc: {
        VAULT_TOKEN_ADDRESS: "0xB95Bc0d1057a43ACF608805c6D4e3e234e4d4C1b",
        STABLE_TOKEN_ADDRESS: "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",
        VAULT_ADDRESS: "0x3daa26E70383B37E41434a8bF8e8bF3A335c144A",
        WHITELIST_ADDRESS: "0x2A7aD6908A08dD19D6c5090aA86E7c7E61C3e7F4",
        SECURITY_MANAGER_ADDRESS: "0x2900E387152a22370F482a0640701e1B41cc0896",
        DEPOSIT_VAULT_ADDRESS: "0x65aFe9D3cfE457271a78D86638F7834e2d4b11Fd"
    },

    eth: {
        VAULT_TOKEN_ADDRESS: "0xADF789E61Bf38c463e4bA5B2B6E9C1Af6659e11b",
        STABLE_TOKEN_ADDRESS: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
        VAULT_ADDRESS: "0xd86FFB404147163e19E010a0e9d4995E0e36F335",
        WHITELIST_ADDRESS: "0xf284B55F46B9A0Fe7d79ce92F869Ac52b9B3Ff7c",
        SECURITY_MANAGER_ADDRESS: "0x746430119DA3EA0e398b93059e96F21bfabAa8a4",
        DEPOSIT_VAULT_ADDRESS: "0xD48425B7fb702F571D872f4b7046B30c9FA47e15"
    },

    goerli: {
        VAULT_TOKEN_ADDRESS: "0x50e243C6930CD22eD6C2c1c612be46634Fe2dB11",
        STABLE_TOKEN_ADDRESS: "0x006c349b4DBD93edF303B6bAe4E18A19387b5810",
        VAULT_ADDRESS: "0x816232b2FB8455B158f00Fc919Aa607E0b3CF2ef",
        WHITELIST_ADDRESS: "0x1f88391767Ca6B4F33A63508D1822B481c651a21",
        SECURITY_MANAGER_ADDRESS: "0xcD052e7B19Fa468cE9B4ffE65Bf519EB76438536"
    },
    bsc_testnet0: {
        VAULT_TOKEN_ADDRESS: "0x58d3E4e41dbc7Dde9783595B0D690dc53EDAc1A7",
        STABLE_TOKEN_ADDRESS: "0x5cB603DB37d80e162a355f8085ED1885769ec211",
        VAULT_ADDRESS: "0x5a005981378ADfC1F1D984c7B623E5eBB7E1D334",
        WHITELIST_ADDRESS: "0xA9E165a9D67c6E6C341d07B6CC47Dd6810197A8C",
        SECURITY_MANAGER_ADDRESS: "0xb799Df50f2d81cAEd17b130357c3796012D4cFAC",
        DEPOSIT_VAULT_ADDRESS: ""
    },
    bsc_testnet1: {
        // Credit Facility for Four Week Treasury Bills #1
        // US4W: US Treasuries 4 Week Credit Token #1
        VAULT_TOKEN_ADDRESS: "0x9C57d85A5AB47C4B871Ad9712397Ee7a7FA8b97C",
        STABLE_TOKEN_ADDRESS: "0x56AD411fa185FdEc7240c0bf1daEA42F8Eeb9114",
        VAULT_ADDRESS: "0x2F426f9012763025e479a80A0fb862374197D82F",
        WHITELIST_ADDRESS: "0x29beC19266C0345E85BB0859A3AED67417706E18",
        SECURITY_MANAGER_ADDRESS: "0x72b4C388Cade6CE936D6e5C949c27c027D684400",
        DEPOSIT_VAULT_ADDRESS: "0xE189b98cea3874B1E8AD803B1aF1d6de8b16213A"
    },
    bsc_testnet2: {
        // Credit Facility for Four Week Treasury Bills #2
        // US4W2: US Treasuries 4 Week Credit Token #2
        VAULT_TOKEN_ADDRESS: "0x69D2d2526cCC4b82d307599fbc1c222Ac3809358",
        STABLE_TOKEN_ADDRESS: "0x56AD411fa185FdEc7240c0bf1daEA42F8Eeb9114",
        VAULT_ADDRESS: "0x16235a7E9A5E9841D5861E6Ddd01CbcFC7a6db55",
        WHITELIST_ADDRESS: "0x29beC19266C0345E85BB0859A3AED67417706E18",
        SECURITY_MANAGER_ADDRESS: "0x72b4C388Cade6CE936D6e5C949c27c027D684400",
        DEPOSIT_VAULT_ADDRESS: ""
    },
    bsc_testnet3: {
        // Credit Facility for Four Week Treasury Bills #3
        // US4W3: US Treasuries 4 Week Credit Token #3
        VAULT_TOKEN_ADDRESS: "0x8F4A8Da823E0196c17414c80797B84B5D0c3476e",
        STABLE_TOKEN_ADDRESS: "0x56AD411fa185FdEc7240c0bf1daEA42F8Eeb9114",
        VAULT_ADDRESS: "0xeDEeE23213c17fae9E7AcD11Ce727E807E2bE5E4",
        WHITELIST_ADDRESS: "0x29beC19266C0345E85BB0859A3AED67417706E18",
        SECURITY_MANAGER_ADDRESS: "0x72b4C388Cade6CE936D6e5C949c27c027D684400",
        DEPOSIT_VAULT_ADDRESS: ""
    },
    bsc_testnet4: {
        // Credit Facility for Four Week Treasury Bills #4
        // US4W4: US Treasuries 4 Week Credit Token #4
        VAULT_TOKEN_ADDRESS: "0xC322c748738b8Ec0c288A1A34B8DBEAACA46Db5F",
        STABLE_TOKEN_ADDRESS: "0x56AD411fa185FdEc7240c0bf1daEA42F8Eeb9114",
        VAULT_ADDRESS: "0x587006Ad2B023f9123471C5a74a3649259Fa6e3c",
        WHITELIST_ADDRESS: "0x29beC19266C0345E85BB0859A3AED67417706E18",
        SECURITY_MANAGER_ADDRESS: "0x72b4C388Cade6CE936D6e5C949c27c027D684400",
        DEPOSIT_VAULT_ADDRESS: ""
    },
    
    sepolia: {
        VAULT_TOKEN_ADDRESS: "0x46234eC15320429Ddb672155eCC166a97d021C88",
        STABLE_TOKEN_ADDRESS: "0x64dF08ACcff666B9AA47856CC25868d0Afe60cc1",
        VAULT_ADDRESS: "0xC613A37F0b019F6310B9859f56Ac7dDE67aa4A96",
        WHITELIST_ADDRESS: "",
        SECURITY_MANAGER_ADDRESS: "0x5811B87114cF9FB13A40E2809e1CCa0678cC6C25",
        DEPOSIT_VAULT_ADDRESS: "0x5811B87114cF9FB13A40E2809e1CCa0678cC6C25"
    },
    
    tokenAddresses: {
        //goerli token addresses
        goerli: {
            usdc: '0x2f3a40a3db8a7e3d09b0adfefbce4f6f81927557',
            usdt: '0xe802376580c10fe23f027e1e19ed9d54d4c9311e'
        }, 

        //mainnet token addresses
        mainnet: {
            usdc: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
            usdt: '0xdac17f958d2ee523a2206206994597c13d831ec7'
        }
    }, 

    interfaceIds: {
        IERC2981: "0x2a55205a",
        IERC165: "0x01ffc9a7",
        IAccessControl: "0x7965db0b",
        IERC721: "0x80ac58cd",
        IERC721Enumerable: "0x780e9d63",
        IERC20: "0x36372b07",
        IERC20Metadata: "0xa219a025",
        IERC777: "0xe58e113c"
    },

    vaultPhase: {
        DEPOSIT: 0,
        LOCKED: 1,
        WITHDRAW: 2
    },

    roles: {
        ADMIN:              '0x0000000000000000000000000000000000000000000000000000000000000000',
        TOKEN_MINTER:       '0x9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6',
        TOKEN_BURNER:       '0x3c11d16cbaffd01df69ce1c404f6340ee057498f5f00246190ea54220576a848',
        PAUSER:             '0x65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a',
        LIFECYCLE_MANAGER:  '0xf2880b7971306b3fcdfd682d7b3b009f3a5cd1aa7100af10ce6d293c95391a06',
        WHITELIST_MANAGER:  '0x2a3dab589bcc9747970dd85ac3f222668741ae51f2a1bbb8f8355be28dd8a868',
        UPGRADER:           '0x189ab7a9244df0848122154315af71fe140f3db0fe014031783b0946b8c9d2e3',
        GENERAL_MANAGER:    '0xec43c5192900b4a6be9d57900af22c7a5400501437bc6707808f40380ebd4789',
        DEPOSIT_MANAGER:    '0x337b415e044dc50adfb81e2232d75157e0bd5a9dba2f5a61ebaf36fb524067ef'
    }
};