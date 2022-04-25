<script setup lang="ts">
const card1 = {
  title: 'Latest Technology in Metal Cutting and Fabrication',
  content: 'Nimble Manufacturing Processes to Cater to Variety and Complexity',
  image: 'assets/images/card_images/trumpf.jpg',
}
const card2 = {
  title: 'Strong Engineering Base',
  content: 'Fast Product Development and cost effective engineering solutions',
  image: 'assets/images/card_images/fixture.jpg',
}
const card3 = {
  title: 'Partnering in Customer\'s progress',
  content: 'Customer centric and system dependant method of working',
  image: 'assets/images/card_images/tractor.jpg',
}

const clients = [
  'assets/images/clients/crompton.webp',
  'assets/images/clients/jcb.webp',
  'assets/images/clients/l_and_t.webp',
  'assets/images/clients/mahindra.webp',
  'assets/images/clients/metso.webp',
  'assets/images/clients/siemens.webp',
]

onMounted(() => {
  window.scrollTo({
    top: 0,
    left: 0,
  })
})
</script>

<template>
  <div class="home-nav-border w-full h-navbar absolute top-0" />
  <photo-grid />
  <div class="container home-card-div flex-col md:flex-row justify-center items-center">
    <home-card
      data-aos="fade-up"
      data-aos-duration="500"
      data-aos-mirror="true"
      data-aos-anchor-placement="center-bottom"
      :card-title="card1.title"
      :card-content="card1.content"
      :card-image="card1.image"
    />
    <home-card
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-mirror="true"
      data-aos-anchor-placement="center-bottom"
      :card-title="card2.title"
      :card-content="card2.content"
      :card-image="card2.image"
    />
    <home-card
      data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-mirror="true"
      data-aos-anchor-placement="center-bottom"
      :card-title="card3.title"
      :card-content="card3.content"
      :card-image="card3.image"
    />
  </div>
  <section-separator color="text-alt" />
  <div class="w-full bg-alt">
    <div class="container flex-col">
      <div class="flex flex-col md:flex-row justify-center items-center text-justify">
        <img
          src="assets/images/factory.jpg"
          alt="factory-image"
          class="factory-image shadow-black shadow-xl"
          data-aos="fade-right"
        >
        <div class="flex flex-col" data-aos="fade-left">
          <h2 class="heading home-about">
            An ISO 9001:2015 certified company
          </h2>
          <p class="paragraph">
            Situated near Pune, the engineering Capital of India, Aura Laserfab offers both manufacturing and job shopping services in the field of Laser Cutting &amp; Sheet Metal Fabrication.
          </p>
          <p class="paragraph">
            Equipped with the latest technology in Laser Cutting, Bending and Fabrication, Aura manufactures a large variety of components with a mix of volumes. With the use of contemporary techniques of operations management we can deliver components in shorter lead time meeting universally acceptable quality standards. We manufacture products ranging from a precise laser cut&#x002d;bend component to a complex welded, machined and painted assembly using a variety of raw materials like carbon steel, stainless steel, aluminium, and special steels.
          </p>
          <p class="paragraph">
            With a variety of machinery like Laser Cutting, Levelling, Press brakes, Rolling, Robotic Welding, and Vertical Milling Machine (VMC), Aura Laserfab is a one-stop shop for all Sheet Metal Fabrication requirements.
          </p>
        </div>
      </div>
      <div class="download-brochure heading flex flex-col">
        <!-- <a href="aura_iso_3834.pdf" download target="_blank" rel="noopener noreferrer">Download brochure</a> -->
        <button type="submit" onclick="window.open('aura_iso_3834.pdf')">
          Download Our Brochure
        </button>
      </div>
      <div class="flex flex-col text-center clients-container">
        <h2 class="heading">
          A Few of Our Clients
        </h2>
        <div class="flex flex-row flex-wrap items-center justify-center gap">
          <img
            v-for="(image, i) in clients"
            :key="i"
            :src="image"
            :alt="'client' + i"
            class="client-logos"
            data-aos="zoom-in"
            data-aos-mirror="true"
            data-aos-duration="1500"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.home-nav-border {
  border-bottom: 3px solid var(--accent);
}
.home-card-div {
  padding-top: 5rem;
}
.factory-image {
  border-radius: .75rem;
  margin-left: auto;
  margin-right: auto;
}
.heading.home-about {
  text-align: center;
}
.client-logos {
  max-width: 12rem;
  min-width: 6rem;
  max-height: 8rem;
  padding: 1rem;
}
.gap {
  gap: 1rem;
}

.download-brochure {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  color: var(--primary);
  margin-top: 4rem;
  /* cursor: pointer; */
}

.download-brochure button:hover {
  color: var(--accent);
}

.clients-container {
  padding-top: 3rem;
}

@media (min-width: 768px) {
  .factory-image {
    max-width: 50%;
    margin-right: 1.5rem;
  }
  .heading.home-about {
    text-align: right;
  }
}
</style>

<route lang="yaml">
meta:
  layout: home
</route>
