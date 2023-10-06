<script setup lang="ts">
const router = useRouter()

const heroImage = '~/../../assets/images/hero_about.webp'
const heroTitle = 'Pioneer & Leader'
const heroContent = 'Precision Laser Cutting & Sheet Metal Fabrication'

const card1 = {
  imageSrc: '~/../../assets/images/card_images/sheet.webp',
  content: 'Versatile resource pool to handle variety and complexity',
}
const card2 = {
  imageSrc: '~/../../assets/images/card_images/production.jpg',
  content: 'Ability to handle low to high production quantities',
}
const card3 = {
  imageSrc: '~/../../assets/images/card_images/team2.webp',
  content: 'Competent and experienced teams',
}
const card4 = {
  imageSrc: '~/../../assets/images/card_images/plasma.webp',
  content: 'Advanced technology with CNC Laser, Plasma, Bending, and Rolling machines',
}
const card5 = {
  imageSrc: '~/../../assets/images/card_images/facility.webp',
  content: 'Capacity to augment machinery and plant setup',
}
const card6 = {
  imageSrc: '~/../../assets/images/card_images/highway.jpg',
  content: 'Excellent connectivity through Pune-Bangalore National Highway',
}
const card7 = {
  imageSrc: '~/../../assets/images/card_images/port.jpg',
  content: 'Proximity to inland container depots & Mumbai Port',
}

const image9001 = ['~/../../assets/images/iso/aura_iso_9001.webp']
const image3834 = ['~/../../assets/images/iso/aura_iso_3834_1.webp',
  '~/../../assets/images/iso/aura_iso_3834_1.webp']
const image1090 = ['~/../../assets/images/iso/aura_iso_1090_1.webp',
  '~/../../assets/images/iso/aura_iso_1090_1.webp']

const show9001Cert = ref<boolean>()
const show3834Cert = ref<boolean>()
const show1090Cert = ref<boolean>()

function open9001Cert() {
  show9001Cert.value = true
}
function close9001Cert() {
  show9001Cert.value = false
}

function open3834Cert() {
  show3834Cert.value = true
}
function close3834Cert() {
  show3834Cert.value = false
}

function open1090Cert() {
  show1090Cert.value = true
}
function close1090Cert() {
  show1090Cert.value = false
}

onMounted(() => {
  const navToRoute = router.currentRoute.value.hash
  if (navToRoute) {
    document.querySelector(navToRoute)?.scrollIntoView()
    const currentPos = window.scrollY
    const topOffset = currentPos - 96

    window.scrollTo({
      top: topOffset,
      left: 0,
      behavior: 'smooth',
    })
  }
  else {
    window.scrollTo({
      top: 0,
      left: 0,
    })
  }
})
</script>

