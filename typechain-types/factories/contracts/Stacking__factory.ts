/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { Stacking, StackingInterface } from "../../contracts/Stacking";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenAddress",
        type: "address",
      },
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
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "plan",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "NewDeposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "Newbie",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Withdrawn",
    type: "event",
  },
  {
    inputs: [],
    name: "MIN_AMOUNT",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ONE_YEAR",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PENALTY_PERCENT",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PERCENT_DIVIDER",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "TIME_STEP",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "adminTokens",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "plan",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "amounts",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getContractBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "plan",
        type: "uint8",
      },
    ],
    name: "getPlanInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "time",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "percent",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
    ],
    name: "getUserAmountOfDeposits",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "depositId",
        type: "uint256",
      },
    ],
    name: "getUserDepositInfo",
    outputs: [
      {
        internalType: "uint8",
        name: "plan",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "percent",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "start",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "finish",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isTaken",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "depositId",
        type: "uint256",
      },
    ],
    name: "getUserNegativeDividends",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
    ],
    name: "getUserTotalDeposits",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "plans",
    outputs: [
      {
        internalType: "uint256",
        name: "time",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "percent",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalStacked",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "users",
    outputs: [
      {
        internalType: "uint256",
        name: "seedLoss",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "withdrawn",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "usersDeposits",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "depositId",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amounts",
        type: "uint256",
      },
    ],
    name: "withdrawTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620023913803806200239183398181016040528101906200003791906200033e565b620000576200004b6200020860201b60201c565b6200021060201b60201c565b6001808190555080600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060036040518060400160405280605a8152602001600b8152509080600181540180825580915050600190039060005260206000209060020201600090919091909150600082015181600001556020820151816001015550506003604051806040016040528060b481526020016016815250908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000155602082015181600101555050600360405180604001604052806101688152602001604281525090806001815401808255809150506001900390600052602060002090600202016000909190919091506000820151816000015560208201518160010155505060036040518060400160405280610708815260200160788152509080600181540180825580915050600190039060005260206000209060020201600090919091909150600082015181600001556020820151816001015550505062000370565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200030682620002d9565b9050919050565b6200031881620002f9565b81146200032457600080fd5b50565b60008151905062000338816200030d565b92915050565b600060208284031215620003575762000356620002d4565b5b6000620003678482850162000327565b91505092915050565b61201180620003806000396000f3fe608060405234801561001057600080fd5b506004361061014d5760003560e01c80638da5cb5b116100c3578063c0806b031161007c578063c0806b03146103b9578063ddbcb5fa146103ee578063f02bde541461040c578063f2fde38b1461042a578063f4d4c9d714610446578063fc0c546a146104625761014d565b80638da5cb5b146102ba5780638fa04016146102d8578063a87430ba146102f6578063a8aeb6c214610327578063aecaa63414610357578063b1620616146103885761014d565b806332bc298c1161011557806332bc298c146101e4578063468cd2db146102025780636f9fb98a14610232578063715018a6146102505780637e3abeea1461025a57806389f98fe21461028a5761014d565b806316d3bfbb1461015257806329eae70d1461017057806329fc7bd81461018e5780632e1a7d4d146101ac578063315a095d146101c8575b600080fd5b61015a610480565b6040516101679190611576565b60405180910390f35b610178610494565b6040516101859190611576565b60405180910390f35b61019661049a565b6040516101a39190611576565b60405180910390f35b6101c660048036038101906101c191906115c2565b6104a0565b005b6101e260048036038101906101dd91906115c2565b610824565b005b6101ec610940565b6040516101f99190611576565b60405180910390f35b61021c6004803603810190610217919061164d565b610947565b6040516102299190611576565b60405180910390f35b61023a610b40565b6040516102479190611576565b60405180910390f35b610258610be3565b005b610274600480360381019061026f919061168d565b610bf7565b6040516102819190611576565b60405180910390f35b6102a4600480360381019061029f91906115c2565b610cdf565b6040516102b19190611576565b60405180910390f35b6102c2610d03565b6040516102cf91906116c9565b60405180910390f35b6102e0610d2c565b6040516102ed9190611576565b60405180910390f35b610310600480360381019061030b919061168d565b610d32565b60405161031e9291906116e4565b60405180910390f35b610341600480360381019061033c919061168d565b610d56565b60405161034e9190611576565b60405180910390f35b610371600480360381019061036c9190611746565b610da5565b60405161037f9291906116e4565b60405180910390f35b6103a2600480360381019061039d91906115c2565b610e03565b6040516103b09291906116e4565b60405180910390f35b6103d360048036038101906103ce919061164d565b610e37565b6040516103e59695949392919061179d565b60405180910390f35b6103f6610f7f565b6040516104039190611576565b60405180910390f35b610414610f8a565b6040516104219190611576565b60405180910390f35b610444600480360381019061043f919061168d565b610f90565b005b610460600480360381019061045b91906117fe565b611013565b005b61046a61133d565b604051610477919061189d565b60405180910390f35b6201518061016d61049191906118e7565b81565b60055481565b61271081565b6104a8611363565b60006104b43383610947565b90506000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209050600081600001848154811061051157610510611929565b5b90600052602060002090600402019050600015158160030160009054906101000a900460ff16151514610579576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610570906119b5565b60405180910390fd5b6000806105e16105ce6201518060038660000160009054906101000a900460ff1660ff16815481106105ae576105ad611929565b5b9060005260206000209060020201600001546113b290919063ffffffff16565b84600201546113c890919063ffffffff16565b9050428111156106665761062e61061b61271061060d611a0487600101546113b290919063ffffffff16565b6113de90919063ffffffff16565b84600101546113f490919063ffffffff16565b915061065b61064a8385600101546113f490919063ffffffff16565b6006546113c890919063ffffffff16565b60068190555061069f565b61067d8584600101546113f490919063ffffffff16565b91506106968585600101546113c890919063ffffffff16565b84600101819055505b816106a8610b40565b10156106e9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106e090611a47565b60405180910390fd5b6107008285600201546113c890919063ffffffff16565b8460020181905550600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33846040518363ffffffff1660e01b8152600401610765929190611a67565b6020604051808303816000875af1158015610784573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107a89190611abc565b5060018360030160006101000a81548160ff0219169083151502179055503373ffffffffffffffffffffffffffffffffffffffff167f7084f5476618d8e60b11ef0d7d3f06914655adb8793e28ff7f018d4c76d505d58360405161080c9190611576565b60405180910390a2505050505061082161140a565b50565b61082c611413565b610834611363565b806006541015610879576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161087090611b5b565b60405180910390fd5b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b81526004016108d6929190611a67565b6020604051808303816000875af11580156108f5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109199190611abc565b5061092f816006546113f490919063ffffffff16565b60068190555061093d61140a565b50565b6201518081565b600061095283610d56565b8210610993576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161098a90611bc7565b60405180910390fd5b6000600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905060008160000184815481106109ee576109ed611929565b5b906000526020600020906004020190506000610a65610a526201518060038560000160009054906101000a900460ff1660ff1681548110610a3257610a31611929565b5b9060005260206000209060020201600001546113b290919063ffffffff16565b83600201546113c890919063ffffffff16565b90506000610acd612710610abf60038660000160009054906101000a900460ff1660ff1681548110610a9a57610a99611929565b5b90600052602060002090600202016001015486600101546113b290919063ffffffff16565b6113de90919063ffffffff16565b90506000824211610ade5742610ae0565b825b9050600084600201549050610b326201518061016d610aff91906118e7565b610b24610b1584866113f490919063ffffffff16565b866113b290919063ffffffff16565b6113de90919063ffffffff16565b965050505050505092915050565b6000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401610b9d91906116c9565b602060405180830381865afa158015610bba573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bde9190611bfc565b905090565b610beb611413565b610bf56000611491565b565b600080600090505b600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000180549050811015610cd957610cc4600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018281548110610ca357610ca2611929565b5b906000526020600020906004020160010154836113c890919063ffffffff16565b91508080610cd190611c29565b915050610bff565b50919050565b60078181548110610cef57600080fd5b906000526020600020016000915090505481565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b611a0481565b60026020528060005260406000206000915090508060010154908060020154905082565b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001805490509050919050565b60008060038360ff1681548110610dbf57610dbe611929565b5b906000526020600020906002020160000154915060038360ff1681548110610dea57610de9611929565b5b9060005260206000209060020201600101549050915091565b60038181548110610e1357600080fd5b90600052602060002090600202016000915090508060000154908060010154905082565b6000806000806000806000600260008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090506000816000018981548110610e9b57610e9a611929565b5b906000526020600020906004020190508060000160009054906101000a900460ff16975060038860ff1681548110610ed657610ed5611929565b5b90600052602060002090600202016001015496508060010154955080600201549450610f5d610f4a6201518060038460000160009054906101000a900460ff1660ff1681548110610f2a57610f29611929565b5b9060005260206000209060020201600001546113b290919063ffffffff16565b82600201546113c890919063ffffffff16565b93508060030160009054906101000a900460ff16925050509295509295509295565b66038d7ea4c6800081565b60065481565b610f98611413565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603611007576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ffe90611ce3565b60405180910390fd5b61101081611491565b50565b61101b611363565b66038d7ea4c68000811015611065576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161105c90611d4f565b60405180910390fd5b6003805490508260ff16106110af576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110a690611dbb565b60405180910390fd5b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330846040518463ffffffff1660e01b815260040161110e93929190611ddb565b6020604051808303816000875af115801561112d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111519190611abc565b506000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905060008160000180549050036111dc577f9fd565cd14c3c391679eb0cad12a14dcf7534e9d3462bcb9b67a098a9bbbc24a336040516111d391906116c9565b60405180910390a15b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160405180608001604052808560ff16815260200184815260200142815260200160001515815250908060018154018082558091505060019003906000526020600020906004020160009091909190915060008201518160000160006101000a81548160ff021916908360ff160217905550602082015181600101556040820151816002015560608201518160030160006101000a81548160ff02191690831515021790555050506112da826005546113c890919063ffffffff16565b6005819055503373ffffffffffffffffffffffffffffffffffffffff167f3a89eb89956dcf6537585a2372d4e629e18622cce06c2b4fee6301ae0840e2418484604051611328929190611e12565b60405180910390a25061133961140a565b5050565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6002600154036113a8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161139f90611e87565b60405180910390fd5b6002600181905550565b600081836113c091906118e7565b905092915050565b600081836113d69190611ea7565b905092915050565b600081836113ec9190611f0a565b905092915050565b600081836114029190611f3b565b905092915050565b60018081905550565b61141b611555565b73ffffffffffffffffffffffffffffffffffffffff16611439610d03565b73ffffffffffffffffffffffffffffffffffffffff161461148f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161148690611fbb565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600033905090565b6000819050919050565b6115708161155d565b82525050565b600060208201905061158b6000830184611567565b92915050565b600080fd5b61159f8161155d565b81146115aa57600080fd5b50565b6000813590506115bc81611596565b92915050565b6000602082840312156115d8576115d7611591565b5b60006115e6848285016115ad565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061161a826115ef565b9050919050565b61162a8161160f565b811461163557600080fd5b50565b60008135905061164781611621565b92915050565b6000806040838503121561166457611663611591565b5b600061167285828601611638565b9250506020611683858286016115ad565b9150509250929050565b6000602082840312156116a3576116a2611591565b5b60006116b184828501611638565b91505092915050565b6116c38161160f565b82525050565b60006020820190506116de60008301846116ba565b92915050565b60006040820190506116f96000830185611567565b6117066020830184611567565b9392505050565b600060ff82169050919050565b6117238161170d565b811461172e57600080fd5b50565b6000813590506117408161171a565b92915050565b60006020828403121561175c5761175b611591565b5b600061176a84828501611731565b91505092915050565b61177c8161170d565b82525050565b60008115159050919050565b61179781611782565b82525050565b600060c0820190506117b26000830189611773565b6117bf6020830188611567565b6117cc6040830187611567565b6117d96060830186611567565b6117e66080830185611567565b6117f360a083018461178e565b979650505050505050565b6000806040838503121561181557611814611591565b5b600061182385828601611731565b9250506020611834858286016115ad565b9150509250929050565b6000819050919050565b600061186361185e611859846115ef565b61183e565b6115ef565b9050919050565b600061187582611848565b9050919050565b60006118878261186a565b9050919050565b6118978161187c565b82525050565b60006020820190506118b2600083018461188e565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006118f28261155d565b91506118fd8361155d565b925082820261190b8161155d565b91508282048414831517611922576119216118b8565b5b5092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082825260208201905092915050565b7f6465706f73697420697320616c72656164792074616b656e0000000000000000600082015250565b600061199f601883611958565b91506119aa82611969565b602082019050919050565b600060208201905081810360008301526119ce81611992565b9050919050565b7f546f6b656e7320617265206e6f7420617661696c61626c652c20706c6561736560008201527f20636f6e746163742061646d696e000000000000000000000000000000000000602082015250565b6000611a31602e83611958565b9150611a3c826119d5565b604082019050919050565b60006020820190508181036000830152611a6081611a24565b9050919050565b6000604082019050611a7c60008301856116ba565b611a896020830184611567565b9392505050565b611a9981611782565b8114611aa457600080fd5b50565b600081519050611ab681611a90565b92915050565b600060208284031215611ad257611ad1611591565b5b6000611ae084828501611aa7565b91505092915050565b7f41646d696e2063616e207769746864726177206c657373207468616e2061646d60008201527f696e546f6b656e7320616d6f756e740000000000000000000000000000000000602082015250565b6000611b45602f83611958565b9150611b5082611ae9565b604082019050919050565b60006020820190508181036000830152611b7481611b38565b9050919050565b7f496e76616c6964206465706f7369744964000000000000000000000000000000600082015250565b6000611bb1601183611958565b9150611bbc82611b7b565b602082019050919050565b60006020820190508181036000830152611be081611ba4565b9050919050565b600081519050611bf681611596565b92915050565b600060208284031215611c1257611c11611591565b5b6000611c2084828501611be7565b91505092915050565b6000611c348261155d565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611c6657611c656118b8565b5b600182019050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000611ccd602683611958565b9150611cd882611c71565b604082019050919050565b60006020820190508181036000830152611cfc81611cc0565b9050919050565b7f6d696e206c696d697420302e3030312069732072657175697265640000000000600082015250565b6000611d39601b83611958565b9150611d4482611d03565b602082019050919050565b60006020820190508181036000830152611d6881611d2c565b9050919050565b7f496e76616c696420706c616e0000000000000000000000000000000000000000600082015250565b6000611da5600c83611958565b9150611db082611d6f565b602082019050919050565b60006020820190508181036000830152611dd481611d98565b9050919050565b6000606082019050611df060008301866116ba565b611dfd60208301856116ba565b611e0a6040830184611567565b949350505050565b6000604082019050611e276000830185611773565b611e346020830184611567565b9392505050565b7f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00600082015250565b6000611e71601f83611958565b9150611e7c82611e3b565b602082019050919050565b60006020820190508181036000830152611ea081611e64565b9050919050565b6000611eb28261155d565b9150611ebd8361155d565b9250828201905080821115611ed557611ed46118b8565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000611f158261155d565b9150611f208361155d565b925082611f3057611f2f611edb565b5b828204905092915050565b6000611f468261155d565b9150611f518361155d565b9250828203905081811115611f6957611f686118b8565b5b92915050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000611fa5602083611958565b9150611fb082611f6f565b602082019050919050565b60006020820190508181036000830152611fd481611f98565b905091905056fea26469706673582212208d9748073e6993033f4e94f28906ae7c2d17e8a2822014f3c85efda4c0a1b1c664736f6c63430008120033";

type StackingConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: StackingConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Stacking__factory extends ContractFactory {
  constructor(...args: StackingConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _tokenAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Stacking> {
    return super.deploy(_tokenAddress, overrides || {}) as Promise<Stacking>;
  }
  override getDeployTransaction(
    _tokenAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_tokenAddress, overrides || {});
  }
  override attach(address: string): Stacking {
    return super.attach(address) as Stacking;
  }
  override connect(signer: Signer): Stacking__factory {
    return super.connect(signer) as Stacking__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StackingInterface {
    return new utils.Interface(_abi) as StackingInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Stacking {
    return new Contract(address, _abi, signerOrProvider) as Stacking;
  }
}