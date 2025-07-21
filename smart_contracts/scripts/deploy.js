const hre = require("hardhat");

async function main() {
  // 1. 拿到合约工厂
  const MallSolar = await hre.ethers.getContractFactory("MallSolar");

  // 2. 部署
  const contract = await MallSolar.deploy();

  // 3. 等待部署完成（ethers v6）
  await contract.waitForDeployment();

  // 4. 打印地址
  console.log("MallSolar deployed to:", await contract.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});