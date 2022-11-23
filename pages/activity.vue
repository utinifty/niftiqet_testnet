<template>
  <section>
    <header
      class="page--header events flex flex-col justify-center items-center"
    >
      <div class="container flex flex-col justify-center">
        <h4>Activity</h4>
        <div class="text-sm breadcrumbs">
          <ul>
            <li><nuxt-link to="/">Home</nuxt-link></li>
            <li><nuxt-link to="/profile">Profile</nuxt-link></li>
            <li class="text-primary">Activity</li>
          </ul>
        </div>
      </div>
    </header>
    <main>
      <section class="home--body">
        <div class="cto--container container px-4 min-h-screen">
          <div class="ticket--set">
            <div class="grid--collection">
              <div class="flex justify-between items-center">
                <h3 class="font-bold">Ticket Activities</h3>
                <!--                <select
                  class="select bg-base-100/30 text-base-content w-full max-w-xs"
                >
                  <option disabled selected></option>
                  <option>Newest</option>
                  <option>VVIP</option>
                  <option>COUPLES</option>
                </select>-->
                <b-field label="Sorted By" label-position="inside">
                  <b-select placeholder="Sorted By">
                    <option value="0">Newest</option>
                    <option value="1">Oldest</option>
                    <option value="2">Popular</option>
                  </b-select>
                </b-field>
              </div>
              <div class="activity--list">
                <event-activity />
                <event-activity />
                <event-activity />
                <event-activity />
              </div>
            </div>
            <div class="ticket--data sticky top-0">
              <div class="card mb-4">
                <div class="card-body">
                  <div class="form-control">
                    <div class="input-group">
                      <input
                        type="text"
                        placeholder="Search…"
                        class="input input-bordered"
                      />
                      <button class="btn def--btn">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-body">
                  <h2 class="header-title font-bold">Filter</h2>
                  <b-field grouped group-multiline>
                    <p class="control">
                      <b-button label="Listing" />
                    </p>
                    <p class="control">
                      <b-button label="Sales" />
                    </p>
                    <p class="control">
                      <b-button label="Burn" />
                    </p>
                    <p class="control">
                      <b-button label="Bought" />
                    </p>
                    <p class="control">
                      <b-button label="Likes" />
                    </p>
                    <p class="control">
                      <b-button label="Followers" />
                    </p>
                    <p class="control">
                      <b-button label="Following" />
                    </p>
                    <p class="control">
                      <b-button label="Transfer" />
                    </p>
                    <p class="control">
                      <b-button label="Live" />
                    </p>
                  </b-field>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </section>
</template>

<style lang="scss"></style>
