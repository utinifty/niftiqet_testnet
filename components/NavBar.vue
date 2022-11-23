<template>
  <nav
    class="sticky my-navigation top-0 w-full backdrop-blur-md bg-base-100/10 transition-colors"
  >
    <div class="container px-4 navbar">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="p-2 mt-3 shadow menu dropdown-content rounded-box w-52"
          >
            <li>
              <nuxt-link to="/about" class="uppercase font-bold"
                >About</nuxt-link
              >
            </li>
            <li>
              <nuxt-link class="uppercase font-bold" to="/events"
                >Events</nuxt-link
              >
            </li>
            <li v-if="userType !== 'Buyer'">
              <nuxt-link class="uppercase font-bold" to="/mint">
                Create
              </nuxt-link>
            </li>
          </ul>
        </div>
        <nuxt-link to="/" class="text-xl normal-case btn btn-ghost logo--link">
          <img src="/logo.png" class="logo--light" alt="" />
          <img src="/logo-dark.png" class="logo--dark" alt="" />
        </nuxt-link>
      </div>
      <div class="hidden navbar-center lg:flex">
        <ul class="p-0 menu menu-horizontal">
          <li>
            <nuxt-link to="/about" class="uppercase font-bold">About</nuxt-link>
          </li>
          <li>
            <nuxt-link class="uppercase font-bold" to="/events"
              >Events</nuxt-link
            >
          </li>
          <li v-if="userType !== 'Buyer'">
            <nuxt-link class="uppercase font-bold" to="/mint">
              Create
            </nuxt-link>
          </li>
        </ul>
      </div>
      <div class="navbar-end">
        <button class="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
        <!--    <nif-btn @click.prevent="wallety?.connect({ requestSignIn: true })">
          <i class="cf cf-near mr-2"></i> NEAR Login
        </nif-btn>-->
        <div v-if="isConnected" class="user--details">
          <h3>{{ details.accountId }}</h3>
          <p>{{ details.balance }}N</p>
        </div>
        <div v-if="isConnected" class="dropdown dropdown-end">
          <label
            tabindex="0"
            class="btn btn-ghost rounded-full p-0 rounded-btn"
          >
            <div class="avatar">
              <div class="w-8 rounded-full">
                <img src="https://placeimg.com/192/192/people" alt="" />
              </div>
            </div>
          </label>
          <ul
            tabindex="0"
            class="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4"
          >
            <li v-if="userType === 'Buyer'">
              <a href="#" @click="createTickets">Create Tickets</a>
            </li>
            <li v-else><a href="#" @click="buyTickets">Buy Tickets</a></li>
            <!--            <li><nuxt-link to="/activity">Activity</nuxt-link></li>-->
            <li><a @click="disconnectWallet">Logout</a></li>
          </ul>
        </div>
        <a
          v-if="!isConnected"
          class="capitalize btn def--btn"
          :class="loading ? 'loading' : ''"
          @click.prevent="login"
        >
          <i class="cf cf-near mr-2"></i> NEAR Login
        </a>
      </div>
    </div>
    <div
      v-if="openLogin"
      class="my--modal"
      :class="openLogin ? 'active--modal' : ''"
    >
      <div class="my-modal--content relative">
        <a href="#" @click.prevent="login()"
          ><b-icon class="absolute close-icon" icon="close" type="is-white"
        /></a>
        <h3 class="w-full mb-5 text-center font-bold text-white text-2xl">
          Login to Niftiqet
        </h3>
        <div class="user-type--picker">
          <b-field>
            <b-radio-button v-model="userType" native-value="Creator">
              <span>EVENT CREATOR</span>
            </b-radio-button>

            <b-radio-button v-model="userType" native-value="Buyer">
              <span>BUYER</span>
            </b-radio-button>
          </b-field>
        </div>
        <button
          class="mt-6 w-full capitalize btn def--btn"
          @click.prevent="login()"
        >
          Continue to NEAR Wallet
        </button>
      </div>
    </div>
  </nav>
</template>
<script>
import { mapWritableState } from 'pinia'
import { useStore } from '@/store'

export default {
  name: 'NavBar',
  setup() {
    const store = useStore()
    console.log('store is from setup', store)
    return { store }
  },
  data() {
    return {
      checking: 'home',
      on: this.$colorMode.preference === 'dark',
      openLogin: false,
    }
  },
  computed: {
    address() {
      return location.origin
    },
    ...mapWritableState(useStore, [
      'userType',
      'wallet',
      'details',
      'isConnected',
      'loading',
    ]),
  },
  watch: {
    userType(newVal) {
      localStorage.setItem('userType', newVal)
      sessionStorage.setItem('userType', newVal)
    },
  },
  mounted() {
    // console.log('store has', this.store)
    if (
      localStorage.getItem('theme') !== 'dark' &&
      localStorage.getItem('theme') !== 'light'
    ) {
      localStorage.setItem('theme', 'dark')
    }
    const themeSaved = localStorage.getItem('theme')
    let theme = themeSaved

    if (themeSaved === 'dark') {
      theme = 'dark'
    } else if (themeSaved === 'light') {
      theme = 'light'
    }

    document.documentElement.setAttribute('data-theme', theme)
  },
  methods: {
    createTickets() {
      this.userType = 'Creator'
      this.$router.push('/mint')
    },
    buyTickets() {
      this.userType = 'Buyer'
      this.$router.push('/events')
    },
    async login() {
      console.log('login in')
      await this.wallet?.connect({ requestSignIn: true })
      /* await this.wallet.activeWallet.requestSignIn({
        successUrl: `${this.address}/${
          this.userType === 'Buyer' ? 'events' : 'mint'
        }`,
        failureUrl: `${this.address}`,
      }) */
    },
    async disconnectWallet() {
      await this.store?.wallet?.disconnect()
      await this.store?.setupWallet()
      location.reload()
    },
    toggleTheme() {
      const savedTheme = document.documentElement.getAttribute('data-theme')
      let chosenTheme = ''

      if (savedTheme === 'dark') {
        chosenTheme = 'light'
      } else {
        chosenTheme = 'dark'
      }

      document.documentElement.setAttribute('data-theme', chosenTheme)
      localStorage.setItem('theme', chosenTheme)
    },
  },
}
</script>
<style lang="scss"></style>
