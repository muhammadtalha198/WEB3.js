
import './App.css';
import Web3 from "web3";
import React, { useState } from "react";

const token1ABI = [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "mint", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }];
const token2ABI = [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "mint", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }];
const flashLoanABI = [{ "inputs": [{ "internalType": "address", "name": "_token1", "type": "address" }, { "internalType": "address", "name": "_token2", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [{ "internalType": "uint256", "name": "_loanId", "type": "uint256" }], "name": "TotalReward", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_loanId", "type": "uint256" }, { "internalType": "uint256", "name": "_loanAmountAgainst", "type": "uint256" }], "name": "borrowLoan", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_amount", "type": "uint256" }, { "internalType": "uint256", "name": "_percentage", "type": "uint256" }], "name": "calculatePercentage", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "pure", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_loanAmount", "type": "uint256" }, { "internalType": "uint256", "name": "_loanTime", "type": "uint256" }, { "internalType": "uint256", "name": "_rewardPercentagePerDay", "type": "uint256" }], "name": "giveLoan", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "loanDetails", "outputs": [{ "internalType": "bool", "name": "loanListed", "type": "bool" }, { "internalType": "bool", "name": "borrowed", "type": "bool" }, { "internalType": "address", "name": "loanGiver", "type": "address" }, { "internalType": "address", "name": "loanTaker", "type": "address" }, { "internalType": "uint256", "name": "loanAmount", "type": "uint256" }, { "internalType": "uint256", "name": "loanTime", "type": "uint256" }, { "internalType": "uint256", "name": "loanStartTime", "type": "uint256" }, { "internalType": "uint256", "name": "rewardPercentagePerDay", "type": "uint256" }, { "internalType": "uint256", "name": "rewardAmount", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_loanId", "type": "uint256" }, { "internalType": "uint256", "name": "_paidAmount", "type": "uint256" }], "name": "payBackLoan", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "name": "personsIds", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "token1", "outputs": [{ "internalType": "contract IERC20", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "token2", "outputs": [{ "internalType": "contract IERC20", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }];
const token1Address = "0x56363BBD508C938D7b4E93e5B81b167A5B58b8C9";
const token2Address = "0xaD1BA57819702613252cf43FEc231Ca5C38141Bc";
const flashLoanAddress = "0x20803C4bBaEBefB73DA33aAc0e426EEAE959255d";

const web3 = new Web3(window.ethereum);

const token1Contract = new web3.eth.Contract(
	token1ABI,
	token1Address
);

const token2Contract = new web3.eth.Contract(
	token2ABI,
	token2Address
);

const flashLoanContract = new web3.eth.Contract(
	flashLoanABI,
	flashLoanAddress
);


function App() {

  const [metamaskError, setMetamaskError] = useState("Connect matamask");
  const [metaMaskAccount, setMetaMaskAccount] = useState('');

  const [giveLoanAmount, setGiveLoanAmount] = useState('');
  const [giveLoanDays, setGiveLoanDays] = useState('');
  const [giveLoanRewardPercentage, setGiveLoanRewardPercentage] = useState('');

  const [borrowLoanId, setBorrowLoanId] = useState('');
  const [borrowAgainstAmount, setBorrowAgainstAmount] = useState('');

  const [paybackLoanId, setPaybackLoanId] = useState('');
  const [paidAmount, setPaidAmount] = useState('');
  
  const [changeId, setChangeId] = useState(0);
  
  const [loanDetails, setLoanDetails] = useState([]);

  const [loanListed, setloanListed] = useState('');
  const [borrowed, setborrowed] = useState('');
  const [loanGiver, setloanGiver] = useState('');
  const [loanTaker, setloanTaker] = useState('');
  const [loanAmount, setloanAmount] = useState('');
  const [loanTime, setloanTime] = useState('');
  const [loanStartTime, setloanStartTime] = useState('');
  const [rewardPercentagePerDay, setrewardPercentagePerDay] = useState('');
  const [rewardAmount, setrewardAmount] = useState('');
  


  // connect with the metamask
	const connectWalletHandler = async () => {

		if (window.ethereum) {

			await window.ethereum.enable().then(async () => {
				const accounts = await web3.eth.getAccounts();
        setMetaMaskAccount(accounts[0]);
        setMetamaskError( "connected");

				console.log("metaMaskAccount: ", metaMaskAccount);
			});


		} else {
			setMetamaskError("Please Instal metamask");
			console.log("metamaskError : ", metamaskError);
		}
  };

  const handleLoanAmount = (event) => {
		setGiveLoanAmount(event.target.value);
	};

	const handleDays = (event) => {
		setGiveLoanDays(event.target.value);
  };
  
	const handleRewardPercentage = (event) => {
		setGiveLoanRewardPercentage(event.target.value);
  };

  // stake function
	const GiveLoanFunction = async () => {

		let getSAmountInWei = web3.utils.toWei(giveLoanAmount, "ether");
		console.log("getSAmountInWei: ", getSAmountInWei);

		await token1Contract.methods
		.approve(flashLoanAddress, getSAmountInWei)
		.send({ from: metaMaskAccount })
		.then(() => {
			flashLoanContract.methods
				.giveLoan(getSAmountInWei, giveLoanDays,giveLoanRewardPercentage)
				.send({ from: metaMaskAccount });
		});
  };
  

  const handleLoanId = (event) => {
		setBorrowLoanId(event.target.value);
	};

	const handleAgainstAmount = (event) => {
		setBorrowAgainstAmount(event.target.value);
  };

  const BorrowLoanFunction = async () => {

		let getSAmountInWei = web3.utils.toWei(borrowAgainstAmount, "ether");
    console.log("getSAmountInWei: ", getSAmountInWei);
    
   
    let id = await flashLoanContract.methods
      .personsIds(metaMaskAccount, changeId)
      .call({ from: metaMaskAccount });
    
    //setChangeId(changeId++);


		await token2Contract.methods
		.approve(flashLoanAddress, getSAmountInWei)
		.send({ from: metaMaskAccount })
		.then(() => {
			flashLoanContract.methods
				.borrowLoan(id,getSAmountInWei)
				.send({ from: metaMaskAccount });
		});
  };


  const handlePaybackLoanId = (event) => {
		setPaybackLoanId(event.target.value);
	};

	const handlePaidtAmount = (event) => {
		setPaidAmount(event.target.value);
  };
  
  const PayBackLoanFunction = async () => {

		let getSAmountInWei = web3.utils.toWei(paidAmount, "ether");
    console.log("getSAmountInWei: ", getSAmountInWei);
   
    let id = await flashLoanContract.methods
    .personsIds(metaMaskAccount, changeId)
    .call({ from: metaMaskAccount });

		await token1Contract.methods
		.approve(flashLoanAddress, getSAmountInWei)
		.send({ from: metaMaskAccount })
		.then(() => {
			flashLoanContract.methods
				.payBackLoan(id,getSAmountInWei)
				.send({ from: metaMaskAccount });
		});
  };


////////////////////////////////////////////////////////////////
const handleLoanDetails = (event) => {
  setLoanDetails(event.target.value);
};
  
  
  const GetLoanDetails = async () => {

    const _getDetails = await flashLoanContract.methods
		.loanDetails(loanDetails)
      .call({ from: metaMaskAccount });
    console.log("_getDetails[0]", _getDetails[0]);
    
    setloanListed(_getDetails[0]);
    // setloanListed(_getDetails[0]);
    setloanGiver(_getDetails[2]);
    // setloanListed(_getDetails[0]);
    // setloanListed(_getDetails[0]);
    console.log("_getDetails[0]", _getDetails[2]);
    

    
    // setgetDetails(_getDetails);


  };

 
  
  return (
    <div className="App">

        <br /> <br />
        <br /> <br />

      <div className='connectButton'>
				<button onClick={connectWalletHandler}>{metamaskError}</button>
      </div>
      <div>
        <br /> <br />
        <br /> <br />
        
      </div>

      <div>
				<label>loanAmount: </label>
				<input type='text' value={giveLoanAmount} onChange={handleLoanAmount}/><br /> <br />
				<label>days: </label>
				<input type='text' value={giveLoanDays} onChange={handleDays}/> <br /> <br />
				<label>rewardPercentage: </label>
				<input type='text' value={giveLoanRewardPercentage} onChange={handleRewardPercentage}/> <br /> <br />
				<button onClick={GiveLoanFunction}> GiveLoan</button>
      </div>
      <div>
        <br /> <br />
        
      </div>
      <div>
				{/* <label>loanId: </label>
				<input type='text' value={borrowLoanId} onChange={handleLoanId}/><br /> <br /> */}
				<label>againstAmount: </label>
				<input type='text' value={borrowAgainstAmount} onChange={handleAgainstAmount}/> <br /> <br />
				<button onClick={BorrowLoanFunction}> BorrowLoan</button>
      </div>
      <div>
        <br /> <br />
        
      </div>
      
      <div>
				{/* <label>loanId: </label>
				<input type='text' value={paybackLoanId} onChange={handlePaybackLoanId}/><br /> <br /> */}
				<label>paidAmount: </label>
				<input type='text' value={paidAmount} onChange={handlePaidtAmount}/> <br /> <br />
				<button onClick={PayBackLoanFunction}> PaybackLoan</button>
      </div>

      <div>
        <br /> <br />
        
      </div>

      
      <div>
      <label>loanDetails: </label>
				<input type='text' value={loanDetails} onChange={handleLoanDetails}/><br /> <br />
      <button onClick={GetLoanDetails}> GetLoanDetails</button>
      </div>


      <div>
        <h2>User detail will be:  </h2>
        <p>
          loanListed: {loanGiver}<br/>
          {/* borrowed: {borrowed}<br/>
          loanGiver: {loanGiver}<br/>
          loanTaker: {loanTaker}<br/>
          loanAmount: {loanAmount}<br/>
          loanTime: {loanTime}<br/>
          loanStartTime: {loanStartTime}<br/>
          rewardPercentagePerDay: {rewardPercentagePerDay}<br/>
          rewardAmount: {rewardAmount}<br/> */}
        </p>

      </div>

      
        
    </div>
    

    
  );
}

export default App;


//0xC82C1f8Bd88Af210bE61A69158445D14Fc700b2d
//0x1D375435c8EfA3e489ef002d2d0B1E7Eb3CC62Fe
//0x210DB07c90e4979E481B917496a7e2A4e8770A07
