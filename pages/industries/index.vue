<template>
  <div class="page-content overflow-hidden flex flex-col min-h-screen">
    <aura-hero :title="heroTitle" :content="heroContent" :image-src="heroImage" image-offset="75%" />
    <!-- <aura-timeline /> -->
    <!-- <test-component class="mb-20" /> -->
    <div class="relative bg-blue-gray-200 mt-auto">
      <the-slant color="text-blue-gray-200" />
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
  }
}
</script>

<style>
</style>
