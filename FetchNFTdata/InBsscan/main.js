const axios = require("axios");
const fs = require('fs');

// Replace with your wallet address and API key
const walletAddress = "0xcc8f6631d100f599b5179a0ce8d2f85347773a9d";
const apiKey = "7MD3FVG5FBUEHENDV97AICSNN9JR1YUZB7";

// API endpoint
const url = `https://api.basescan.org/api?module=account&action=txlist&address=${walletAddress}&startblock=0&endblock=99999999&page={{ page }}&offset=10000&sort=asc&apikey=${apiKey}`;

// // Function to fetch all transactions
// async function fetchAllTransactions() {
//     let allTransactions = [];
//     let page = 1;
//     let hasMore = true;

//     while (hasMore) {
//         const response = await axios.get(url.replace('{{ page }}', page));
//         const data = response.data;

//         if (data.status === "1") {
//             const transactions = data.result;
//             allTransactions = allTransactions.concat(transactions); // Append new transactions
//             console.log(`Fetched ${transactions.length} transactions from page ${page}`);
//             hasMore = transactions.length === 10000; // Check if there might be more transactions
//             page++;
//         } else {
//             console.log("Error:", data.message);
//             hasMore = false; // Stop if there's an error
//         }
//     }

//     // Write all transactions to a file
//     const jsonData = JSON.stringify(allTransactions, null, 2);
//     fs.writeFile('transactions.json', jsonData, (err) => {
//         if (err) {
//             console.log("Error writing file:", err);
//         } else {
//             console.log("All data successfully written to transactions.json");
//         }
//     });
// }

// // Call the function to fetch all transactions
// fetchAllTransactions();

// Make the request
// axios.get(url)
//     .then(response => {
//         const data = response.data;
//         if (data.status === "1") {
//             const transactions = data.result;
//             console.log(`Number of transactions: ${transactions.length}`); // Log the number of transactions
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

    // Function to get the number of transactions from the JSON file
function getTransactionCountFromFile(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.log("Error reading file:", err);
            return;
        }
        try {
            const transactions = JSON.parse(data);
            const transactionCount = transactions.length; // Get the length of the transactions array
            console.log(`Number of transactions: ${transactionCount}`);
        } catch (parseErr) {
            console.log("Error parsing JSON:", parseErr);
        }
    });
}

// Call the function with the path to your JSON file
getTransactionCountFromFile('transactions.json');


// function getTransactionsByFromAddress(filePath, targetAddress) {
//     try {
//         // Load the JSON file
//         const transactions = JSON.parse(fs.readFileSync(filePath));

//         // Filter transactions by the "from" address
//         const filteredTransactions = transactions.filter(tx => tx.from === targetAddress);

//         // Get the count of filtered transactions
//         const transactionCount = filteredTransactions.length;

//         return {
//             transactions: filteredTransactions,
//             count: transactionCount
//         };
//     } catch (error) {
//         console.error("Error reading or parsing the file:", error);
//         return {
//             transactions: [],
//             count: 0
//         };
//     }
// }

// // Example usage
// const filePath = 'transactions.json';
// const targetAddress = "0xcc8f6631d100f599b5179a0ce8d2f85347773a9d";
// const result = getTransactionsByFromAddress(filePath, targetAddress);

// // Log the filtered transactions and their count
// console.log(`Transaction Count: ${result.count}`);
// console.log(JSON.stringify(result.transactions, null, 2));



function getTransactionsByToAddress(filePath, targetAddress) {
    try {
        // Load the JSON file
        const transactions = JSON.parse(fs.readFileSync(filePath));

        // Filter transactions by the "to" address
        const filteredTransactions = transactions.filter(tx => tx.to === targetAddress);

        // Get the count of filtered transactions
        const transactionCount = filteredTransactions.length;

        return {
            transactions: filteredTransactions,
            count: transactionCount
        };
    } catch (error) {
        console.error("Error reading or parsing the file:", error);
        return {
            transactions: [],
            count: 0
        };
    }
}

// Example usage
const filePath1 = 'transactions.json';
const targetAddress1 = "0xb5F58FE2FdD79B279bF2b201F91Ba784b79c8744"; // Replace with desired "to" address
const result1 = getTransactionsByToAddress(filePath1, targetAddress1);

// Log the filtered transactions and their count
console.log(`Transaction Count: ${result1.count}`);
// console.log(JSON.stringify(result.transactions, null, 2));







