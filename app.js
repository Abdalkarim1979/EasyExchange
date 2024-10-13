const contractAddress = '0xd6bcfbd8b31596ba10a5a1eb542716249222b4ce';
const tokenAddress = '0x12672fF45238dD4A3707D995123827A21FC126a0'; 
const abi= [
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_rate",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [],
        "name": "getRate",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "rate",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_rate",
                "type": "uint256"
            }
        ],
        "name": "setRate",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "swapETHForTokens",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_tokenAmount",
                "type": "uint256"
            }
        ],
        "name": "swapTokensForETH",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "receiveETH",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_amount",
                "type": "uint256"
            }
        ],
        "name": "withdrawETH",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_amount",
                "type": "uint256"
            }
        ],
        "name": "withdrawTokens",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_amount",
                "type": "uint256"
            }
        ],
        "name": "depositTokens",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "depositETH",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    }
];

const tokenAbi = [
    {
        "constant": true,
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_spender",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_from",
                "type": "address"
            },
            {
                "name": "_to",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "decimals",
        "outputs": [
            {
                "name": "",
                "type": "uint8"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_owner",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "name": "balance",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_to",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "transfer",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_owner",
                "type": "address"
            },
            {
                "name": "_spender",
                "type": "address"
            }
        ],
        "name": "allowance",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "payable": true,
        "stateMutability": "payable",
        "type": "fallback"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "spender",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    }
];


let web3;
let contract;
let tokenContract;
let accounts;

async function connectWallet() {
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        accounts = await web3.eth.getAccounts();
        document.getElementById('wallet-address').innerText = accounts[0];
        contract = new web3.eth.Contract(abi, contractAddress);
        tokenContract = new web3.eth.Contract(tokenAbi, tokenAddress);
        alert('Wallet connected');
    } else {
        alert('Please install MetaMask');
    }
}

async function getRate() {
    const rate = await contract.methods.getRate().call();
    document.getElementById('rate').innerText = rate;
}

async function setRate() {
    const newRate = document.getElementById('newRate').value;
    await contract.methods.setRate(newRate).send({ from: accounts[0] });
    alert('Rate set successfully');
}

async function swapETHForTokens() {
    const ethAmount = document.getElementById('ethAmount').value;
    await contract.methods.swapETHForTokens().send({ from: accounts[0], value: web3.utils.toWei(ethAmount, 'ether') });
    alert('Swap successful');
}

async function swapTokensForETH() {
    const tokenAmount = document.getElementById('tokenAmount').value;
    const allowance = await tokenContract.methods.allowance(accounts[0], contractAddress).call();

    if (parseInt(allowance) < parseInt(web3.utils.toWei(tokenAmount, 'ether'))) {
        await tokenContract.methods.approve(contractAddress, web3.utils.toWei(tokenAmount, 'ether')).send({ from: accounts[0] });
        alert('Tokens approved for swap');
    }

    await contract.methods.swapTokensForETH(web3.utils.toWei(tokenAmount, 'ether')).send({ from: accounts[0] });
    alert('Swap successful');
}

async function withdrawETH() {
    const ethAmount = document.getElementById('withdrawETHAmount').value;
    await contract.methods.withdrawETH(web3.utils.toWei(ethAmount, 'ether')).send({ from: accounts[0] });
    alert('ETH withdrawn successfully');
}

async function withdrawTokens() {
    const tokenAmount = document.getElementById('withdrawTokenAmount').value;
    await contract.methods.withdrawTokens(web3.utils.toWei(tokenAmount, 'ether')).send({ from: accounts[0] });
    alert('Tokens withdrawn successfully');
}

async function depositTokens() {
    const tokenAmount = document.getElementById('depositTokenAmount').value;
    

    const allowance = await tokenContract.methods.allowance(accounts[0], contractAddress).call();

    if (parseInt(allowance) < parseInt(web3.utils.toWei(tokenAmount, 'ether'))) {
        await tokenContract.methods.approve(contractAddress, web3.utils.toWei(tokenAmount, 'ether')).send({ from: accounts[0] });
        alert('Tokens approved for Tokens deposited');
    }
    await contract.methods.depositTokens(web3.utils.toWei(tokenAmount, 'ether')).send({ from: accounts[0] });
    alert('Tokens deposited successfully');
}

async function depositETH() {
    const ethAmount = document.getElementById('depositETHAmount').value;
    await contract.methods.depositETH().send({ from: accounts[0], value: web3.utils.toWei(ethAmount, 'ether') });
    alert('ETH deposited successfully');
}
