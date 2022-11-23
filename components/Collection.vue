<template>
  <article class="card collection shadow-xl p-5">
    <div
      class="uk-position-relative uk-visible-toggle uk-padding-small uk-light overflow-clip"
      tabindex="-1"
      uk-slider="autoplay: true"
    >
      <figure
        id="picSlide"
        class="px-5 pt-5 pic-slider uk-slider-items uk-child-width-1-2 uk-child-width-1-3@m uk-grid"
      >
        <div class="">
          <img
            src="https://placeimg.com/400/225/arch"
            alt="Shoes"
            class="rounded-xl pic-slide"
          />
        </div>
        <div class="">
          <img
            src="https://placeimg.com/400/225/arch"
            alt="Shoes"
            class="rounded-xl pic-slide"
          />
        </div>
        <div class="">
          <img
            src="https://placeimg.com/400/225/arch"
            alt="Shoes"
            class="rounded-xl pic-slide"
          />
        </div>
        <div class="">
          <img
            src="https://placeimg.com/400/225/arch"
            alt="Shoes"
            class="rounded-xl pic-slide"
          />
        </div>
      </figure>
    </div>
    <div class="card-body p-0 text-left">
      <h3>Radium Animated Monster</h3>
      <p>Collection has 13 items</p>
      <div class="divider"></div>
      <div class="mr-5 flex items-center">
        <div class="avatar">
          <div class="w-5 rounded-full">
            <img src="https://placeimg.com/192/192/people" alt="" />
          </div>
        </div>
        <span class="ml-2">@aniston</span>
      </div>
    </div>
  </article>
</template>
<style scoped></style>
<script>
export default {
  name: 'MyCollection',
}
</script>
