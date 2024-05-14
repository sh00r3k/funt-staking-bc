import { Stacking__factory, TestToken__factory } from '../typechain-types';
const { ethers } = require('hardhat');

async function main() {
  const accounts = await ethers.getSigners();
  const owner = accounts[0];
  console.log({ 
    deployer: owner.address
  });

  const token = await new TestToken__factory(owner).deploy('FUNT', 'Funt token');
  const stacking = await new Stacking__factory(owner).deploy(token.address);

  const amount = ethers.utils.parseEther('100');
  await token.mint(owner.address, amount);

  console.log({ 
    stacking: stacking.address,
    token: token.address
  });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
