<template>
  <div class="page-content overflow-hidden">
    <div class="bg-primary w-full h-24 absolute top-0" />
    <div class="home-heading w-full relative mt-26 mb-6 text-center">
      <h1 class="heading">
        Pioneer &amp; Leader
      </h1>
      <h3 class="sub-heading">
        in
      </h3>
      <p class="sub-heading">
        Precision Laser Cutting and Sheet Metal Fabrication
      </p>
    </div>
    <div class="relative mb-30">
      <photo-grid />
    </div>
    <div class="container page-content md:flex-row flex-col relative items-center pt-20">
      <home-card
        :card-title="card1.title"
        :card-content="card1.content"
        :card-image="card1.image"
        class="md:mt-8"
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
        class="md:mt-12"
      />
    </div>
    <div class="relative bg-white pb-12">
      <section-separator />
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
    <div class="relative bg-alt mt-auto">
      <section-separator color="text-alt" />
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
        title: 'Precision Metal Cutting & Fabrication',
        content: 'The largest setup for CNC laser cutting, bending, rolling, straightening and welding.',
        image: require('~/assets/images/card_images/trumpf.jpg')
      },
      card2: {
        title: 'A Complete Solution In Metal Fabrication & Assembly',
        content: 'MIG/MAG/TIG Welding, CNC Machining, Painting, Powder Coating and Assembly.',
        image: require('~/assets/images/card_images/fixture.jpg')
      },
      card3: {
        title: 'Catering to major OEMs',
        content: 'Earthmoving and construction, Electrical Systems, Agricultural Equipment, Textile Machinery, Packing Machines and many more.',
        image: require('~/assets/images/card_images/tractor.jpg')
      }
    }
  },
  head () {
    return { title: 'Home' }
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
</style>
