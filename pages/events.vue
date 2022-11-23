<template>
  <section>
    <header
      class="page--header events flex flex-col justify-center items-center"
    >
      <div class="container flex flex-col justify-center">
        <h4>Explore Events</h4>
        <div class="text-sm breadcrumbs">
          <ul>
            <li><nuxt-link to="/">Home</nuxt-link></li>
            <li>Explore Event</li>
          </ul>
        </div>
      </div>
    </header>
    <main>
      <section class="home--body">
        <div class="cto--container container px-4 min-h-screen">
          <event-card-grid />
          <!--          <div class="flex pagination justify-center mt-16">
            <div class="btn-group">
              <button class="btn">Previous</button>
              <button class="btn">1</button>
              <button class="btn">2</button>
              <button class="btn">3</button>
              <button class="btn">Next</button>
            </div>
          </div>-->
        </div>
      </section>
    </main>
  </section>
</template>

<script>
/* eslint-disable no-prototype-builtins */
import { mapWritableState } from 'pinia'
import { useStore } from '@/store'

export default {
  setup() {
    const store = useStore()

    return { store }
  },
  computed: {
    /*   sortedStores() {
      return
    }, */
    ...mapWritableState(useStore, [
      'wallet',
      'details',
      'isConnected',
      'loading',
      'stores',
    ]),
  },
  async mounted() {
    await this.store.fetchMinterStores()
    await this.store.fetchNftTokensBySplit(`aef.testnet`)
  },
}
</script>

<style lang="scss">
.pagination {
  .btn {
    background: hsla(var(--b1) / 0.4);
    backdrop-filter: blur(5px);
    color: hsla(var(--bc) / 0.9);
  }
}
</style>
