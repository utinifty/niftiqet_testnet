<template>
  <div v-if="sortedStores.filter((store) => store.length > 0).length" class="">
    <div
      v-for="(event, i) in sortedStores"
      :key="i"
      class="event--card-grid"
      :class="gridSize === 3 ? 'three' : 'two'"
    >
      <h3 v-if="event.length" class="capitalize font-medium text-xl">
        {{ event[0].nft_contract_name }} Store
      </h3>
      <div v-for="meta in event" :key="meta.id">
        <event-card :meta="meta" :self="linkSelf" />
      </div>
    </div>
  </div>
  <div v-else class="flex h-screen flex justify-center items-center">
    <figure>
      <div class="text-center">
        <svg
          class="mx-auto h-12 w-12 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            vector-effect="non-scaling-stroke"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
          />
        </svg>
        <h3 class="mt-2 text-sm font-medium text-gray-200">
          No Events created by you
        </h3>
        <p class="mt-1 text-sm text-gray-500">
          Get started by creating a new event.
        </p>
        <div class="mt-6">
          <nuxt-link to="/mint" class="btn def--btn"> Create Event </nuxt-link>
        </div>
      </div>
    </figure>
  </div>
</template>

<script>
/* eslint-disable no-prototype-builtins */
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
  data() {
    return {
      events: [],
    }
  },
  computed: {
    stor() {
      return this.events.map((event) => {
        // eslint-disable-next-line array-callback-return
        return event
          .sort((a, b) => {
            const fa = a.title.toLowerCase()
            const fb = b.title.toLowerCase()

            if (fa < fb) {
              return -1
            }
            if (fa > fb) {
              return 1
            }
            return 0
          })
          .map((meta, i) => {
            if (i === 0) {
              return meta
            }
            if (meta?.title !== event[i - 1 < 0 ? 0 : i - 1].title) {
              return meta
            }
            return null
          })
          .filter((event) => {
            return event !== null
          })
      })
    },
    sortedStores() {
      return this.stor.map((event) => {
        // eslint-disable-next-line no-return-assign,no-sequences
        return event
          .map((meta) => {
            if (meta?.listings?.length && this.userType === 'Buyer') {
              return meta
            } else if (
              this.userType === 'Creator' &&
              meta?.minter === this.details.accountId
            ) {
              return meta
            } else return null
          })
          .filter((event) => {
            return event !== null
          })
      })
    },
    ...mapWritableState(useStore, [
      'wallet',
      'details',
      'isConnected',
      'loading',
      'stores',
      'metadata',
      'myStores',
      'userType',
    ]),
  },
  async mounted() {
    // await console.log('props',this.storeId)
    await this.store.fetchMetaData()
    if (this.myStores) {
      for (const key in this.myStores) {
        if (this.myStores.hasOwnProperty(key)) {
          // console.log(`${key}: ${this.myStores[key]}`)
          this.events.push(this.myStores[key])
          console.log(this.sortedStores)
        }
      }
    }
  },
}
</script>

<style scoped></style>
