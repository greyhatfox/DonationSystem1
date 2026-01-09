// ============ Configuration ============
const CONFIG = {
    // IMPORTANT: Update these values after deploying the contract
    CONTRACT_ADDRESS: '0x1956b17F68FF907605BFc871CE1715125827584D', // Replace with deployed contract address
    SEPOLIA_CHAIN_ID: '0xaa36a7', // Sepolia testnet chain ID (11155111 in hex)
    SEPOLIA_CHAIN_ID_DECIMAL: 11155111,

    // Contract ABI - Generated from CharityDonation.sol
    CONTRACT_ABI: [
        {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "charity",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "timestamp",
                    "type": "uint256"
                }
            ],
            "name": "CharityAdded",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "charity",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "timestamp",
                    "type": "uint256"
                }
            ],
            "name": "CharityRemoved",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "donor",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "timestamp",
                    "type": "uint256"
                }
            ],
            "name": "DonationMade",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "charity",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "timestamp",
                    "type": "uint256"
                }
            ],
            "name": "WithdrawalMade",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "charity",
                    "type": "address"
                }
            ],
            "name": "addCharity",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "admin",
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
            "inputs": [
                {
                    "internalType": "address",
                    "name": "charity",
                    "type": "address"
                }
            ],
            "name": "checkIsCharity",
            "outputs": [
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
            "inputs": [],
            "name": "donate",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "donatedAmount",
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
            "name": "getAvailableFunds",
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
            "name": "getContractBalance",
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
                    "internalType": "address",
                    "name": "user",
                    "type": "address"
                }
            ],
            "name": "getMyDonations",
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
                    "internalType": "address",
                    "name": "charity",
                    "type": "address"
                }
            ],
            "name": "getMyWithdrawals",
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
            "name": "getTotalDonations",
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
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "isCharity",
            "outputs": [
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
                    "internalType": "address",
                    "name": "charity",
                    "type": "address"
                }
            ],
            "name": "removeCharity",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "totalDonations",
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
            "name": "totalWithdrawn",
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
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "withdraw",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "withdrawnAmount",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ]
};

// ============ Global State ============
let web3;
let contract;
let userAccount;
let userRole = { isAdmin: false, isCharity: false, isDonor: false };
let charityAddresses = new Set();

// ============ Initialization ============
window.addEventListener('load', async () => {
    // Check if MetaMask is installed
    if (typeof window.ethereum !== 'undefined') {
        console.log('MetaMask is installed!');

        // Initialize Web3 immediately for utility functions
        web3 = new Web3(window.ethereum);

        // Set up event listeners
        setupEventListeners();

        // Listen for account changes
        window.ethereum.on('accountsChanged', handleAccountsChanged);

        // Listen for chain changes
        window.ethereum.on('chainChanged', () => {
            window.location.reload();
        });

        // Load global stats (works without wallet connection)
        await loadGlobalStats();

        // Load charity list (works without wallet connection)
        await loadCharityList();

        // Load recent activities (works without wallet connection)
        await loadRecentActivities();

    } else {
        showToast('Please install MetaMask to use this DApp!', 'error');
        console.error('MetaMask is not installed');
    }
});

// ============ Event Listeners Setup ============
function setupEventListeners() {
    // Connect wallet button
    document.getElementById('connectWallet').addEventListener('click', connectWallet);

    // Donate form
    document.getElementById('donateForm').addEventListener('submit', handleDonate);

    // Withdraw form
    document.getElementById('withdrawForm').addEventListener('submit', handleWithdraw);

    // Add charity form
    document.getElementById('addCharityForm').addEventListener('submit', handleAddCharity);
}

// ============ Wallet Connection ============
async function connectWallet() {
    try {
        showLoading(true);

        // Request account access
        const accounts = await window.ethereum.request({
            method: 'eth_requestAccounts'
        });

        userAccount = accounts[0];

        // Check if on Sepolia network
        const chainId = await window.ethereum.request({ method: 'eth_chainId' });

        if (chainId !== CONFIG.SEPOLIA_CHAIN_ID) {
            await switchToSepolia();
        }

        // Initialize contract
        contract = new web3.eth.Contract(CONFIG.CONTRACT_ABI, CONFIG.CONTRACT_ADDRESS);

        // Detect user role
        await detectUserRole();

        // Update UI
        updateWalletUI();
        await loadAllData();

        // Set up event listeners for contract events
        setupContractEventListeners();

        showToast('Wallet connected successfully!', 'success');

    } catch (error) {
        console.error('Error connecting wallet:', error);
        showToast('Failed to connect wallet: ' + error.message, 'error');
    } finally {
        showLoading(false);
    }
}

