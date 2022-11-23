import { Chain, Network, Wallet } from 'mintbase'
export class WalletService {
  async walletProvider(data) {
    const apiKey = data.apiKey
    const netVal =
      data.network === 'testnet' ? Network.testnet : Network.mainnet
    console.log('apikey', apiKey)
    console.log('Network', netVal)

    async function initWallet() {
      const { data: walletData, error } = await new Wallet().init({
        networkName: netVal,
        chain: Chain.near,
        apiKey,
      })
      if (error) {
        return 'no data'
      }
      let details
      const { wallet, isConnected } = walletData
      if (isConnected) {
        try {
          const { data } = await wallet.details()
          details = data
        } catch (err) {
          return err
        }
      }
      return {
        wallet,
        isConnected,
        details,
      }
    }

    const { wallet, details, isConnected } = await initWallet()
    return {
      wallet,
      isConnected,
      details,
    }
  }
}
