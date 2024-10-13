// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TokenSwapMaster {
    address public owner;
    IERC20 public token;
    uint256 public rate; // Number of tokens per ETH

    constructor() {
        owner = msg.sender;
        token = IERC20(0x12672fF45238dD4A3707D995123827A21FC126a0);// Token contract address
        rate = 100; // 100 of tokens per ETH
    }

    // Modifier to restrict access to owner-only functions
    modifier onlyOwner() {
        require(msg.sender == owner, "Not the contract owner");
        _;
    }

    

    // Function to get the current rate
    function getRate() external view returns (uint256) {
        return rate;
    }

    // Function to swap ETH for tokens
    function swapETHForTokens() external payable {
        uint256 tokenAmount = msg.value * rate; // Calculate token amount based on rate
        require(token.balanceOf(address(this)) >= tokenAmount, "Not enough tokens in contract");
        token.transfer(msg.sender, tokenAmount); // Transfer tokens to the sender
    }

    // Function to swap tokens for ETH
    function swapTokensForETH(uint256 _tokenAmount) external {
        uint256 ethAmount = _tokenAmount / rate; // Calculate ETH amount based on rate
        require(address(this).balance >= ethAmount, "Not enough ETH in contract");
        token.transferFrom(msg.sender, address(this), _tokenAmount); // Transfer tokens to the contract
        payable(msg.sender).transfer(ethAmount); // Transfer ETH to the sender
    }

    // Function to receive ETH and send tokens
    function receiveETH() external payable {
        uint256 tokenAmount = msg.value * rate; // Calculate token amount based on rate
        require(token.balanceOf(address(this)) >= tokenAmount, "Not enough tokens in contract");
        token.transfer(msg.sender, tokenAmount); // Transfer tokens to the sender
    }
// Function to set a new rate, only callable by the owner
    function setRate(uint256 _rate) external onlyOwner {
        rate = _rate;
    }
    // Function to withdraw ETH from the contract, only callable by the owner
    function withdrawETH(uint256 _amount) external onlyOwner {
        payable(owner).transfer(_amount); // Transfer ETH to the owner
    }

    // Function to withdraw tokens from the contract, only callable by the owner
    function withdrawTokens(uint256 _amount) external onlyOwner {
        token.transfer(owner, _amount); // Transfer tokens to the owner
    }

    // Function to deposit tokens into the contract, only callable by the owner
    function depositTokens(uint256 _amount) external onlyOwner {
        token.transferFrom(msg.sender, address(this), _amount); // Transfer tokens from the owner to the contract
    }

    // Function to deposit ETH into the contract, only callable by the owner
    function depositETH() external payable onlyOwner {
        // ETH is automatically added to the contract balance
    }

    // Fallback function to handle ETH received directly
    receive() external payable {
        uint256 tokenAmount = msg.value * rate; // Calculate token amount based on rate
        require(token.balanceOf(address(this)) >= tokenAmount, "Not enough tokens in contract");
        token.transfer(msg.sender, tokenAmount); // Transfer tokens to the sender
    }

    
    function onTokenTransfer(address from, uint256 _tokenAmount) external {
        require(from == address(token), "Only the token contract can call this function");
         uint256 ethAmount = _tokenAmount / rate; // Calculate ETH amount based on rate
        require(address(this).balance >= ethAmount, "Not enough ETH in contract");
        payable(from).transfer(ethAmount); // Transfer ETH to the sender
   
}
}

// Interface for the ERC20 token standard
interface IERC20 {
    function totalSupply() external view returns (uint256);
    function balanceOf(address account) external view returns (uint256);
    function transfer(address recipient, uint256 amount) external returns (bool);
    function allowance(address owner, address spender) external view returns (uint256);
    function approve(address spender, uint256 amount) external returns (bool);
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
}
