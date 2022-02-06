const Tx = require('ethereumjs-tx').Transaction
    //check if Tx import
    // console.log(Tx);

const Web3 = require('web3');
//check Web3 imported
// console.log(Web3);
const web3 = new Web3("https://rinkeby.infura.io/v3/f4450dac737a4cd29c095c9a583afc1b");
//check network imported
// console.log(web3);

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
// console.log(process.env.private_key1);
// console.log(process.env.private_key2);


const privateKey_account1 = Buffer.from(process.env.private_key_1, 'hex');
const privateKey_account2 = Buffer.from(process.env.private_key_2, 'hex');

// web3.eth.getBalance(account1, (err, wei) => { console.log("Account1 balance: ", balance = web3.utils.fromWei(wei, 'ether')) });
// web3.eth.getBalance(account2, (err, wei) => { console.log("Account2 balance: ", balance = web3.utils.fromWei(wei, 'ether')) });


//first we have to get the transaction from account 1.
web3.eth.getTransactionCount(account1, (err, txCount) => {
    const txObject = {
        nonce: web3.utils.toHex(txCount),
        to: account2,
        value: web3.utils.toHex(web3.utils.toWei('0.0001', 'ether')),
        gasLimit: web3.utils.toHex(21000),
        gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei'))
    }

    //console.log(txObject);

    //sign the transaction with our private key
    const tx = new Tx(txObject, { chain: 'rinkeby' });
    tx.sign(privateKey_account1);
    // console.log(tx);

    const serializedTx = tx.serialize();
    const raw = '0x' + serializedTx.toString('hex');
    // console.log(serializedTx);


    //broadcast the transaction
    // web3.eth.sendSignedTransaction(raw, (result) => { console.log(result) });
    web3.eth.sendSignedTransaction(raw, (err, txHash) => { console.log('err:', err, 'txHash:', txHash) });
})