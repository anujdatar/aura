<template>
  <div class="page-content overflow-hidden">
    <aura-hero :title="heroTitle" :content="heroContent" :image-src="heroImage">
      <span>in</span>
    </aura-hero>
    <div class="container md:flex-row flex-col relative -mt-24 items-center">
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
    <div class="container mt-30 mb-30">
      <div class="flex md:flex-row flex-col justify-center">
        <img src="~/assets/images/factory.jpg" alt="factory-image" class="md:max-w-1/2 rounded-xl mx-auto md:mr-6">
        <div class="flex flex-col">
          <h2 class="font-semibold text-3xl text-blue-gray-700 mb-2 md:text-right text-center">
            An ISO 9001:2015 certified company
          </h2>
          <p class="home-info-text hidden lg:block">
            Situated near Pune, the engineering Capital of India, Aura LaserFab offers both manufacturing and job shopping services in the field of CNC Laser Cutting and Sheet Metal Fabrication.
          </p>
          <p class="home-info-text">
            Equipped with the latest machines for CNC Laser Cutting, Bending, and Fabrication, Aura manufactures a large variety of components with a mix of volumes. Using contemporary techniques we deliver components in shorter lead time meeting universally acceptable quality standards. We manufacture products ranging from precise laser cut–bend components to complex welded and painted assemblies using a variety of raw materials like carbon steel, stainless steel, aluminium, and special steels.
          </p>
        </div>
      </div>
    </div>
    <div class="relative bg-white pb-12">
      <the-slant />
      <div class="container mt-30 mb-30 pt-12">
        <div class="flex md:flex-row flex-col-reverse justify-center">
          <div class="flex flex-col">
            <h2 class="font-semibold text-2xl text-blue-gray-700 mb-2 md:text-left text-center">
              Our Team
            </h2>
            <p class="home-info-text">
              The Core Team of over 75 qualified engineers and technicians, have a strong and diverse experience in of design & development, engineering, operations, project management and quality assurance.
            </p>
            <p class="home-info-text">
              Aura Laser has presently spearheaded a major up scaling of its capacity in Metal Cutting &amp; fabrication with addition of workspace area, machineries like CNC Plasma Cutting, CNC Straightening, CNC Rolling and Robotic Welding to support its multi segmental growth.
            </p>
          </div>
          <img src="~/assets/images/team.jpg" alt="team-image" class="md:max-w-1/2 rounded-xl mx-auto md:ml-6">
        </div>
      </div>
      <!-- <div class="container flex-col pb-18">
        <h2 class="text-2xl block text-blue-gray-700 font-semibold text-center">
          Our Clients
        </h2>
        <div class="flex flex-row flex-wrap items-center justify-center">
          <div v-for="i in 14" :key="i" class="p-2">
            <client-logo :image="i" />
          </div>
        </div>
      </div> -->
    </div>
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
      heroTitle: 'Pioneer & Leader',
      heroContent: 'Precision Laser Cutting and Sheet Metal Fabrication',
      heroImage: require('~/assets/images/hero_home.jpeg'),
      card1: {
        color: 'bg-red-300',
        title: 'Precision Metal Cutting & Fabrication',
        content: 'The largest setup for CNC laser cutting, bending, rolling, straightening and welding.',
        image: require('~/assets/images/card_images/trumpf.jpg')
      },
      card2: {
        color: 'bg-blue-300',
        title: 'A Complete Solution In Metal Fabrication & Assembly',
        content: 'MIG/MAG/TIG Welding, CNC Machining, Painting, Powder Coating and Assembly.',
        image: require('~/assets/images/card_images/fixture.jpg')
      },
      card3: {
        color: 'bg-green-300',
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
.container {
  @apply max-w-screen-lg;
  @apply flex;
  @apply mx-auto;
  @apply w-3/4;
  @apply md:w-auto;
  @apply px-8;
}
.page-content {
  @apply -mt-24
}
.home-info-text {
  @apply text-blue-gray-500;
  @apply mb-2;
  @apply text-justify;
}
</style>
