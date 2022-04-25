<script setup lang="ts">
const heroImage = 'assets/images/hero_exports.webp'
const heroTitle = 'Manufacturing for the World'
const heroContent = ''
const heroGradient = [0.4, 0.2]

const exportImages = [
  {
    src: 'assets/images/exports/exports1.jpg',
    title: 'Exports 1',
  },
  {
    src: 'assets/images/exports/exports2.jpg',
    title: 'Exports 2',
  },
  {
    src: 'assets/images/exports/exports3.jpg',
    title: 'Exports 3',
  },
  // {
  //   src: 'assets/images/exports/exports4.jpg',
  //   title: 'Exports 4',
  // },
  {
    src: 'assets/images/exports/exports5.jpg',
    title: 'Exports 5',
  },
  {
    src: 'assets/images/exports/exports6.webp',
    title: 'Exports 6',
  },
  {
    src: 'assets/images/exports/exports7.webp',
    title: 'Exports 7',
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
  <aura-hero :image="heroImage" :title="heroTitle" :content="heroContent" :gradient="heroGradient" />

  <div class="page-content bg-alt">
    <div class="container flex-col-reverse md:flex-row">
      <div class="exports-images flex flex-wrap justify-between items-center">
        <img
          v-for="(image, i) in exportImages"
          :key="i"
          :src="image.src"
          :alt="image.title"
        >
      </div>
      <div class="exports-text">
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
      </div>
    </div>
  </div>
</template>

<style>
.exports-text {
  width: 100%;
  margin-bottom: 3rem;
  margin-left: 0rem;
}

.exports-images {
  width: 100%;
  gap: 1rem;
}
.exports-images img {
  max-width: 45%;
  border-radius: 1rem;
}
@media (min-width: 768px) {
  .exports-text {
    width: 50%;
    margin-left: 2rem;
    margin-bottom: 0rem;
  }
  .exports-images {
    width: 50%;
  }
}
</style>

<route lang="yaml">
meta:
  layout: whiteFooter
</route>
