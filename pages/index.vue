<template>
  <div class="bg-white page-content overflow-hidden">
    <div class="w-full h-24 absolute top-0 border-b-6 border-accent" />
    <div class="photo-grid-div relative mt-24 mb-30">
      <photo-grid />
    </div>
    <div class="container page-content md:flex-row flex-col relative items-center pt-20">
      <home-card
        :card-title="card1.title"
        :card-content="card1.content"
        :card-image="card1.image"
      />
      <home-card
        :card-title="card2.title"
        :card-content="card2.content"
        :card-image="card2.image"
      />
      <home-card
        :card-title="card3.title"
        :card-content="card3.content"
        :card-image="card3.image"
      />
    </div>
    <div class="relative bg-alt pb-12">
      <section-separator color="text-alt" />
      <div class="container pt-12">
        <div class="container-inner">
          <img
            src="~/assets/images/factory.jpg"
            alt="factory-image"
            class="md:max-w-1/2 rounded-xl mx-auto md:mr-6"
          >
          <div class="flex flex-col">
            <h2 class="heading text-center md:text-right">
              An ISO 9001:2015 certified company
            </h2>
            <p class="paragraph hidden lg:block">
              Situated near Pune, the engineering Capital of India, Aura LaserFab
              offers both manufacturing and job shopping services in the field of
              CNC Laser Cutting and Sheet Metal Fabrication.
            </p>
            <p class="paragraph">
              Equipped with the latest machines for CNC Laser Cutting, Bending,
              and Fabrication, Aura manufactures a large variety of components
              with a mix of volumes. Using contemporary techniques we deliver
              components in shorter lead time meeting universally acceptable
              quality standards. We manufacture products ranging from precise
              laser cut–bend components to complex welded and painted assemblies
              using a variety of raw materials like carbon steel, stainless steel,
              aluminium, and special steels.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="relative bg-white mt-auto">
      <section-separator color="text-white" />
      <aura-footer />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      heroTitle: 'Pioneer & Leader',
      heroContent: 'Precision Laser Cutting and Sheet Metal Fabrication',
      heroImage: require('~/assets/images/hero_home.jpeg'),
      card1: {
        title: 'Latest Technology in Metal Cutting and Fabrication',
        content: 'Nimble Manufacturing Processes to Cater to Variety and Complexity',
        image: require('~/assets/images/card_images/trumpf.jpg')
      },
      card2: {
        title: 'Strong Engineering Base',
        content: 'Fast Product Development and cost effective engineering solutions',
        image: require('~/assets/images/card_images/fixture.jpg')
      },
      card3: {
        title: 'Partnering in Customer\'s progress',
        content: 'Customer centric and system dependant method of working',
        image: require('~/assets/images/card_images/tractor.jpg')
      }
    }
  },
  head () {
    return { title: 'Home' }
  },
  mounted () {
    const navbar = document.querySelector('nav')
    navbar.classList.remove('text-white')
    navbar.classList.add('text-primary')
  },
  destroyed () {
    const navbar = document.querySelector('nav')
    navbar.classList.add('text-white')
    navbar.classList.remove('text-primary')
  }
}
</script>

<style>
.page-content {
  @apply -mt-24 !important;
}
.container {
  @apply max-w-screen-lg;
  @apply flex;
  @apply mx-auto;
  @apply w-3/4;
  @apply md:w-auto;
  @apply px-8;
  @apply mt-30;
  @apply mb-30;
}
.container-inner {
  @apply flex;
  @apply flex-col;
  @apply md:flex-row;
  @apply justify-center;
  @apply items-center;
  @apply text-justify;
}
.heading {
  @apply font-semibold;
  @apply text-3xl;
  @apply text-primary;
  @apply mb-2;
  /* @apply text-center; */
}
.sub-heading {
  @apply font-semibold;
  @apply text-xl;
  @apply text-primary;
}
.paragraph {
  @apply text-secondary;
  @apply mb-2;
  @apply text-justify;
}
.photo-grid-div {
  height: calc(100vh - 6rem);
}
</style>
