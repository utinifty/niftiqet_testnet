<template>
  <section class="nav--spacer">
    <main>
      <section class="home--body">
        <div class="cto--container container px-4 min-h-screen">
          <div class="profile--grid">
            <div class="profile--data">
              <div class="card">
                <div class="card-body flex flex-col">
                  <h2 class="card-title">Store Setting</h2>
                  <div class="divider my-3"></div>
                  <b-field label="Minted Ticket">
                    <b-select placeholder="Select a Ticket">
                      <option value="1">ehapa.Niftiqet.testnet</option>
                    </b-select>
                  </b-field>
                  <nuxt-link to="/store">View Store</nuxt-link>
                  <nuxt-link to="/settings">Store Settings</nuxt-link>
                  <div class="flex justify-center w-full mt-6">
                    <nif-btn>Mint NFT Ticket</nif-btn>
                  </div>
                  <div class="divider my-3"></div>
                  <a href="#" class="text-primary text-2xl">New Store</a>
                </div>
              </div>
            </div>
            <div class="profile--views">
              <div
                tabindex="0"
                class="collapse rounded-2xl bg-base-100/30 collapse-arrow"
              >
                <input type="checkbox" checked />
                <div class="collapse-title text-sm font-bold">
                  Basic Information
                </div>
                <div class="collapse-content">
                  <div class="form-control w-full">
                    <label class="label">
                      <span class="label-text">Name of Store</span>
                    </label>
                    <input
                      type="text"
                      disabled
                      value="Radium Animated Monster"
                      class="input bg-base-100/10 w-full"
                    />
                  </div>
                  <div class="form-control mt-2 w-full">
                    <label class="label">
                      <span class="label-text">Store Description</span>
                    </label>
                    <textarea disabled rows="4" class="textarea bg-base-100/10">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor porta ut neque maecenas egestas ornare habitasse amet pellentesque. Lorem libero volutpat augue augue vitae. Elementum et tempor gravida metus, est ut. At amet, nibh platea luctus molestie volutpat risus.
                    </textarea>
                  </div>
                  <div class="grid grid-cols-2 gap-4">
                    <div class="form-control mt-2 w-full">
                      <label class="label">
                        <span class="label-text">Website URL</span>
                      </label>
                      <input
                        type="text"
                        disabled
                        value="near.Niftiqet.testnet"
                        class="input bg-base-100/10 w-full"
                      />
                    </div>
                    <div class="form-control mt-2 w-full">
                      <label class="label">
                        <span class="label-text">Community URL</span>
                      </label>
                      <input
                        type="text"
                        disabled
                        value="Obani.testnet"
                        class="input bg-base-100/10 w-full"
                      />
                    </div>
                    <div class="form-control mt-2 w-full">
                      <label class="label">
                        <span class="label-text">Twitter URL</span>
                      </label>
                      <input
                        type="text"
                        disabled
                        value="ehapa.Niftiqet.testnet"
                        class="input bg-base-100/10 w-full"
                      />
                    </div>
                    <div class="form-control mt-2 w-full">
                      <label class="label">
                        <span class="label-text">Instagram URL</span>
                      </label>
                      <input
                        type="text"
                        disabled
                        value="ehapa.Niftiqet.testnet"
                        class="input bg-base-100/10 w-full"
                      />
                    </div>
                    <div class="form-control mt-2 w-full">
                      <label class="label">
                        <span class="label-text">Facebook URL</span>
                      </label>
                      <input
                        type="text"
                        disabled
                        value="ehapa.Niftiqet.testnet"
                        class="input bg-base-100/10 w-full"
                      />
                    </div>
                    <div class="form-control mt-2 w-full">
                      <label class="label">
                        <span class="label-text">Whatsapp URL</span>
                      </label>
                      <input
                        type="text"
                        disabled
                        value="ehapa.Niftiqet.testnet"
                        class="input bg-base-100/10 w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                tabindex="0"
                class="collapse mt-4 rounded-2xl bg-base-100/30 collapse-arrow"
              >
                <input type="checkbox" checked />
                <div class="collapse-title text-sm font-bold">Minters</div>
                <div class="collapse-content">
                  <div class="form-control w-full">
                    <label class="label">
                      <span class="label-text">Name of Store</span>
                    </label>
                    <input
                      type="text"
                      disabled
                      value="Radium Animated Monster"
                      class="input bg-base-100/10 w-full"
                    />
                  </div>
                  <div class="form-control mt-2 w-full">
                    <label class="label">
                      <span class="label-text">Store Description</span>
                    </label>
                    <textarea disabled rows="4" class="textarea bg-base-100/10">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor porta ut neque maecenas egestas ornare habitasse amet pellentesque. Lorem libero volutpat augue augue vitae. Elementum et tempor gravida metus, est ut. At amet, nibh platea luctus molestie volutpat risus.
                    </textarea>
                  </div>
                </div>
              </div>
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
