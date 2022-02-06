const Tx = require('ethereumjs-tx').Transaction
    //     //check if Tx import
    //console.log(Tx);

const Web3 = require('web3');
//check Web3 imported
//console.log(Web3);
const web3 = new Web3("https://rinkeby.infura.io/v3/f4450dac737a4cd29c095c9a583afc1b");
//check network imported
//console.log(web3);

const account1 = "0x1D375435c8EfA3e489ef002d2d0B1E7Eb3CC62Fe";
const account2 = "0x48cE3998b34DA22a682Afc8bA5628fdeF6665B0d";


//save variable in terminal like
//export private_key_1="your_private_key"
//export private_key_1="7f8823780be9881338f4cdb1a68f8404022126176e9ad4b7343de7537be22243"
//export private_key_2="ed50324915e4060f8e7a04f6771d7135f7412b86a386f966a22b73b8d127ed62"
//make variablewithout space in command line and store privatekeys in them
//then get values from there.
// export private_key1="first private key"
// export private_key2="first private key"


// console.log(process.env.private_key_1);
// console.log(process.env.private_key_2);


const privateKey_account1 = Buffer.from(process.env.private_key_1, 'hex');
//const privateKey_account2 = Buffer.from(process.env.private_key_2, 'hex');

//web3.eth.getBalance(account1, (err, wei) => { console.log("Account1 balance: ", balance = web3.utils.fromWei(wei, 'ether')) });
//web3.eth.getBalance(account2, (err, wei) => { console.log("Account2 balance: ", balance = web3.utils.fromWei(wei, 'ether')) });

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

const contract = new web3.eth.Contract(contract_ABI, contract_address);
//console.log(contract);
// to see the methods
// contract.methods;
console.log(contract.methods)

const data = contract.methods.transfer(account1, account2, 10).encodeABI();
//console.log(data);


/////////run this after part 2 commented////////
contract.methods.BalanceOf(account1).call((err, balance) => { console.log({ err, balance }) });


//////////part2/////////
// first we have to get the transaction from account 1.
// web3.eth.getTransactionCount(account1, (err, txCount) => {
//     const txObject = {
//         nonce: web3.utils.toHex(txCount),
//         gasLimit: web3.utils.toHex(800000),
//         gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
//         from: account1,
//         to: account2,
//         data: data
//     }

//     //console.log(txObject);

//     //sign the transaction with our private key
//     const tx = new Tx(txObject, { chain: 'rinkeby' });
//     tx.sign(privateKey_account1);
//     // console.log(tx);

//     const serializedTx = tx.serialize();
//     const raw = '0x' + serializedTx.toString('hex');
//     // console.log(serializedTx);


//     //broadcast the transaction
//     // web3.eth.sendSignedTransaction(raw, (result) => { console.log(result) });
//     web3.eth.sendSignedTransaction(raw, (err, txHash) => { console.log('err:', err, 'txHash:', txHash) });
// })