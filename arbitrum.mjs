// Import Web3 and Plugin
import { EthCC } from "ethcc-arbitrum-testing";
import { Web3 } from "web3";

// Initialize RPC and plugin
const web3 = new Web3("https://arbitrum.llamarpc.com");
web3.registerPlugin(new EthCC());

// Use Plugin
async function main() {
  console.log(await web3.ethcc.arbitrum());
  console.log(await web3.ethcc.optimism());
  console.log(await web3.ethcc.zkevm());
}

main();