// //from both 
// function getTransactionsByFromAndToAddress(filePath, fromAddress, toAddress) {
//     try {
//         // Load the JSON file
//         const transactions = JSON.parse(fs.readFileSync(filePath));

//         // Filter transactions by the "from" and "to" addresses
//         const filteredTransactions = transactions.filter(tx => 
//             tx.from === fromAddress && tx.to === toAddress
//         );

//         // Get the count of filtered transactions
//         const transactionCount = filteredTransactions.length;

//         return {
//             transactions: filteredTransactions,
//             count: transactionCount
//         };
//     } catch (error) {
//         console.error("Error reading or parsing the file:", error);
//         return {
//             transactions: [],
//             count: 0
//         };
//     }
// }

// // Example usage
// const filePath = 'transactions.json';
// const fromAddress = "0xcc8f6631d100f599b5179a0ce8d2f85347773a9d";
// const toAddress = "0xb5F58FE2FdD79B279bF2b201F91Ba784b79c8744"; // Replace with desired "to" address
// const result = getTransactionsByFromAndToAddress(filePath, fromAddress, toAddress);

// // Log the filtered transactions and their count
// console.log(`Transaction Count: ${result.count}`);
// console.log(JSON.stringify(result.transactions, null, 2));

// Function to filter transactions based on "from" and "to" addresses
// function filterTransactions(filePath, fromAddress, toAddress) {
//     fs.readFile(filePath, 'utf8', (err, data) => {
//         if (err) {
//             console.log("Error reading file:", err);
//             return;
//         }
//         try {
//             const transactions = JSON.parse(data);
//             const filteredTransactions = transactions.filter(transaction => {
//                 return transaction.from === fromAddress && transaction.to === toAddress;
//             });
//             console.log(`Filtered transactions:`, filteredTransactions);
//         } catch (parseErr) {
//             console.log("Error parsing JSON:", parseErr);
//         }
//     });
// }

// // Example usage of the filter function
// const fromAddress = "0xCC8F6631d100F599b5179a0Ce8d2F85347773a9D"; // Replace with desired "from" address
// const toAddress = "0xb5F58FE2FdD79B279bF2b201F91Ba784b79c8744"; // Replace with desired "to" address
// // filterTransactions('transactions.json', fromAddress, toAddress);



// // Function to filter transactions based on the "to" address
// function filterTransactionsByToAddress(filePath, toAddress) {
//     fs.readFile(filePath, 'utf8', (err, data) => {
//         if (err) {
//             console.log("Error reading file:", err);
//             return;
//         }
//         try {
//             const transactions = JSON.parse(data);
//             const filteredTransactions = transactions.filter(transaction => {
//                 return transaction.to === toAddress;
//             });
//             console.log(`Filtered transactions by "to" address:`, filteredTransactions);
//             console.log(`Number of transactions with "to" address ${toAddress}: ${filteredTransactions.length}`); // Count of filtered transactions
//         } catch (parseErr) {
//             console.log("Error parsing JSON:", parseErr);
//         }
//     });
// }

// // Example usage of the filter function
// const toAddress1 = "0xCC8F6631d100F599b5179a0Ce8d2F85347773a9D"; // Replace with desired "to" address
// // filterTransactionsByToAddress('transactions.json', toAddress1);

// // ... existing code ...

// // Function to filter transactions based on the "from" address
// function filterTransactionsByFromAddress(filePath, fromAddress) {
//     fs.readFile(filePath, 'utf8', (err, data) => {
//         if (err) {
//             console.log("Error reading file:", err);
//             return;
//         }
//         try {
//             const transactions = JSON.parse(data);
//             const filteredTransactions = transactions.filter(transaction => {
//                 return transaction.from === fromAddress;
//             });
//             console.log(`Filtered transactions by "from" address:`, filteredTransactions);
//             console.log(`Number of transactions with "from" address ${fromAddress}: ${filteredTransactions.length}`); // Count of filtered transactions
//         } catch (parseErr) {
//             console.log("Error parsing JSON:", parseErr);
//         }
//     });
// }

// // Example usage of the filter function for "from" address
// const fromAddress1 = "0xCC8F6631d100F599b5179a0Ce8d2F85347773a9D"; // Replace with desired "from" address
// filterTransactionsByFromAddress('transactions.json', fromAddress1);

// ... existing code ...
