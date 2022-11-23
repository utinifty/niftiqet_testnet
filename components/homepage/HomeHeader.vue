<template>
  <header class="home--header">
    <div class="cto--container container px-4">
      <div class="cto--left">
        <h3 class="text-primary">NFTs TICKETING <br>
          <span class="text-base-content">MANAGEMENT SOLUTION</span></h3>
        <p class="text-base-content/80">
          Using our developer toolkits on NEAR, create, Buy and Sell your own NFT Ticket in marketplace. Let's begin creating your collections right away.
        </p>
        <nif-btn :button-type="{ normLink: false }" url="/events"  class="px-12 mr-5 mt-10">
          <i class="isax text-xl isax-designtools mr-2" />
          Explore
        </nif-btn>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HomeHeader',
  /* props: {
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
  }, */
}
</script>
