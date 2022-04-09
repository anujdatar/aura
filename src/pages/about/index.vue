<script setup lang="ts">
const heroImage = 'assets/images/hero_about.webp'
const heroTitle = 'Pioneer & Leader'
const heroContent = 'Precision Laser Cutting & Sheet Metal Fabrication'

const card1 = {
  imageSrc: 'assets/images/card_images/sheet.webp',
  content: 'Versatile resource pool to handle variety and complexity',
}
const card2 = {
  imageSrc: 'assets/images/card_images/production.jpg',
  content: 'Ability to handle low to high production quantities',
}
const card3 = {
  imageSrc: 'assets/images/card_images/team2.webp',
  content: 'Competent and experienced teams',
}
const card4 = {
  imageSrc: 'assets/images/card_images/plasma.webp',
  content: 'Advanced technology with CNC Laser, Plasma, Bending, and Rolling machines',
}
const card5 = {
  imageSrc: 'assets/images/card_images/facility.jpg',
  content: 'Capacity to augment machinery and plant setup',
}
const card6 = {
  imageSrc: 'assets/images/card_images/highway.jpg',
  content: 'Excellent connectivity through Pune-Bangalore National Highway',
}
const card7 = {
  imageSrc: 'assets/images/card_images/port.jpg',
  content: 'Proximity to inland container depots & Mumbai Port',
}

</script>

<template>
  <aura-hero :image="heroImage" :title="heroTitle" :content="heroContent">
    in
  </aura-hero>
  <div class="page-content bg-alt">
    <div class="container flex-col">
      <h2 class="heading text-center md:text-left">
        About Aura
      </h2>
      <p class="paragraph">
        Since its inception in 2006, Aura Laser has grown from a laser
        cutting services provider to a complete solutions provider in the
        field of sheet metal fabrication and assembly. With more than thirty
        years of experience each in laser cutting, bending and metal
        fabrication, the leadership of the company is with the dynamic duo
        of the founder-directors, Mr. Unmesh Mahajani who is a B.E. (Mech)
        from NIT Durgapur and Mr. Abhay Paranjpe who is Chartered Accountant.
      </p>
      <p class="paragraph">
        Both the Directors possess the capability of understanding varied
        product requirements. Having dealt with a diverse set of clients,
        they can offer valuable feedbacks and suggestions to customers to
        improve their products and bottom line.
      </p>
      <p class="paragraph">
        A team of around 75 + Qualified Employees, highly competent
        technicians and engineers are the strong pillars of this
        organization. The employees possess requisite domain experience in
        CNC Technology, Engineering, and Sheet Metal Processing including
        Laser Cutting, Plasma Cutting, Bending, Rolling, Machining,
        Precision Fabrication, Assembly and Quality Assurance.
      </p>
    </div>
  </div>
  <section-separator />
  <div class="bg-white">
    <div class="container flex-col">
      <h2 class="heading text-center md:text-left">
        Management Systems
      </h2>
      <div style="height: 200px;">
      <!-- iso cert display thing goes here -->
      </div>
      <h2 class="heading text-center md:text-left">
        Our Mission
      </h2>
      <p class="paragraph">
        Our mission is to provide a complete solution to customer
        requirements, nurture and maintain ethical values, focus on
        quality in every business process while fostering Continuous
        Improvement in our in-house systems.
      </p>
      <h2 class="heading text-center md:text-left pt-8">
        Our Vision
      </h2>
      <p class="paragraph">
        Our vision is to capture a significant market share in the business
        of metal fabrication and assembly.
      </p>
      <div class="our-team pt-8 flex flex-col md:flex-row">
        <div class="flex flex-col justify-center">
          <h2 class="heading text-center md:text-left">
            Our Team
          </h2>
          <p class="paragraph">
            The Core Team of over 75 qualified engineers and technicians, have a
            strong and diverse experience in of design &amp; development,
            engineering, operations, project management and quality assurance.
          </p>
        </div>
        <img
          src="assets/images/team.webp"
          alt="team-image"
          class="md:max-w-1/2 rounded-xl mx-auto md:ml-6 shadow-black shadow-xl"
        >
      </div>
    </div>
  </div>
  <section-separator color="text-alt" />
  <div class="bg-alt">
    <div class="container flex-col">
      <h2 class="heading text-center">
        How we can help
      </h2>
      <div class="flex flex-row flex-wrap items-center justify-center relative mt-8">
        <about-card :card-image="card1.imageSrc" :content="card1.content" />
        <about-card :card-image="card2.imageSrc" :content="card2.content" />
        <about-card :card-image="card3.imageSrc" :content="card3.content" />
        <about-card :card-image="card4.imageSrc" :content="card4.content" />
        <about-card :card-image="card5.imageSrc" :content="card5.content" />
        <about-card :card-image="card6.imageSrc" :content="card6.content" />
        <about-card :card-image="card7.imageSrc" :content="card7.content" />
      </div>
    </div>
  </div>
  <!-- <section-separator /> -->
</template>

<route lang="yaml">
meta:
  layout: whiteFooter
</route>
