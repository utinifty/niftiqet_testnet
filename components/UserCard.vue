<template>
  <nuxt-link to="/ticket" class="card user-variant event--card shadow-xl">
    <figure class="px-5 pt-5">
      <img
        src="https://placeimg.com/400/225/arch"
        alt="Shoes"
        class="rounded-xl"
      />
    </figure>
    <div class="card-body px-5 pt-5">
      <h3>Ehapa.testnet</h3>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'UserCard',
  props: {
    self: {
      type: Boolean,
      default() {
        return false
      },
      required: false,
    },
  },
}
</script>

<style scoped lang="scss">
.user-variant {
  .card-body {
    align-items: center;
  }
}
</style>
