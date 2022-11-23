<template>
  <section>
    <header
      class="page--header events flex flex-col justify-center items-center"
    >
      <div class="container flex flex-col justify-center profile--view">
        <b-field class="file is-primary" :class="{ 'has-name': !!file }">
          <b-upload v-model="file" class="file-label">
            <button class="btn btn-outline border font-bold">
              <i class="isax isax-camera mr-2 text-xl"></i>
              Upload a Cover Photo
            </button>
            <span v-if="file" class="file-name">
              {{ file.name }}
            </span>
          </b-upload>
        </b-field>
      </div>
    </header>
    <main>
      <section class="home--body">
        <div class="cto--container container px-4 min-h-screen">
          <div class="profile--grid">
            <div class="profile--data">
              <div class="avatar--upload flex justify-center">
                <img
                  class="avatar--pic rounded-2xl"
                  src="https://placeimg.com/192/192/people"
                  alt="Avatar"
                />
              </div>
              <div class="user--info text-center mt-4">
                <h3 class="text-xl">Sara Aniton</h3>
                <p class="text-primary text-lg font-bold">@Aniton</p>
                <p class="text-normal font-bold">Join March 2022</p>
                <div class="uk-tile theme-tile uk-padding-small items-center">
                  <p class="uk-h4 mr-6">
                    0x91a6dF52aA476378198422C922178560a5400E43
                  </p>
                  <i class="isax isax-copy"></i>
                </div>
                <div class="my-4">
                  <p class="p-4 text-xl">
                    I create NFT collection rather than bricks-and-click
                    customizable and scalable.
                  </p>
                </div>
              </div>
              <div class="profile--buttons">
                <nif-btn>
                  <i class="isax isax-like-1 mr-2 text-xl"></i>
                  Follow
                </nif-btn>
              </div>
              <div class="grid mt-20 grid-flow-col gap-4">
                <nif-btn href="https://web.facebook.com" target="_blank">
                  <span uk-icon="twitter"></span>
                </nif-btn>
                <nif-btn href="https://web.facebook.com" target="_blank">
                  <span uk-icon="instagram"></span>
                </nif-btn>
                <nif-btn href="https://web.facebook.com" target="_blank">
                  <span uk-icon="discord"></span>
                </nif-btn>
                <nif-btn href="https://web.facebook.com" target="_blank">
                  <span uk-icon="youtube"></span>
                </nif-btn>
              </div>
            </div>
            <div class="profile--views">
              <b-tabs v-model="activeTab" type="is-toggle">
                <b-tab-item label="Owned">
                  <event-card-grid :grid-size="2" />
                </b-tab-item>
                <b-tab-item label="Minted">
                  <event-card-grid :grid-size="2" />
                </b-tab-item>
                <b-tab-item label="Favorites">
                  <event-card-grid :grid-size="2" />
                </b-tab-item>
                <b-tab-item label="Following">
                  <user-card-grid :grid-size="3" />
                </b-tab-item>
                <b-tab-item label="Followers">
                  <user-card-grid :grid-size="3" />
                </b-tab-item>
              </b-tabs>
            </div>
          </div>
        </div>
      </section>
    </main>
  </section>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 0,
      dropFiles: [],
      file: null,
    }
  },
  methods: {
    deleteDropFile(index) {
      this.dropFiles.splice(index, 1)
    },
  },
}
</script>

<style lang="scss"></style>
