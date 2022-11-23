<template>
  <div
    v-if="activeTokens"
    class="event--card-grid"
    :class="gridSize === 3 ? 'three' : 'two'"
  >
    <ticket-card
      v-for="token in sortedTickets"
      :key="token.id"
      :meta="token"
      :self="linkSelf"
    />
  </div>
</template>

<script>
import { mapWritableState } from 'pinia'
import { useStore } from '@/store'

export default {
  props: {
    gridSize: {
      type: Number,
      default() {
        return 3
      },
    },
    linkSelf: {
      type: Boolean,
      default() {
        return false
      },
    },
    storeId: {
      type: String,
      default() {
        return ''
      },
    },
  },
  setup() {
    const store = useStore()

    return { store }
  },
  computed: {
    sortedTickets() {
      return this.activeTokens?.filter((token) => {
        if (this.userType === 'Buyer') {
          return token?.listings.length > 0
        } else {
          return token.minter === this.details.accountId
        }
      })
    },
    ...mapWritableState(useStore, [
      'wallet',
      'details',
      'isConnected',
      'loading',
      'stores',
      'metadata',
      'activeTokens',
      'userType',
    ]),
  },
  async mounted() {
    // await console.log('props',this.storeId)
    await this.store.fetchMetaData()
  },
}
</script>

<style scoped></style>
