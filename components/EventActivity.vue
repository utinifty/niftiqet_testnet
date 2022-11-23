<template>
  <div class="relative card activity--card">
    <img src="https://placeimg.com/400/225/arc" alt="Event Activity" />
    <div class="card--content">
      <h3>Deep Sea Plan</h3>
      <p>
        Deep Sea Plan (x Antoni Tudisco) #44/44 was put up for sale for 0.0991
        NEAR
      </p>
      <p>At: 10/07/2022</p>
      <p class="text-primary">by @sarawts</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EventActivity',
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

<style lang="scss"></style>
