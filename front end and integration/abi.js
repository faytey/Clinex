[
  {
    type: "impl",
    name: "ITokenImpl",
    interface_name: "clinex::clinex_token::IToken",
  },
  {
    type: "interface",
    name: "clinex::clinex_token::IToken",
    items: [
      {
        type: "function",
        name: "mint",
        inputs: [
          {
            name: "address",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "transfer",
        inputs: [
          {
            name: "address",
            type: "core::starknet::contract_address::ContractAddress",
          },
          {
            name: "amount",
            type: "core::integer::u128",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "approval",
        inputs: [
          {
            name: "to",
            type: "core::starknet::contract_address::ContractAddress",
          },
          {
            name: "amount",
            type: "core::integer::u128",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "allowance",
        inputs: [
          {
            name: "from",
            type: "core::starknet::contract_address::ContractAddress",
          },
          {
            name: "to",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [
          {
            type: "core::integer::u128",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "transfer_from",
        inputs: [
          {
            name: "from",
            type: "core::starknet::contract_address::ContractAddress",
          },
          {
            name: "to",
            type: "core::starknet::contract_address::ContractAddress",
          },
          {
            name: "amount",
            type: "core::integer::u128",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "withdrawTokens",
        inputs: [
          {
            name: "contract_address",
            type: "core::starknet::contract_address::ContractAddress",
          },
          {
            name: "amount",
            type: "core::integer::u128",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "get_name",
        inputs: [],
        outputs: [
          {
            type: "core::felt252",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "get_symbol",
        inputs: [],
        outputs: [
          {
            type: "core::felt252",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "get_decimal",
        inputs: [],
        outputs: [
          {
            type: "core::integer::u128",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "get_total_supply",
        inputs: [],
        outputs: [
          {
            type: "core::integer::u128",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "get_balance_of_user",
        inputs: [
          {
            name: "user",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [
          {
            type: "core::integer::u128",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "get_owner",
        inputs: [],
        outputs: [
          {
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        state_mutability: "view",
      },
    ],
  },
  {
    type: "constructor",
    name: "constructor",
    inputs: [],
  },
  {
    type: "event",
    name: "clinex::clinex_token::ClinexToken::TransferFrom",
    kind: "struct",
    members: [
      {
        name: "from",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "key",
      },
      {
        name: "to",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "data",
      },
      {
        name: "amount",
        type: "core::integer::u128",
        kind: "data",
      },
    ],
  },
  {
    type: "event",
    name: "clinex::clinex_token::ClinexToken::Transfer",
    kind: "struct",
    members: [
      {
        name: "to",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "key",
      },
      {
        name: "amount",
        type: "core::integer::u128",
        kind: "data",
      },
    ],
  },
  {
    type: "event",
    name: "clinex::clinex_token::ClinexToken::Mint",
    kind: "struct",
    members: [
      {
        name: "to",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "key",
      },
      {
        name: "amount",
        type: "core::integer::u128",
        kind: "data",
      },
    ],
  },
  {
    type: "event",
    name: "clinex::clinex_token::ClinexToken::Withdraw",
    kind: "struct",
    members: [
      {
        name: "contract_address",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "key",
      },
      {
        name: "user",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "data",
      },
      {
        name: "amount",
        type: "core::integer::u128",
        kind: "data",
      },
    ],
  },
  {
    type: "event",
    name: "clinex::clinex_token::ClinexToken::Approval",
    kind: "struct",
    members: [
      {
        name: "user",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "key",
      },
      {
        name: "to",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "data",
      },
      {
        name: "amount",
        type: "core::integer::u128",
        kind: "data",
      },
    ],
  },
  {
    type: "event",
    name: "clinex::clinex_token::ClinexToken::Event",
    kind: "enum",
    variants: [
      {
        name: "TransferFrom",
        type: "clinex::clinex_token::ClinexToken::TransferFrom",
        kind: "nested",
      },
      {
        name: "Transfer",
        type: "clinex::clinex_token::ClinexToken::Transfer",
        kind: "nested",
      },
      {
        name: "Mint",
        type: "clinex::clinex_token::ClinexToken::Mint",
        kind: "nested",
      },
      {
        name: "Withdraw",
        type: "clinex::clinex_token::ClinexToken::Withdraw",
        kind: "nested",
      },
      {
        name: "Approval",
        type: "clinex::clinex_token::ClinexToken::Approval",
        kind: "nested",
      },
    ],
  },
];







const { ethers } = require("ethers");    //first require ethers
//To write to QUEST token contract to buy the $QTK token
// To get signer, first open Ethereum window, request for account, get wallet address, then get the provider
const WriteToContractToBuyQUEST = async () => { 
const ethereum = (window).ethereum;
const accounts = await ethereum.request({
    method: "eth_requestAccounts",
})
 // first account in MetaMask
const walletAddress = accounts[0]; 
const provider = new ethers.providers.Web3Provider(ethereum);
const signer = provider.getSigner(walletAddress);
const QuestTokenContractAddress = "0x3626b039B965F9f2ED2D56F5E6397C88E89D164C"
const QuestTokenABI = [
   { inputs: [], stateMutability: "nonpayable", type: "constructor" },
   { inputs: [], name: "InvalidShortString", type: "error" },
   {
     inputs: [{ internalType: "string", name: "str", type: "string" }],
     name: "StringTooLong",
     type: "error",
   },
   {
     anonymous: false,
     inputs: [
       {
         indexed: true,
         internalType: "address",
         name: "owner",
         type: "address",
       },
       {
         indexed: true,
         internalType: "address",
         name: "spender",
         type: "address",
       },
       {
         indexed: false,
         internalType: "uint256",
         name: "value",
         type: "uint256",
       },
     ],
     name: "Approval",
     type: "event",
   },
   {
     anonymous: false,
     inputs: [
       {
         indexed: true,
         internalType: "address",
         name: "delegator",
         type: "address",
       },
       {
         indexed: true,
         internalType: "address",
         name: "fromDelegate",
         type: "address",
       },
       {
         indexed: true,
         internalType: "address",
         name: "toDelegate",
         type: "address",
       },
     ],
     name: "DelegateChanged",
     type: "event",
   },
   {
     anonymous: false,
     inputs: [
       {
         indexed: true,
         internalType: "address",
         name: "delegate",
         type: "address",
       },
       {
         indexed: false,
         internalType: "uint256",
         name: "previousBalance",
         type: "uint256",
       },
       {
         indexed: false,
         internalType: "uint256",
         name: "newBalance",
         type: "uint256",
       },
     ],
     name: "DelegateVotesChanged",
     type: "event",
   },
   { anonymous: false, inputs: [], name: "EIP712DomainChanged", type: "event" },
   {
     anonymous: false,
     inputs: [
       { indexed: true, internalType: "address", name: "from", type: "address" },
       { indexed: true, internalType: "address", name: "to", type: "address" },
       {
         indexed: false,
         internalType: "uint256",
         name: "value",
         type: "uint256",
       },
     ],
     name: "Transfer",
     type: "event",
   },
   {
     inputs: [],
     name: "CLOCK_MODE",
     outputs: [{ internalType: "string", name: "", type: "string" }],
     stateMutability: "view",
     type: "function",
   },
   {
     inputs: [],
     name: "DOMAIN_SEPARATOR",
     outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
     stateMutability: "view",
     type: "function",
   },
   {
     inputs: [
       { internalType: "address", name: "owner", type: "address" },
       { internalType: "address", name: "spender", type: "address" },
     ],
     name: "allowance",
     outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
     stateMutability: "view",
     type: "function",
   },
   {
     inputs: [
       { internalType: "address", name: "spender", type: "address" },
       { internalType: "uint256", name: "amount", type: "uint256" },
     ],
     name: "approve",
     outputs: [{ internalType: "bool", name: "", type: "bool" }],
     stateMutability: "nonpayable",
     type: "function",
   },
   {
     inputs: [{ internalType: "address", name: "account", type: "address" }],
     name: "balanceOf",
     outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
     stateMutability: "view",
     type: "function",
   },
   {
     inputs: [
       { internalType: "address", name: "account", type: "address" },
       { internalType: "uint32", name: "pos", type: "uint32" },
     ],
     name: "checkpoints",
     outputs: [
       {
         components: [
           { internalType: "uint32", name: "fromBlock", type: "uint32" },
           { internalType: "uint224", name: "votes", type: "uint224" },
         ],
         internalType: "struct ERC20Votes.Checkpoint",
         name: "",
         type: "tuple",
       },
     ],
     stateMutability: "view",
     type: "function",
   },
   {
     inputs: [],
     name: "clock",
     outputs: [{ internalType: "uint48", name: "", type: "uint48" }],
     stateMutability: "view",
     type: "function",
   },
   {
     inputs: [],
     name: "decimals",
     outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
     stateMutability: "view",
     type: "function",
   },
   {
     inputs: [
       { internalType: "address", name: "spender", type: "address" },
       { internalType: "uint256", name: "subtractedValue", type: "uint256" },
     ],
     name: "decreaseAllowance",
     outputs: [{ internalType: "bool", name: "", type: "bool" }],
     stateMutability: "nonpayable",
     type: "function",
   },
   {
     inputs: [{ internalType: "address", name: "delegatee", type: "address" }],
     name: "delegate",
     outputs: [],
     stateMutability: "nonpayable",
     type: "function",
   },
   {
     inputs: [
       { internalType: "address", name: "delegatee", type: "address" },
       { internalType: "uint256", name: "nonce", type: "uint256" },
       { internalType: "uint256", name: "expiry", type: "uint256" },
       { internalType: "uint8", name: "v", type: "uint8" },
       { internalType: "bytes32", name: "r", type: "bytes32" },
       { internalType: "bytes32", name: "s", type: "bytes32" },
     ],
     name: "delegateBySig",
     outputs: [],
     stateMutability: "nonpayable",
     type: "function",
   },
   {
     inputs: [{ internalType: "address", name: "account", type: "address" }],
     name: "delegates",
     outputs: [{ internalType: "address", name: "", type: "address" }],
     stateMutability: "view",
     type: "function",
   },
   {
     inputs: [],
     name: "eip712Domain",
     outputs: [
       { internalType: "bytes1", name: "fields", type: "bytes1" },
       { internalType: "string", name: "name", type: "string" },
       { internalType: "string", name: "version", type: "string" },
       { internalType: "uint256", name: "chainId", type: "uint256" },
       { internalType: "address", name: "verifyingContract", type: "address" },
       { internalType: "bytes32", name: "salt", type: "bytes32" },
       { internalType: "uint256[]", name: "extensions", type: "uint256[]" },
     ],
     stateMutability: "view",
     type: "function",
   },
   {
     inputs: [{ internalType: "uint256", name: "timepoint", type: "uint256" }],
     name: "getPastTotalSupply",
     outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
     stateMutability: "view",
     type: "function",
   },
   {
     inputs: [
       { internalType: "address", name: "account", type: "address" },
       { internalType: "uint256", name: "timepoint", type: "uint256" },
     ],
     name: "getPastVotes",
     outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
     stateMutability: "view",
     type: "function",
   },
   {
     inputs: [{ internalType: "address", name: "account", type: "address" }],
     name: "getVotes",
     outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
     stateMutability: "view",
     type: "function",
   },
   {
     inputs: [
       { internalType: "address", name: "spender", type: "address" },
       { internalType: "uint256", name: "addedValue", type: "uint256" },
     ],
     name: "increaseAllowance",
     outputs: [{ internalType: "bool", name: "", type: "bool" }],
     stateMutability: "nonpayable",
     type: "function",
   },
   {
     inputs: [],
     name: "mint",
     outputs: [],
     stateMutability: "payable",
     type: "function",
   },
   {
     inputs: [],
     name: "name",
     outputs: [{ internalType: "string", name: "", type: "string" }],
     stateMutability: "view",
     type: "function",
   },
   {
     inputs: [{ internalType: "address", name: "owner", type: "address" }],
     name: "nonces",
     outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
     stateMutability: "view",
     type: "function",
   },
   {
     inputs: [{ internalType: "address", name: "account", type: "address" }],
     name: "numCheckpoints",
     outputs: [{ internalType: "uint32", name: "", type: "uint32" }],
     stateMutability: "view",
     type: "function",
   },
   {
     inputs: [
       { internalType: "address", name: "owner", type: "address" },
       { internalType: "address", name: "spender", type: "address" },
       { internalType: "uint256", name: "value", type: "uint256" },
       { internalType: "uint256", name: "deadline", type: "uint256" },
       { internalType: "uint8", name: "v", type: "uint8" },
       { internalType: "bytes32", name: "r", type: "bytes32" },
       { internalType: "bytes32", name: "s", type: "bytes32" },
     ],
     name: "permit",
     outputs: [],
     stateMutability: "nonpayable",
     type: "function",
   },
   {
     inputs: [],
     name: "symbol",
     outputs: [{ internalType: "string", name: "", type: "string" }],
     stateMutability: "view",
     type: "function",
   },
   {
     inputs: [],
     name: "totalSupply",
     outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
     stateMutability: "view",
     type: "function",
   },
   {
     inputs: [
       { internalType: "address", name: "to", type: "address" },
       { internalType: "uint256", name: "amount", type: "uint256" },
     ],
     name: "transfer",
     outputs: [{ internalType: "bool", name: "", type: "bool" }],
     stateMutability: "nonpayable",
     type: "function",
   },
   {
     inputs: [
       { internalType: "address", name: "from", type: "address" },
       { internalType: "address", name: "to", type: "address" },
       { internalType: "uint256", name: "amount", type: "uint256" },
     ],
     name: "transferFrom",
     outputs: [{ internalType: "bool", name: "", type: "bool" }],
     stateMutability: "nonpayable",
     type: "function",
   },
   { stateMutability: "payable", type: "receive" },
 ];
 
const QuestTokenContractWriteSettings = new ethers.Contract(QuestTokenContractAddress, QuestTokenABI, signer)
try {
   const writeToBuyQUEST = await QuestTokenContractWriteSettings.connect(signer).mint({value:ethers.utils.parseUnits(ethamount, 18)})
   setboughtQUESTSuccessAlert(true);
}
catch(error){
   console.log(error)
}
}

    //To write to Quest NFT contract to stake the $QTK token
// To get signer, first open Ethereum window, request for account, get wallet address, then get the provider
const WriteToContractToStakeQUEST = async () => { 
   const ethereum = (window).ethereum;
   const accounts = await ethereum.request({
        method: "eth_requestAccounts",
    })
     // first account in MetaMask
    const walletAddress = accounts[0]; 
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner(walletAddress);
    const QuestNFTContractAddress = "0x83e6D23De27345F025380230c2BDB08cC35C60B1"
    const QuestNFTABI = [
       {
         inputs: [
           { internalType: "contract ERC20", name: "token_", type: "address" },
         ],
         stateMutability: "nonpayable",
         type: "constructor",
       },
       {
         anonymous: false,
         inputs: [
           {
             indexed: true,
             internalType: "address",
             name: "owner",
             type: "address",
           },
           {
             indexed: true,
             internalType: "address",
             name: "approved",
             type: "address",
           },
           {
             indexed: true,
             internalType: "uint256",
             name: "tokenId",
             type: "uint256",
           },
         ],
         name: "Approval",
         type: "event",
       },
       {
         anonymous: false,
         inputs: [
           {
             indexed: true,
             internalType: "address",
             name: "owner",
             type: "address",
           },
           {
             indexed: true,
             internalType: "address",
             name: "operator",
             type: "address",
           },
           { indexed: false, internalType: "bool", name: "approved", type: "bool" },
         ],
         name: "ApprovalForAll",
         type: "event",
       },
       {
         anonymous: false,
         inputs: [
           { indexed: true, internalType: "address", name: "from", type: "address" },
           { indexed: true, internalType: "address", name: "to", type: "address" },
           {
             indexed: true,
             internalType: "uint256",
             name: "tokenId",
             type: "uint256",
           },
         ],
         name: "Transfer",
         type: "event",
       },
       {
         inputs: [
           { internalType: "address", name: "to", type: "address" },
           { internalType: "uint256", name: "tokenId", type: "uint256" },
         ],
         name: "approve",
         outputs: [],
         stateMutability: "nonpayable",
         type: "function",
       },
       {
         inputs: [{ internalType: "address", name: "owner", type: "address" }],
         name: "balanceOf",
         outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
         stateMutability: "view",
         type: "function",
       },
       {
         inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
         name: "getApproved",
         outputs: [{ internalType: "address", name: "", type: "address" }],
         stateMutability: "view",
         type: "function",
       },
       {
         inputs: [
           { internalType: "address", name: "owner", type: "address" },
           { internalType: "address", name: "operator", type: "address" },
         ],
         name: "isApprovedForAll",
         outputs: [{ internalType: "bool", name: "", type: "bool" }],
         stateMutability: "view",
         type: "function",
       },
       {
         inputs: [],
         name: "name",
         outputs: [{ internalType: "string", name: "", type: "string" }],
         stateMutability: "view",
         type: "function",
       },
       {
         inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
         name: "ownerOf",
         outputs: [{ internalType: "address", name: "", type: "address" }],
         stateMutability: "view",
         type: "function",
       },
       {
         inputs: [{ internalType: "address", name: "holder", type: "address" }],
         name: "returnTokenId",
         outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
         stateMutability: "view",
         type: "function",
       },
       {
         inputs: [],
         name: "safeMint",
         outputs: [],
         stateMutability: "nonpayable",
         type: "function",
       },
       {
         inputs: [
           { internalType: "address", name: "from", type: "address" },
           { internalType: "address", name: "to", type: "address" },
           { internalType: "uint256", name: "tokenId", type: "uint256" },
         ],
         name: "safeTransferFrom",
         outputs: [],
         stateMutability: "nonpayable",
         type: "function",
       },
       {
         inputs: [
           { internalType: "address", name: "from", type: "address" },
           { internalType: "address", name: "to", type: "address" },
           { internalType: "uint256", name: "tokenId", type: "uint256" },
           { internalType: "bytes", name: "data", type: "bytes" },
         ],
         name: "safeTransferFrom",
         outputs: [],
         stateMutability: "nonpayable",
         type: "function",
       },
       {
         inputs: [
           { internalType: "address", name: "operator", type: "address" },
           { internalType: "bool", name: "approved", type: "bool" },
         ],
         name: "setApprovalForAll",
         outputs: [],
         stateMutability: "nonpayable",
         type: "function",
       },
       {
         inputs: [{ internalType: "bytes4", name: "interfaceId", type: "bytes4" }],
         name: "supportsInterface",
         outputs: [{ internalType: "bool", name: "", type: "bool" }],
         stateMutability: "view",
         type: "function",
       },
       {
         inputs: [],
         name: "symbol",
         outputs: [{ internalType: "string", name: "", type: "string" }],
         stateMutability: "view",
         type: "function",
       },
       {
         inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
         name: "tokenURI",
         outputs: [{ internalType: "string", name: "", type: "string" }],
         stateMutability: "view",
         type: "function",
       },
       {
         inputs: [
           { internalType: "address", name: "from", type: "address" },
           { internalType: "address", name: "to", type: "address" },
           { internalType: "uint256", name: "tokenId", type: "uint256" },
         ],
         name: "transferFrom",
         outputs: [],
         stateMutability: "nonpayable",
         type: "function",
       },
     ];
     
    const QuestTokenContractAddress = "0x3626b039B965F9f2ED2D56F5E6397C88E89D164C"
    const QuestTokenABI = [
        { inputs: [], stateMutability: "nonpayable", type: "constructor" },
        { inputs: [], name: "InvalidShortString", type: "error" },
        {
          inputs: [{ internalType: "string", name: "str", type: "string" }],
          name: "StringTooLong",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "spender",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "Approval",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "delegator",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "fromDelegate",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "toDelegate",
              type: "address",
            },
          ],
          name: "DelegateChanged",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "delegate",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "previousBalance",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "newBalance",
              type: "uint256",
            },
          ],
          name: "DelegateVotesChanged",
          type: "event",
        },
        { anonymous: false, inputs: [], name: "EIP712DomainChanged", type: "event" },
        {
          anonymous: false,
          inputs: [
            { indexed: true, internalType: "address", name: "from", type: "address" },
            { indexed: true, internalType: "address", name: "to", type: "address" },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "Transfer",
          type: "event",
        },
        {
          inputs: [],
          name: "CLOCK_MODE",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "DOMAIN_SEPARATOR",
          outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "owner", type: "address" },
            { internalType: "address", name: "spender", type: "address" },
          ],
          name: "allowance",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "spender", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "approve",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "account", type: "address" }],
          name: "balanceOf",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "account", type: "address" },
            { internalType: "uint32", name: "pos", type: "uint32" },
          ],
          name: "checkpoints",
          outputs: [
            {
              components: [
                { internalType: "uint32", name: "fromBlock", type: "uint32" },
                { internalType: "uint224", name: "votes", type: "uint224" },
              ],
              internalType: "struct ERC20Votes.Checkpoint",
              name: "",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "clock",
          outputs: [{ internalType: "uint48", name: "", type: "uint48" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "decimals",
          outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "spender", type: "address" },
            { internalType: "uint256", name: "subtractedValue", type: "uint256" },
          ],
          name: "decreaseAllowance",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "delegatee", type: "address" }],
          name: "delegate",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "delegatee", type: "address" },
            { internalType: "uint256", name: "nonce", type: "uint256" },
            { internalType: "uint256", name: "expiry", type: "uint256" },
            { internalType: "uint8", name: "v", type: "uint8" },
            { internalType: "bytes32", name: "r", type: "bytes32" },
            { internalType: "bytes32", name: "s", type: "bytes32" },
          ],
          name: "delegateBySig",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "account", type: "address" }],
          name: "delegates",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "eip712Domain",
          outputs: [
            { internalType: "bytes1", name: "fields", type: "bytes1" },
            { internalType: "string", name: "name", type: "string" },
            { internalType: "string", name: "version", type: "string" },
            { internalType: "uint256", name: "chainId", type: "uint256" },
            { internalType: "address", name: "verifyingContract", type: "address" },
            { internalType: "bytes32", name: "salt", type: "bytes32" },
            { internalType: "uint256[]", name: "extensions", type: "uint256[]" },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "uint256", name: "timepoint", type: "uint256" }],
          name: "getPastTotalSupply",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "account", type: "address" },
            { internalType: "uint256", name: "timepoint", type: "uint256" },
          ],
          name: "getPastVotes",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "account", type: "address" }],
          name: "getVotes",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "spender", type: "address" },
            { internalType: "uint256", name: "addedValue", type: "uint256" },
          ],
          name: "increaseAllowance",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "mint",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [],
          name: "name",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "owner", type: "address" }],
          name: "nonces",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "account", type: "address" }],
          name: "numCheckpoints",
          outputs: [{ internalType: "uint32", name: "", type: "uint32" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "owner", type: "address" },
            { internalType: "address", name: "spender", type: "address" },
            { internalType: "uint256", name: "value", type: "uint256" },
            { internalType: "uint256", name: "deadline", type: "uint256" },
            { internalType: "uint8", name: "v", type: "uint8" },
            { internalType: "bytes32", name: "r", type: "bytes32" },
            { internalType: "bytes32", name: "s", type: "bytes32" },
          ],
          name: "permit",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "symbol",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "totalSupply",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "transfer",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "from", type: "address" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "transferFrom",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        { stateMutability: "payable", type: "receive" },
      ];
      
    const QuestTokenContractWriteSettings = new ethers.Contract(QuestTokenContractAddress, QuestTokenABI, signer)
    const QuestNFTContractWriteSettings = new ethers.Contract(QuestNFTContractAddress, QuestNFTABI, signer)
    try {
       const writeToQUESTContractToApproveQUESTspending = await QuestTokenContractWriteSettings.connect(signer).approve(QuestNFTContractAddress, ethers.utils.parseUnits("1000", 18))
       const writeToStakeQUEST = await QuestNFTContractWriteSettings.connect(signer).safeMint();
       setstakeQUESTSuccessAlert(true);
   }
    catch(error){
       console.log(error)
    }
   }

   //To read from contract on the outside
  //We first get contract settings 
  const GoerliBaseRPC = new ethers.providers.JsonRpcProvider("https://base-goerli.g.alchemy.com/v2/A3a3-kiXzRxVv26BXi3_ZhQchAw9pYXf");
  const QuestDAOContractAddress = "0x98560A8b0b2CDeE447d583bd9c7995adECCa1A02"
  const QuestDAOABI = [
   {
     inputs: [
       { internalType: "contract IVotes", name: "_token", type: "address" },
       {
         internalType: "contract TimelockController",
         name: "_timelock",
         type: "address",
       },
       { internalType: "contract ERC721", name: "_nft_", type: "address" },
     ],
     stateMutability: "nonpayable",
     type: "constructor",
   },
   { inputs: [], name: "Empty", type: "error" },
   { inputs: [], name: "InvalidShortString", type: "error" },
   {
     inputs: [{ internalType: "string", name: "str", type: "string" }],
     name: "StringTooLong",
     type: "error",
   },
   { anonymous: false, inputs: [], name: "EIP712DomainChanged", type: "event" },
   {
     anonymous: false,
     inputs: [
       {
         indexed: false,
         internalType: "uint256",
         name: "proposalId",
         type: "uint256",
       },
     ],
     name: "ProposalCanceled",
     type: "event",
   },
   {
     anonymous: false,
     inputs: [
       {
         indexed: false,
         internalType: "uint256",
         name: "proposalId",
         type: "uint256",
       },
       {
         indexed: false,
         internalType: "address",
         name: "proposer",
         type: "address",
       },
       {
         indexed: false,
         internalType: "address[]",
         name: "targets",
         type: "address[]",
       },
       {
         indexed: false,
         internalType: "uint256[]",
         name: "values",
         type: "uint256[]",
       },
       {
         indexed: false,
         internalType: "string[]",
         name: "signatures",
         type: "string[]",
       },
       {
         indexed: false,
         internalType: "bytes[]",
         name: "calldatas",
         type: "bytes[]",
       },
       {
         indexed: false,
         internalType: "uint256",
         name: "voteStart",
         type: "uint256",
       },
       {
         indexed: false,
         internalType: "uint256",
         name: "voteEnd",
         type: "uint256",
       },
       {
         indexed: false,
         internalType: "string",
         name: "description",
         type: "string",
       },
     ],
     name: "ProposalCreated",
     type: "event",
   },
   {
     anonymous: false,
     inputs: [
       {
         indexed: false,
         internalType: "uint256",
         name: "proposalId",
         type: "uint256",
       },
     ],
     name: "ProposalExecuted",
     type: "event",
   },
   {
     anonymous: false,
     inputs: [
       {
         indexed: false,
         internalType: "uint256",
         name: "proposalId",
         type: "uint256",
       },
       { indexed: false, internalType: "uint256", name: "eta", type: "uint256" },
     ],
     name: "ProposalQueued",
     type: "event",
   },
   {
     anonymous: false,
     inputs: [
       {
         indexed: false,
         internalType: "uint256",
         name: "oldProposalThreshold",
         type: "uint256",
       },
       {
         indexed: false,
         internalType: "uint256",
         name: "newProposalThreshold",
         type: "uint256",
       },
     ],
     name: "ProposalThresholdSet",
     type: "event",
   },
   {
     anonymous: false,
     inputs: [
       {
         indexed: false,
         internalType: "uint256",
         name: "oldQuorumNumerator",
         type: "uint256",
       },
       {
         indexed: false,
         internalType: "uint256",
         name: "newQuorumNumerator",
         type: "uint256",
       },
     ],
     name: "QuorumNumeratorUpdated",
     type: "event",
   },
   {
     anonymous: false,
     inputs: [
       {
         indexed: false,
         internalType: "address",
         name: "oldTimelock",
         type: "address",
       },
       {
         indexed: false,
         internalType: "address",
         name: "newTimelock",
         type: "address",
       },
     ],
     name: "TimelockChange",
     type: "event",
   },
   {
     anonymous: false,
     inputs: [
       {
         indexed: true,
         internalType: "address",
         name: "voter",
         type: "address",
       },
       {
         indexed: false,
         internalType: "uint256",
         name: "proposalId",
         type: "uint256",
       },
       { indexed: false, internalType: "uint8", name: "support", type: "uint8" },
       {
         indexed: false,
         internalType: "uint256",
         name: "weight",
         type: "uint256",
       },
       {
         indexed: false,
         internalType: "string",
         name: "reason",
         type: "string",
       },
     ],
     name: "VoteCast",
     type: "event",
   },
   {
     anonymous: false,
     inputs: [
       {
         indexed: true,
         internalType: "address",
         name: "voter",
         type: "address",
       },
       {
         indexed: false,
         internalType: "uint256",
         name: "proposalId",
         type: "uint256",
       },
       { indexed: false, internalType: "uint8", name: "support", type: "uint8" },
       {
         indexed: false,
         internalType: "uint256",
         name: "weight",
         type: "uint256",
       },
       {
         indexed: false,
         internalType: "string",
         name: "reason",
         type: "string",
       },
       { indexed: false, internalType: "bytes", name: "params", type: "bytes" },
     ],
     name: "VoteCastWithParams",
     type: "event",
   },
   {
     anonymous: false,
     inputs: [
       {
         indexed: false,
         internalType: "uint256",
         name: "oldVotingDelay",
         type: "uint256",
       },
       {
         indexed: false,
         internalType: "uint256",
         name: "newVotingDelay",
         type: "uint256",
       },
     ],
     name: "VotingDelaySet",
     type: "event",
   },
   {
     anonymous: false,
     inputs: [
       {
         indexed: false,
         internalType: "uint256",
         name: "oldVotingPeriod",
         type: "uint256",
       },
       {
         indexed: false,
         internalType: "uint256",
         name: "newVotingPeriod",
         type: "uint256",
       },
     ],
     name: "VotingPeriodSet",
     type: "event",
   },
   {
     inputs: [],
     name: "BALLOT_TYPEHASH",
     outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
     stateMutability: "view",
     type: "function",
   },
   {
     inputs: [],
     name: "CLOCK_MODE",
     outputs: [{ internalType: "string", name: "", type: "string" }],
     stateMutability: "view",
     type: "function",
   },
   {
     inputs: [],
     name: "COUNTING_MODE",
     outputs: [{ internalType: "string", name: "", type: "string" }],
     stateMutability: "pure",
     type: "function",
   },
   {
     inputs: [],
     name: "EXTENDED_BALLOT_TYPEHASH",
     outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
     stateMutability: "view",
     type: "function",
   },
   {
     inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
     name: "_members",
     outputs: [
       { internalType: "uint8", name: "age", type: "uint8" },
       { internalType: "string", name: "username", type: "string" },
       { internalType: "string", name: "bio", type: "string" },
       { internalType: "address", name: "sender", type: "address" },
       { internalType: "uint256", name: "id", type: "uint256" },
     ],
     stateMutability: "view",
     type: "function",
   },
   {
     inputs: [
       { internalType: "address[]", name: "targets", type: "address[]" },
       { internalType: "uint256[]", name: "values", type: "uint256[]" },
       { internalType: "bytes[]", name: "calldatas", type: "bytes[]" },
       { internalType: "bytes32", name: "descriptionHash", type: "bytes32" },
     ],
     name: "cancel",
     outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
     stateMutability: "nonpayable",
     type: "function",
   },
   {
     inputs: [
       { internalType: "uint256", name: "proposalId", type: "uint256" },
       { internalType: "uint8", name: "support", type: "uint8" },
     ],
     name: "castVote",
     outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
     stateMutability: "nonpayable",
     type: "function",
   },
   {
     inputs: [
       { internalType: "uint256", name: "proposalId", type: "uint256" },
       { internalType: "uint8", name: "support", type: "uint8" },
       { internalType: "uint8", name: "v", type: "uint8" },
       { internalType: "bytes32", name: "r", type: "bytes32" },
       { internalType: "bytes32", name: "s", type: "bytes32" },
     ],
     name: "castVoteBySig",
     outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
     stateMutability: "nonpayable",
     type: "function",
   },
   {
     inputs: [
       { internalType: "uint256", name: "proposalId", type: "uint256" },
       { internalType: "uint8", name: "support", type: "uint8" },
       { internalType: "string", name: "reason", type: "string" },
     ],
     name: "castVoteWithReason",
     outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
     stateMutability: "nonpayable",
     type: "function",
   },
   {
     inputs: [
       { internalType: "uint256", name: "proposalId", type: "uint256" },
       { internalType: "uint8", name: "support", type: "uint8" },
       { internalType: "string", name: "reason", type: "string" },
       { internalType: "bytes", name: "params", type: "bytes" },
     ],
     name: "castVoteWithReasonAndParams",
     outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
     stateMutability: "nonpayable",
     type: "function",
   },
   {
     inputs: [
       { internalType: "uint256", name: "proposalId", type: "uint256" },
       { internalType: "uint8", name: "support", type: "uint8" },
       { internalType: "string", name: "reason", type: "string" },
       { internalType: "bytes", name: "params", type: "bytes" },
       { internalType: "uint8", name: "v", type: "uint8" },
       { internalType: "bytes32", name: "r", type: "bytes32" },
       { internalType: "bytes32", name: "s", type: "bytes32" },
     ],
     name: "castVoteWithReasonAndParamsBySig",
     outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
     stateMutability: "nonpayable",
     type: "function",
   },
   {
     inputs: [],
     name: "clock",
     outputs: [{ internalType: "uint48", name: "", type: "uint48" }],
     stateMutability: "view",
     type: "function",
   },
   {
     inputs: [],
     name: "eip712Domain",
     outputs: [
       { internalType: "bytes1", name: "fields", type: "bytes1" },
       { internalType: "string", name: "name", type: "string" },
       { internalType: "string", name: "version", type: "string" },
       { internalType: "uint256", name: "chainId", type: "uint256" },
       { internalType: "address", name: "verifyingContract", type: "address" },
       { internalType: "bytes32", name: "salt", type: "bytes32" },
       { internalType: "uint256[]", name: "extensions", type: "uint256[]" },
     ],
     stateMutability: "view",
     type: "function",
   },
   {
     inputs: [
       { internalType: "address[]", name: "targets", type: "address[]" },
       { internalType: "uint256[]", name: "values", type: "uint256[]" },
       { internalType: "bytes[]", name: "calldatas", type: "bytes[]" },
       { internalType: "bytes32", name: "descriptionHash", type: "bytes32" },
     ],
     name: "execute",
     outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
     stateMutability: "payable",
     type: "function",
   },
   {
     inputs: [{ internalType: "address", name: "member_", type: "address" }],
     name: "getMember",
     outputs: [
       {
         components: [
           { internalType: "uint8", name: "age", type: "uint8" },
           { internalType: "string", name: "username", type: "string" },
           { internalType: "string", name: "bio", type: "string" },
           { internalType: "address", name: "sender", type: "address" },
           { internalType: "uint256", name: "id", type: "uint256" },
         ],
         internalType: "struct QuestDao.MemberInfo",
         name: "member",
         type: "tuple",
       },
     ],
     stateMutability: "view",
     type: "function",
   },
   {
     inputs: [],
     name: "getMembers",
     outputs: [
       {
         components: [
           { internalType: "uint8", name: "age", type: "uint8" },
           { internalType: "string", name: "username", type: "string" },
           { internalType: "string", name: "bio", type: "string" },
           { internalType: "address", name: "sender", type: "address" },
           { internalType: "uint256", name: "id", type: "uint256" },
         ],
         internalType: "struct QuestDao.MemberInfo[]",
         name: "",
         type: "tuple[]",
       },
     ],
     stateMutability: "view",
     type: "function",
   },
   {
     inputs: [
       { internalType: "address", name: "account", type: "address" },
       { internalType: "uint256", name: "timepoint", type: "uint256" },
     ],
     name: "getVotes",
     outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
     stateMutability: "view",
     type: "function",
   },
   {
     inputs: [
       { internalType: "address", name: "account", type: "address" },
       { internalType: "uint256", name: "timepoint", type: "uint256" },
       { internalType: "bytes", name: "params", type: "bytes" },
     ],
     name: "getVotesWithParams",
     outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
     stateMutability: "view",
     type: "function",
   },
   {
     inputs: [
       { internalType: "uint256", name: "proposalId", type: "uint256" },
       { internalType: "address", name: "account", type: "address" },
     ],
     name: "hasVoted",
     outputs: [{ internalType: "bool", name: "", type: "bool" }],
     stateMutability: "view",
     type: "function",
   },
   {
     inputs: [
       { internalType: "address[]", name: "targets", type: "address[]" },
       { internalType: "uint256[]", name: "values", type: "uint256[]" },
       { internalType: "bytes[]", name: "calldatas", type: "bytes[]" },
       { internalType: "bytes32", name: "descriptionHash", type: "bytes32" },
     ],
     name: "hashProposal",
     outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
     stateMutability: "pure",
     type: "function",
   },
   {
     inputs: [
       { internalType: "uint8", name: "_age", type: "uint8" },
       { internalType: "string", name: "_username", type: "string" },
       { internalType: "string", name: "_bio", type: "string" },
       { internalType: "uint256", name: "_id", type: "uint256" },
     ],
     name: "joinDao",
     outputs: [],
     stateMutability: "nonpayable",
     type: "function",
   },
   {
     inputs: [],
     name: "name",
     outputs: [{ internalType: "string", name: "", type: "string" }],
     stateMutability: "view",
     type: "function",
   },
   {
     inputs: [
       { internalType: "address", name: "", type: "address" },
       { internalType: "address", name: "", type: "address" },
       { internalType: "uint256[]", name: "", type: "uint256[]" },
       { internalType: "uint256[]", name: "", type: "uint256[]" },
       { internalType: "bytes", name: "", type: "bytes" },
     ],
     name: "onERC1155BatchReceived",
     outputs: [{ internalType: "bytes4", name: "", type: "bytes4" }],
     stateMutability: "nonpayable",
     type: "function",
   },
   {
     inputs: [
       { internalType: "address", name: "", type: "address" },
       { internalType: "address", name: "", type: "address" },
       { internalType: "uint256", name: "", type: "uint256" },
       { internalType: "uint256", name: "", type: "uint256" },
       { internalType: "bytes", name: "", type: "bytes" },
     ],
     name: "onERC1155Received",
     outputs: [{ internalType: "bytes4", name: "", type: "bytes4" }],
     stateMutability: "nonpayable",
     type: "function",
   },
   {
     inputs: [
       { internalType: "address", name: "", type: "address" },
       { internalType: "address", name: "", type: "address" },
       { internalType: "uint256", name: "", type: "uint256" },
       { internalType: "bytes", name: "", type: "bytes" },
     ],
     name: "onERC721Received",
     outputs: [{ internalType: "bytes4", name: "", type: "bytes4" }],
     stateMutability: "nonpayable",
     type: "function",
   },
   {
     inputs: [{ internalType: "uint256", name: "proposalId", type: "uint256" }],
     name: "proposalDeadline",
     outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
     stateMutability: "view",
     type: "function",
   },
   {
     inputs: [{ internalType: "uint256", name: "proposalId", type: "uint256" }],
     name: "proposalEta",
     outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
     stateMutability: "view",
     type: "function",
   },
   {
     inputs: [{ internalType: "uint256", name: "proposalId", type: "uint256" }],
     name: "proposalProposer",
     outputs: [{ internalType: "address", name: "", type: "address" }],
     stateMutability: "view",
     type: "function",
   },
   {
     inputs: [{ internalType: "uint256", name: "proposalId", type: "uint256" }],
     name: "proposalSnapshot",
     outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
     stateMutability: "view",
     type: "function",
   },
   {
     inputs: [],
     name: "proposalThreshold",
     outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
     stateMutability: "view",
     type: "function",
   },
   {
     inputs: [{ internalType: "uint256", name: "proposalId", type: "uint256" }],
     name: "proposalVotes",
     outputs: [
       { internalType: "uint256", name: "againstVotes", type: "uint256" },
       { internalType: "uint256", name: "forVotes", type: "uint256" },
       { internalType: "uint256", name: "abstainVotes", type: "uint256" },
     ],
     stateMutability: "view",
     type: "function",
   },
   {
     inputs: [
       { internalType: "address[]", name: "targets", type: "address[]" },
       { internalType: "uint256[]", name: "values", type: "uint256[]" },
       { internalType: "bytes[]", name: "calldatas", type: "bytes[]" },
       { internalType: "string", name: "description", type: "string" },
     ],
     name: "propose",
     outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
     stateMutability: "nonpayable",
     type: "function",
   },
   {
     inputs: [
       { internalType: "address[]", name: "targets", type: "address[]" },
       { internalType: "uint256[]", name: "values", type: "uint256[]" },
       { internalType: "bytes[]", name: "calldatas", type: "bytes[]" },
       { internalType: "bytes32", name: "descriptionHash", type: "bytes32" },
     ],
     name: "queue",
     outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
     stateMutability: "nonpayable",
     type: "function",
   },
   {
     inputs: [{ internalType: "uint256", name: "blockNumber", type: "uint256" }],
     name: "quorum",
     outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
     stateMutability: "view",
     type: "function",
   },
   {
     inputs: [],
     name: "quorumDenominator",
     outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
     stateMutability: "view",
     type: "function",
   },
   {
     inputs: [{ internalType: "uint256", name: "timepoint", type: "uint256" }],
     name: "quorumNumerator",
     outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
     stateMutability: "view",
     type: "function",
   },
   {
     inputs: [],
     name: "quorumNumerator",
     outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
     stateMutability: "view",
     type: "function",
   },
   {
     inputs: [
       { internalType: "address", name: "target", type: "address" },
       { internalType: "uint256", name: "value", type: "uint256" },
       { internalType: "bytes", name: "data", type: "bytes" },
     ],
     name: "relay",
     outputs: [],
     stateMutability: "payable",
     type: "function",
   },
   {
     inputs: [
       {
         internalType: "uint256",
         name: "newProposalThreshold",
         type: "uint256",
       },
     ],
     name: "setProposalThreshold",
     outputs: [],
     stateMutability: "nonpayable",
     type: "function",
   },
   {
     inputs: [
       { internalType: "uint256", name: "newVotingDelay", type: "uint256" },
     ],
     name: "setVotingDelay",
     outputs: [],
     stateMutability: "nonpayable",
     type: "function",
   },
   {
     inputs: [
       { internalType: "uint256", name: "newVotingPeriod", type: "uint256" },
     ],
     name: "setVotingPeriod",
     outputs: [],
     stateMutability: "nonpayable",
     type: "function",
   },
   {
     inputs: [{ internalType: "uint256", name: "proposalId", type: "uint256" }],
     name: "state",
     outputs: [
       { internalType: "enum IGovernor.ProposalState", name: "", type: "uint8" },
     ],
     stateMutability: "view",
     type: "function",
   },
   {
     inputs: [{ internalType: "bytes4", name: "interfaceId", type: "bytes4" }],
     name: "supportsInterface",
     outputs: [{ internalType: "bool", name: "", type: "bool" }],
     stateMutability: "view",
     type: "function",
   },
   {
     inputs: [],
     name: "timelock",
     outputs: [{ internalType: "address", name: "", type: "address" }],
     stateMutability: "view",
     type: "function",
   },
   {
     inputs: [],
     name: "token",
     outputs: [{ internalType: "contract IERC5805", name: "", type: "address" }],
     stateMutability: "view",
     type: "function",
   },
   {
     inputs: [
       { internalType: "uint256", name: "newQuorumNumerator", type: "uint256" },
     ],
     name: "updateQuorumNumerator",
     outputs: [],
     stateMutability: "nonpayable",
     type: "function",
   },
   {
     inputs: [
       {
         internalType: "contract TimelockController",
         name: "newTimelock",
         type: "address",
       },
     ],
     name: "updateTimelock",
     outputs: [],
     stateMutability: "nonpayable",
     type: "function",
   },
   {
     inputs: [],
     name: "version",
     outputs: [{ internalType: "string", name: "", type: "string" }],
     stateMutability: "view",
     type: "function",
   },
   {
     inputs: [],
     name: "votingDelay",
     outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
     stateMutability: "view",
     type: "function",
   },
   {
     inputs: [],
     name: "votingPeriod",
     outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
     stateMutability: "view",
     type: "function",
   },
   { stateMutability: "payable", type: "receive" },
 ];  
  const QuestDAOContractReadSettings = new ethers.Contract(QuestDAOContractAddress, QuestDAOABI, GoerliBaseRPC)  
  const QuestTokenContractAddress = "0x3626b039B965F9f2ED2D56F5E6397C88E89D164C"
  const QuestTokenABI = [
      { inputs: [], stateMutability: "nonpayable", type: "constructor" },
      { inputs: [], name: "InvalidShortString", type: "error" },
      {
        inputs: [{ internalType: "string", name: "str", type: "string" }],
        name: "StringTooLong",
        type: "error",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "spender",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
        ],
        name: "Approval",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "delegator",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "fromDelegate",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "toDelegate",
            type: "address",
          },
        ],
        name: "DelegateChanged",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "delegate",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "previousBalance",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "newBalance",
            type: "uint256",
          },
        ],
        name: "DelegateVotesChanged",
        type: "event",
      },
      { anonymous: false, inputs: [], name: "EIP712DomainChanged", type: "event" },
      {
        anonymous: false,
        inputs: [
          { indexed: true, internalType: "address", name: "from", type: "address" },
          { indexed: true, internalType: "address", name: "to", type: "address" },
          {
            indexed: false,
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
        ],
        name: "Transfer",
        type: "event",
      },
      {
        inputs: [],
        name: "CLOCK_MODE",
        outputs: [{ internalType: "string", name: "", type: "string" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "DOMAIN_SEPARATOR",
        outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address", name: "owner", type: "address" },
          { internalType: "address", name: "spender", type: "address" },
        ],
        name: "allowance",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address", name: "spender", type: "address" },
          { internalType: "uint256", name: "amount", type: "uint256" },
        ],
        name: "approve",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [{ internalType: "address", name: "account", type: "address" }],
        name: "balanceOf",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address", name: "account", type: "address" },
          { internalType: "uint32", name: "pos", type: "uint32" },
        ],
        name: "checkpoints",
        outputs: [
          {
            components: [
              { internalType: "uint32", name: "fromBlock", type: "uint32" },
              { internalType: "uint224", name: "votes", type: "uint224" },
            ],
            internalType: "struct ERC20Votes.Checkpoint",
            name: "",
            type: "tuple",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "clock",
        outputs: [{ internalType: "uint48", name: "", type: "uint48" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "decimals",
        outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address", name: "spender", type: "address" },
          { internalType: "uint256", name: "subtractedValue", type: "uint256" },
        ],
        name: "decreaseAllowance",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [{ internalType: "address", name: "delegatee", type: "address" }],
        name: "delegate",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address", name: "delegatee", type: "address" },
          { internalType: "uint256", name: "nonce", type: "uint256" },
          { internalType: "uint256", name: "expiry", type: "uint256" },
          { internalType: "uint8", name: "v", type: "uint8" },
          { internalType: "bytes32", name: "r", type: "bytes32" },
          { internalType: "bytes32", name: "s", type: "bytes32" },
        ],
        name: "delegateBySig",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [{ internalType: "address", name: "account", type: "address" }],
        name: "delegates",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "eip712Domain",
        outputs: [
          { internalType: "bytes1", name: "fields", type: "bytes1" },
          { internalType: "string", name: "name", type: "string" },
          { internalType: "string", name: "version", type: "string" },
          { internalType: "uint256", name: "chainId", type: "uint256" },
          { internalType: "address", name: "verifyingContract", type: "address" },
          { internalType: "bytes32", name: "salt", type: "bytes32" },
          { internalType: "uint256[]", name: "extensions", type: "uint256[]" },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ internalType: "uint256", name: "timepoint", type: "uint256" }],
        name: "getPastTotalSupply",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address", name: "account", type: "address" },
          { internalType: "uint256", name: "timepoint", type: "uint256" },
        ],
        name: "getPastVotes",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ internalType: "address", name: "account", type: "address" }],
        name: "getVotes",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address", name: "spender", type: "address" },
          { internalType: "uint256", name: "addedValue", type: "uint256" },
        ],
        name: "increaseAllowance",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "mint",
        outputs: [],
        stateMutability: "payable",
        type: "function",
      },
      {
        inputs: [],
        name: "name",
        outputs: [{ internalType: "string", name: "", type: "string" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ internalType: "address", name: "owner", type: "address" }],
        name: "nonces",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ internalType: "address", name: "account", type: "address" }],
        name: "numCheckpoints",
        outputs: [{ internalType: "uint32", name: "", type: "uint32" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address", name: "owner", type: "address" },
          { internalType: "address", name: "spender", type: "address" },
          { internalType: "uint256", name: "value", type: "uint256" },
          { internalType: "uint256", name: "deadline", type: "uint256" },
          { internalType: "uint8", name: "v", type: "uint8" },
          { internalType: "bytes32", name: "r", type: "bytes32" },
          { internalType: "bytes32", name: "s", type: "bytes32" },
        ],
        name: "permit",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "symbol",
        outputs: [{ internalType: "string", name: "", type: "string" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "totalSupply",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address", name: "to", type: "address" },
          { internalType: "uint256", name: "amount", type: "uint256" },
        ],
        name: "transfer",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address", name: "from", type: "address" },
          { internalType: "address", name: "to", type: "address" },
          { internalType: "uint256", name: "amount", type: "uint256" },
        ],
        name: "transferFrom",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "nonpayable",
        type: "function",
      },
      { stateMutability: "payable", type: "receive" },
    ];
  const QuestTokenContractReadSettings = new ethers.Contract(QuestTokenContractAddress, QuestTokenABI, GoerliBaseRPC) 

  const ReadFromDAOContractandTokenContract = async () => {  
  try {
      //These are readings using in-built functions
      const theblock = await GoerliBaseRPC.getBlockNumber(QuestDAOContractAddress)
      console.log("Contract block is " + theblock);
      //Now lets start reading with ABI
      const readQuestTokenTotalsupply = await QuestTokenContractReadSettings.totalSupply();
      document.getElementById("QTKtotalsupplycontainer").innerHTML = readQuestTokenTotalsupply
  }
  catch (error) {
      console.log(error) 
  }
  }
  ReadFromDAOContractandTokenContract();





   const [clinexBalance, setClinexBalance] = useState(null)
   const StarkNetRPC = new ethers.providers.JsonRpcProvider("https://starknet-goerli.g.alchemy.com/v2/pGPx7iRpQNfUa7C8tJAVoslLtXkkIUi-")
   const CLINEXtokenContractAddress = "0x01cb296d5ae3f94e244b4332b99033fb22987d9e46252414f905fece3032b23f"
   const CLINEXtokenABI = [
     {
       type: "impl",
       name: "ITokenImpl",
       interface_name: "clinex::clinex_token::IToken",
     },
     {
       type: "interface",
       name: "clinex::clinex_token::IToken",
       items: [
         {
           type: "function",
           name: "mint",
           inputs: [
             {
               name: "address",
               type: "core::starknet::contract_address::ContractAddress",
             },
           ],
           outputs: [],
           state_mutability: "external",
         },
         {
           type: "function",
           name: "transfer",
           inputs: [
             {
               name: "address",
               type: "core::starknet::contract_address::ContractAddress",
             },
             {
               name: "amount",
               type: "core::integer::u128",
             },
           ],
           outputs: [],
           state_mutability: "external",
         },
         {
           type: "function",
           name: "approval",
           inputs: [
             {
               name: "to",
               type: "core::starknet::contract_address::ContractAddress",
             },
             {
               name: "amount",
               type: "core::integer::u128",
             },
           ],
           outputs: [],
           state_mutability: "external",
         },
         {
           type: "function",
           name: "allowance",
           inputs: [
             {
               name: "from",
               type: "core::starknet::contract_address::ContractAddress",
             },
             {
               name: "to",
               type: "core::starknet::contract_address::ContractAddress",
             },
           ],
           outputs: [
             {
               type: "core::integer::u128",
             },
           ],
           state_mutability: "view",
         },
         {
           type: "function",
           name: "transfer_from",
           inputs: [
             {
               name: "from",
               type: "core::starknet::contract_address::ContractAddress",
             },
             {
               name: "to",
               type: "core::starknet::contract_address::ContractAddress",
             },
             {
               name: "amount",
               type: "core::integer::u128",
             },
           ],
           outputs: [],
           state_mutability: "external",
         },
         {
           type: "function",
           name: "withdrawTokens",
           inputs: [
             {
               name: "contract_address",
               type: "core::starknet::contract_address::ContractAddress",
             },
             {
               name: "amount",
               type: "core::integer::u128",
             },
           ],
           outputs: [],
           state_mutability: "external",
         },
         {
           type: "function",
           name: "get_name",
           inputs: [],
           outputs: [
             {
               type: "core::felt252",
             },
           ],
           state_mutability: "view",
         },
         {
           type: "function",
           name: "get_symbol",
           inputs: [],
           outputs: [
             {
               type: "core::felt252",
             },
           ],
           state_mutability: "view",
         },
         {
           type: "function",
           name: "get_decimal",
           inputs: [],
           outputs: [
             {
               type: "core::integer::u128",
             },
           ],
           state_mutability: "view",
         },
         {
           type: "function",
           name: "get_total_supply",
           inputs: [],
           outputs: [
             {
               type: "core::integer::u128",
             },
           ],
           state_mutability: "view",
         },
         {
           type: "function",
           name: "get_balance_of_user",
           inputs: [
             {
               name: "user",
               type: "core::starknet::contract_address::ContractAddress",
             },
           ],
           outputs: [
             {
               type: "core::integer::u128",
             },
           ],
           state_mutability: "view",
         },
         {
           type: "function",
           name: "get_owner",
           inputs: [],
           outputs: [
             {
               type: "core::starknet::contract_address::ContractAddress",
             },
           ],
           state_mutability: "view",
         },
       ],
     },
     {
       type: "constructor",
       name: "constructor",
       inputs: [],
     },
     {
       type: "event",
       name: "clinex::clinex_token::ClinexToken::TransferFrom",
       kind: "struct",
       members: [
         {
           name: "from",
           type: "core::starknet::contract_address::ContractAddress",
           kind: "key",
         },
         {
           name: "to",
           type: "core::starknet::contract_address::ContractAddress",
           kind: "data",
         },
         {
           name: "amount",
           type: "core::integer::u128",
           kind: "data",
         },
       ],
     },
     {
       type: "event",
       name: "clinex::clinex_token::ClinexToken::Transfer",
       kind: "struct",
       members: [
         {
           name: "to",
           type: "core::starknet::contract_address::ContractAddress",
           kind: "key",
         },
         {
           name: "amount",
           type: "core::integer::u128",
           kind: "data",
         },
       ],
     },
     {
       type: "event",
       name: "clinex::clinex_token::ClinexToken::Mint",
       kind: "struct",
       members: [
         {
           name: "to",
           type: "core::starknet::contract_address::ContractAddress",
           kind: "key",
         },
         {
           name: "amount",
           type: "core::integer::u128",
           kind: "data",
         },
       ],
     },
     {
       type: "event",
       name: "clinex::clinex_token::ClinexToken::Withdraw",
       kind: "struct",
       members: [
         {
           name: "contract_address",
           type: "core::starknet::contract_address::ContractAddress",
           kind: "key",
         },
         {
           name: "user",
           type: "core::starknet::contract_address::ContractAddress",
           kind: "data",
         },
         {
           name: "amount",
           type: "core::integer::u128",
           kind: "data",
         },
       ],
     },
     {
       type: "event",
       name: "clinex::clinex_token::ClinexToken::Approval",
       kind: "struct",
       members: [
         {
           name: "user",
           type: "core::starknet::contract_address::ContractAddress",
           kind: "key",
         },
         {
           name: "to",
           type: "core::starknet::contract_address::ContractAddress",
           kind: "data",
         },
         {
           name: "amount",
           type: "core::integer::u128",
           kind: "data",
         },
       ],
     },
     {
       type: "event",
       name: "clinex::clinex_token::ClinexToken::Event",
       kind: "enum",
       variants: [
         {
           name: "TransferFrom",
           type: "clinex::clinex_token::ClinexToken::TransferFrom",
           kind: "nested",
         },
         {
           name: "Transfer",
           type: "clinex::clinex_token::ClinexToken::Transfer",
           kind: "nested",
         },
         {
           name: "Mint",
           type: "clinex::clinex_token::ClinexToken::Mint",
           kind: "nested",
         },
         {
           name: "Withdraw",
           type: "clinex::clinex_token::ClinexToken::Withdraw",
           kind: "nested",
         },
         {
           name: "Approval",
           type: "clinex::clinex_token::ClinexToken::Approval",
           kind: "nested",
         },
       ],
     },
   ];    
   const CLINEXTokenContractReadSettings = new ethers.Contract(CLINEXtokenContractAddress, CLINEXtokenABI, StarkNetRPC)  
   //To connect wallet and show $CliNex balance  
   const connectwallet = async (e) => {
     e.preventDefault();
   const ethereum = (window).ethereum;
   const accounts = await ethereum.request({
        method: "eth_requestAccounts",
    })
     // first account in MetaMask
    const walletAddress = accounts[0]; 
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner(walletAddress);
    try {
     const readCLINEXtotalSupply = await CLINEXTokenContractReadSettings.get_total_supply();
     setConnectWallet(false);
     setConnectedWallet(true);
     const getCLINEXbalance =  await CLINEXTokenContractReadSettings.get_balance_of_user(walletAddress);
     const getCLINEXBalanceInDecimal18 = ethers.utils.parseUnits(getCLINEXbalance, 18);
     setClinexBalance(getCLINEXBalanceInDecimal18)
    }
    catch (error){
     alert("Check your network or ensure a wallet (preferrably ArgentX or Braavos) is installed on your device!")
    }
     }
