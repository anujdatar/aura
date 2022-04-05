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
        <h2 class="heading text-center md:text-left">
          Manufacturing Facilities
        </h2>
        <p class="paragraph">
          Aura Laser has three manufacturing facilities. Two facilities are at
          Shirwal with covered area of 75,000 sq. ft. and one in Nashik
          With 15,000 sq.ft.
        </p>
        <div class="flex flex-col md:flex-row mt-4 mb-24 gap-4 min-w-full">
          <div class="md:max-w-1/2 w-full min-h-full flex flex-col">
            <img
              src="~/assets/images/factory.jpg"
              alt="factory-image"
              class="w-full h-full rounded-xl shadow-black shadow-xl"
            >
            <p class="text-secondary text-center">
              Shirwal Plant
            </p>
          </div>
          <div class="md:max-w-1/2 w-full h-full flex flex-col">
            <img
              src="~/assets/images/card_images/plant2.webp"
              alt="factory-image"
              class="w-full rounded-xl shadow-black shadow-xl"
            >
            <p class="text-secondary text-center">
              Nashik Plant
            </p>
          </div>
        </div>
        <video-card :card-title="service1.cardTitle" :video-link="service1.videoLink">
          <div class="paragraph">
            <p>Equipped with the latest technology in Laser Cutting.</p>
            <p>
              No. of machines: 7
            </p>
            <p>
              Bed Size: 2m x 6m
            </p>
            <p>
              Cutting Capacity:
            </p>
            <p>
              Mild Steel: 25mm | Stainless Steel: 20mm
            </p>
            <p>
              Aluminium: 20mm | Brass: 12mm
            </p>
          </div>
        </video-card>
        <video-card :card-title="service2.cardTitle" :video-link="service2.videoLink" text-right>
          <div class="paragraph">
            <p>CNC Press Brake line complementing our Cutting Capacity</p>
            <p>
              No. of Machines: 6
            </p>
            <p>
              Bed Size: 6m
            </p>
            <p>
              Tonnage Capacity: 520T
            </p>
          </div>
        </video-card>
        <video-card :card-title="service3.cardTitle" :video-link="service3.videoLink">
          <div class="paragraph">
            <p>CNC 4 Roll System Rolling Machine for Cylindrical &amp; Conical components</p>
            <p>
              Length: 2.5m
            </p>
            <p>
              Thickness Capacity: 8mm over 2.5m
            </p>
          </div>
        </video-card>
        <video-card :card-title="service4.cardTitle" :video-link="service4.videoLink" text-right>
          <div class="paragraph">
            <p>Automated Robot Welding for consistency and productivity</p>
            <p>
              No. of Cells: 2
            </p>
            <p>
              Robot Reach: 2m Radial
            </p>
          </div>
        </video-card>
        <video-card :card-title="service5.cardTitle" :video-link="service5.videoLink">
          <div class="paragraph">
            <p>Manual Welding for Mild and Stainless Steels</p>
            <p>
              No. of Machines: 45
            </p>
            <p>
              Make: Esab
            </p>
          </div>
        </video-card>
        <video-card :card-title="service6.cardTitle" :video-link="service6.videoLink" text-right>
          <div class="paragraph">
            <p>Vertical Machining Centers for Post Fabrication Machining</p>
            <p>
              No. of Machines: 2
            </p>
            <p>
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
        videoLink: 'https://www.youtube-nocookie.com/embed/0cWrkbWjUuA'
      }
    }
  },
  head () {
    return { title: 'Services' }
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
