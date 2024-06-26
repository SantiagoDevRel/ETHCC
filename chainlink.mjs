// Imports
import { Web3 } from "web3";
import { ChainlinkPlugin, MainnetPriceFeeds } from "@chainsafe/web3-plugin-chainlink";

// Initialize RPC & Plugin
const web3 = new Web3("https://eth.llamarpc.com");
web3.registerPlugin(new ChainlinkPlugin());

// Use Plugin
async function main() {
  const response = await web3.chainlink.getPrice(MainnetPriceFeeds.EthUsd);
  console.log(response.answer);
}

main();