<template>
  <aura-hero :image="heroImage" :title="heroTitle" :content="heroContent">
    in
  </aura-hero>
  <div class="page-content bg-alt">
    <div class="container flex-col" data-aos="fade-left" data-aos-delay="250">
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
      <h2
        id="iso_certs"
        class="heading text-center md:text-left"
        data-aos="fade-right"
        data-aos-delay="250"
      >
        Management Systems
      </h2>
      <div class="iso-cert-div">
        <!-- iso cert display thing goes here -->
        <div
          class="iso-9001-thumbnail"
          data-aos="fade-right"
          data-aos-delay="250"
          @click="open9001Cert"
        >
          <img src="~/assets/images/iso/aura_iso_9001.webp" alt="iso-9001-thumbnail">
          <div class="flex flex-row justify-center items-center align-middle">
            <span class="semibold text-center">
              ISO 9001:2015
            </span>
            <iso-icon class="icon iso" />
          </div>
        </div>
        <iso-cert-display
          v-if="show9001Cert"
          :images="image9001"
          @close-lightbox="close9001Cert"
        />
        <div
          class="iso-3834-thumbnail"
          data-aos="fade-left"
          data-aos-delay="250"
          @click="open3834Cert"
        >
          <img src="~/assets/images/iso/aura_iso_3834_1.webp" alt="iso-3834-thumbnail" data-aos="fade-left">
          <div class="flex flex-row justify-center items-center align-middle">
            <span class="semibold text-center">
              DIN EN ISO 3834-2
            </span>
            <iso-icon class="icon iso" />
          </div>
        </div>
        <iso-cert-display
          v-if="show3834Cert"
          :images="image3834"
          @close-lightbox="close3834Cert"
        />
        <div
          class="iso-1090-thumbnail"
          data-aos="fade-left"
          data-aos-delay="250"
          @click="open1090Cert"
        >
          <img src="~/assets/images/iso/aura_iso_1090_1.webp" alt="iso-1090-thumbnail" data-aos="fade-left">
          <div class="flex flex-row justify-center items-center align-middle">
            <span class="semibold text-center">
              EN ISO-1:2009 Exc 3
            </span>
            <iso-icon class="icon iso" />
          </div>
        </div>
        <iso-cert-display
          v-if="show1090Cert"
          :images="image1090"
          @close-lightbox="close1090Cert"
        />
      </div>
      <div
        data-aos="fade-left"
        data-aos-delay="250"
      >
        <h2 class="heading text-center md:text-left">
          Our Mission
        </h2>
        <p class="paragraph">
          Our mission is to provide a complete solution to customer
          requirements, nurture and maintain ethical values, focus on
          quality in every business process while fostering Continuous
          Improvement in our in-house systems.
        </p>
      </div>
      <div
        data-aos="fade-right"
        data-aos-delay="250"
      >
        <h2 class="heading text-center md:text-left pt-8">
          Our Vision
        </h2>
        <p class="paragraph">
          Our vision is to capture a significant market share in the business
          of metal fabrication and assembly.
        </p>
      </div>
      <div class="our-team pt-8 flex flex-col md:flex-row">
        <div class="flex flex-col justify-center" data-aos="fade-right">
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
          data-aos="fade-left"
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
        <about-card :card-image="card1.imageSrc" :content="card1.content" data-aos="fade-up" />
        <about-card :card-image="card2.imageSrc" :content="card2.content" data-aos="fade-up" />
        <about-card :card-image="card3.imageSrc" :content="card3.content" data-aos="fade-up" />
        <about-card :card-image="card4.imageSrc" :content="card4.content" data-aos="fade-up" />
        <about-card :card-image="card5.imageSrc" :content="card5.content" data-aos="fade-up" />
        <about-card :card-image="card6.imageSrc" :content="card6.content" data-aos="fade-up" />
        <about-card :card-image="card7.imageSrc" :content="card7.content" data-aos="fade-up" />
      </div>
    </div>
  </div>
</template>

<style>
.iso-cert-div {
  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap; */
}
.iso-9001-thumbnail,
.iso-3834-thumbnail,
.iso-1090-thumbnail {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
  height: 100%;
  padding: 2rem;
  color: var(--primary);
  cursor: pointer;
  margin-left: auto;
  margin-right: auto;
}
.iso-9001-thumbnail:hover,
.iso-3834-thumbnail:hover,
.iso-1090-thumbnail:hover {
  color: var(--accent);
}
.iso-9001-thumbnail img,
.iso-3834-thumbnail img,
.iso-1090-thumbnail img {
  width: 100%;
  height: 100%;
  max-height: 400px;
  object-fit: contain;
  padding-bottom: 1rem;
}
.iso-9001-thumbnail span,
.iso-3834-thumbnail span,
.iso-1090-thumbnail span {
  padding-right: .5rem;
}

@media (min-width: 768px) {
  .iso-cert-div {
      flex-direction: row;
  }
  .iso-9001-thumbnail,
  .iso-3834-thumbnail,
  .iso-1090-thumbnail {
    max-width: 50%;
  }
}
</style>

<route lang="yaml">
meta:
  layout: whiteFooter
</route>
