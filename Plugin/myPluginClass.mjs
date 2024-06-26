import Web3, { Web3PluginBase, eth, utils } from "web3";

export class EthCC extends Web3PluginBase {
  //1.  Add name
  pluginNamespace = "ethcc";

  //2. Add methods
  //https://docs.arbitrum.io/build-decentralized-apps/nodeinterface/reference
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

  //https://www.quicknode.com/docs/polygon-zkevm/zkevm_isBlockConsolidated
  async zkevm() {
    this.setProvider("https://zkevm-rpc.com");
    const response = await this.requestManager.send({
      method: "zkevm_isBlockConsolidated",
      params: ["1000000000"],
    });
    return response;
  }

  //https://docs.zksync.io/build/api-reference/zks-rpc#zks_getfeeparams
  async zkSync() {
    this.setProvider("https://mainnet.era.zksync.io");
    const response = await this.requestManager.send({
      method: "zks_getFeeParams",
      params: [],
    });
    return utils.toBigInt(response.V2.l1_gas_price);
  }

  //https://docs.alchemy.com/reference/starknet-chainid
  async starknet() {
    this.setProvider("https://docs-demo.strk-mainnet.quiknode.pro");
    const response = await this.requestManager.send({
      method: "starknet_chainId",
      params: [],
    });
    return utils.toBigInt(response);
  }
}
