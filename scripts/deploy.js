const hre = require("hardhat");
const colors = require("colors");

async function main() {
    await hre.run("compile");

    console.log("Deloying...");
    console.log("");

    const ERC20_TokenFactory = await hre.ethers.getContractFactory("ERC20_TokenFactory");
    const erc20_TokenFactory = await ERC20_TokenFactory.deploy();

    await erc20_TokenFactory.waitForDeployment();

    console.log("Deloyed contract address: ");
    console.log(
        "-".red,
        `ERC20_TokenFactory -> ${colors.brightBlue(erc20_TokenFactory.target)}`
    );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});