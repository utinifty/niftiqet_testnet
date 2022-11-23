<template>
  <div class="relative">
    <nuxt-link
      :to="`/ticket/${meta?.metadata_id}`"
      class="card event--card shadow-xl"
    >
      <figure class="px-5 pt-5">
        <img
          :src="meta?.reference_blob?.media"
          alt="Shoes"
          class="rounded-xl"
        />
      </figure>
      <div class="card-body px-5 pt-5 text-left">
        <h3>{{ meta?.title }}</h3>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'EventCard',
  props: {
    self: {
      type: Boolean,
      default() {
        return false
      },
      required: false,
    },
    meta: {
      type: Object,
      default() {
        return {}
      },
      required: false,
    },
  },
}
</script>

<style scoped>
.event--card-menu {
  position: absolute;
  top: 1.25em;
  right: 1.25em;
  z-index: 12;
}
</style>
