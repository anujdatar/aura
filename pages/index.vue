<template>
  <div class="-mt-13 overflow-hidden">
    <div class="w-screen relative flex content-center items-center justify-center min-h-screen-100 border">
      <div id="home-hero" class="absolute inline-block w-full h-full top-0 bg-center bg-cover pt-16 pb-32" />
      <div class="container flex flex-col absolute top-36">
        <h1 class="text-3xl font-semibold text-white text-center opacity-100">
          The Largest Setup of Precision Metal Cutting &amp; Fabrication
        </h1>
        <p class="text-md text-blue-gray-200 text-center">
          CNC Laser Cutting, CNC Plasma Cutting, CNC Bending, CNC Rolling, CNC Straightening, Welding
        </p>
      </div>
    </div>
    <div class="container flex md:flex-row flex-col z-25 relative mx-auto -mt-24 items-center">
      <home-card
        :card-title="card1.title"
        :card-content="card1.content"
        class="md:mt-8"
      >
        <img src="~/assets/images/card_images/trumpf.jpg" alt="" class="w-20 h-20 rounded-lg">
        <!-- <laser-icon /> -->
      </home-card>
      <home-card
        :card-title="card2.title"
        :card-content="card2.content"
      >
        <img src="~/assets/images/card_images/fixture.jpg" alt="" class="w-20 h-20 rounded-lg">
        <!-- <anvil-icon /> -->
      </home-card>
      <home-card
        :card-title="card3.title"
        :card-content="card3.content"
        class="md:mt-12"
      >
        <!-- <bulldozer-icon /> -->
        <img src="~/assets/images/card_images/tractor.jpg" alt="" class="w-20 h-20 rounded-lg">
      </home-card>
    </div>
    <div class="container flex mt-30 mb-30 mx-auto px-8 w-3/4 md:w-auto">
      <div class="flex md:flex-row flex-col justify-center">
        <img src="~/assets/images/factory.jpg" alt="factory-image" class="md:max-w-1/2 rounded-xl mx-auto md:mr-6">
        <div class="flex flex-col">
          <h2 class="font-semibold text-2xl text-blue-gray-700 mb-2 md:text-right text-center">
            An ISO 9001:2008 certified company
          </h2>
          <p class="home-info-text hidden lg:block">
            Situated near Pune, the engineering Capital of India, Aura LaserFab offers both manufacturing and job shopping services in the field of CNC Laser Cutting Services.
          </p>
          <p class="home-info-text">
            Equipped with the latest machines for CNC Laser Cutting, Bending, and Fabrication, Aura manufactures a large variety of components with a mix of volumes. Using contemporary techniques we deliver components in shorter lead time meeting universally acceptable quality standards. We manufacture products ranging from a precise laser cut–bent component to a complex welded and painted assembly using a variety of raw materials like carbon steel, stainless steel, aluminium, and special steels.
          </p>
        </div>
      </div>
    </div>

    <div class="relative bg-white">
      <the-slant />
      <div class="container flex mt-30 mb-30 mx-auto px-8 pt-12 w-3/4 md:w-auto">
        <div class="flex md:flex-row flex-col-reverse justify-center">
          <div class="flex flex-col">
            <h2 class="font-semibold text-2xl text-blue-gray-700 mb-2 md:text-left text-center">
              Our Team
            </h2>
            <p class="home-info-text">
              Aura's team comprising of 100+ qualified engineers and technicians, possesses a strong experience in the domains of development, marketing, engineering operations, projects and quality assurance.
            </p>
            <p class="home-info-text">
              Aura Laser has presently spearheaded a major up scaling of its capacity in Metal Cutting &amp; fabrication with addition of workspace area, machineries like CNC Plasma Cutting, CNC Straightening, CNC Rolling and Robotic Welding to support its multi segmental growth.
            </p>
          </div>
          <img src="~/assets/images/team.jpg" alt="team-image" class="md:max-w-1/2 rounded-xl mx-auto md:ml-6">
        </div>
      </div>
      <div class="container flex flex-col mx-auto p-8 pb-18">
        <h2 class="text-2xl block text-blue-gray-700 font-semibold text-center">
          Our Clients
        </h2>
        <div class="flex flex-row flex-wrap items-center justify-center">
          <div v-for="i in 14" :key="i" class="p-2">
            <client-logo :image="i" />
          </div>
        </div>
      </div>
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
      card1: {
        color: 'bg-red-300',
        title: 'Precision Metal Cutting & Fabrication',
        content: 'The largest setup for CNC laser and plasma cutting, bending, rolling, straightening and welding.'
      },
      card2: {
        color: 'bg-blue-300',
        title: 'A Complete Solution',
        content: 'In Metal Fabrication and Assembly. MIG/MAG/TIG Welding, CNC Machining, Painting, Powder Coating and Assembly.'
      },
      card3: {
        color: 'bg-green-300',
        title: 'Catering to major OEMs',
        content: 'Earthmoving and construction, Agricultural Equipment, Electrical Systems, Textile Machinery, Packing Machines and many more.'
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
}
.home-info-text {
  @apply text-sm;
  @apply text-blue-gray-500;
  @apply mb-2;
  @apply text-justify;
}
#home-hero {
  background-image: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url('~/assets/images/hero_home.jpeg');
  clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
}
</style>
