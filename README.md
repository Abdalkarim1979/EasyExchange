

## 📖 Project Description  
**Token Swap Master** is a web application that allows users to seamlessly swap between **Ethereum (ETH)** and tokens through a simple and intuitive interface. It integrates with a Solidity smart contract using **web3.js**, providing secure and transparent token exchange functionality. The app includes wallet connection, real‑time rate display, swap execution, and owner‑specific controls for managing deposits, withdrawals, and exchange rates.  

---

## ✨ Features
- 🔗 **Connect Wallet**: Easily connect a crypto wallet (e.g., MetaMask).  
- 📊 **Display Current Rate**: Shows the current token ↔ ETH exchange rate with refresh option.  
- ⚙️ **Set New Rate**: Owner can update the exchange rate directly.  
- 💸 **Swap ETH for Tokens**: Enter ETH amount and receive tokens instantly.  
- 🔄 **Swap Tokens for ETH**: Enter token amount and receive ETH.  
- 👑 **Owner Functions**: Withdraw/deposit ETH and tokens, manage liquidity, and adjust rates.  
- 🎨 **Modern UI**: Clean HTML/CSS design with interactive buttons.  

---

## 🛠️ Technologies Used
- **HTML5 / CSS3** for the front‑end interface  
- **JavaScript (web3.js)** for blockchain interaction  
- **Solidity Smart Contract** for token and ETH swap logic  

---


### Explanation of the Contract

This smart contract is called `TokenSwapMaster`, and it is designed to facilitate the exchange of digital tokens for Ethereum (ETH) and vice versa. Here are the main functions:

1. **Owner**:
   - `address public owner;`: The address of the contract owner.
   - `modifier onlyOwner()`: A modifier to restrict access to certain functions so that only the owner can execute them.

2. **Token and Exchange Rate**:
   - `IERC20 public token;`: The address of the token contract to be exchanged.
   - `uint256 public rate;`: The exchange rate, i.e., the number of tokens per Ethereum.

3. **Core Functions**:
   - `constructor()`: The constructor function that sets the owner, token address, and exchange rate.
   - `function getRate() external view returns (uint256)`: A function to get the current exchange rate.
   - `function swapETHForTokens() external payable`: A function to exchange Ethereum for tokens.
   - `function swapTokensForETH(uint256 _tokenAmount) external`: A function to exchange tokens for Ethereum.
   - `function receiveETH() external payable`: A function to receive Ethereum and send tokens.
   - `function setRate(uint256 _rate) external onlyOwner`: A function to set a new exchange rate, callable only by the owner.
   - `function withdrawETH(uint256 _amount) external onlyOwner`: A function to withdraw Ethereum from the contract, callable only by the owner.
   - `function withdrawTokens(uint256 _amount) external onlyOwner`: A function to withdraw tokens from the contract, callable only by the owner.
   - `function depositTokens(uint256 _amount) external onlyOwner`: A function to deposit tokens into the contract, callable only by the owner.
   - `function depositETH() external payable onlyOwner`: A function to deposit Ethereum into the contract, callable only by the owner.

4. **Fallback Functions**:
   - `receive() external payable`: A fallback function to handle Ethereum received directly and send tokens.

5. **Token Transfer Function**:
   - `function onTokenTransfer(address from, uint256 _tokenAmount) external`: A function called when tokens are transferred, calculating the corresponding amount of Ethereum and sending it.

This contract provides a secure and organized way to exchange tokens and Ethereum, with full control for the owner over the exchange rate and asset management within the contract.

---

### How to Benefit from It

You can benefit from the `TokenSwapMaster` contract in several scenarios, especially if you are managing a token-based project or want to provide a token exchange service. Here are some ways to benefit from this contract:

1. **Token Exchange for Ethereum**:
   - Users can send Ethereum to the contract and receive tokens based on the specified exchange rate. This can be useful if you are running a project and want to provide an easy way for users to purchase your tokens.

2. **Token Exchange for Ethereum**:
   - Users can send tokens to the contract and receive Ethereum based on the specified exchange rate. This can be useful if you want to provide liquidity for users who wish to sell their tokens.

3. **Asset Management**:
   - As the contract owner, you can easily manage the assets within the contract. You can deposit or withdraw tokens and Ethereum as needed and adjust the exchange rate based on market conditions.

4. **Providing Liquidity**:
   - The contract can be used to provide liquidity on decentralized exchanges (DEX). You can deposit tokens and Ethereum into the contract and use it as part of a liquidity pool.

5. **Security and Transparency**:
   - The contract provides a high level of security and transparency, as all operations are executed automatically and documented on the blockchain. This enhances trust between users and the project.

6. **Integration with Decentralized Applications (dApps)**:
   - The contract can be integrated with decentralized applications to provide token exchange functions within the app, enhancing user experience and engagement.

If you are considering using this contract, make sure to review the code carefully and test it thoroughly to ensure there are no security vulnerabilities.

---

### How to Deploy It on the Network

To deploy the `TokenSwapMaster` contract on the Ethereum network, you can follow these steps using a tool like Remix IDE, an online integrated development environment that simplifies the process of deploying smart contracts. Here are the basic steps:

1. **Set Up the Environment**:
   - Open your web browser and go to [Remix IDE](https://remix.ethereum.org).

2. **Write the Contract**:
   - Copy the code for the `TokenSwapMaster` contract and paste it into a new file in Remix. You can create a new file by clicking on the "New File" icon on the left side of the screen.

3. **Compile the Contract**:
   - Go to the "Compile" tab in Remix (box icon) and click the "Compile TokenSwapMaster.sol" button. Make sure there are no errors in the code.

4. **Deploy the Contract**:
   - Go to the "Deploy & Run Transactions" tab (rocket icon).
   - Choose the environment you want to deploy on. You can select "Injected Web3" if you are using MetaMask or "Remix VM" to test the contract locally.
   - Make sure you have enough Ethereum in your wallet to pay for gas fees.
   - Click the "Deploy" button to deploy the contract. A confirmation window from MetaMask (if you are using it) will appear to confirm the transaction.

5. **Interact with the Contract**:
   - After deploying the contract, you can interact with it through Remix. The contract's user interface will appear at the bottom of the "Deploy & Run Transactions" tab.
   - You can use this interface to call various functions in the contract, such as `swapETHForTokens` and `setRate`.

6. **Verify the Contract**:
   - You can verify the contract on a blockchain explorer like Etherscan. Copy the deployed contract address and search for it on Etherscan to verify the source code and interact with the contract.
### web app:
The web app interface of the TokenSwapMaster application is a html,css and javascript code use web3.js

1. **Connect Wallet**: The "Connect Wallet" button allows the user to connect their cryptocurrency wallet.
2. **Display Current Rate**: Shows the current rate for swapping tokens for Ethereum (ETH) and allows the user to refresh the rate by clicking the "Refresh Rate" button.
3. **Set New Rate**: Users can enter a new rate and set it using the "Set Rate" button.
4. **Swap ETH for Tokens**: Users can enter the amount of ETH they want to swap and receive the corresponding tokens by clicking the "Swap" button.
5. **Swap Tokens for ETH**: Users can enter the amount of tokens they want to swap and receive the corresponding ETH by clicking the "Swap" button.
6. **Owner Functions**: Includes additional functions like withdrawing and depositing ETH and tokens, intended for the owner or administrator of the smart contract.
### Note:
This whole project is currently running on the Helosky network if you want to try it you can modify the code according to your own requirements and re-publish the smart contract remember to change the token to your own token.
If you need any further help or have any other questions I will be happy to help.
## Contact
  avrmicrotech@gmail.com



