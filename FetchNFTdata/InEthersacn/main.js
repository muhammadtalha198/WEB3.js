const axios = require("axios");
const fs = require('fs');

// Replace with your wallet address and API key
const walletAddress = "0xcc8f6631d100f599b5179a0ce8d2f85347773a9d";
const apiKey = "V4AFWKXSEAX3ZXJ6UMSFZ439CDS251522V";

// API endpoint
const url = `https://api.etherscan.io/api?module=account&action=txlist&address=${walletAddress}&startblock=0&endblock=99999999&sort=asc&apikey=${apiKey}`;

// Function to get the number of transactions
function getTransactionCount(transactions) {
    return transactions.length;
}

// Function to read transactions from a JSON file and get the count
function readTransactionsFromFile(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.log("Error reading file:", err);
            return;
        }
        try {
            const transactions = JSON.parse(data);
            const transactionCount = getTransactionCount(transactions);
            console.log(`Number of transactions: ${transactionCount}`);
        } catch (parseErr) {
            console.log("Error parsing JSON:", parseErr);
        }
    });
}

// Call the function with the path to your JSON file
readTransactionsFromFile('transactions.json');

// Function to filter transactions by "from" and "to" addresses
function filterTransactionsByFromAndTo(transactions, fromAddress, toAddress) {
    return transactions.filter(transaction => 
        transaction.from === fromAddress && transaction.to === toAddress
    );
}

// Example usage with specific "from" and "to" addresses
fs.readFile('transactions.json', 'utf8', (err, data) => {
    if (err) {
        console.log("Error reading file:", err);
        return;
    }
    try {
        const transactions = JSON.parse(data);
        const fromAddress = '0xcc8f6631d100f599b5179a0ce8d2f85347773a9d';
        const toAddress = '0x283af0b28c62c092c9727f1ee09c02ca627eb7f5';
        const filteredTransactions = filterTransactionsByFromAndTo(transactions, fromAddress, toAddress);
        console.log(`Filtered transactions from address ${fromAddress} to address ${toAddress}:`, filteredTransactions);
    } catch (parseErr) {
        console.log("Error parsing JSON:", parseErr);
    }
});

// // Function to filter transactions by "to" address
// function filterTransactionsByTo(transactions, toAddress) {
//     return transactions.filter(transaction => transaction.to === toAddress);
// }

// // Example usage with a specific address
// fs.readFile('transactions.json', 'utf8', (err, data) => {
//     if (err) {
//         console.log("Error reading file:", err);
//         return;
//     }
//     try {
//         const transactions = JSON.parse(data);
//         const specificAddress = '0xb5F58FE2FdD79B279bF2b201F91Ba784b79c8744';
//         const filteredTransactions = filterTransactionsByTo(transactions, specificAddress);
//         console.log(`Filtered transactions for address ${specificAddress}:`, filteredTransactions);
//     } catch (parseErr) {
//         console.log("Error parsing JSON:", parseErr);
//     }
// });

// // Make the request
// axios.get(url)
//     .then(response => {
//         const data = response.data;
//         if (data.status === "1") {
//             const transactions = data.result;
//             const transactionCount = getTransactionCount(transactions); // Use the function to get the count
//             console.log(`Number of transactions: ${transactionCount}`);
//             const jsonData = JSON.stringify(transactions, null, 2);
//             fs.writeFile('transactions.json', jsonData, (err) => {
//                 if (err) {
//                     console.log("Error writing file:", err);
//                 } else {
//                     console.log("Data successfully written to transactions.json");
//                 }
//             });
//         } else {
//             console.log("Error:", data.message);
//         }
//     })
//     .catch(error => {
//         console.log("Failed to fetch data:", error);
//     });
