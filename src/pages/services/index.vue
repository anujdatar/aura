<script setup lang="ts">
// const heroImage = 'assets/images/hero_services.webp'
const heroImage = 'assets/images/grid_images/laser.jpg'
const heroTitle = 'Complete solution provider in metal processing & fabrication'
const heroContent = 'MIG/MAG/TIG Welding, CNC Machining, Painting, Powder Coating and Assembly'
const heroGradient = [0.4, 0.2]

const service1 = {
  title: 'Laser Cutting',
  video: 'https://www.youtube-nocookie.com/embed/-3EX9fV5uHg',
}
const service2 = {
  title: 'Press Brake',
  video: 'https://www.youtube-nocookie.com/embed/90prqWQgdBM',
}
const service3 = {
  title: 'Plate Rolling',
  video: 'https://www.youtube-nocookie.com/embed/8U-TV4Y0rPA',
}
const service4 = {
  title: 'Robot Fabrication',
  video: 'https://www.youtube-nocookie.com/embed/HF6_8TmBQC0',
}
const service5 = {
  title: 'Manual Fabrication',
  video: 'https://www.youtube-nocookie.com/embed/rc6JIi8lDDg',
}
const service6 = {
  title: 'Vertical Machining',
  video: 'https://www.youtube-nocookie.com/embed/0cWrkbWjUuA',
}

const service7 = {
  title: 'Surface Treatment',
  video: 'https://www.youtube-nocookie.com/embed/csFmFj4O44k',

}
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
    <div class="container flex-col">
      <div data-aos="fade-left" data-aos-delay="250">
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
      </div>
      <div data-aos="fade-right" data-aos-delay="250">
        <h2 class="heading text-center md:text-left pt-8">
          Materials
        </h2>
        <p class="paragraph">
          We buy a wide range of raw materials directly from the manufacturers
          to ensure good quality, reliability and cost competitiveness of
          supply. We buy around 800 tons of raw material per month. We procure
          raw material of various grades confirming to European and Indian
          Standards of -
          <ul class="list-disc ml-10 text-secondary">
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
      </div>
      <div data-aos="fade-left" data-aos-delay="250">
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
  <section-separator />
  <div class="bg-white">
    <div class="container flex-col">
      <div data-aos="fade-right" data-aos-delay="250">
        <h2 class="heading text-center md:text-left">
          Manufacturing Facilities
        </h2>
        <p class="paragraph">
          Aura Laser has two manufacturing facilities. One facility at
          Shirwal with a covered area of 75,000 sq. ft. and one in Nashik
          with 15,000 sq.ft.
        </p>
      </div>
      <div class="factory-images flex flex-col md:flex-row">
        <div
          class="factory-image-div"
          data-aos="fade-right"
          data-aos-delay="250"
        >
          <img
            src="assets/images/factory.jpg"
            alt="factory-image-1"
            class="shadow-xl"
          >
          <p class="text-secondary text-center">
            Shirwal Plant
          </p>
        </div>
        <div
          class="factory-image-div second"
          data-aos="fade-left"
          data-aos-delay="250"
        >
          <img
            src="assets/images/card_images/plant2.webp"
            alt="factory-image-1"
            class="shadow-xl"
          >
          <p class="text-secondary text-center">
            Nashik Plant
          </p>
        </div>
      </div>
      <!-- video cards here -->
      <section class="video-cards-section">
        <video-card :title="service1.title" :video-link="service1.video">
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
        <video-card :title="service2.title" :video-link="service2.video" text-right>
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
        <video-card :title="service3.title" :video-link="service3.video">
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
        <video-card :title="service4.title" :video-link="service4.video" text-right>
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
        <video-card :title="service5.title" :video-link="service5.video">
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
        <video-card :title="service6.title" :video-link="service6.video" text-right>
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
        <video-card :title="service7.title" :video-link="service7.video">
          <div class="paragraph">
            <p>Services offered:</p>
            <p>1. Liquid Painting</p>
            <p>2. Zinc Plating</p>
            <p>3. Powder Coating</p>
            <p>4. Galvanizing</p>
          </div>
        </video-card>
      </section>
    </div>
  </div>
</template>

<style>
.factory-images {
  gap: 1rem; /* 16px */
  min-width: 100%;
  margin-top: 1rem;
}
.factory-image-div {
  width: 100%;
  min-height: 100%;
}
.factory-image-div.second {
  margin-top: 1rem;
}
.factory-image-div img {
  height: 100%;
  width: 100%;
  border-radius: 0.75rem; /* 12px */
}
.video-cards-section {
  margin-top: 6rem;
}
@media (min-width: 768px) {
  .factory-image-div {
    max-width: 50%;
  }
  .factory-image-div.second {
    margin-top: 0;
  }
}
</style>

<route lang="yaml">
meta:
  layout: default
</route>
