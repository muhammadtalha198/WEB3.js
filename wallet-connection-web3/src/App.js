import "./App.css";
import Web3 from "web3";
import React, { useState } from "react";

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

const web3 = new Web3(window.ethereum);

const stakingContract = new web3.eth.Contract(
	stakingContractABI,
	stakingContractAddress
);
const stakingToken = new web3.eth.Contract(
	stakingTokenABI,
	stakingTokenAddress
);

function App() {

	const [metamaskError, setMetamaskError] = useState("Connect matamask");
	const [metaMaskAccount, setMetaMaskAccount] = useState(null);

	const [stakeAmount, setStakeAmount] = useState('');
	const [stakePlan, setStakePlan] = useState('');

	const [stakeNo, setStakeNo] = useState('');

	
	// connect with the metamask
	const connectWalletHandler = async () => {

		if (window.ethereum) {

			await window.ethereum.enable().then(async () => {
				const accounts = await web3.eth.getAccounts();
				setMetaMaskAccount(accounts[0]);

				console.log("metaMaskAccount: ", metaMaskAccount);
			});


		} else {
			setMetamaskError("Please Instal metamask");
			console.log("metamaskError : ", metamaskError);
		}
	};

	// stake function value handlers to store values from input 

	const handleStakeAmount = (event) => {
		setStakeAmount(event.target.value);
	};

	const handleStakePlan = (event) => {
		setStakePlan(event.target.value);
	};


	// stake function
	const stakeFunction = async () => {

		let getSAmountInWei = web3.utils.toWei(stakeAmount, "ether");
		console.log("getSAmountInWei: ", getSAmountInWei);

		await stakingToken.methods
		.approve(stakingContractAddress, getSAmountInWei)
		.send({ from: metaMaskAccount })
		.then(() => {
			stakingContract.methods
				.stake(getSAmountInWei, stakePlan)
				.send({ from: metaMaskAccount });
		});
	};

	// unstake function value handler to store values from input.

	const handleStakeNo = (event) => {
		setStakeNo(event.target.value);
	};


	// unstake function
	const unStakeFunction = async () => {

		await stakingContract.methods
		.withdraw(stakeNo)
		.send({ from: metaMaskAccount });
	};
	

	return (
		<div className='App'>
			<div className='connectButton'>
				<button onClick={connectWalletHandler}>{metamaskError}</button>
			</div>

			<div>
				<label>amount:</label>
				<input type='text' value={stakeAmount} onChange={handleStakeAmount}/>
				<label>plan:</label>
				<input type='text' value={stakePlan} onChange={handleStakePlan}/> <br /> <br />
				<button onClick={stakeFunction}>Stake</button>
			</div>

			<div>

				<label >stakeNo</label>
				<input type='text' value={stakeNo} onChange={handleStakeNo}  /> <br /> <br />
				<button onClick={unStakeFunction}> Withdraw </button>

			</div>
		</div>
	);
}

export default App;

