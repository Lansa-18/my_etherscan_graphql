const { RESTDataSource } = require('apollo-datasource-rest');

// Vitalik Buterin's Ethereum address used to fetch account balance
const eth_address = '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045';

// Etherscan API data source class extended from Apollo RESTDataSource
class EtherDataSource extends RESTDataSource {
  // Base URL for Etherscan API
  baseURL = 'https://api.etherscan.io/api';

  // Fetches ETH balance for the defined address
  async etherBalanceByAddress() {
    // Call Etherscan API module=account, action=balance
    // Insert address and API key
    return this.get(
      `?module=account&action=balance&address=${eth_address}&tag=latest&apikey=${process.env.ETHERSCAN_API}`
    );
  }

  // Fetches total ETH supply from Etherscan API
  async totalSupplyOfEther() {
    // Call Etherscan API module=stats, action=ethsupply
    // Insert API key
    return this.get(
      `?module=stats&action=ethsupply&apikey=${process.env.ETHERSCAN_API}`
    );
  }

  // Get latest ETH price from Etherscan API
  async getLatestEthereumPrice() {
    // Call Etherscan API module=stats, action=ethprice
    // Insert API key
    return this.get(
      `?module=stats&action=ethprice&apikey=${process.env.ETHERSCAN_API}`
    );
  }

  // Get estimated block confirmation time from Etherscan API
  async getBlockConfirmationTime() {
    // Call Etherscan API module=gastracker, action=gasestimate
    // Define gas price and insert API key
    return this.get(
      `?module=gastracker&action=gasestimate&gasprice=2000000000&apikey=${process.env.ETHERSCAN_API}`
    );
  }
}

module.exports = EtherDataSource;
