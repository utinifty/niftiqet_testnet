<template>
  <section class="">
    <header
      class="page--header events flex flex-col justify-center items-center"
    >
      <div class="container flex flex-col justify-center">
        <h4>Explore Collections</h4>
        <div class="text-sm breadcrumbs">
          <ul>
            <li><nuxt-link to="/">Home</nuxt-link></li>
            <li>Resources</li>
            <li class="text-primary">Collection Items</li>
          </ul>
        </div>
      </div>
    </header>
    <main>
      <section class="ticket--details mt-12">
        <div class="container">
          <div class="ticket--data sticky top-0">
            <collection />
          </div>
          <div class="ticket--data sticky top-0">
            <div class="card">
              <div class="card-body">
                <h3 class="collection--title">Black Diamond</h3>
                <p class="text-primary">On sale for 0.5 NEAR</p>
                <p class="my-3">
                  At Black Diamond, we're building a world-class entertainment
                  platform, inviting children into a world of hope and God's
                  truth. This is our Genesis RhymVerse Heroes NFT launch
                  featuring
                </p>
                <div class="info--tabs">
                  <b-tabs type="is-toggle" expanded>
                    <b-tab-item label="Info">
                      <div class="info--tab">
                        <div class="user--grid grid-cols-2 grid gap-4">
                          <div class="grid grid-cols-2 gap-4">
                            <div class="avatar--left">
                              <img
                                class="rounded-2xl"
                                src="https://placeimg.com/192/192/people"
                                alt=""
                              />
                            </div>
                            <div class="flex justify-center flex-col">
                              <span>Created By</span>
                              <h4 class="mt-5 font-bold">Hank Washington</h4>
                            </div>
                          </div>
                          <div class="grid grid-cols-2 gap-4">
                            <div class="avatar--left">
                              <img
                                class="rounded-2xl"
                                src="https://placeimg.com/192/192/people"
                                alt=""
                              />
                            </div>
                            <div class="flex justify-center flex-col">
                              <span>Collections</span>
                              <h4 class="mt-5 font-bold">Hank Washington</h4>
                            </div>
                          </div>
                        </div>
                        <div class="mt-8">
                          <h3 class="text-lg">Category</h3>
                          <div class="mt-3">
                            <div class="grid grid-cols-3 gap-4">
                              <button class="btn btn-outline border font-bold">
                                Technology Submit
                              </button>
                              <button class="btn btn-outline border font-bold">
                                Technology Submit
                              </button>
                              <button class="btn btn-outline border font-bold">
                                Technology Submit
                              </button>
                            </div>
                          </div>
                          <h3 class="mt-5">Splits</h3>
                          <div class="divider my-3"></div>
                          <div class="info--grid">
                            <div class="royalties">
                              <div class="info--stuf">
                                <div class="inf--circ"></div>
                                <span>Forever Royalties</span>
                                <div class="inf--size">0%</div>
                              </div>
                              <div class="line--rule"></div>
                            </div>
                            <div class="split">
                              <div class="info--stuf">
                                <div class="inf--circ"></div>
                                <span>Split Values</span>
                                <div class="inf--size">0%</div>
                              </div>
                              <div class="line--rule"></div>
                            </div>
                            <div class="market">
                              <div class="info--stuf">
                                <div class="inf--circ"></div>
                                <span>Market</span>
                                <div class="inf--size">0%</div>
                              </div>
                              <div class="line--rule"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </b-tab-item>
                    <b-tab-item label="Owners">
                      <div class="owner--tab">
                        <div class="user--grid grid w-1/2 gap-4">
                          <div class="grid grid-cols-2 gap-4">
                            <div class="avatar--left">
                              <img
                                class="rounded-2xl"
                                src="https://placeimg.com/192/192/people"
                                alt=""
                              />
                            </div>
                            <div class="flex justify-center flex-col">
                              <span>Created By</span>
                              <h4 class="mt-5 font-bold">Hank Washington</h4>
                            </div>
                          </div>
                          <div class="grid grid-cols-2 gap-4">
                            <div class="avatar--left">
                              <img
                                class="rounded-2xl"
                                src="https://placeimg.com/192/192/people"
                                alt=""
                              />
                            </div>
                            <div class="flex justify-center flex-col">
                              <span>Collections</span>
                              <h4 class="mt-5 font-bold">Hank Washington</h4>
                            </div>
                          </div>
                          <div class="grid grid-cols-2 gap-4">
                            <div class="avatar--left">
                              <img
                                class="rounded-2xl"
                                src="https://placeimg.com/192/192/people"
                                alt=""
                              />
                            </div>
                            <div class="flex justify-center flex-col">
                              <span>Collections</span>
                              <h4 class="mt-5 font-bold">Hank Washington</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </b-tab-item>
                    <b-tab-item label="History">
                      <div class="history--tab">
                        <div class="user--grid grid w-1/2 gap-4">
                          <div class="grid grid-cols-2 gap-4">
                            <div class="avatar--left">
                              <img
                                class="rounded-2xl"
                                src="https://placeimg.com/192/192/people"
                                alt=""
                              />
                            </div>
                            <div class="flex justify-center flex-col">
                              <span>Minted a bid 265.7 WETH by User_02</span>
                              <h4 class="mt-5 font-bold">
                                ehapa.Niftiqet.testnet
                              </h4>
                            </div>
                          </div>
                          <div class="grid grid-cols-2 gap-4">
                            <div class="avatar--left">
                              <img
                                class="rounded-2xl"
                                src="https://placeimg.com/192/192/people"
                                alt=""
                              />
                            </div>
                            <div class="flex justify-center flex-col">
                              <span>Minted a bid 265.7 WETH by User_02</span>
                              <h4 class="mt-5 font-bold">
                                ehapa.Niftiqet.testnet
                              </h4>
                            </div>
                          </div>
                          <div class="grid grid-cols-2 gap-4">
                            <div class="avatar--left">
                              <img
                                class="rounded-2xl"
                                src="https://placeimg.com/192/192/people"
                                alt=""
                              />
                            </div>
                            <div class="flex justify-center flex-col">
                              <span>Minted a bid 265.7 WETH by User_02</span>
                              <h4 class="mt-5 font-bold">
                                ehapa.Niftiqet.testnet
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </b-tab-item>
                  </b-tabs>
                  <div
                    class="info--breakdown flex flex-wrap border-2 rounded-2xl mt-12"
                  >
                    <div class="w-1/2 pt-16 px-5 pb-5">
                      <div class="">
                        <span>Current Price:</span>
                        <div class="flex items-end mt-3">
                          <h3 class="text-primary text-3xl mr-3">31.42 NEAR</h3>
                          <span class="text-sm pb-1 block font-bold"
                            >$98,653.74</span
                          >
                        </div>
                      </div>
                    </div>
                    <div class="w-1/2 py-16 pt-16 px-5 pb-5">
                      <div class="">
                        <span>Close In:</span>
                        <div class="flex items-end mt-3">
                          <h3 class="text-primary text-3xl mr-3">21/12/2022</h3>
                        </div>
                      </div>
                    </div>
                    <div class="w-full flex justify-center p-10">
                      <nif-btn>Buy with NEAR </nif-btn>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="more--events my-12">
        <div class="container text--heading font-bold">
          More from this Contract
        </div>
        <div class="cto--container container mt-8">
          <event-card />
          <event-card />
          <event-card />
        </div>
      </section>
    </main>
  </section>
</template>

<script>
export default {
  name: 'index',
}
</script>

<style lang="scss">
.collection--title {
  font-size: 2rem;
  font-weight: bold;
}
.info--tabs {
  width: 100%;
  .tabs {
    padding: 15px 30px;
    background: hsla(var(--s) / 0.7);
    width: 100%;
    ul {
      display: grid;
      grid-gap: 25px;
      grid-template-columns: auto auto auto auto;
      width: 100%;
      li {
        a {
          border-radius: 8px !important;
          transition: 0.3s ease-in-out;
          &:hover,
          &:active,
          &:focus {
            background: hsl(var(--p)) !important;
            color: hsl(var(--bc)) !important;
            border-width: 0;
          }
        }
        &.is-active {
          a {
            border-width: 0;
            background: hsl(var(--p)) !important;
            color: hsl(var(--bc));
          }
        }
      }
    }
  }
}
.info--breakdown {
  border: solid 1px;
  & > div {
    &:first-of-type {
      border-right: solid 1px;
    }
    &:last-of-type {
      border-top: solid 1px;
    }
  }
}
.info--tab,
.owner--tab,
.history--tab {
  padding: 20px 0;
}
</style>
