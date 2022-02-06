/////////////////////////////////with Ganache//////////////////////////////////////

var Web3 = require("web3");

var web3 = new Web3("HTTP://127.0.0.1:7545");

account1_address = "0x15AEa123683867fe039FdceaDb97F3E114fD3a58";
account2_address = "0x8F63700B277866dDAE4Bc93a323355B5EA3d766d";

web3.eth.getBalance(account1_address, (err, wei) => { console.log(balance = web3.utils.fromWei(wei, 'ether')) });
web3.eth.getBalance(account2_address, (err, wei) => { console.log(balance = web3.utils.fromWei(wei, 'ether')) });

web3.eth.sendTransaction({ from: account1_address, to: account2_address, value: web3.utils.toWei('1', 'ether') });

web3.eth.getBalance(account1_address, (err, wei) => { console.log(balance = web3.utils.fromWei(wei, 'ether')) });
web3.eth.getBalance(account2_address, (err, wei) => { console.log(balance = web3.utils.fromWei(wei, 'ether')) });