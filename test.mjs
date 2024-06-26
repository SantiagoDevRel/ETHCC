import { Web3 } from "web3";
import { Network, QuickNodeProvider, Transport } from "web3-rpc-providers";

const web3 = new Web3(new QuickNodeProvider(Network.ETH_SEPOLIA, Transport.HTTPS));

async function main() {
  console.log(await web3.eth.getChainId());
}

main();
