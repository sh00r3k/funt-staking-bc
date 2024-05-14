import { type HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';
import '@nomiclabs/hardhat-solhint';

const { mnemonic } = require('./secrets.json');

const gasPriceGwei = 253;
const gasPriceWei = BigInt(gasPriceGwei) * BigInt(10**9);
const oneEtherInWei = BigInt(10**18);
const gasLimit = oneEtherInWei / gasPriceWei;

const config: HardhatUserConfig = {
  defaultNetwork: "localhost",
  solidity: '0.8.18',
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545"
    },
    mainnet: {
      url: "https://rpc.dogechain.dog",
      chainId: 2000,
      gas: Number(gasLimit), // Calculated gas limit
      gasPrice: Number(gasPriceWei), // Gas price in Wei
      accounts: {mnemonic: mnemonic}
    },
  },
  typechain: {
    outDir: 'typechain-types',
    target: 'ethers-v5',
  },
  etherscan: {
    apiKey: {
      dogechain: "<goerli-api-key>"
    },
    customChains: [
      {
        network: "dogechain",
        chainId: 2000,
        urls: {
          apiURL: "https://explorer.dogechain.dog/api",
          browserURL: "https://explorer.dogechain.dog"
        }
      }
    ]
  }
};

export default config

