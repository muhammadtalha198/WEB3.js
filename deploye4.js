//var Tx = require('ethereumjs-tx');
const Tx = require('ethereumjs-tx').Transaction
    //check if Tx import
    // console.log(Tx);

const Web3 = require('web3');
//check Web3 imported
// console.log(Web3);
const web3 = new Web3("https://rinkeby.infura.io/v3/f4450dac737a4cd29c095c9a583afc1b");

const account1 = "0x1D375435c8EfA3e489ef002d2d0B1E7Eb3CC62Fe";
const privateKey_account1 = Buffer.from(process.env.private_key1, 'hex');

//check network imported
// console.log(web3);
const contract_ABI = [{
        "inputs": [{
                "internalType": "string",
                "name": "_token_name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_token_symbol",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "_total_generated_tokens",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_upto_decimals",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": true,
                "internalType": "address",
                "name": "_owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "_spender",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": true,
                "internalType": "address",
                "name": "_from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "_to",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "inputs": [{
            "internalType": "address",
            "name": "_this_account",
            "type": "address"
        }],
        "name": "BalanceOf",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "address",
                "name": "_owner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_spender",
                "type": "address"
            }
        ],
        "name": "allowance",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "address",
                "name": "_owner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_amount",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [{
            "internalType": "bool",
            "name": "success",
            "type": "bool"
        }],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [{
            "internalType": "address",
            "name": "",
            "type": "address"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "token_name",
        "outputs": [{
            "internalType": "string",
            "name": "",
            "type": "string"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "token_symbol",
        "outputs": [{
            "internalType": "string",
            "name": "",
            "type": "string"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "total_generated_tokens",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "address",
                "name": "_from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_amount",
                "type": "uint256"
            }
        ],
        "name": "transfer",
        "outputs": [{
            "internalType": "bool",
            "name": "success",
            "type": "bool"
        }],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "address",
                "name": "real_owner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "recipient",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "upto_decimals",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    }
];

const contract_address = "0xd9145CCE52D386f254917e481eB44e9943F39138";

const ERC20Contract = new web3.eth.Contract(contract_ABI, contract_address);

console.log(ERC20Contract);
ERC20Contract.methods;
ERC20Contract.methods.name().call();

//make variablewithout space in command line and store privatekeys in them
//then get values from there.
// export private_key1="first private key"
// export private_key2="first private key"
// console.log(process.env.private_key1);
// console.log(process.env.private_key2);




//first we have to get the transaction from account 1.
// web3.eth.getTransactionCount(account1, (err, txCount) => {

//     const data = '0x60806040523480156200001157600080fd5b50604051620015e8380380620015e8833981810160405281019062000037919062000241565b83600090805190602001906200004f92919062000108565b5082600190805190602001906200006892919062000108565b508160028190555080600381905550600254600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555033600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050505062000434565b828054620001169062000386565b90600052602060002090601f0160209004810192826200013a576000855562000186565b82601f106200015557805160ff191683800117855562000186565b8280016001018555821562000186579182015b828111156200018557825182559160200191906001019062000168565b5b50905062000195919062000199565b5090565b5b80821115620001b45760008160009055506001016200019a565b5090565b6000620001cf620001c98462000313565b620002df565b905082815260208101848484011115620001e857600080fd5b620001f584828562000350565b509392505050565b600082601f8301126200020f57600080fd5b815162000221848260208601620001b8565b91505092915050565b6000815190506200023b816200041a565b92915050565b600080600080608085870312156200025857600080fd5b600085015167ffffffffffffffff8111156200027357600080fd5b6200028187828801620001fd565b945050602085015167ffffffffffffffff8111156200029f57600080fd5b620002ad87828801620001fd565b9350506040620002c0878288016200022a565b9250506060620002d3878288016200022a565b91505092959194509250565b6000604051905081810181811067ffffffffffffffff82111715620003095762000308620003eb565b5b8060405250919050565b600067ffffffffffffffff821115620003315762000330620003eb565b5b601f19601f8301169050602081019050919050565b6000819050919050565b60005b838110156200037057808201518184015260208101905062000353565b8381111562000380576000848401525b50505050565b600060028204905060018216806200039f57607f821691505b60208210811415620003b657620003b5620003bc565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620004258162000346565b81146200043157600080fd5b50565b6111a480620004446000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c8063947a316811610071578063947a316814610156578063beabacc814610174578063c7f4d396146101a4578063d9967889146101c2578063dd62ed3e146101f2578063e1f21c6714610222576100a9565b806318160ddd146100ae5780631f772a34146100cc57806323b872dd146100ea5780636b6b41811461011a5780638da5cb5b14610138575b600080fd5b6100b6610252565b6040516100c39190610f63565b60405180910390f35b6100d4610299565b6040516100e19190610e81565b60405180910390f35b61010460048036038101906100ff9190610b58565b610327565b6040516101119190610e66565b60405180910390f35b61012261049e565b60405161012f9190610f63565b60405180910390f35b6101406104a4565b60405161014d9190610e4b565b60405180910390f35b61015e6104ca565b60405161016b9190610e81565b60405180910390f35b61018e60048036038101906101899190610b58565b610558565b60405161019b9190610e66565b60405180910390f35b6101ac610768565b6040516101b99190610f63565b60405180910390f35b6101dc60048036038101906101d79190610af3565b61076e565b6040516101e99190610f63565b60405180910390f35b61020c60048036038101906102079190610b1c565b61086b565b6040516102199190610f63565b60405180910390f35b61023c60048036038101906102379190610b58565b6108f7565b6040516102499190610e66565b60405180910390f35b6000600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905090565b600180546102a69061109f565b80601f01602080910402602001604051908101604052809291908181526020018280546102d29061109f565b801561031f5780601f106102f45761010080835404028352916020019161031f565b820191906000526020600020905b81548152906001019060200180831161030257829003601f168201915b505050505081565b600081600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205411156103ab576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103a290610ec3565b60405180910390fd5b6000600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508281101561046f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161046690610f43565b60405180910390fd5b610485853385846104809190610ff0565b6108f7565b50610491338585610558565b5060019150509392505050565b60025481565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600080546104d79061109f565b80601f01602080910402602001604051908101604052809291908181526020018280546105039061109f565b80156105505780601f1061052557610100808354040283529160200191610550565b820191906000526020600020905b81548152906001019060200180831161053357829003601f168201915b505050505081565b600081600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410156105dc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105d390610ee3565b60405180910390fd5b81600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546106279190610ff0565b600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555081600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546106b59190610f9a565b600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516107559190610f63565b60405180910390a3600190509392505050565b60035481565b6000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610823576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161081a90610f03565b60405180910390fd5b600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054915050919050565b600080600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508091505092915050565b60008073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415610968576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161095f90610f23565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156109d8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109cf90610ea3565b60405180910390fd5b81600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92584604051610ab69190610f63565b60405180910390a3600190509392505050565b600081359050610ad881611140565b92915050565b600081359050610aed81611157565b92915050565b600060208284031215610b0557600080fd5b6000610b1384828501610ac9565b91505092915050565b60008060408385031215610b2f57600080fd5b6000610b3d85828601610ac9565b9250506020610b4e85828601610ac9565b9150509250929050565b600080600060608486031215610b6d57600080fd5b6000610b7b86828701610ac9565b9350506020610b8c86828701610ac9565b9250506040610b9d86828701610ade565b9150509250925092565b610bb081611024565b82525050565b610bbf81611036565b82525050565b6000610bd082610f7e565b610bda8185610f89565b9350610bea81856020860161106c565b610bf38161112f565b840191505092915050565b6000610c0b602283610f89565b91507f45524332303a20617070726f766520746f20746865207a65726f20616464726560008301527f73730000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000610c71601583610f89565b91507f596f7520617265206e6f7420617070726f7665642e00000000000000000000006000830152602082019050919050565b6000610cb1602483610f89565b91507f596f7520646f6e6f7420686176652074686520737566666963656e7420616d6f60008301527f756e742e000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000610d17602483610f89565b91507f4f6e6c7920746865207265616c206f6e7765722063616e2073656e6420746f6b60008301527f656e732e000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000610d7d602483610f89565b91507f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008301527f72657373000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000610de3602c83610f89565b91507f596f7520617265206e6f7420616c6c6f77656420746f2073656e64207468697360008301527f206d756368206d6f6e65792e00000000000000000000000000000000000000006020830152604082019050919050565b610e4581611062565b82525050565b6000602082019050610e606000830184610ba7565b92915050565b6000602082019050610e7b6000830184610bb6565b92915050565b60006020820190508181036000830152610e9b8184610bc5565b905092915050565b60006020820190508181036000830152610ebc81610bfe565b9050919050565b60006020820190508181036000830152610edc81610c64565b9050919050565b60006020820190508181036000830152610efc81610ca4565b9050919050565b60006020820190508181036000830152610f1c81610d0a565b9050919050565b60006020820190508181036000830152610f3c81610d70565b9050919050565b60006020820190508181036000830152610f5c81610dd6565b9050919050565b6000602082019050610f786000830184610e3c565b92915050565b600081519050919050565b600082825260208201905092915050565b6000610fa582611062565b9150610fb083611062565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610fe557610fe46110d1565b5b828201905092915050565b6000610ffb82611062565b915061100683611062565b925082821015611019576110186110d1565b5b828203905092915050565b600061102f82611042565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b8381101561108a57808201518184015260208101905061106f565b83811115611099576000848401525b50505050565b600060028204905060018216806110b757607f821691505b602082108114156110cb576110ca611100565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b61114981611024565b811461115457600080fd5b50565b61116081611062565b811461116b57600080fd5b5056fea2646970667358221220a2045fd9d2067e74ab08b1fec10b8e85d32ec1d362c9784c2a9824f882bd0ae864736f6c63430008000033';

//     const txObject = {
//         nonce: web3.utils.toHex(txCount),
//         gasLimit: web3.utils.toHex(1000000),
//         gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
//         data: data
//     }

//     //console.log(txObject);

//     //console.log(txObject);

//     //sign the transaction with our private key
//     const tx = new Tx(txObject, { chain: 'rinkeby' });
//     tx.sign(privateKey_account1);
//     // console.log(tx);

//     const serializedTx = tx.serialize();
//     const raw = '0x' + serializedTx.toString('hex');
//     // console.log(serializedTx);


//     //broadcast the transaction
//     web3.eth.sendSignedTransaction(raw, (err, txHash) => { console.log('err:', err, 'txHash:', txHash) });

// })