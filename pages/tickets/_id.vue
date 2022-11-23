<template>
  <section class="tickets--body">
    <header
      class="page--header tickets flex flex-col justify-center container items-center"
    >
      <div class="container flex flex-col justify-center">
        <img
          src="https://placeimg.com/400/225/arch"
          class="ticket--img"
          alt="Ticket Image"
        />
      </div>
    </header>
    <main>
      <section class="ticket--details mt-12">
        <div class="container">
          <div class="ticket--data sticky top-0">
            <div class="card">
              <div class="card-body">
                <h2 class="card-title">The Big Spring</h2>
                <div class="divider my-3"></div>
                <div class="form-control w-full">
                  <label class="label px-0">
                    <span class="label-text">Price</span>
                    <span class="label-text-alt">2 / 24 Available</span>
                  </label>
                  <div class="near--data flex font-bold items-center">
                    <i class="cf cf-near mr-2"></i>
                    2.29 NEAR ($ 6,227.15)
                  </div>
                </div>
                <p>Ends In:</p>
                <div
                  class="uk-grid-small uk-child-width-auto sale--countdown"
                  uk-grid
                  uk-countdown="date: 2022-10-17T19:37:28+00:00"
                >
                  <div>
                    <div class="uk-countdown-number uk-countdown-days"></div>
                    <div
                      class="uk-countdown-label uk-margin-small uk-text-center uk-visible@s"
                    >
                      Days
                    </div>
                  </div>
                  <div>
                    <div class="uk-countdown-number uk-countdown-hours"></div>
                    <div
                      class="uk-countdown-label uk-margin-small uk-text-center uk-visible@s"
                    >
                      Hours
                    </div>
                  </div>
                  <div>
                    <div class="uk-countdown-number uk-countdown-minutes"></div>
                    <div
                      class="uk-countdown-label uk-margin-small uk-text-center uk-visible@s"
                    >
                      Minutes
                    </div>
                  </div>
                  <div>
                    <div class="uk-countdown-number uk-countdown-seconds"></div>
                    <div
                      class="uk-countdown-label uk-margin-small uk-text-center uk-visible@s"
                    >
                      Seconds
                    </div>
                  </div>
                </div>
                <div class="form-control mt-2 w-full relative">
                  <b-field label="Quantity" class="primary-btns relative">
                    <b-numberinput :placeholder="2"></b-numberinput>
                  </b-field>
                </div>
                <div class="w-full flex justify-center mt-12">
                  <nif-btn>Buy with NEAR </nif-btn>
                </div>
              </div>
            </div>
          </div>
          <div class="ticket--data sticky top-0">
            <div class="card">
              <div class="card-body">
                <b-tabs class="block w-full">
                  <b-tab-item label="About">
                    <div class="form-control w-full">
                      <label class="label">
                        <span class="label-text">Ticket Name</span>
                      </label>
                      <input
                        type="text"
                        disabled
                        value="The Big Spring"
                        class="input bg-base-100/10 w-full"
                      />
                    </div>
                    <div class="form-control mt-2 w-full">
                      <label class="label">
                        <span class="label-text">Ticket Description</span>
                      </label>
                      <textarea
                        disabled
                        rows="3"
                        class="textarea bg-base-100/10"
                      >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </textarea
                      >
                    </div>
                    <div class="grid grid-cols-2 gap-4">
                      <div class="form-control mt-2 w-full">
                        <label class="label">
                          <span class="label-text">Store</span>
                        </label>
                        <input
                          type="text"
                          disabled
                          value="Near.Niftiqet.testnet"
                          class="input bg-base-100/10 w-full"
                        />
                      </div>
                      <div class="form-control mt-2 w-full">
                        <label class="label">
                          <span class="label-text">Created By</span>
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
                          <span class="label-text">Owner</span>
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
                          <span class="label-text">Minted Ticket</span>
                        </label>
                        <input
                          type="text"
                          disabled
                          value="24"
                          class="input bg-base-100/10 w-full"
                        />
                      </div>
                      <div class="form-control mt-2 w-full">
                        <label class="label">
                          <span class="label-text">Listed Nft Tickets</span>
                        </label>
                        <input
                          type="text"
                          disabled
                          value="1"
                          class="input bg-base-100/10 w-full"
                        />
                      </div>
                      <div class="form-control mt-2 w-full">
                        <label class="label">
                          <span class="label-text">Token ID</span>
                        </label>
                        <input
                          type="text"
                          disabled
                          value="#2"
                          class="input bg-base-100/10 w-full"
                        />
                      </div>
                      <div class="form-control mt-2 w-full">
                        <label class="label">
                          <span class="label-text">Type</span>
                        </label>
                        <input
                          type="text"
                          disabled
                          value="Image"
                          class="input bg-base-100/10 w-full"
                        />
                      </div>
                      <div class="form-control mt-2 w-full">
                        <label class="label">
                          <span class="label-text">Price Category</span>
                        </label>
                        <select class="select w-full" disabled>
                          <option disabled selected>VIP</option>
                          <option>Homer</option>
                        </select>
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
                  </b-tab-item>
                  <b-tab-item label="Details">
                    <div class="form-control w-full">
                      <label class="label">
                        <span class="label-text">Transation ID</span>
                      </label>
                      <input
                        type="text"
                        disabled
                        value="0x91a6dF52aA476378198422C922178560a5400E43"
                        class="input bg-base-100/10 w-full"
                      />
                    </div>
                    <div class="form-control mt-2 w-full">
                      <label class="label">
                        <span class="label-text">Ticket ID</span>
                      </label>
                      <input
                        type="text"
                        disabled
                        value="ip7TBJuBu5syNihxnkwumVFGxthSx7JxdJFHCul74PY:ehapa.Niftiqet2.testnet"
                        class="input bg-base-100/10 w-full"
                      />
                    </div>
                    <div class="form-control mt-2 w-full">
                      <label class="label">
                        <span class="label-text">Contract</span>
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
                        <span class="label-text">Storage Gateway</span>
                      </label>
                      <input
                        type="text"
                        disabled
                        value="Obani.testnet"
                        class="input bg-base-100/10 w-full"
                      />
                    </div>
                  </b-tab-item>
                </b-tabs>
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
        <div class="flex justify-center mt-8">
          <div class="grid grid-cols-2 gap-4">
            <button class="btn btn-outline border font-bold">See Store</button>
            <button class="btn btn-outline border font-bold">
              Smart Contract
            </button>
          </div>
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

<style lang="scss"></style>
