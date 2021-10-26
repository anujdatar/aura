<template>
  <div class="page-content overflow-hidden flex flex-col min-h-screen">
    <aura-hero :title="heroTitle" :content="heroContent" :image-src="heroImage" image-offset="75%" />
    <!-- <aura-timeline /> -->
    <!-- <test-component class="mb-20" /> -->
    <div class="relative bg-blue-gray-200 mt-auto">
      <section-separator color="text-blue-gray-200" />
      <aura-footer />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      heroTitle: 'The Largest Setup of Precision Metal Cutting & Fabrication',
      heroContent: 'CNC Laser Cutting, CNC Plasma Cutting, CNC Bending, CNC Rolling, CNC Straightening, Welding',
      heroImage: require('~/assets/images/hero_capabilities.jpeg')
    }
  },
  head () {
    return { title: 'Industries' }
  },
  mounted () {
    const pageUrl = window.location.href
    const sectionName = pageUrl.split('#')
    const sectionEl = document.getElementById(sectionName[1])

    if (sectionEl) {
      const sectionTop = sectionEl.offsetTop
      const windowHeight = window.innerHeight

      const offsetY = Math.round(sectionTop - windowHeight / 2)

      // scroll to does not work in chrome without a timeout, it fires too early
      setTimeout(() => {
        window.scrollTo({
          top: offsetY,
          left: 0,
          behavior: 'smooth'
        })
      }, 0)
      // setTimeout(() => {
      //   sectionEl.scrollIntoView({
      //     behavior: 'smooth',
      //     block: 'center',
      //     inline: 'center'
      //   })
      // }, 100)
    }
  }
}
</script>

<style>
</style>
