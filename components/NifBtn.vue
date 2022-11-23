<template>
  <a v-if="buttonType.normLink" class="capitalize btn def--btn">
    <slot></slot>
  </a>
  <nuxt-link v-else :to="url" class="capitalize btn def--btn">
    <slot></slot>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    buttonType: {
      type: Object,
      default() {
        return { normLink: true }
      },
    },
    url: {
      type: String,
      default() {
        return '/'
      },
    },
  },
}
</script>

<style></style>