async function switchToSepolia() {
    try {
        await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: CONFIG.SEPOLIA_CHAIN_ID }],
        });
    } catch (switchError) {
        // This error code indicates that the chain has not been added to MetaMask
        if (switchError.code === 4902) {
            try {
                await window.ethereum.request({
                    method: 'wallet_addEthereumChain',
                    params: [{
                        chainId: CONFIG.SEPOLIA_CHAIN_ID,
                        chainName: 'Sepolia Testnet',
                        nativeCurrency: {
                            name: 'SepoliaETH',
                            symbol: 'ETH',
                            decimals: 18
                        },
                        rpcUrls: ['https://sepolia.infura.io/v3/'],
                        blockExplorerUrls: ['https://sepolia.etherscan.io']
                    }],
                });
            } catch (addError) {
                throw new Error('Failed to add Sepolia network');
            }
        } else {
            throw switchError;
        }
    }
}

function handleAccountsChanged(accounts) {
    if (accounts.length === 0) {
        // User disconnected wallet
        resetUI();
        showToast('Wallet disconnected', 'info');
    } else if (accounts[0] !== userAccount) {
        // User switched accounts
        window.location.reload();
    }
}

// ============ Role Detection ============
async function detectUserRole() {
    try {
        const adminAddress = await contract.methods.admin().call();
        const isCharityStatus = await contract.methods.checkIsCharity(userAccount).call();

        userRole.isAdmin = adminAddress.toLowerCase() === userAccount.toLowerCase();
        userRole.isCharity = isCharityStatus;
        userRole.isDonor = !userRole.isAdmin && !userRole.isCharity;

        console.log('User role detected:', userRole);

    } catch (error) {
        console.error('Error detecting user role:', error);
        showToast('Error detecting user role', 'error');
    }
}

// ============ UI Updates ============
function updateWalletUI() {
    // Show user info
    document.getElementById('userInfo').classList.remove('hidden');
    document.getElementById('userAddress').textContent = formatAddress(userAccount);

    // Update role badge
    const roleBadge = document.getElementById('userRole');
    if (userRole.isAdmin) {
        roleBadge.textContent = 'Admin';
        roleBadge.className = 'role-badge admin';
    } else if (userRole.isCharity) {
        roleBadge.textContent = 'Charity';
        roleBadge.className = 'role-badge charity';
    } else {
        roleBadge.textContent = 'Donor';
        roleBadge.className = 'role-badge donor';
    }

    // Update connect button
    document.getElementById('connectWallet').textContent = formatAddress(userAccount);

    // Show/hide sections based on role
    document.getElementById('personalStats').classList.remove('hidden');

    if (userRole.isAdmin || userRole.isDonor) {
        document.getElementById('donorSection').classList.remove('hidden');
        document.getElementById('donorStats').classList.remove('hidden');
    }

    if (userRole.isCharity || userRole.isAdmin) {
        document.getElementById('charitySection').classList.remove('hidden');
        document.getElementById('charityStats').classList.remove('hidden');
    }

    if (userRole.isAdmin) {
        document.getElementById('adminSection').classList.remove('hidden');
    }
}

function resetUI() {
    document.getElementById('userInfo').classList.add('hidden');
    document.getElementById('personalStats').classList.add('hidden');
    document.getElementById('donorSection').classList.add('hidden');
    document.getElementById('charitySection').classList.add('hidden');
    document.getElementById('adminSection').classList.add('hidden');
    document.getElementById('connectWallet').innerHTML = '<span class="wallet-icon">🦊</span> Connect Wallet';

    userAccount = null;
    userRole = { isAdmin: false, isCharity: false, isDonor: false };
}

