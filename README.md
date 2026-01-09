# Decentralized Charity Donation DApp

A production-ready Web3 application for transparent charity donations with role-based access control on Ethereum Sepolia testnet.

## 🌟 Features

- **Role-Based Access Control**: Admin, Charity, and Donor roles with specific permissions
- **Real-Time Event Tracking**: All activities displayed via blockchain events
- **Modern Web3 UI**: Premium dark theme with glassmorphism effects
- **MetaMask Integration**: Seamless wallet connection and transaction handling
- **Transparent Operations**: All donations and withdrawals tracked on-chain

## 📋 Prerequisites

1. **MetaMask Browser Extension**
   - Install from [metamask.io](https://metamask.io/)
   - Create or import a wallet

2. **Sepolia Testnet ETH**
   - Get free testnet ETH from [Sepolia Faucet](https://sepoliafaucet.com/)
   - Or use [Alchemy Sepolia Faucet](https://sepoliafaucet.com/)

3. **Code Editor** (for deployment)
   - Remix IDE (browser-based, recommended)
   - Or VS Code with Hardhat

## 🚀 Deployment Guide

### Step 1: Deploy Smart Contract on Remix

1. **Open Remix IDE**
   - Go to [remix.ethereum.org](https://remix.ethereum.org/)

2. **Create New File**
   - In the File Explorer, create a new file: `CharityDonation.sol`
   - Copy the entire contents of `CharityDonation.sol` from this project

3. **Compile Contract**
   - Click on the "Solidity Compiler" tab (left sidebar)
   - Select compiler version: `0.8.0` or higher
   - Click "Compile CharityDonation.sol"
   - Ensure there are no errors

4. **Deploy to Sepolia**
   - Click on "Deploy & Run Transactions" tab
   - Set Environment to "Injected Provider - MetaMask"
   - MetaMask will prompt you to connect - select your account
   - Ensure MetaMask is connected to **Sepolia Testnet**
   - Click "Deploy" button
   - Confirm the transaction in MetaMask
   - Wait for deployment confirmation

5. **Copy Contract Address**
   - After deployment, you'll see the contract under "Deployed Contracts"
   - Click the copy icon next to the contract address
   - **Save this address** - you'll need it for the frontend

### Step 2: Configure Frontend

1. **Update Contract Address**
   - Open `app.js` in your code editor
   - Find line 3: `CONTRACT_ADDRESS: '0xYourContractAddressHere'`
   - Replace with your deployed contract address:
     ```javascript
     CONTRACT_ADDRESS: '0xYourActualContractAddress',
     ```

2. **Verify Configuration**
   - Ensure `SEPOLIA_CHAIN_ID` is set to `'0xaa36a7'`
   - The ABI is already included in the file

### Step 3: Run the Application

1. **Open the DApp**
   - Simply open `index.html` in your web browser
   - Or use a local server (recommended):
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js
     npx http-server
     ```
   - Navigate to `http://localhost:8000`

2. **Connect MetaMask**
   - Click "Connect Wallet" button
   - Approve the connection in MetaMask
   - If prompted, switch to Sepolia network

## 👥 User Roles & Permissions

### Admin (Contract Deployer)
- **Permissions**:
  - Add charities to whitelist
  - Remove charities from whitelist
  - Make donations
  - View all statistics
- **UI Access**:
  - Admin Panel (charity management)
  - Donation form
  - Personal donation stats

### Charity (Whitelisted Addresses)
- **Permissions**:
  - Withdraw available funds
  - View withdrawal history
- **UI Access**:
  - Withdrawal form
  - Personal withdrawal stats

### Donor (All Other Addresses)
- **Permissions**:
  - Make donations
  - View donation history
- **UI Access**:
  - Donation form
  - Personal donation stats

## 📖 Usage Guide

### For Admin

1. **Connect Wallet** (must be the deployer address)
2. **Add a Charity**:
   - Scroll to "Admin Panel"
   - Enter charity wallet address (0x...)
   - Click "Add Charity"
   - Confirm transaction in MetaMask
3. **Remove a Charity**:
   - Find charity in "Approved Charities" list
   - Click "Remove" button
   - Confirm transaction
4. **Make a Donation**:
   - Scroll to "Make a Donation" section
   - Enter amount in ETH
   - Click "Donate Now"
   - Confirm transaction

### For Charity

1. **Get Whitelisted** (admin must add your address)
2. **Connect Wallet**
3. **Withdraw Funds**:
   - Scroll to "Withdraw Funds" section
   - Enter amount to withdraw (must not exceed available funds)
   - Click "Withdraw Funds"
   - Confirm transaction
   - Funds will be sent to your wallet

### For Donor

1. **Connect Wallet**
2. **Make a Donation**:
   - Scroll to "Make a Donation" section
   - Enter amount in ETH (minimum 0.001 ETH)
   - Click "Donate Now"
   - Confirm transaction in MetaMask
3. **View Your Impact**:
   - See "My Total Donations" in personal stats
   - Track your donations in "Recent Activities"

## 🎯 Testing Scenarios

### Scenario 1: Complete Donation Flow

1. **Setup** (as Admin):
   - Deploy contract
   - Add 2 charity addresses
   - Make a 0.1 ETH donation

2. **Donate** (as Donor):
   - Connect with different wallet
   - Donate 0.05 ETH
   - Verify stats update
   - Check recent activities

3. **Withdraw** (as Charity):
   - Connect with whitelisted charity wallet
   - Withdraw 0.08 ETH
   - Verify balance received
   - Check available funds decreased

### Scenario 2: Access Control Testing

1. **Test Charity Restrictions**:
   - Try to withdraw as non-charity address
   - Should see error: "Only approved charities can perform this action"

2. **Test Admin Restrictions**:
   - Try to add charity as non-admin
   - Should see error: "Only admin can perform this action"

### Scenario 3: Event Tracking

1. Perform various actions (donate, withdraw, add/remove charity)
2. Verify each action appears in "Recent Activities"
3. Check that latest 5 activities are displayed
4. Verify timestamps and amounts are correct

## 🔍 Troubleshooting

### MetaMask Not Connecting

- **Issue**: "Connect Wallet" button doesn't work
- **Solution**: 
  - Ensure MetaMask extension is installed
  - Refresh the page
  - Check browser console for errors

### Wrong Network

- **Issue**: "Please switch to Sepolia network"
- **Solution**:
  - Click MetaMask extension
  - Click network dropdown (top of MetaMask)
  - Select "Sepolia Testnet"
  - If not visible, enable "Show test networks" in MetaMask settings

### Transaction Failing

- **Issue**: Transaction rejected or failing
- **Solutions**:
  - Ensure you have enough Sepolia ETH for gas fees
  - Check you have the correct role for the action
  - For withdrawals, ensure amount doesn't exceed available funds
  - Try increasing gas limit in MetaMask

### Contract Address Error

- **Issue**: "Contract not deployed at this address"
- **Solution**:
  - Verify contract address in `app.js` matches deployed address
  - Ensure you're on Sepolia network
  - Check contract was successfully deployed on Remix

### Events Not Showing

- **Issue**: Recent activities section is empty
- **Solution**:
  - Wait a few seconds after transactions
  - Refresh the page
  - Check browser console for errors
  - Ensure contract address is correct

## 🛠️ Technical Details

### Smart Contract

- **Solidity Version**: ^0.8.0
- **Network**: Ethereum Sepolia Testnet
- **License**: MIT

### Frontend Stack

- **HTML5**: Semantic structure
- **CSS3**: Modern styling with CSS variables
- **JavaScript**: ES6+
- **Web3.js**: v1.10.0
- **Fonts**: Inter, Outfit (Google Fonts)

### Key Functions

**Smart Contract**:
- `donate()` - Accept donations (payable)
- `withdraw(uint amount)` - Charity withdrawal
- `addCharity(address)` - Admin adds charity
- `removeCharity(address)` - Admin removes charity
- `getTotalDonations()` - View total donations
- `getAvailableFunds()` - View withdrawable balance

**Frontend**:
- `connectWallet()` - MetaMask connection
- `detectUserRole()` - Automatic role detection
- `loadRecentActivities()` - Fetch and display events
- `handleDonate()` - Process donation transaction
- `handleWithdraw()` - Process withdrawal transaction

## 📊 Contract Events

All events include timestamp for tracking:

1. **DonationMade**
   - `donor` (address)
   - `amount` (uint256)
   - `timestamp` (uint256)

2. **WithdrawalMade**
   - `charity` (address)
   - `amount` (uint256)
   - `timestamp` (uint256)

3. **CharityAdded**
   - `charity` (address)
   - `timestamp` (uint256)

4. **CharityRemoved**
   - `charity` (address)
   - `timestamp` (uint256)

## 🔐 Security Considerations

### Current Implementation

✅ Role-based access control
✅ Input validation on all functions
✅ Event emission for transparency
✅ Proper error messages
✅ Balance checks before withdrawals

### For Production Mainnet

Consider adding:
- Reentrancy guards (OpenZeppelin ReentrancyGuard)
- Pausable functionality for emergencies
- Multi-signature admin control
- Withdrawal limits and cooldown periods
- Comprehensive test suite
- Professional security audit

## 📝 License

MIT License - Feel free to use and modify for your projects.

## 🤝 Support

For issues or questions:
1. Check the Troubleshooting section
2. Review browser console for error messages
3. Verify all setup steps were completed
4. Ensure sufficient Sepolia ETH in wallet

## 🎨 Customization

### Change Color Scheme

Edit `style.css` CSS variables:
```css
:root {
    --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --bg-primary: #0a0e27;
    /* ... other variables */
}
```

### Modify Minimum Donation

Edit smart contract `donate()` function:
```solidity
require(msg.value > 0, "Donation amount must be greater than 0");
// Change to: require(msg.value >= 0.01 ether, "Minimum 0.01 ETH");
```

### Add More Statistics

Add new view functions to contract and update frontend to display them.

---

**Built with ❤️ for transparent charity operations on the blockchain**
