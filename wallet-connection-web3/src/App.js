import "./App.css";
import Web3 from "web3";
import React, { useState } from "react";

const stakingTokenABI = "paste Staking token Abi";
const stakingContractABI = " paste staking contract ABI";
		

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

