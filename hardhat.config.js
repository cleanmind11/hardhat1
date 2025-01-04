require("@nomicfoundation/hardhat-toolbox");

// Ensure your configuration variables are set before executing the script
const { vars } = require("hardhat/config");

// Go to https://infura.io, sign up, create a new API key
// in its dashboard, and add it to the configuration variables
// const INFURA_API_KEY = "657bb85c5d6442f3b09ea72d01b8510f";
const INFURA_API_KEY = vars.get("INFURA_API_KEY");
// Add your Sepolia account private key to the configuration variables
// To export your private key from Coinbase Wallet, go to
// Settings > Developer Settings > Show private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Beware: NEVER put real Ether into testing accounts
// const SEPOLIA_PRIVATE_KEY = "85e08e8138717d069cdafab94f38b776ff16aafdcc4bf083b2d2f2446bfacedc";
const SEPOLIA_PRIVATE_KEY = vars.get("SEPOLIA_PRIVATE_KEY");
module.exports = {
  solidity: "0.8.28",
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY],
    },
  },
};
