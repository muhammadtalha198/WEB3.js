async function connectMetaMask() {
	if (window.ethereum) {
		window.web3 = new Web3(ethereum);
		try {
			await ethereum.enable();

			var accounts = await window.web3.eth.getAccounts();

			console.log("account is ", accounts[0]);
			document.getElementById("connectButton").innerHTML = accounts[0];

			console.log("web3:  ", web3);
		} catch (error) {
			// User denied account access...
		}
	} else if (window.web3) {
		window.web3 = new Web3(web3.currentProvider);
	} else {
		document.getElementById("connectButton").innerHTML =
			"Please install MetaMask";
	}
}

const stakingTokenABI = [
	{
		inputs: [],
		stateMutability: "nonpayable",
		type: "constructor",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "owner",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "spender",
				type: "address",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "value",
				type: "uint256",
			},
		],
		name: "Approval",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "previousOwner",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "newOwner",
				type: "address",
			},
		],
		name: "OwnershipTransferred",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "from",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "to",
				type: "address",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "value",
				type: "uint256",
			},
		],
		name: "Transfer",
		type: "event",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "owner",
				type: "address",
			},
			{
				internalType: "address",
				name: "spender",
				type: "address",
			},
		],
		name: "allowance",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "spender",
				type: "address",
			},
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256",
			},
		],
		name: "approve",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool",
			},
		],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "account",
				type: "address",
			},
		],
		name: "balanceOf",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "decimals",
		outputs: [
			{
				internalType: "uint8",
				name: "",
				type: "uint8",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "spender",
				type: "address",
			},
			{
				internalType: "uint256",
				name: "subtractedValue",
				type: "uint256",
			},
		],
		name: "decreaseAllowance",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool",
			},
		],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "spender",
				type: "address",
			},
			{
				internalType: "uint256",
				name: "addedValue",
				type: "uint256",
			},
		],
		name: "increaseAllowance",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool",
			},
		],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "to",
				type: "address",
			},
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256",
			},
		],
		name: "mint",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "name",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "owner",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "renounceOwnership",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "symbol",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "totalSupply",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "to",
				type: "address",
			},
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256",
			},
		],
		name: "transfer",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool",
			},
		],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "from",
				type: "address",
			},
			{
				internalType: "address",
				name: "to",
				type: "address",
			},
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256",
			},
		],
		name: "transferFrom",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool",
			},
		],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "newOwner",
				type: "address",
			},
		],
		name: "transferOwnership",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
];
const stakingContractABI = [
	{
		inputs: [
			{ internalType: "address", name: "_stakingToken", type: "address" },
			{ internalType: "address", name: "_rewardToken", type: "address" },
		],
		stateMutability: "nonpayable",
		type: "constructor",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "uint256",
				name: "totalReward",
				type: "uint256",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "stakeHolderPlan",
				type: "uint256",
			},
		],
		name: "rewardEvent",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "address",
				name: "stakeHolder",
				type: "address",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "stakeAmount",
				type: "uint256",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "stakeHolderPlan",
				type: "uint256",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "stakeHolderStakeCount",
				type: "uint256",
			},
		],
		name: "stakeEvent",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "address",
				name: "stakeHolder",
				type: "address",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "stakeAmount",
				type: "uint256",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "stakeBonus",
				type: "uint256",
			},
			{
				indexed: false,
				internalType: "bool",
				name: "stakewithdrawn",
				type: "bool",
			},
		],
		name: "unStakeEvent",
		type: "event",
	},
	{
		inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		name: "durations",
		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "minimumStake",
		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "owner",
		outputs: [{ internalType: "address", name: "", type: "address" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [{ internalType: "uint256", name: "plan", type: "uint256" }],
		name: "rewardCalculate",
		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "rewardToken",
		outputs: [
			{ internalType: "contract IBEP20", name: "", type: "address" },
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "uint256", name: "amount", type: "uint256" },
			{ internalType: "uint256", name: "plan", type: "uint256" },
		],
		name: "stake",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		name: "stakerecord",
		outputs: [
			{ internalType: "uint256", name: "stakeTime", type: "uint256" },
			{ internalType: "uint256", name: "withdrawTime", type: "uint256" },
			{ internalType: "uint256", name: "amount", type: "uint256" },
			{ internalType: "uint256", name: "bonus", type: "uint256" },
			{ internalType: "uint256", name: "plan", type: "uint256" },
			{ internalType: "bool", name: "withdrawan", type: "bool" },
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "stakingToken",
		outputs: [
			{ internalType: "contract IBEP20", name: "", type: "address" },
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [{ internalType: "address", name: "", type: "address" }],
		name: "users",
		outputs: [
			{
				internalType: "uint256",
				name: "userTotalStaked",
				type: "uint256",
			},
			{ internalType: "uint256", name: "stakeCount", type: "uint256" },
			{
				internalType: "uint256",
				name: "totalRewardTokens",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [{ internalType: "uint256", name: "count", type: "uint256" }],
		name: "withdraw",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
];

const stakingTokenAddress = "0xb5188a340E86072bA960841555985E085AEd1337";
const stakingContractAddress = "0x36f220b644BE880D8a563C45f08a837D5C39BC42";


async function Stake() {
	const account = await window.web3.eth.getAccounts();

	const stakingContract = new web3.eth.Contract(
		stakingContractABI,
		stakingContractAddress
	);
	const stakingToken = new web3.eth.Contract(
		stakingTokenABI,
		stakingTokenAddress
	);

	console.log("stakingToken: ", stakingToken);
	console.log("stakingContract: ", stakingContract);

	var getSAmount = document.getElementById("sAmount").value;
	var getSPlan = document.getElementById("sPlan").value;

	console.log("getSAmount: ", getSAmount);

	var getSAmountInWei = web3.utils.toWei(getSAmount, "ether");

	console.log("getSAmountInWei: ", getSAmountInWei);

	await stakingToken.methods
		.approve(stakingContractAddress, getSAmountInWei)
		.send({ from: account[0] })
		.then(() => {
			stakingContract.methods
				.stake(getSAmountInWei, getSPlan)
				.send({ from: account[0] });
		});
}

async function UnStake() {
	const account = await window.web3.eth.getAccounts();

	const stakingContract = new web3.eth.Contract(
		stakingContractABI,
		stakingContractAddress
	);
	const stakingToken = new web3.eth.Contract(
		stakingTokenABI,
		stakingTokenAddress
	);

	var getWStakeNo = document.getElementById("wStakeNo").value;

	await stakingContract.methods
		.withdraw(getWStakeNo)
		.send({ from: account[0] });
}

async function GetEvents() {
	const account = await window.web3.eth.getAccounts();

	const stakingContract = new web3.eth.Contract(
		stakingContractABI,
		stakingContractAddress
	);
	const stakingToken = new web3.eth.Contract(
		stakingTokenABI,
		stakingTokenAddress
	);

	// stakingContract.getPastEvents(event[, options][, callback])
	stakingContract.getPastEvents(
		"AllEvents",
		{
			fromBlock: 0,
			toBlock: "latest",
		},
		(error, events) => {
			console.log("The total events are : ", events.length);
			console.log("The total events are : ", events);
		}
	);

	await stakingContract.getPastEvents(
		'stakeEvent',{
			fromBlock:0 ,
			toBlock:'latest' },
			(error, event)=>{
				console.log("The total events are : ", event);
				console.log("stakeHolder: ", event[0].returnValues.stakeHolder);
		}
	);

	contract.events.ValueChanged({}, (error, event) => {
		console.log(event.returnValues.value);
	  });
}

contractInstance.events.getPastEvents({}, function (error, event) {
	if (!error) {
		document.getElementById("result").innerHTML =
			"Latest Event fired: " + JSON.stringify(event);
		console.log("_lender", event.returnValues);
		console.log("_lenderAmount", event.returnValues._lenderAmount);
		console.log(
			"_lenderStakeStartTime",
			event.returnValues._lenderStakeStartTime
		);
	} else {
		document.getElementById("result").innerHTML = "Event error: " + error;
	}
});

async function GetUserDetail() {
	const account = await window.web3.eth.getAccounts();

	const stakingContract = new web3.eth.Contract(
		stakingContractABI,
		stakingContractAddress
	);
	const stakingToken = new web3.eth.Contract(
		stakingTokenABI,
		stakingTokenAddress
	);
	var store = await stakingContract.methods.users(account[0]).call();
	var v1 = store[0];
	var v2 = store[1];
	var v3 = store[2];

	document.getElementById("ttStake").innerHTML = v1;
	document.getElementById("stCount").innerHTML = v2;
	document.getElementById("ttReward").innerHTML = v3;
}

// staking token : https://goerli.etherscan.io/address/0xb5188a340e86072ba960841555985e085aed1337#code
// stking Contrcat : https://goerli.etherscan.io/address/0x36f220b644be880d8a563c45f08a837d5c39bc42#code
