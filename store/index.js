import { defineStore } from 'pinia'
import {
  minterStores,
  fetchStore,
  nftMetadata,
  nftTokens,
  nftTokensBySplits,
} from '@/queries/queries'

function ObjGroupBy(list, key) {
  return list.reduce(
    (groups, item) => ({
      ...groups,
      [item[key]]: [...(groups[item[key]] || []), item],
    }),
    {}
  )
}

export const useStore = defineStore('main', {
  state: () => ({
    batch: false,
    wallet: undefined,
    details: {
      accountId: '',
      balance: '',
      allowance: '',
      contractName: '',
    },
    isConnected: false,
    loading: false,
    creator: true,
    stores: [],
    metadata: [],
    niftyStore: {},
    myStore: {},
    myStores: {},
    activeThing: {},
    userType: '',
    activeTokens: [],
    batchListTickets: [],
  }),
  actions: {
    setupWallet() {
      return new Promise((resolve) => {
        this.loading = true
        this.$nuxt.$walletService
          .walletProvider({
            apiKey: this.$nuxt.$config.apiKey,
            network: this.$nuxt.$config.network,
          })
          .then(({ details, wallet, isConnected }) => {
            console.log('error is', wallet)
            this.wallet = wallet
            this.isConnected = isConnected
            if (isConnected) {
              this.details = details
            }
            this.loading = false
            return resolve(wallet)
          })
          .catch((e) => {
            console.log('error is', e)
          })
      })
    },
    async logout({ commit, dispatch }) {
      await this.wallet?.disconnect()
      await this.setupWallet()
    },
    fetchMinterStores() {
      this.setupWallet().then(async () => {
        const query = minterStores
        const variables = { minter: `${this.details.accountId}` }
        console.log('logging response')
        await this.$nuxt.$graphql.default
          .request(query, variables)
          .then((res) => {
            this.stores = res.mb_store_minters
          })
        /* this.stores = data.mb_store_minters
        console.log('accountId is', await this.wallet)
        await console.log('wallet is', this.wallet) */
      })
    },
    fetchNiftyStore() {
      this.setupWallet().then(async () => {
        const query = fetchStore
        const variables = {
          storeId: 'niftiqet.mintspace2.testnet',
          limit: 10,
          offset: 0,
        }
        const data = await this.$nuxt.$graphql.default.request(query, variables)
        this.niftyStore = data.store
      })
    },
    async fetchMetaData() {
      await this.setupWallet().then(async () => {
        const query = nftMetadata
        const variables = {
          ownerId: `${this.details.accountId}`,
        }
        await this.$nuxt.$graphql.default
          .request(query, variables)
          .then((res) => {
            console.log('res is', res)
            this.metadata = res.nft_metadata
          })
      })
    },
    async fetchUserStore(storeId) {
      await console.log('this is', this.$nuxt.$graphql)
      const query = fetchStore
      const variables = {
        storeId,
        limit: 10,
        offset: 0,
      }
      const data = await this.$nuxt.$graphql.default.request(query, variables)
      this.myStore = data.store
    },
    async fetchNftTokens(metadataId) {
      const query = nftTokens
      const variables = {
        metadataId,
      }
      const data = await this.$nuxt.$graphql.default.request(query, variables)
      this.activeTokens = data.mb_views_nft_tokens
    },
    async fetchNftTokensBySplit(metadataId) {
      const query = nftTokensBySplits
      const variables = {
        metadataId,
      }
      const data = await this.$nuxt.$graphql.default.request(query, variables)

      this.myStores = ObjGroupBy(data.mb_views_nft_tokens, 'nft_contract_name')
    },
  },
})
