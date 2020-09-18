/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import { Sablier } from "./Sablier";

export class SablierFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<Sablier> {
    return super.deploy(overrides || {}) as Promise<Sablier>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Sablier {
    return super.attach(address) as Sablier;
  }
  connect(signer: Signer): SablierFactory {
    return super.connect(signer) as SablierFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Sablier {
    return new Contract(address, _abi, signerOrProvider) as Sablier;
  }
}

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "streamId",
        type: "uint256"
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "recipient",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "senderBalance",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "recipientBalance",
        type: "uint256"
      }
    ],
    name: "CancelStream",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "streamId",
        type: "uint256"
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "recipient",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "deposit",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "address",
        name: "tokenAddress",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "startTime",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "stopTime",
        type: "uint256"
      }
    ],
    name: "CreateStream",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "streamId",
        type: "uint256"
      },
      {
        indexed: true,
        internalType: "address",
        name: "recipient",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "WithdrawFromStream",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "streamId",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "who",
        type: "address"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "streamId",
        type: "uint256"
      }
    ],
    name: "cancelStream",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "deposit",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "startTime",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "stopTime",
        type: "uint256"
      }
    ],
    name: "createStream",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "streamId",
        type: "uint256"
      }
    ],
    name: "deltaOf",
    outputs: [
      {
        internalType: "uint256",
        name: "delta",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "fee",
    outputs: [
      {
        internalType: "uint256",
        name: "mantissa",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "streamId",
        type: "uint256"
      }
    ],
    name: "getStream",
    outputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address"
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "deposit",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "startTime",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "stopTime",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "remainingBalance",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "ratePerSecond",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "nextStreamId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "streamId",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "withdrawFromStream",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  }
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060016000819055506001600381905550612953806100306000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063894e9a0d1161005b578063894e9a0d146101a3578063a82ccd4d1461029a578063cc1b4bf6146102dc578063ddca3f431461037257610088565b80631e99d5691461008d5780633656eec2146100ab5780636db9241b1461010d5780637a9b2c6c14610153575b600080fd5b610095610390565b6040518082815260200191505060405180910390f35b6100f7600480360360408110156100c157600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610396565b6040518082815260200191505060405180910390f35b6101396004803603602081101561012357600080fd5b810190808035906020019092919050505061085b565b604051808215151515815260200191505060405180910390f35b6101896004803603604081101561016957600080fd5b81019080803590602001909291908035906020019092919050505061105d565b604051808215151515815260200191505060405180910390f35b6101cf600480360360208110156101b957600080fd5b810190808035906020019092919050505061183f565b604051808973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018781526020018673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018581526020018481526020018381526020018281526020019850505050505050505060405180910390f35b6102c6600480360360208110156102b057600080fd5b8101908080359060200190929190505050611a16565b6040518082815260200191505060405180910390f35b61035c600480360360a08110156102f257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919080359060200190929190505050611c99565b6040518082815260200191505060405180910390f35b61037a61264d565b6040518082815260200191505060405180910390f35b60035481565b6000826004600082815260200190815260200160002060060160149054906101000a900460ff1661042f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260158152602001807f73747265616d20646f6573206e6f74206578697374000000000000000000000081525060200191505060405180910390fd5b61043761273d565b600460008681526020019081526020016000206040518061014001604052908160008201548152602001600182015481526020016002820154815260200160038201548152602001600482015481526020016005820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016006820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016006820160149054906101000a900460ff161515151581526020016007820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016007820160149054906101000a900460ff1660028111156105c357fe5b60028111156105ce57fe5b8152505090506105dc6127df565b60006105e787611a16565b90506105f7818460600151612659565b83600001846020018281525082600381111561060f57fe5b600381111561061a57fe5b81525050506000600381111561062c57fe5b8260000151600381111561063c57fe5b14610692576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001806128c46023913960400191505060405180910390fd5b82608001518360400151111561075f576106b4836040015184608001516126ac565b8360000184604001828152508260038111156106cc57fe5b60038111156106d757fe5b8152505050600060038111156106e957fe5b826000015160038111156106f957fe5b1461070057fe5b610712826020015183604001516126ac565b83600001846020018281525082600381111561072a57fe5b600381111561073557fe5b81525050506000600381111561074757fe5b8260000151600381111561075757fe5b1461075e57fe5b5b82610100015173ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614156107a75781602001519450505050610854565b8260a0015173ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff16141561084c576107f1836080015183602001516126ac565b83600001846060018281525082600381111561080957fe5b600381111561081457fe5b81525050506000600381111561082657fe5b8260000151600381111561083657fe5b1461083d57fe5b81606001519450505050610854565b600094505050505b5092915050565b6000600260005414156108d6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0081525060200191505060405180910390fd5b6002600081905550816004600082815260200190815260200160002060060160149054906101000a900460ff16610975576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260158152602001807f73747265616d20646f6573206e6f74206578697374000000000000000000000081525060200191505060405180910390fd5b826004600082815260200190815260200160002060050160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161480610a4757506004600082815260200190815260200160002060070160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b610a9c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260378152602001806128e76037913960400191505060405180910390fd5b610aa461273d565b600460008681526020019081526020016000206040518061014001604052908160008201548152602001600182015481526020016002820154815260200160038201548152602001600482015481526020016005820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016006820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016006820160149054906101000a900460ff161515151581526020016007820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016007820160149054906101000a900460ff166002811115610c3057fe5b6002811115610c3b57fe5b8152505090506000610c51868360a00151610396565b90506000610c6487846101000151610396565b90506004600088815260200190815260200160002060008082016000905560018201600090556002820160009055600382016000905560048201600090556005820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556006820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556006820160146101000a81549060ff02191690556007820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556007820160146101000a81549060ff0219169055505060008360c0015190506000821115610e8d578073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb856101000151846040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b158015610ddf57600080fd5b505af1158015610df3573d6000803e3d6000fd5b505050506040513d6020811015610e0957600080fd5b8101908080519060200190929190505050610e8c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f726563697069656e7420746f6b656e207472616e73666572206661696c75726581525060200191505060405180910390fd5b5b6000831115610fcf578073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb8560a00151856040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b158015610f2157600080fd5b505af1158015610f35573d6000803e3d6000fd5b505050506040513d6020811015610f4b57600080fd5b8101908080519060200190929190505050610fce576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f73656e64657220746f6b656e207472616e73666572206661696c75726500000081525060200191505060405180910390fd5b5b83610100015173ffffffffffffffffffffffffffffffffffffffff168460a0015173ffffffffffffffffffffffffffffffffffffffff16897fca3e6079b726e7728802a0537949e2d1c7762304fa641fb06eb56daf2ba8c6b98686604051808381526020018281526020019250505060405180910390a4600196505050505050506001600081905550919050565b6000600260005414156110d8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0081525060200191505060405180910390fd5b6002600081905550826004600082815260200190815260200160002060060160149054906101000a900460ff16611177576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260158152602001807f73747265616d20646f6573206e6f74206578697374000000000000000000000081525060200191505060405180910390fd5b836004600082815260200190815260200160002060050160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16148061124957506004600082815260200190815260200160002060070160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b61129e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260378152602001806128e76037913960400191505060405180910390fd5b60008411611314576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600e8152602001807f616d6f756e74206973207a65726f00000000000000000000000000000000000081525060200191505060405180910390fd5b61131c61273d565b600460008781526020019081526020016000206040518061014001604052908160008201548152602001600182015481526020016002820154815260200160038201548152602001600482015481526020016005820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016006820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016006820160149054906101000a900460ff161515151581526020016007820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016007820160149054906101000a900460ff1660028111156114a857fe5b60028111156114b357fe5b8152505090506114c1612812565b60006114d288846101000151610396565b90508681101561152d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602481526020018061285d6024913960400191505060405180910390fd5b61153b8360800151886126ac565b83600001600460008c81526020019081526020016000206004016000839190505582600381111561156857fe5b600381111561157357fe5b81525050506000600381111561158557fe5b8260000151600381111561159557fe5b1461159c57fe5b6000600460008a8152602001908152602001600020600401541415611697576004600089815260200190815260200160002060008082016000905560018201600090556002820160009055600382016000905560048201600090556005820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556006820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556006820160146101000a81549060ff02191690556007820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556007820160146101000a81549060ff021916905550505b8260c0015173ffffffffffffffffffffffffffffffffffffffff1663a9059cbb846101000151896040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15801561172757600080fd5b505af115801561173b573d6000803e3d6000fd5b505050506040513d602081101561175157600080fd5b81019080805190602001909291905050506117d4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260168152602001807f746f6b656e207472616e73666572206661696c7572650000000000000000000081525060200191505060405180910390fd5b82610100015173ffffffffffffffffffffffffffffffffffffffff16887f36c3ab437e6a424ed25dc4bfdeb62706aa06558660fab2dab229d2555adaf89c896040518082815260200191505060405180910390a3600195505050505050600160008190555092915050565b600080600080600080600080886004600082815260200190815260200160002060060160149054906101000a900460ff166118e2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260158152602001807f73747265616d20646f6573206e6f74206578697374000000000000000000000081525060200191505060405180910390fd5b600460008b815260200190815260200160002060050160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169850600460008b815260200190815260200160002060070160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169750600460008b8152602001908152602001600020600201549650600460008b815260200190815260200160002060060160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169550600460008b8152602001908152602001600020600001549450600460008b8152602001908152602001600020600101549350600460008b8152602001908152602001600020600401549250600460008b815260200190815260200160002060030154915050919395975091939597565b6000816004600082815260200190815260200160002060060160149054906101000a900460ff16611aaf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260158152602001807f73747265616d20646f6573206e6f74206578697374000000000000000000000081525060200191505060405180910390fd5b611ab761273d565b600460008581526020019081526020016000206040518061014001604052908160008201548152602001600182015481526020016002820154815260200160038201548152602001600482015481526020016005820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016006820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016006820160149054906101000a900460ff161515151581526020016007820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016007820160149054906101000a900460ff166002811115611c4357fe5b6002811115611c4e57fe5b81525050905080600001514211611c69576000925050611c93565b8060200151421015611c845780600001514203925050611c93565b80600001518160200151039250505b50919050565b60008073ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff161415611d3d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601a8152602001807f73747265616d20746f20746865207a65726f206164647265737300000000000081525060200191505060405180910390fd5b3073ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff161415611ddf576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f73747265616d20746f2074686520636f6e747261637420697473656c6600000081525060200191505060405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff161415611e81576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f73747265616d20746f207468652063616c6c657200000000000000000000000081525060200191505060405180910390fd5b60008511611ef7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600f8152602001807f6465706f736974206973207a65726f000000000000000000000000000000000081525060200191505060405180910390fd5b42831015611f50576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806128816021913960400191505060405180910390fd5b828211611fc5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f73746f702074696d65206265666f7265207468652073746172742074696d650081525060200191505060405180910390fd5b611fcd612830565b611fd783856126ac565b826000018360200182815250826003811115611fef57fe5b6003811115611ffa57fe5b81525050506000600381111561200c57fe5b8160000151600381111561201c57fe5b1461202357fe5b806020015186101561209d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f6465706f73697420736d616c6c6572207468616e2074696d652064656c74610081525060200191505060405180910390fd5b6000816020015187816120ac57fe5b0614612103576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806128a26022913960400191505060405180910390fd5b6121118682602001516126d7565b82600001836040018281525082600381111561212957fe5b600381111561213457fe5b81525050506000600381111561214657fe5b8160000151600381111561215657fe5b1461215d57fe5b60006003549050604051806101400160405280868152602001858152602001888152602001836040015181526020018881526020013373ffffffffffffffffffffffffffffffffffffffff1681526020018773ffffffffffffffffffffffffffffffffffffffff1681526020016001151581526020018973ffffffffffffffffffffffffffffffffffffffff168152602001600160028111156121fc57fe5b81525060046000838152602001908152602001600020600082015181600001556020820151816001015560408201518160020155606082015181600301556080820151816004015560a08201518160050160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060c08201518160060160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060e08201518160060160146101000a81548160ff0219169083151502179055506101008201518160070160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506101208201518160070160146101000a81548160ff0219169083600281111561235f57fe5b0217905550905050612374600354600161270b565b8360000160036000839190505582600381111561238d57fe5b600381111561239857fe5b8152505050600060038111156123aa57fe5b826000015160038111156123ba57fe5b1461242d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f6e6578742073747265616d2069642063616c63756c6174696f6e206572726f7281525060200191505060405180910390fd5b8573ffffffffffffffffffffffffffffffffffffffff166323b872dd33308a6040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b1580156124e857600080fd5b505af11580156124fc573d6000803e3d6000fd5b505050506040513d602081101561251257600080fd5b8101908080519060200190929190505050612595576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260168152602001807f746f6b656e207472616e73666572206661696c7572650000000000000000000081525060200191505060405180910390fd5b8773ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16827f7b01d409597969366dc268d7f957a990d1ca3d3449baf8fb45db67351aecfe788a8a8a8a604051808581526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200182815260200194505050505060405180910390a4809250505095945050505050565b60028060000154905081565b600080600084141561267457600080809050915091506126a5565b600083850290508385828161268557fe5b041461269c576002600080905092509250506126a5565b60008192509250505b9250929050565b6000808383116126c4576000838503915091506126d0565b60036000809050915091505b9250929050565b60008060008314156126f3576001600080905091509150612704565b60008385816126fe57fe5b04915091505b9250929050565b60008060008385019050848110612729576000819250925050612736565b6002600080905092509250505b9250929050565b6040518061014001604052806000815260200160008152602001600081526020016000815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600015158152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600060028111156127d957fe5b81525090565b6040518060800160405280600060038111156127f757fe5b81526020016000815260200160008152602001600081525090565b60405180602001604052806000600381111561282a57fe5b81525090565b60405180606001604052806000600381111561284857fe5b81526020016000815260200160008152509056fe616d6f756e7420657863656564732074686520617661696c61626c652062616c616e636573746172742074696d65206265666f726520626c6f636b2e74696d657374616d706465706f736974206e6f74206d756c7469706c65206f662074696d652064656c7461726563697069656e742062616c616e63652063616c63756c6174696f6e206572726f7263616c6c6572206973206e6f74207468652073656e646572206f722074686520726563697069656e74206f66207468652073747265616da2646970667358221220099a41cd32bc8b9507f5f246e1ad2d0df02b5c162acd95bbd05a7ac40893236e64736f6c63430006080033";