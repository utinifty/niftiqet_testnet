<template>
  <section>
    <header
      class="page--header events flex flex-col justify-center items-center"
    >
      <div class="container flex flex-col justify-center">
        <h4>Explore Collections</h4>
        <div class="text-sm breadcrumbs">
          <ul>
            <li><nuxt-link to="/">Home</nuxt-link></li>
            <li>Resources</li>
            <li class="text-primary">Collections</li>
          </ul>
        </div>
      </div>
    </header>
    <main>
      <section class="home--body">
        <div class="cto--container container px-4 min-h-screen">
          <collection-grid />
          <div class="flex pagination justify-center mt-16">
            <div class="btn-group">
              <button class="btn">Previous</button>
              <button class="btn">1</button>
              <button class="btn">2</button>
              <button class="btn">3</button>
              <button class="btn">Next</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  </section>
</template>

<style lang="scss"></style>
