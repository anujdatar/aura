<template>
  <div class="page-content overflow-hidden flex flex-col min-h-screen">
    <aura-hero :title="heroTitle" :content="heroContent" :image-src="heroImage" image-offset="75%" />
    <div class="container">
      <div class="container-inner">
        <div class="text-justify">
          <h2 class="heading text-center md:text-left">
            Infrastructure &amp; Technology
          </h2>
          <p class="paragraph">
            Aura LaserFab can fabricate components ranging from less than a kg
            to five tons. Aura LaserFab offers both manufacturing and job
            shopping services in the field of Metal Fabrication &amp; Assembly
            with help of CNC Laser Cutting, CNC Bending, CNC Rolling, Machining
            and various fabrication &amp; assembly processes
          </p>
          <p class="paragraph">
            Focusing on Quality at every stage of manufacturing we strive to
            find better solutions to the problems of client. This enables our
            customers to realize the optimum value of their products and improve
            their competitiveness and profitability.
          </p>
          <p class="paragraph">
            What makes this possible is the thoughtfully developed infrastructure
            that is more than equipped to undertake challenging jobs and adhere
            to stringent quality standards.
          </p>
          <h2 class="heading text-center md:text-left pt-8">
            Materials
          </h2>
          <p class="paragraph">
            We buy a wide range of raw materials directly from the manufacturers
            to ensure good quality, reliability and cost competitiveness of
            supply. We buy around 800 tons of raw material per month. We procure
            raw material of various grades confirming to European and Indian
            Standards of -
            <ul class="list-disc ml-10">
              <li>Carbon Steel</li>
              <li>High Tensile Carbon Steel</li>
              <li>Galvanized Steel</li>
              <li>Stainless Steel</li>
              <li>Aluminium</li>
              <li>Special Steels like HARDOX, 16Mo3</li>
            </ul>
          </p>
          <h2 class="heading text-center md:text-left pt-8">
            Engineering &amp; Development
          </h2>
          <p class="paragraph">
            A dedicated Product Development Team ensures the development of
            components in the shortest possible time. With the use of advanced
            design softwares like AutoCAD and Sigma Nest - we offer quick
            support during product development.
          </p>
          <p class="paragraph">
            Aura Laser offers innovative Value Analysis &amp; Value Engineering
            (VAVE) proposals without affecting quality &amp; durability of
            product directly helping customers reduce cost of their products.
          </p>
        </div>
      </div>
    </div>
    <div class="relative bg-white">
      <section-separator />
      <div class="container flex-col">
        <video-card :card-title="service1.cardTitle" :video-link="service1.videoLink" />
        <video-card :card-title="service2.cardTitle" :video-link="service2.videoLink" text-right />
        <video-card :card-title="service3.cardTitle" :video-link="service3.videoLink" />
        <video-card :card-title="service4.cardTitle" :video-link="service4.videoLink" text-right />
        <video-card :card-title="service5.cardTitle" :video-link="service5.videoLink" />
        <video-card :card-title="service6.cardTitle" :video-link="service6.videoLink" text-right />
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
      heroTitle: 'Complete solution provider in metal processing & fabrication',
      heroContent: 'CNC Laser Cutting, CNC Plasma Cutting, CNC Bending, CNC Rolling, CNC Straightening, Welding',
      heroImage: require('~/assets/images/hero_home.jpeg'),
      service1: {
        cardTitle: 'CNC Laser Cutting',
        videoLink: 'https://www.youtube-nocookie.com/embed/9k2hIgwluP4'
      },
      service2: {
        cardTitle: 'CNC Plasma Cutting',
        videoLink: 'https://www.youtube-nocookie.com/embed/451xMlS69Ho'
      },
      service3: {
        cardTitle: 'CNC Bending',
        videoLink: 'https://www.youtube-nocookie.com/embed/jONKl9u27TY'
      },
      service4: {
        cardTitle: 'CNC Rolling(4 Rolls System)',
        videoLink: 'https://www.youtube-nocookie.com/embed/dbspCBzFkZ0'
      },
      service5: {
        cardTitle: 'Robotic Metal Fabrication',
        videoLink: 'https://www.youtube-nocookie.com/embed/iN-45MhK8eg'
      },
      service6: {
        cardTitle: 'Manual Metal Fabrication',
        videoLink: 'https://www.youtube-nocookie.com/embed/iN-45MhK8eg'
      }
    }
  },
  head () {
    return { title: 'Services' }
  }
}
</script>

<style>
</style>
