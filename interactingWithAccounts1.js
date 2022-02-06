//requireing a web 3 library and assigned it to a variable.
const Web3 = require("web3");

//Now checking if it is imported.
//console.log(Web3);

const URL = "https://mainnet.infura.io/v3/f4450dac737a4cd29c095c9a583afc1b";

const web3 = new Web3(URL);
//console.log(web3);


//To get the balance of this account
const account_address = "0x00000000219ab540356cBB839Cbe05303d7705Fa";

web3.eth.getBalance(account_address, (err, bal) => {
    (balance = bal)
});
web3.eth.getBalance(account_address, (err, bal) => { console.log((balance = bal)) });
web3.eth.getBalance(account_address, (err, wei) => { console.log(web3.utils.fromWei(wei, 'ether')) });
//wei is jast a variable to show the balance is in wei

web3.eth.getBalance(account_address, (err, bal) => { console.log(balance = (balance = bal)) });
web3.eth.getBalance(account_address, (err, wei) => { console.log(balance = web3.utils.fromWei(wei, 'ether')) });

//Write this command to create accopunt on etherium
web3.eth.accounts.create();

// ///////////////////// Connect to local blockchain

var Web3 = require("web3");

var web3 = new Web3("HTTP://127.0.0.1:7545");

web3.eth.getBalance("0xdf1C7ab3a9E7349dD0C81C4e42417327976FFa14", (err, wei) => { console.log(balance = web3.utils.fromWei(wei, 'ether')) });