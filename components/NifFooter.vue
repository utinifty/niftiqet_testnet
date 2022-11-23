<template>
  <footer class="bg-base-100/20 backdrop-blur py-20 px-4">
    <div class="container footer text-base-content">
      <div class="logo--set">
        <nuxt-link to="/" class="logo--link">
          <img src="/logo.png" class="logo--light" alt="" />
          <img src="/logo-dark.png" class="logo--dark" alt="" />
        </nuxt-link>
        <p>Decentralised NFTs Ticketing Mangement Solution</p>
        <!--          <div class="grid grid-flow-col gap-4">-->
        <!--            <nif-btn href="https://web.facebook.com" target="_blank">-->
        <!--              <span uk-icon="twitter"></span>-->
        <!--            </nif-btn>-->
        <!--            <nif-btn href="https://web.facebook.com" target="_blank">-->
        <!--              <span uk-icon="instagram"></span>-->
        <!--            </nif-btn>-->
        <!--            <nif-btn href="https://web.facebook.com" target="_blank">-->
        <!--              <span uk-icon="discord"></span>-->
        <!--            </nif-btn>-->
        <!--            <nif-btn href="https://web.facebook.com" target="_blank">-->
        <!--              <span uk-icon="youtube"></span>-->
        <!--            </nif-btn>-->
        <!--            <nif-btn href="https://web.facebook.com" target="_blank">-->
        <!--              <span uk-icon="tiktok"></span>-->
        <!--            </nif-btn>-->
        <!--          </div>-->
      </div>
      <div>
        <span class="footer-title">Resources</span>
        <nuxt-link to="/mint" class="link link-hover">Create Event</nuxt-link>
        <nuxt-link to="/events" class="link link-hover">Events</nuxt-link>
      </div>
      <div>
        <span class="footer-title">Check in</span>
        <nuxt-link to="/about" class="link link-hover">About</nuxt-link>
      </div>
    </div>
    <div class="container pt-10 footer-center text-base-content">
      <div class="flex flex-col">
        <p>@Niftiqet 2022 All Right Reserved</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'NifFooter',
}
</script>

<style lang="scss" scoped>
.footer.container {
  background: transparent;
}
</style>
