<template>
  <section>
    <header
      class="page--header ticket events flex flex-col justify-center items-center"
      :style="eventBG"
    >
      <div class="container flex flex-col justify-center">
        <h4>{{ tokenTitle }}</h4>
        <div class="text-sm breadcrumbs">
          <ul>
            <li><nuxt-link to="/">Home</nuxt-link></li>
            <li><nuxt-link to="/events">Explore Event</nuxt-link></li>
            <li class="text-primary">Ticket</li>
          </ul>
        </div>
      </div>
    </header>
    <main>
      <section class="home--body">
        <div class="cto--container container relative px-4 min-h-screen">
          <div v-if="userType === 'Creator' && details.accountId" class="#">
            <button
              class="btn def--btn capitalize mr-3"
              @click="batch = !batch"
            >
              {{ batch ? 'Cancel batch' : 'Sell multiple tickets' }}
            </button>
            <button
              v-if="batch && batchListTickets.length"
              class="btn btn-success capitalize"
              @click.prevent="batchList"
            >
              List selected
            </button>
          </div>
          <div class="ticket--set">
            <div class="grid--collection">
              <ticket-card-grid v-if="activeTokens" :grid-size="2" />
            </div>
            <div v-if="activeTokens.length" class="ticket--data sticky top-0">
              <div class="card">
                <div class="card-body">
                  <h2 class="card-title">Ticket Summary</h2>
                  <div class="divider my-3"></div>
                  <div class="form-control w-full">
                    <label class="label">
                      <span class="label-text">Ticket Name</span>
                    </label>
                    <input
                      type="text"
                      disabled
                      :value="activeTokens[0].title"
                      class="input bg-base-100/10 w-full"
                    />
                  </div>
                  <div class="form-control mt-2 w-full">
                    <label class="label">
                      <span class="label-text">Ticket Description</span>
                    </label>
                    <textarea
                      disabled
                      rows="3"
                      class="textarea bg-base-100/10"
                      :value="activeTokens[0].description"
                    />
                  </div>
                  <div class="form-control mt-2 w-full">
                    <label class="label">
                      <span class="label-text">Created By</span>
                    </label>
                    <input
                      type="text"
                      disabled
                      :value="activeTokens[0].minter"
                      class="input bg-base-100/10 w-full"
                    />
                  </div>
                  <!--                  <div class="form-control mt-2 w-full">
                    <label class="label">
                      <span class="label-text">Owner</span>
                    </label>
                    <input
                      type="text"
                      disabled
                      value="Obani.testnet"
                      class="input bg-base-100/10 w-full"
                    />
                  </div>-->
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <b-modal
      v-model="sellTicket"
      has-modal-card
      trap-focus
      :destroy-on-hide="false"
      aria-role="dialog"
      aria-label="Example Modal"
      close-button-aria-label="Close"
      aria-modal
    >
      <template #default="props">
        <SellForm
          :store-id="activeTokens[0]?.nft_contract_id"
          :token-id="batchListTickets"
          :batch-sell="true"
          @close="props.close"
        />
      </template>
    </b-modal>
  </section>
</template>

<script>
/* eslint-disable camelcase */
import { mapWritableState } from 'pinia'
import { useStore } from '@/store'

export default {
  setup() {
    const store = useStore()

    return { store }
  },
  data() {
    return {
      sellTicket: false,
      activeToken: '',
    }
  },
  watch: {
    batch(val) {
      if (!val) {
        this.batchListTickets = []
      }
    },
  },
  computed: {
    eventBG() {
      if (this.activeTokens.length) {
        if (this.activeTokens[0].reference_blob?.animation_url) {
          return `background: url(${this.activeTokens[0].reference_blob?.animation_url})`
        }
      }
      return ''
    },
    tokenTitle() {
      if (this.activeTokens.length) {
        return this.activeTokens[0].title
      }
      return ''
    },
    ...mapWritableState(useStore, [
      'wallet',
      'details',
      'isConnected',
      'loading',
      'stores',
      'userType',
      'activeTokens',
      'batch',
      'batchListTickets',
    ]),
  },
  async mounted() {
    await this.store.fetchNftTokens(`${this.$route.params.id}`)

    console.log('stuff is', this.activeTokens)
  },
  methods: {
    batchList() {
      this.sellTicket = true
    },
  },
}
</script>

<style lang="scss"></style>
