<template>
  <section>
    <about-header />
    <main>
      <section class="home--body about--sect">
        <div class="cto--container container px-4">
          <div class="flex about--container justify-between items-center">
            <div class="left--sect relative">
              <div class="relative z-10">
                <img src="/about-ticket-sect.png" alt="" />
              </div>
            </div>
            <div class="right--sect">
              <h3 class="section--title">TICKETING + WEB3.0</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur. Purus hac aliquet
                feugiat ultrices aliquet cursus sed tempus. Tristique cum
                faucibus viverra diam ut augue diam ullamcorper. Nunc dui
                volutpat purus euismod quis viverra suspendisse. Faucibus sed
                massa in sit.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="home--body how-it-works what--can">
        <div class="cto--container container px-4">
          <div class="how-container">
            <h3 class="sect-title">WHAT CAN YOU DO</h3>
            <div class="how--grid">
              <div class="how--card">
                <h3 class="text-primary">NFT Tickets</h3>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolt
                  sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>
              <div class="how--card">
                <h3 class="text-error">Resale Royalties</h3>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolt
                  sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>
              <div class="how--card">
                <h3 class="text-success">Collectible Content</h3>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolt
                  sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <bottom-c-t-o />
  </section>
</template>
<script>
import AboutHeader from '@/components/aboutpage/AboutHeader'
export default {
  components: { AboutHeader },
  colorMode: 'dark',
  layout: 'info',
  mounted() {
    console.log('colormode', this)
  },
}
</script>
<style lang="scss"></style>
