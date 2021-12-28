import web3 from "./web3";

// var Contract = require('web3-eth-contract');
// Contract.setProvider('https://rpc-mumbai.maticvigil.com');

export const mint_address = "0xC6e0a28a101b2358700b10d3DC93334477ebdb81";
export const mint_abi = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_mintIndex",
				"type": "uint256"
			}
		],
		"name": "getMint",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_mintIndex",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_likeCount",
				"type": "uint256"
			}
		],
		"name": "mint",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];

// var contract = new web3.eth.Contract(abi, address);

// export default contract;