// ============ Data Loading ============
async function loadGlobalStats() {
    try {
        if (!contract) {
            // If contract not initialized, create a read-only instance using public RPC
            // Try multiple RPC endpoints for better reliability
            const rpcEndpoints = [
                'https://rpc.sepolia.org',
                'https://ethereum-sepolia-rpc.publicnode.com',
                'https://sepolia.gateway.tenderly.co'
            ];

            let tempWeb3, tempContract;
            let success = false;

            for (const rpc of rpcEndpoints) {
                try {
                    tempWeb3 = new Web3(new Web3.providers.HttpProvider(rpc));
                    tempContract = new tempWeb3.eth.Contract(CONFIG.CONTRACT_ABI, CONFIG.CONTRACT_ADDRESS);

                    // Test the connection
                    await tempContract.methods.getTotalDonations().call();
                    success = true;
                    console.log('Connected to RPC:', rpc);
                    break;
                } catch (e) {
                    console.log('Failed to connect to RPC:', rpc, e.message);
                    continue;
                }
            }

            if (!success) {
                throw new Error('All RPC endpoints failed');
            }

            const totalDonations = await tempContract.methods.getTotalDonations().call();
            const availableFunds = await tempContract.methods.getAvailableFunds().call();
            const totalWithdrawn = await tempContract.methods.totalWithdrawn().call();

            document.getElementById('totalDonations').textContent = formatEther(totalDonations) + ' ETH';
            document.getElementById('availableFunds').textContent = formatEther(availableFunds) + ' ETH';
            document.getElementById('totalWithdrawn').textContent = formatEther(totalWithdrawn) + ' ETH';
        } else {
            const totalDonations = await contract.methods.getTotalDonations().call();
            const availableFunds = await contract.methods.getAvailableFunds().call();
            const totalWithdrawn = await contract.methods.totalWithdrawn().call();

            document.getElementById('totalDonations').textContent = formatEther(totalDonations) + ' ETH';
            document.getElementById('availableFunds').textContent = formatEther(availableFunds) + ' ETH';
            document.getElementById('totalWithdrawn').textContent = formatEther(totalWithdrawn) + ' ETH';
        }
    } catch (error) {
        console.error('Error loading global stats:', error);
        // Show placeholder values if loading fails
        document.getElementById('totalDonations').textContent = '0.0000 ETH';
        document.getElementById('availableFunds').textContent = '0.0000 ETH';
        document.getElementById('totalWithdrawn').textContent = '0.0000 ETH';
    }
}

async function loadUserStats() {
    try {
        if (userRole.isAdmin || userRole.isDonor) {
            const myDonations = await contract.methods.getMyDonations(userAccount).call();
            document.getElementById('myDonations').textContent = formatEther(myDonations) + ' ETH';
        }

        if (userRole.isCharity || userRole.isAdmin) {
            const myWithdrawals = await contract.methods.getMyWithdrawals(userAccount).call();
            document.getElementById('myWithdrawals').textContent = formatEther(myWithdrawals) + ' ETH';
        }
    } catch (error) {
        console.error('Error loading user stats:', error);
    }
}

async function loadCharityList() {
    try {
        const charityListDiv = document.getElementById('charityList');

        // If we don't have a contract yet, try to load charities from blockchain events
        if (!contract && charityAddresses.size === 0) {
            try {
                // Create read-only instance to fetch events
                const rpcEndpoints = [
                    'https://rpc.sepolia.org',
                    'https://ethereum-sepolia-rpc.publicnode.com',
                    'https://sepolia.gateway.tenderly.co'
                ];

                let tempWeb3, tempContract;
                let success = false;

                for (const rpc of rpcEndpoints) {
                    try {
                        tempWeb3 = new Web3(new Web3.providers.HttpProvider(rpc));
                        tempContract = new tempWeb3.eth.Contract(CONFIG.CONTRACT_ABI, CONFIG.CONTRACT_ADDRESS);

                        // Test the connection
                        await tempContract.methods.admin().call();
                        success = true;
                        console.log('Connected to RPC for charity list:', rpc);
                        break;
                    } catch (e) {
                        console.log('Failed to connect to RPC:', rpc);
                        continue;
                    }
                }

                if (success) {
                    // Get current block number
                    const currentBlock = await tempWeb3.eth.getBlockNumber();
                    // Look back up to 10000 blocks (adjust based on when contract was deployed)
                    const fromBlock = Math.max(0, currentBlock - 10000);

                    // Get all CharityAdded events
                    const charitiesAdded = await tempContract.getPastEvents('CharityAdded', {
                        fromBlock: fromBlock,
                        toBlock: 'latest'
                    });

                    // Get all CharityRemoved events
                    const charitiesRemoved = await tempContract.getPastEvents('CharityRemoved', {
                        fromBlock: fromBlock,
                        toBlock: 'latest'
                    });

                    // Build the current charity list
                    const removedSet = new Set(charitiesRemoved.map(e => e.returnValues.charity.toLowerCase()));
                    charitiesAdded.forEach(e => {
                        const charityAddr = e.returnValues.charity;
                        if (!removedSet.has(charityAddr.toLowerCase())) {
                            charityAddresses.add(charityAddr);
                        }
                    });

                    console.log('Loaded charities from blockchain:', charityAddresses.size);
                }
            } catch (error) {
                console.error('Error loading charities from blockchain:', error);
            }
        }

        // Display the charity list
        if (charityAddresses.size === 0) {
            charityListDiv.innerHTML = '<p class="empty-state">No charities added yet</p>';
        } else {
            charityListDiv.innerHTML = '';
            charityAddresses.forEach(address => {
                const item = createCharityListItem(address);
                charityListDiv.appendChild(item);
            });
        }
    } catch (error) {
        console.error('Error loading charity list:', error);
    }
}

