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
            Aura Laserfab can fabricate components ranging from less than a kg
            to five tons. Aura Laserfab offers both manufacturing and job
            shopping services in the field of Metal Fabrication &amp; Assembly
            with help of Laser Cutting, Bending, Rolling, Machining and various
            fabrication &amp; assembly processes.
          </p>
          <p class="paragraph">
            Focusing on Quality at every stage of manufacturing we strive to
            find better solutions to the problems of client. This enables our
            customers to realize the optimum value of their products and
            improve their competitiveness and profitability.
          </p>
          <p class="paragraph">
            What makes this possible is the thoughtfully developed
            infrastructure that is more than equipped to undertake challenging
            jobs and adhere to stringent quality standards.
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
              <li>Carbon Steel - IS2062 E250, S235JR, S275JR, 1079D, 513D etc.</li>
              <li>
                High Tensile Carbon Steel - E350, S355J2, S355MC, S550MC,
                S690QL, S700MC, QSTE380 etc.
              </li>
              <li>Galvanized Steel - GSM 120, GSM 275 etc.</li>
              <li>Stainless Steel - SS304, SS316, SS410, SS202 etc.</li>
              <li>Aluminium - 8011, 3105, Chequered.</li>
              <li>Special Steels like HARDOX, 16Mo3.</li>
            </ul>
          </p>
          <h2 class="heading text-center md:text-left pt-8">
            Engineering &amp; Development
          </h2>
          <p class="paragraph">
            A dedicated Product Development Team ensures the development of
            components in the shortest possible time. With the use of advanced
            design softwares, we offer quick support during product development.
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
        <video-card :card-title="service1.cardTitle" :video-link="service1.videoLink">
          <div class="paragraph">
            <p>Equipped with the latest technology in laser cutting.</p>
            <p class="text-sm">
              No. of machines: 7
            </p>
            <p class="text-sm">
              Bed Size: 2m x 6m
            </p>
            <p>Cutting Capacity:</p>
            <p class="text-sm">
              Mild Steel: 25mm | Stainless Steel: 20mm
            </p>
            <p class="text-sm">
              Aluminium: 20mm | Brass: 12mm
            </p>
          </div>
        </video-card>
        <video-card :card-title="service2.cardTitle" :video-link="service2.videoLink" text-right>
          <div class="paragraph">
            <p>CNC Press Brake line complementing our Cutting Capacity</p>
            <p class="text-sm">
              No. od Machines: 6
            </p>
            <p class="text-sm">
              Bed Size: 6m
            </p>
            <p class="text-sm">
              Tonnage Capacity: 520T
            </p>
          </div>
        </video-card>
        <video-card :card-title="service3.cardTitle" :video-link="service3.videoLink">
          <div class="paragraph">
            <p>CNC 4 Roll System Rolling Machine for Cylindrical &amp; Conical components</p>
            <p class="text-sm">
              Length: 2.5m
            </p>
            <p class="text-sm">
              Thickness Capacity: 8mm over 2.5m
            </p>
          </div>
        </video-card>
        <video-card :card-title="service4.cardTitle" :video-link="service4.videoLink" text-right>
          <div class="paragraph">
            <p>Automated Robot Welding for consistency and productivity</p>
            <p class="text-sm">
              No. of Cells: 2
            </p>
            <p class="text-sm">
              Robot Reach: 2m Radial
            </p>
          </div>
        </video-card>
        <video-card :card-title="service5.cardTitle" :video-link="service5.videoLink">
          <div class="paragraph">
            <p>Manual Welding for Mild and Stainless Steels</p>
            <p class="text-sm">
              No. of Machines: 45
            </p>
            <p class="text-sm">
              Make: Esab
            </p>
          </div>
        </video-card>
        <video-card :card-title="service6.cardTitle" :video-link="service6.videoLink" text-right>
          <div class="paragraph">
            <p>Vertical Machining Centers for Post Fabrication Machining</p>
            <p class="text-sm">
              No. of Machines: 2
            </p>
            <p class="text-sm">
              1000x500 mm
            </p>
          </div>
        </video-card>
      </div>
    </div>
    <div class="bg-alt mt-auto">
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
      heroContent: 'MIG/MAG/TIG Welding, CNC Machining, Painting, Powder Coating and Assembly',
      heroImage: require('~/assets/images/hero_services.webp'),
      service1: {
        cardTitle: 'Laser Cutting',
        videoLink: 'https://www.youtube-nocookie.com/embed/-3EX9fV5uHg'
      },
      service2: {
        cardTitle: 'Press Brake',
        videoLink: 'https://www.youtube-nocookie.com/embed/90prqWQgdBM'
      },
      service3: {
        cardTitle: 'Plate Rolling',
        videoLink: 'https://www.youtube-nocookie.com/embed/8U-TV4Y0rPA'
      },
      service4: {
        cardTitle: 'Robot Fabrication',
        videoLink: 'https://www.youtube-nocookie.com/embed/HYMsvFHjY6M'
      },
      service5: {
        cardTitle: 'Manual Fabrication',
        videoLink: 'https://www.youtube-nocookie.com/embed/rc6JIi8lDDg'
      },
      service6: {
        cardTitle: 'Vertical Machining',
        videoLink: 'https://www.youtube-nocookie.com/embed/FAjDt2CTXCA'
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
