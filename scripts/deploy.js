const hre = require("hardhat");

async function main() {
  // Start deployment, returning a promise that resolves to a contract object
  const Voting_ = await hre.ethers.deployContract("Voting", [["BJP", "Congress","AAP","TMC"], 50]);
  await Voting_.waitForDeployment();
  console.log("Contract address:", Voting_.target);
}

main()
 .then(() => process.exit(0))
 .catch(error => {
   console.error(error);
   process.exit(1);
 });