function createCharityListItem(address) {
    const div = document.createElement('div');
    div.className = 'charity-item';

    // Only show remove button if user is admin
    const removeButton = userRole.isAdmin
        ? `<button class="btn-remove" onclick="removeCharity('${address}')">Remove</button>`
        : '';

    div.innerHTML = `
        <span class="charity-address">${address}</span>
        ${removeButton}
    `;
    return div;
}

async function loadAllData() {
    await loadGlobalStats();
    await loadUserStats();
    await loadCharityList();
    await loadRecentActivities();
}

// ============ Transaction Handlers ============
async function handleDonate(e) {
    e.preventDefault();

    const amount = document.getElementById('donateAmount').value;

    if (!amount || parseFloat(amount) <= 0) {
        showToast('Please enter a valid donation amount', 'error');
        return;
    }

    try {
        showLoading(true);

        const amountWei = web3.utils.toWei(amount, 'ether');

        const tx = await contract.methods.donate().send({
            from: userAccount,
            value: amountWei
        });

        console.log('Donation transaction:', tx);

        showToast(`Successfully donated ${amount} ETH!`, 'success');

        // Reset form
        document.getElementById('donateForm').reset();

        // Reload data
        await loadAllData();

    } catch (error) {
        console.error('Error making donation:', error);
        showToast('Donation failed: ' + (error.message || 'Unknown error'), 'error');
    } finally {
        showLoading(false);
    }
}

async function handleWithdraw(e) {
    e.preventDefault();

    const amount = document.getElementById('withdrawAmount').value;

    if (!amount || parseFloat(amount) <= 0) {
        showToast('Please enter a valid withdrawal amount', 'error');
        return;
    }

    try {
        showLoading(true);

        const amountWei = web3.utils.toWei(amount, 'ether');

        // Estimate gas and add buffer to prevent "gas limit too high" errors
        const gasEstimate = await contract.methods.withdraw(amountWei).estimateGas({
            from: userAccount
        });

        const tx = await contract.methods.withdraw(amountWei).send({
            from: userAccount,
            gas: Math.floor(gasEstimate * 1.2) // Add 20% buffer
        });

        console.log('Withdrawal transaction:', tx);

        showToast(`Successfully withdrew ${amount} ETH!`, 'success');

        // Reset form
        document.getElementById('withdrawForm').reset();

        // Reload data
        await loadAllData();

    } catch (error) {
        console.error('Error withdrawing funds:', error);
        showToast('Withdrawal failed: ' + (error.message || 'Unknown error'), 'error');
    } finally {
        showLoading(false);
    }
}

async function handleAddCharity(e) {
    e.preventDefault();

    const charityAddress = document.getElementById('charityAddress').value;

    if (!web3.utils.isAddress(charityAddress)) {
        showToast('Please enter a valid Ethereum address', 'error');
        return;
    }

    try {
        showLoading(true);

        const tx = await contract.methods.addCharity(charityAddress).send({
            from: userAccount
        });

        console.log('Add charity transaction:', tx);

        // Add to local set
        charityAddresses.add(charityAddress);

        showToast('Charity added successfully!', 'success');

        // Reset form
        document.getElementById('addCharityForm').reset();

        // Reload data
        await loadAllData();

    } catch (error) {
        console.error('Error adding charity:', error);
        showToast('Failed to add charity: ' + (error.message || 'Unknown error'), 'error');
    } finally {
        showLoading(false);
    }
}

