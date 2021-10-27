<template>
  <div class="page-content overflow-hidden flex flex-col min-h-screen">
    <aura-hero :title="heroTitle" :content="heroContent" :image-src="heroImage" image-offset="75%" />
    <div class="container flex-col">
      <div id="construction" class="industry">
        <h2 class="heading block">
          Construction Equipment
        </h2>
        <lightbox name="earthmoving_lightbox" :images="earthmoving" />
      </div>
      <div id="switchgear" class="industry">
        <h2 class="heading block">
          Electrical Switchgear
        </h2>
        <lightbox name="switchgear_lightbox" :images="switchgear" />
      </div>
      <div id="mining" class="industry text-justify">
        <h2 class="heading block">
          Mining Equipment
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident blanditiis, tempore possimus dolor obcaecati illo aut inventore id vel odit impedit optio animi consequatur perspiciatis delectus odio voluptatibus dolorum asperiores! Voluptates perspiciatis est quo? Vero magnam praesentium a illo odio ipsum consequatur asperiores repellendus accusamus cumque, vitae saepe expedita in sit architecto libero quasi reprehenderit quisquam provident repellat ea ipsa minus. Dolor, eligendi consequatur sapiente tempora nesciunt ut aspernatur aperiam minima, deserunt nihil cumque ratione nam cupiditate quas excepturi aliquam, repellat possimus et libero a debitis porro! Ipsa voluptas, asperiores iste debitis cum non quisquam amet nisi iusto tenetur dolore voluptates sit officiis itaque eveniet labore fugiat accusantium dolorum veritatis enim nobis vero provident saepe at? Vero dolorem quidem et facere laborum repellendus deleniti debitis quis culpa, nisi soluta sunt! Repudiandae repellendus perferendis rerum labore porro animi quo non eveniet tenetur iure, cumque beatae tempora dolore iste enim aperiam, cum dolor voluptas praesentium consectetur tempore! Eveniet corrupti nobis obcaecati aperiam eos culpa dicta molestias quibusdam necessitatibus, quos ut recusandae consequuntur quam voluptate id. Nostrum recusandae illo architecto non incidunt hic explicabo accusantium suscipit dolorem sint accusamus vero quasi beatae, nobis libero, optio alias rem fugiat? Quae esse blanditiis error asperiores beatae, hic nobis vitae tempora odit. Recusandae quam, unde autem dicta maxime nisi, totam ab perspiciatis alias quibusdam dolore adipisci mollitia neque blanditiis, sapiente ratione quod a quos. Provident voluptatem earum eius, at consequuntur perferendis ad eum eveniet porro vel autem minima dolores est odit consectetur numquam mollitia sit officia blanditiis maiores qui. Ex perferendis culpa dolore suscipit assumenda, placeat minus officia ad, temporibus accusamus aliquid, praesentium sapiente. Quibusdam maiores culpa eveniet quam modi, dolor repudiandae quidem harum quaerat? Nulla neque delectus itaque, eos deleniti amet eius blanditiis, ex fugiat sit quis quibusdam ipsum, sed nam quam dolore maiores nemo.
        </p>
      </div>
    </div>
    <!--  -->
    <div class="relative bg-white mt-auto">
      <section-separator color="text-white" />
      <div class="container flex-col pt-8">
        <div id="agriculture" class="industry">
          <h2 class="heading block">
            Agriculture and Farm Equipment
          </h2>
          <lightbox name="agriculture_lightbox" :images="agriculture" />
        </div>
        <div id="handling" class="industry">
          <h2 class="heading block">
            Material Handling Equipment
          </h2>
          <lightbox name="mat_handling_lightbox" :images="material_handling" />
        </div>
        <div id="other" class="industry">
          <h2 class="heading block">
            Other Industries
          </h2>
          <div class="flex flex-row flex-wrap other-inner">
            <div>
              <h4 class="text-xl text-primary">
                Automotive
              </h4>
              <lightbox name="automotive_lightbox" :images="automotive" />
            </div>
            <div>
              <h4 class="text-xl text-primary">
                Cement
              </h4>
              <lightbox name="cement_lightbox" :images="cement" />
            </div>
            <div>
              <h4 class="text-xl text-primary">
                Packaging
              </h4>
              <lightbox name="packaging_lightbox" :images="packaging" />
            </div>
            <div>
              <h4 class="text-xl text-primary">
                Parking
              </h4>
              <lightbox name="parking_lightbox" :images="parking" />
            </div>
            <div>
              <h4 class="text-xl text-primary">
                Pollution
              </h4>
              <lightbox name="pollution_lightbox" :images="pollution" />
            </div>
            <div>
              <h4 class="text-xl text-primary">
                Process
              </h4>
              <lightbox name="process_lightbox" :images="process" />
            </div>
          </div>
        </div>
      </div>
      <!--  -->
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
      heroTitle: 'The Largest Setup of Precision Metal Cutting & Fabrication',
      heroContent: 'CNC Laser Cutting, CNC Plasma Cutting, CNC Bending, CNC Rolling, CNC Straightening, Welding',
      heroImage: require('~/assets/images/hero_capabilities.jpeg'),
      switchgear: [
        require('~/assets/images/industries/switchgear/switchgear_01.jpg'),
        require('~/assets/images/industries/switchgear/switchgear_02.jpg'),
        require('~/assets/images/industries/switchgear/switchgear_03.jpg'),
        require('~/assets/images/industries/switchgear/switchgear_04.jpg'),
        require('~/assets/images/industries/switchgear/switchgear_05.jpg'),
        require('~/assets/images/industries/switchgear/switchgear_06.jpg'),
        require('~/assets/images/industries/switchgear/switchgear_07.jpg'),
        require('~/assets/images/industries/switchgear/switchgear_08.jpg')
      ],
      agriculture: [
        require('~/assets/images/industries/agriculture/agriculture_01.jpg'),
        require('~/assets/images/industries/agriculture/agriculture_02.jpg'),
        require('~/assets/images/industries/agriculture/agriculture_03.jpg'),
        require('~/assets/images/industries/agriculture/agriculture_04.jpg'),
        require('~/assets/images/industries/agriculture/agriculture_05.jpg'),
        require('~/assets/images/industries/agriculture/agriculture_06.jpg'),
        require('~/assets/images/industries/agriculture/agriculture_07.jpg'),
        require('~/assets/images/industries/agriculture/agriculture_08.jpg'),
        require('~/assets/images/industries/agriculture/agriculture_09.jpg'),
        require('~/assets/images/industries/agriculture/agriculture_10.jpg')
      ],
      earthmoving: [
        require('~/assets/images/industries/earthmoving/earthmoving_01.jpg'),
        require('~/assets/images/industries/earthmoving/earthmoving_02.jpg'),
        require('~/assets/images/industries/earthmoving/earthmoving_03.jpg'),
        require('~/assets/images/industries/earthmoving/earthmoving_04.jpg'),
        require('~/assets/images/industries/earthmoving/earthmoving_05.jpg'),
        require('~/assets/images/industries/earthmoving/earthmoving_06.jpg'),
        require('~/assets/images/industries/earthmoving/earthmoving_07.jpg'),
        require('~/assets/images/industries/earthmoving/earthmoving_08.jpg'),
        require('~/assets/images/industries/earthmoving/earthmoving_09.jpg'),
        require('~/assets/images/industries/earthmoving/earthmoving_10.jpg'),
        require('~/assets/images/industries/earthmoving/earthmoving_11.jpg')
      ],
      material_handling: [
        require('~/assets/images/industries/handling/handling_01.jpg'),
        require('~/assets/images/industries/handling/handling_02.jpg'),
        require('~/assets/images/industries/handling/handling_03.jpg'),
        require('~/assets/images/industries/handling/handling_04.jpg'),
        require('~/assets/images/industries/handling/handling_05.jpg')
      ],
      automotive: [
        require('~/assets/images/industries/automotive/automotive_01.jpg'),
        require('~/assets/images/industries/automotive/automotive_02.jpg'),
        require('~/assets/images/industries/automotive/automotive_03.jpg')
      ],
      cement: [
        require('~/assets/images/industries/cement/cement_01.jpg'),
        require('~/assets/images/industries/cement/cement_02.jpg'),
        require('~/assets/images/industries/cement/cement_03.jpg'),
        require('~/assets/images/industries/cement/cement_04.jpg')
      ],
      packaging: [
        require('~/assets/images/industries/packaging/packaging_01.jpg'),
        require('~/assets/images/industries/packaging/packaging_02.jpg'),
        require('~/assets/images/industries/packaging/packaging_03.jpg'),
        require('~/assets/images/industries/packaging/packaging_04.jpg'),
        require('~/assets/images/industries/packaging/packaging_05.jpg'),
        require('~/assets/images/industries/packaging/packaging_06.jpg')
      ],
      parking: [
        require('~/assets/images/industries/parking/parking_01.jpg'),
        require('~/assets/images/industries/parking/parking_02.jpg'),
        require('~/assets/images/industries/parking/parking_03.jpg'),
        require('~/assets/images/industries/parking/parking_04.jpg')
      ],
      pollution: [
        require('~/assets/images/industries/pollution/pollution_01.jpg'),
        require('~/assets/images/industries/pollution/pollution_02.jpg'),
        require('~/assets/images/industries/pollution/pollution_03.jpg'),
        require('~/assets/images/industries/pollution/pollution_04.jpg'),
        require('~/assets/images/industries/pollution/pollution_05.jpg'),
        require('~/assets/images/industries/pollution/pollution_06.jpg')
      ],
      process: [
        require('~/assets/images/industries/process/process_01.jpg'),
        require('~/assets/images/industries/process/process_02.jpg'),
        require('~/assets/images/industries/process/process_03.jpg'),
        require('~/assets/images/industries/process/process_04.jpg'),
        require('~/assets/images/industries/process/process_05.jpg'),
        require('~/assets/images/industries/process/process_06.jpg')
      ]
    }
  },
  head () {
    return { title: 'Industries' }
  },
  mounted () {
    const pageUrl = window.location.href
    const sectionName = pageUrl.split('#')
    const sectionEl = document.getElementById(sectionName[1])

    if (sectionEl) {
      const sectionTop = sectionEl.offsetTop
      const windowHeight = window.innerHeight

      const offsetY = Math.round(sectionTop - windowHeight / 2)

      // scroll to does not work in chrome without a timeout, it fires too early
      setTimeout(() => {
        window.scrollTo({
          top: offsetY,
          left: 0,
          behavior: 'smooth'
        })
      }, 0)
    }
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
.industry {
  @apply mb-12;
}
.other-inner div {
  @apply w-full md:w-1/2 mb-8;
}
</style>
