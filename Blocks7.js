const Web3 = require('web3');
//check Web3 imported
//console.log(Web3);
const web3 = new Web3("https://mainnet.infura.io/v3/f4450dac737a4cd29c095c9a583afc1b");
//check network imported
//console.log(web3);

// get latest block number
web3.eth.getBlockNumber().then(console.log)

// // get latest block
web3.eth.getBlock('latest').then(console.log)

//get the hash of the block
web3.eth.getBlock('latest').then((block) => {
    console.log({
        blockHash: block.hash,
        blockNumber: block.number
    })
});

//get the hash of the block
//we can also use  block number and also hash instead of block number.
web3.eth.getBlock('14153513').then((block) => {
    console.log({
        blockHash: block.hash,
        blockNumber: block.number
    })
});



// get latest 10 blocks
web3.eth.getBlockNumber().then((latest) => {
    for (let i = 0; i < 10; i++) {
        web3.eth.getBlock(latest - i).then((block) => {
            console.log(block.hash)
        });
    }
})

//get the number of transaction in thius block
web3.eth.getBlockTransactionCount('latest').then(console.log);

// get transaction from specific block
const hash = '0x66b3fd79a49dafe44507763e9b6739aa0810de2c15590ac22b5e2f0a3f502073'
web3.eth.getTransactionFromBlock(hash, 2).then(console.log)