async function removeCharity(charityAddress) {
    if (!confirm(`Are you sure you want to remove charity ${formatAddress(charityAddress)}?`)) {
        return;
    }

    try {
        showLoading(true);

        const tx = await contract.methods.removeCharity(charityAddress).send({
            from: userAccount
        });

        console.log('Remove charity transaction:', tx);

        // Remove from local set
        charityAddresses.delete(charityAddress);

        showToast('Charity removed successfully!', 'success');

        // Reload data
        await loadAllData();

    } catch (error) {
        console.error('Error removing charity:', error);
        showToast('Failed to remove charity: ' + (error.message || 'Unknown error'), 'error');
    } finally {
        showLoading(false);
    }
}

// ============ Event Listeners for Contract Events ============
function setupContractEventListeners() {
    // Listen for DonationMade events
    contract.events.DonationMade({
        fromBlock: 'latest'
    })
        .on('data', (event) => {
            console.log('DonationMade event:', event);
            // Only refresh stats, not activities to avoid duplicates
            loadGlobalStats();
            loadUserStats();
        })
        .on('error', console.error);

    // Listen for WithdrawalMade events
    contract.events.WithdrawalMade({
        fromBlock: 'latest'
    })
        .on('data', (event) => {
            console.log('WithdrawalMade event:', event);
            // Only refresh stats, not activities to avoid duplicates
            loadGlobalStats();
            loadUserStats();
        })
        .on('error', console.error);

    // Listen for CharityAdded events
    contract.events.CharityAdded({
        fromBlock: 'latest'
    })
        .on('data', (event) => {
            console.log('CharityAdded event:', event);
            charityAddresses.add(event.returnValues.charity);
            loadCharityList();
        })
        .on('error', console.error);

    // Listen for CharityRemoved events
    contract.events.CharityRemoved({
        fromBlock: 'latest'
    })
        .on('data', (event) => {
            console.log('CharityRemoved event:', event);
            charityAddresses.delete(event.returnValues.charity);
            loadCharityList();
        })
        .on('error', console.error);
}

async function loadRecentActivities() {
    try {
        const activitiesDiv = document.getElementById('recentActivities');

        // If contract not initialized, create read-only instance
        let tempWeb3, tempContract;
        let useTemp = false;

        if (!contract) {
            try {
                // Create read-only instance to fetch events
                const rpcEndpoints = [
                    'https://rpc.sepolia.org',
                    'https://ethereum-sepolia-rpc.publicnode.com',
                    'https://sepolia.gateway.tenderly.co'
                ];

                let success = false;

                for (const rpc of rpcEndpoints) {
                    try {
                        tempWeb3 = new Web3(new Web3.providers.HttpProvider(rpc));
                        tempContract = new tempWeb3.eth.Contract(CONFIG.CONTRACT_ABI, CONFIG.CONTRACT_ADDRESS);

                        // Test the connection
                        await tempContract.methods.admin().call();
                        success = true;
                        useTemp = true;
                        console.log('Connected to RPC for recent activities:', rpc);
                        break;
                    } catch (e) {
                        console.log('Failed to connect to RPC:', rpc);
                        continue;
                    }
                }

                if (!success) {
                    activitiesDiv.innerHTML = '<div class="empty-state"><p>Unable to load recent activities</p></div>';
                    return;
                }
            } catch (error) {
                console.error('Error creating temp contract:', error);
                activitiesDiv.innerHTML = '<div class="empty-state"><p>Unable to load recent activities</p></div>';
                return;
            }
        }

        const activeWeb3 = useTemp ? tempWeb3 : web3;
        const activeContract = useTemp ? tempContract : contract;

        // Get past events (last 50 blocks for better performance)
        const currentBlock = await activeWeb3.eth.getBlockNumber();
        const fromBlock = Math.max(0, currentBlock - 50);

        const allEvents = [];

        // Get all event types
        const donations = await activeContract.getPastEvents('DonationMade', {
            fromBlock: fromBlock,
            toBlock: 'latest'
        });

        const withdrawals = await activeContract.getPastEvents('WithdrawalMade', {
            fromBlock: fromBlock,
            toBlock: 'latest'
        });

        const charitiesAdded = await activeContract.getPastEvents('CharityAdded', {
            fromBlock: fromBlock,
            toBlock: 'latest'
        });

        const charitiesRemoved = await activeContract.getPastEvents('CharityRemoved', {
            fromBlock: fromBlock,
            toBlock: 'latest'
        });

        // Combine and sort by block number (most recent first)
        allEvents.push(...donations.map(e => ({ ...e, type: 'donation' })));
        allEvents.push(...withdrawals.map(e => ({ ...e, type: 'withdrawal' })));
        allEvents.push(...charitiesAdded.map(e => ({ ...e, type: 'charity-added' })));
        allEvents.push(...charitiesRemoved.map(e => ({ ...e, type: 'charity-removed' })));

        // Track charities from events (only if not already loaded)
        if (charityAddresses.size === 0) {
            charitiesAdded.forEach(e => charityAddresses.add(e.returnValues.charity));
            charitiesRemoved.forEach(e => charityAddresses.delete(e.returnValues.charity));
        }

        allEvents.sort((a, b) => b.blockNumber - a.blockNumber);

        // Take only the latest 5
        const recentEvents = allEvents.slice(0, 5);

        if (recentEvents.length === 0) {
            activitiesDiv.innerHTML = '<div class="empty-state"><p>No recent activities</p></div>';
            return;
        }

        // Render activities
        activitiesDiv.innerHTML = '';
        for (const event of recentEvents) {
            const activityItem = await createActivityItem(event);
            activitiesDiv.appendChild(activityItem);
        }

    } catch (error) {
        console.error('Error loading recent activities:', error);
        document.getElementById('recentActivities').innerHTML =
            '<div class="empty-state"><p>Error loading activities</p></div>';
    }
}

