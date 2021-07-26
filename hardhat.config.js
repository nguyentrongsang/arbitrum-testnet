require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  paths: {
    artifacts: './src/artifacts',
  },
  networks: {
    hardhat: {
      chainId: 1337
    },
    ropsten: {
      url: "https://ropsten.infura.io/v3/89e65fd719a343af861fca2544ce0aad",
      accounts: ["YOUR_METAMASK_KEY"]
    },
    rinkeby: {
      url: 'https://rinkeby.infura.io/v3/89e65fd719a343af861fca2544ce0aad',
      accounts: ['YOUR_METAMASK_KEY']
    },
    arbitrum: {
      // url: 'https://rinkeby.arbitrum.io/rpc',
      url: `https://rinkeby.arbitrum.io/rpc`,
      gasPrice: 1000000000,
      accounts: ['YOUR_METAMASK_KEY']
    }
  }
};
