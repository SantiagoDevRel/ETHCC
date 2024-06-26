import Web3, { Web3PluginBase, eth, utils } from "web3";

export class EthCC extends Web3PluginBase {
  //1.  Add name
  pluginNamespace = "ethcc";

  //2. Add methods
  async arbitrum() {
    const response = await this.requestManager.send({
      method: "eth_call",
      params: [
        {
          to: "0x00000000000000000000000000000000000000c8",
          data: eth.abi.encodeFunctionSignature("nitroGenesisBlock()"),
        },
      ],
    });
    return utils.toBigInt(response);
  }

  async optimism() {
    this.setProvider("https://mainnet.optimism.io");
    const response = await this.requestManager.send({
      method: "optimism_outputAtBlock",
      params: ["121906529"],
    });
    return response;
  }

  async zkevm() {
    this.setProvider("https://zkevm-rpc.com");
    const response = await this.requestManager.send({
      method: "zkevm_isBlockConsolidated",
      params: ["0x24573"],
    });
    return response;
  }
}

//20147329
//20147414n