async function createActivityItem(event) {
    const div = document.createElement('div');
    div.className = 'activity-item';

    let typeText, detailsText, timeText;
    const timestamp = event.returnValues.timestamp;
    timeText = formatTimestamp(timestamp);

    switch (event.type) {
        case 'donation':
            typeText = 'Donation';
            detailsText = `<span class="activity-address">${formatAddress(event.returnValues.donor)}</span> donated <span class="activity-amount">${formatEther(event.returnValues.amount)} ETH</span>`;
            break;
        case 'withdrawal':
            typeText = 'Withdrawal';
            detailsText = `<span class="activity-address">${formatAddress(event.returnValues.charity)}</span> withdrew <span class="activity-amount">${formatEther(event.returnValues.amount)} ETH</span>`;
            break;
        case 'charity-added':
            typeText = 'Charity Added';
            detailsText = `<span class="activity-address">${formatAddress(event.returnValues.charity)}</span> was added as a charity`;
            break;
        case 'charity-removed':
            typeText = 'Charity Removed';
            detailsText = `<span class="activity-address">${formatAddress(event.returnValues.charity)}</span> was removed from charities`;
            break;
    }

    div.innerHTML = `
        <div class="activity-info">
            <div class="activity-type ${event.type}">${typeText}</div>
            <div class="activity-details">${detailsText}</div>
        </div>
        <div class="activity-time">${timeText}</div>
    `;

    return div;
}

// ============ Utility Functions ============
function formatAddress(address) {
    return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
}

function formatEther(wei) {
    // Handle case where web3 might not be initialized
    if (typeof web3 !== 'undefined' && web3.utils) {
        return parseFloat(web3.utils.fromWei(wei.toString(), 'ether')).toFixed(4);
    } else {
        // Fallback: manual conversion (1 ETH = 10^18 wei)
        const ether = parseFloat(wei.toString()) / 1e18;
        return ether.toFixed(4);
    }
}

function formatTimestamp(timestamp) {
    const date = new Date(timestamp * 1000);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;

    const diffHours = Math.floor(diffMins / 60);
    if (diffHours < 24) return `${diffHours}h ago`;

    const diffDays = Math.floor(diffHours / 24);
    if (diffDays < 7) return `${diffDays}d ago`;

    return date.toLocaleDateString();
}

function showLoading(show) {
    const overlay = document.getElementById('loadingOverlay');
    if (show) {
        overlay.classList.remove('hidden');
    } else {
        overlay.classList.add('hidden');
    }
}

function showToast(message, type = 'info') {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');

    toastMessage.textContent = message;
    toast.className = `toast ${type}`;
    toast.classList.remove('hidden');

    setTimeout(() => {
        toast.classList.add('hidden');
    }, 5000);
}
