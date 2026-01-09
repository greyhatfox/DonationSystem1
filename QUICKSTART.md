# Quick Deployment Guide

## 🚀 5-Minute Setup

### Step 1: Deploy Smart Contract (2 minutes)

1. Open [Remix IDE](https://remix.ethereum.org/)
2. Create new file: `CharityDonation.sol`
3. Copy content from `CharityDonation.sol`
4. Click "Solidity Compiler" → Compile
5. Click "Deploy & Run" → Select "Injected Provider - MetaMask"
6. Ensure MetaMask is on **Sepolia Testnet**
7. Click **Deploy** → Confirm in MetaMask
8. **Copy the deployed contract address**

### Step 2: Configure Frontend (1 minute)

1. Open `app.js`
2. Line 3: Replace `'0xYourContractAddressHere'` with your contract address
3. Save the file

### Step 3: Run the DApp (1 minute)

**Option A - Simple**:
- Double-click `index.html`

**Option B - Local Server** (recommended):
```bash
# Python
python -m http.server 8000

# Node.js
npx http-server
```

Then open: `http://localhost:8000`

### Step 4: Connect & Test (1 minute)

1. Click "Connect Wallet"
2. Approve in MetaMask
3. You're the admin! Add a charity address
4. Test donation and withdrawal flows

---

## 🎯 Quick Test Scenario

### As Admin (Your Deployer Wallet):
1. Add charity: `0xYourTestCharityAddress`
2. Donate: `0.01 ETH`
3. Check "Recent Activities"

### As Charity (Switch to Test Wallet):
1. Connect wallet
2. Withdraw: `0.005 ETH`
3. Verify balance received

### As Donor (Switch to Another Wallet):
1. Connect wallet
2. Donate: `0.01 ETH`
3. Check "My Total Donations"

---

## ⚠️ Common Issues

| Issue | Solution |
|-------|----------|
| Wrong network | Switch MetaMask to Sepolia |
| No test ETH | Get from [Sepolia Faucet](https://sepoliafaucet.com/) |
| Contract error | Verify address in `app.js` line 3 |
| Events not showing | Wait 10 seconds, then refresh |

---

## 📋 Checklist

- [ ] Contract deployed on Sepolia
- [ ] Contract address copied
- [ ] `app.js` updated with address
- [ ] MetaMask installed
- [ ] Sepolia ETH in wallet
- [ ] `index.html` opened in browser
- [ ] Wallet connected
- [ ] Test charity added
- [ ] Test donation made
- [ ] Events displaying

---

## 🎉 You're Done!

Your Decentralized Charity Donation DApp is now live on Sepolia testnet!

**Share your contract address** with others so they can:
- Donate to approved charities
- View transparent donation tracking
- See real-time activities

For detailed documentation, see [README.md](file:///c:/Users/irfan/OneDrive/Desktop/bcprrr/README.md)
