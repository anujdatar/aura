<script setup lang="ts">
const heroImage = '~/../../assets/images/hero_industries.webp'
const heroTitle = 'Catering to major OEMs'
const heroContent = 'Earthmoving and construction, Electrical Systems, Mining and Agricultural Equipment and many more'

const exportImages = [
  {
    src: '~/../../assets/images/exports/exports1.jpg',
    title: 'Exports 1',
  },
  {
    src: '~/../../assets/images/exports/exports2.jpg',
    title: 'Exports 2',
  },
  {
    src: '~/../../assets/images/exports/exports3.jpg',
    title: 'Exports 3',
  },
  {
    src: '~/../../assets/images/exports/exports4.jpg',
    title: 'Exports 4',
  },
  {
    src: '~/../../assets/images/exports/exports5.jpg',
    title: 'Exports 5',
  },
]

onMounted(() => {
  window.scrollTo({
    top: 0,
    left: 0,
  })
})
</script>

<template>
  <aura-hero :image="heroImage" :title="heroTitle" :content="heroContent" />

  <div class="page-content bg-alt">
    <div class="container flex-col">
      <h2 class="heading text-center md:text-left">
        Exports
      </h2>
      <p class="paragraph">
        With a dedicated team working on export requirements, Aura Laserfab has established a customer base in Europe, USA and the Middle East.
      </p>
      <p class="paragraph">
        Our Quality Management systems conform to global standards enabling us to ensure defect free on time delivery.
      </p>
      <p class="paragraph">
        Aura Laser gives special attention to the packing of components to ensure delivery in proper and safe condition. Using 3D cad software our team can ensure optimal container utilization to save shipping costs. All required facilities for container loading are available in-house.
      </p>
      <p class="paragraph">
        With strong technical and commercial expertise Aura Laser intends to enter new markets and cater end to end requirement in Metal Fabrication and Assembly.
      </p>
      <industry-thumbnails name="exports" :images="exportImages" />
    </div>
  </div>
</template>

<style>
</style>

<route lang="yaml">
meta:
  layout: whiteFooter
</route>
