const Tx = require('ethereumjs-tx').Transaction
    //     //check if Tx import
    //console.log(Tx);

const Web3 = require('web3');
//check Web3 imported
//console.log(Web3);
const web3 = new Web3("https://mainnet.infura.io/v3/f4450dac737a4cd29c095c9a583afc1b");
//check network imported
//console.log(web3);



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


//web3.eth.getBalance(account1, (err, wei) => { console.log("Account1 balance: ", balance = web3.utils.fromWei(wei, 'ether')) });
//web3.eth.getBalance(account2, (err, wei) => { console.log("Account2 balance: ", balance = web3.utils.fromWei(wei, 'ether')) });

const contract_ABI = [{ "constant": true, "inputs": [], "name": "mintingFinished", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "name", "outputs": [{ "name": "", "type": "string" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "_spender", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "approve", "outputs": [], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "_from", "type": "address" }, { "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "transferFrom", "outputs": [], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [], "name": "unpause", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "_to", "type": "address" }, { "name": "_amount", "type": "uint256" }], "name": "mint", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "paused", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "_owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "name": "balance", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [], "name": "finishMinting", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [], "name": "pause", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [{ "name": "", "type": "address" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [{ "name": "", "type": "string" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "transfer", "outputs": [], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "_to", "type": "address" }, { "name": "_amount", "type": "uint256" }, { "name": "_releaseTime", "type": "uint256" }], "name": "mintTimelocked", "outputs": [{ "name": "", "type": "address" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "_owner", "type": "address" }, { "name": "_spender", "type": "address" }], "name": "allowance", "outputs": [{ "name": "remaining", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "payable": false, "type": "function" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "to", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" }], "name": "Mint", "type": "event" }, { "anonymous": false, "inputs": [], "name": "MintFinished", "type": "event" }, { "anonymous": false, "inputs": [], "name": "Pause", "type": "event" }, { "anonymous": false, "inputs": [], "name": "Unpause", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "owner", "type": "address" }, { "indexed": true, "name": "spender", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "from", "type": "address" }, { "indexed": true, "name": "to", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }];

const contract_address = "0xd26114cd6EE289AccF82350c8d8487fedB8A0C07";

const contract = new web3.eth.Contract(contract_ABI, contract_address);
// console.log(contract);

// to see the methods
// contract.methods;
// console.log(contract.methods)



// Get Contract Event Stream
contract.getPastEvents('AllEvents', {
    fromBlock: 14150809,
    toBlock: 'latest'
}, (err, events) => { console.log(events.length) });


// For All of them
contract.getPastEvents('AllEvents', {
    fromBlock: 14150809,
    toBlock: 'latest'
}, (err, events) => { console.log(events) });

//For specific one of them
// contract.getPastEvents('AllEvents', {
//     fromBlock: 14150809,
//     toBlock: 'latest'
// }, (err, events) => { console.log(events[75]) });


// contract.getPastEvents('Transfer', {
//     fromBlock: 5854000,
//     toBlock: 'latest'
// }, (err, events) => { console.log(events) });