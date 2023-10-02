// require("@nomicfoundation/hardhat-toolbox");

// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.19",
// };

require("@nomicfoundation/hardhat-toolbox");


require('dotenv').config();
const {API_URL, PRIVATE_KEY } = process.env;
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  
  etherscan: {
    apiKey: "HIZW6B2NVJNCWE8UEVFNHBFN8JJ571RQ6V"
  },
  networks: {
    goerli: {
      url: API_URL,
      accounts: [PRIVATE_KEY],
    },
 },
};

