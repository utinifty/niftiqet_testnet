import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'
import { WalletService } from '@/wallet.service'

UIkit.use(Icons)

export default ({ app }, inject) => {
  // new Instance of Api class.
  const walletService = new WalletService()
  // injects imported api class into vue instance and nuxt root context
  inject('walletService', walletService)
}
