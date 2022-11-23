<template>
  <div class="modal-card" style="width: auto">
    <h3 class="has-text-weight-semibold has-text-white">
      {{ batchSell ? 'Batch ' : '' }}Sell Ticket
    </h3>
    <form class="mt-5" action="">
      <div class="field">
        <label class="label has-text-white">Ticket Price</label>
        <div class="control">
          <input
            v-model="price"
            class="input"
            type="number"
            placeholder="2 NEAR"
          />
        </div>
        <p class="help">Price the ticket would sell for</p>
      </div>
      <b-button
        :loading="loading"
        class="w-full"
        type="is-primary"
        @click.prevent="listTicket"
      >
        Put up for sale
      </b-button>
    </form>
  </div>
</template>

<script>
import { mapWritableState } from 'pinia'
import { parseNearAmount } from 'near-api-js/lib/utils/format'
import { useStore } from '@/store'

export default {
  name: 'SellForm',
  props: {
    tokenId: { type: String, default: null, required: false },
    storeId: { type: String, default: null, required: false },
    batchSell: {
      type: Boolean,
      default() {
        return false
      },
      required: false,
    },
  },
  data() {
    return {
      price: '',
    }
  },
  computed: {
    parsedPrice() {
      return `${parseNearAmount(this.price)}`
    },
    // same as above but registers it as this.myOwnName
    ...mapWritableState(useStore, [
      'wallet',
      'details',
      'isConnected',
      'loading',
      'creator',
    ]),
  },
  methods: {
    listTicket() {
      if (!this.price) {
        this.$buefy.toast.open({
          duration: 5000,
          message: 'Kindly the price field',
          type: 'is-danger',
        })
        return
      }
      if (this.batchSell) {
        this.wallet?.batchList(
          this.tokenId,
          `${this.storeId}`,
          `${this.parsedPrice}`
        )
      } else {
        this.wallet?.list(
          `${this.tokenId}`,
          `${this.storeId}`,
          `${this.parsedPrice}`
        )
      }
    },
  },
}
</script>

<style lang="scss"></style>
