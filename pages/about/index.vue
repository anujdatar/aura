<template>
  <div class="page-content overflow-hidden flex flex-col min-h-screen">
    <aura-hero :title="heroTitle" :content="heroContent" :image-src="heroImage" image-offset="100%">
      in
    </aura-hero>
    <div class="container">
      <div class="container-inner">
        <div class="text-justify">
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
    </div>
    <div class="relative bg-white">
      <section-separator />
      <div class="container flex-col">
        <div class="container-inner">
          <div class="text-justify">
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
          </div>
        </div>
        <div class="container-inner pt-8">
          <div class="flex flex-col">
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
            src="~/assets/images/team.webp"
            alt="team-image"
            class="md:max-w-1/2 rounded-xl mx-auto md:ml-6 shadow-black shadow-xl"
          >
        </div>
      </div>
    </div>
    <div class="relative bg-alt">
      <section-separator color="text-alt" />
      <div class="container flex-col">
        <h2 class="heading text-center">
          How we can help
        </h2>
        <div class="flex flex-row flex-wrap items-center justify-center relative mt-8">
          <about-card :image-src="card1.imageSrc" :card-content="card1.content" />
          <about-card :image-src="card2.imageSrc" :card-content="card2.content" />
          <about-card :image-src="card3.imageSrc" :card-content="card3.content" />
          <about-card :image-src="card4.imageSrc" :card-content="card4.content" />
          <about-card :image-src="card5.imageSrc" :card-content="card5.content" />
          <about-card :image-src="card6.imageSrc" :card-content="card6.content" />
          <about-card :image-src="card7.imageSrc" :card-content="card7.content" />
        </div>
      </div>
    </div>
    <div class="bg-white mt-auto">
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
      heroContent: 'Precision Laser Cutting & Sheet Metal Fabrication',
      heroImage: require('~/assets/images/hero_about.webp'),
      card1: {
        imageSrc: require('~/assets/images/card_images/sheet.webp'),
        content: 'Versatile resource pool to handle variety and complexity'
      },
      card2: {
        imageSrc: require('~/assets/images/card_images/production.jpg'),
        content: 'Ability to handle low to high production quantities'
      },
      card3: {
        imageSrc: require('~/assets/images/card_images/team2.webp'),
        content: 'Competent and experienced teams'
      },
      card4: {
        imageSrc: require('~/assets/images/card_images/plasma.webp'),
        content: 'Advanced technology with CNC Laser, Plasma, Bending, and Rolling machines'
      },
      card5: {
        imageSrc: require('~/assets/images/card_images/plant2.webp'),
        content: 'Capacity to augment machinery and plant setup'
      },
      card6: {
        imageSrc: require('~/assets/images/card_images/highway.jpg'),
        content: 'Excellent connectivity through Pune-Bangalore National Highway'
      },
      card7: {
        imageSrc: require('~/assets/images/card_images/port.jpg'),
        content: 'Proximity to inland container depots & Mumbai Port'
      }
    }
  },
  head () {
    return { title: 'About' }
  }
}
</script>

<style>
</style>
