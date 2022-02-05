<template>
  <div class="page-content overflow-hidden flex flex-col min-h-screen">
    <aura-hero :title="heroTitle" :content="heroContent" :image-src="heroImage" />
    <div class="container flex flex-col">
      <!-- construction and earthmoving section -->
      <div id="construction" class="industry">
        <h2 class="heading block">
          Earthmoving &amp; Construction Equipment
        </h2>
        <p>
          We supply fabricated and machined assemblies such as Dozers, Linkages, Platforms, Sliders and Carriers for Excavators, Chassis &amp; Operator Platforms for Compactors and Other Cut, Bend and Fabricated Components Loaders, Skid Steers, Engine mounts etc.
        </p>
        <lightbox name="earthmoving_lightbox" :images="earthmoving" />
      </div>
      <!-- electrical switchgear section -->
      <div id="switchgear" class="industry">
        <h2 class="heading block">
          Electrical Switchgear Products
        </h2>
        <p>
          Typical Components we supply include SF6 Stainless Steel Welded Tanks for Medium Voltage Switchgear, Breaker Mechanism Units, Enclosures, and Other Precision Mechanism Components.
        </p>
        <lightbox name="switchgear_lightbox" :images="switchgear" />
      </div>
      <!-- mining equipment section -->
      <div id="mining" class="industry text-justify">
        <h2 class="heading block">
          Mining Equipment
        </h2>
        <p>
          We supply components such as Conveyor Frames, Hydraulic &amp; Fuel Tanks, Engine Base, Lift Axel Assembly etc.
        </p>
      </div>
    </div>
    <!--  -->
    <div class="relative bg-white mt-auto">
      <section-separator color="text-white" />
      <div class="container flex-col pt-8">
        <!-- agriculture and farm equipment section -->
        <div id="agriculture" class="industry">
          <h2 class="heading block">
            Agriculture and Farm Equipment
          </h2>
          <p>
            Our Products include Painted Tractor Chassis &amp; Body Parts, Hydraulic and Fuel Tanks, Pedals, Stainless Steel Tanks  &amp; Frames
          </p>
          <lightbox name="agriculture_lightbox" :images="agriculture" />
        </div>
        <!-- material handling section -->
        <div id="handling" class="industry">
          <h2 class="heading block">
            Material Handling Equipment
          </h2>
          <p>
            Typical Components include Apron Cells &amp; Buckets for Conveyors, Frames of Baggage Handling Conveyors, Buckets &amp; Chassis of Mini Dumpers and other assemblies
          </p>
          <lightbox name="mat_handling_lightbox" :images="material_handling" />
        </div>
        <!-- other industries section -->
        <div id="other" class="industry">
          <h2 class="heading block">
            Other Industries
          </h2>
          <div class="flex flex-row flex-wrap other-inner">
            <div>
              <h4 class="text-xl text-primary">
                Automotive Components
              </h4>
              <p>
                Products include Trailer Chassis, Landing Gear for Trailers, Parts for Suspension Systems
              </p>
              <lightbox name="automotive_lightbox" :images="automotive" />
            </div>
            <div>
              <h4 class="text-xl text-primary">
                Cement Plant Equipment &amp; Machinery
              </h4>
              <p>
                Typical products we supply include -
                <b>Precision Cut &amp; Bent Parts</b>
                <b>Fabricated &amp; Painted Assemblies</b>
              </p>
              <lightbox name="cement_lightbox" :images="cement" />
            </div>
            <div>
              <h4 class="text-xl text-primary">
                Packaging &amp; Printing Machinery
              </h4>
              <p>
                Typical products we supply include -
                <b>Structures</b>
                <b>Fabricated &amp; Powdercoated Frames</b>
                <b>Precision Cut &amp; Bent Parts</b>
              </p>
              <lightbox name="packaging_lightbox" :images="packaging" />
            </div>
            <div>
              <h4 class="text-xl text-primary">
                Automated Parking Systems
              </h4>
              <p>
                Typical products we supply include -
                <b>Welded Assemblies</b>
                <b>Precision Cut &amp; Bent Parts</b>
              </p>
              <lightbox name="parking_lightbox" :images="parking" />
            </div>
            <div>
              <h4 class="text-xl text-primary">
                Pollution Control Equipment
              </h4>
              <p>
                Typical products we supply include -
                <b>Laser Cut Bag Holding Plates</b>
                <b>Fabricated Bag Houses</b>
              </p>
              <lightbox name="pollution_lightbox" :images="pollution" />
            </div>
            <div>
              <h4 class="text-xl text-primary">
                Process Plant &amp; Equipment
              </h4>
              <p>
                Typical products we supply include -
                <b>Fabricated &amp; Painted Assemblies</b>
                <b>Precision Cut &amp; Bent Parts</b>
              </p>
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
      heroTitle: 'Catering to major OEMs',
      heroContent: 'Earthmoving and construction, Electrical Systems, Mining and Agricultural Equipment and many more',
      heroImage: require('~/assets/images/hero_industries.jpeg'),
      switchgear: [
        {
          src: require('~/assets/images/industries/switchgear/1_Switchgear_Housing.jpg'),
          title: 'Switchgear Housing'
        },
        {
          src: require('~/assets/images/industries/switchgear/2_Breaker_Support_Plate.jpg'),
          title: 'Breaker Support Plate'
        },
        {
          src: require('~/assets/images/industries/switchgear/3_Breaker_Main_Plate.jpg'),
          title: 'Breaker Main Plate'
        },
        {
          src: require('~/assets/images/industries/switchgear/4_SS_Welded_MV_Tank.jpg'),
          title: 'SS Welded MV Tank'
        },
        {
          src: require('~/assets/images/industries/switchgear/5_SS_Welded_MV_Tank.jpg'),
          title: 'SS Welded MV Tank'
        },
        {
          src: require('~/assets/images/industries/switchgear/6_SS_Tanks_for_MV_Breakers.jpg'),
          title: 'SS Tanks for MV Breakers'
        },
        {
          src: require('~/assets/images/industries/switchgear/7_GI_275GSM_Components.jpg'),
          title: 'GI 275GSM Components'
        },
        {
          src: require('~/assets/images/industries/switchgear/8_GI_Components.jpg'),
          title: 'GI Components'
        },
        {
          src: require('~/assets/images/industries/switchgear/9_GI_Parts-1.6-2.0_mm.jpg'),
          title: 'GI Parts -> 1.6-2.0 mm'
        },
        {
          src: require('~/assets/images/industries/switchgear/10_SS304_Mechanism_Plate_Other_Mechanism_Components.jpg'),
          title: 'SS304 Mechanism Plate Other Mechanism Components'
        },
        {
          src: require('~/assets/images/industries/switchgear/11_SS_Mechanism_Components.jpg'),
          title: 'SS_Mechanism_Components'
        },
        {
          src: require('~/assets/images/industries/switchgear/12_MS_Tank_Parts.jpg'),
          title: 'MS_Tank_Parts'
        },
        {
          src: require('~/assets/images/industries/switchgear/13_3CR12_Parts_of_MV_Tanks.jpg'),
          title: '3CR12 Parts of MV Tanks'
        }
      ],
      agriculture: [
        {
          src: require('~/assets/images/industries/agriculture/1_SS_Tanks_Finished_SS_304-2mm.jpg'),
          title: 'SS Tanks Finished SS304-2mm'
        },
        {
          src: require('~/assets/images/industries/agriculture/2_SS_Hydraulic_Tank.jpg'),
          title: 'SS Hydraulic Tank'
        },
        {
          src: require('~/assets/images/industries/agriculture/3_Tractor_Body_Part.jpg'),
          title: 'Tractor Body Part'
        },
        {
          src: require('~/assets/images/industries/agriculture/4_Painted_Tractor_Chasis.jpg'),
          title: 'Painted Tractor Chassis'
        },
        {
          src: require('~/assets/images/industries/agriculture/5_Painted_Assembly.jpg'),
          title: 'Painted Assembly'
        },
        {
          src: require('~/assets/images/industries/agriculture/6_Painted_Chasis_6,8,12,16mm_S235JR.jpg'),
          title: 'Painted Chassis -> 6, 8, 12, 16 mm S235JR'
        },
        {
          src: require('~/assets/images/industries/agriculture/7_Chassis_8,12,16,20mm_S235JR.jpg'),
          title: 'Chassis -> 8, 12, 16, 20 mm S235JR'
        },
        {
          src: require('~/assets/images/industries/agriculture/8_Painted_Cover.jpg'),
          title: 'Painted Cover'
        },
        {
          src: require('~/assets/images/industries/agriculture/9_Painted_Frames.jpg'),
          title: 'Painted Frames'
        },
        {
          src: require('~/assets/images/industries/agriculture/10_Painted_Tank.jpg'),
          title: 'Painted Tank'
        }
      ],
      earthmoving: [
        {
          src: require('~/assets/images/industries/earthmoving/1_Dozer.jpeg'),
          title: 'Dozer'
        },
        {
          src: require('~/assets/images/industries/earthmoving/2_Excavator_Platform.jpg'),
          title: 'Excavator Platform'
        },
        {
          src: require('~/assets/images/industries/earthmoving/3_Carrier.jpg'),
          title: 'Carrier'
        },
        {
          src: require('~/assets/images/industries/earthmoving/4_Slider.jpg'),
          title: 'Slider'
        },
        {
          src: require('~/assets/images/industries/earthmoving/5_Compactor_Chasis.jpeg'),
          title: 'Compactor Chassis'
        },
        {
          src: require('~/assets/images/industries/earthmoving/6_Compactor_Chasis.jpeg'),
          title: 'Compactor Chassis'
        },
        {
          src: require('~/assets/images/industries/earthmoving/7_Compactor_Operator_Platform.jpeg'),
          title: 'Compactor Operator Platform'
        },
        {
          src: require('~/assets/images/industries/earthmoving/8_Back_Hoe_Loader_Weld_Assy_QSTE_380-20mm_thick.jpg'),
          title: 'Back Hoe Loader Weld Assy QSTE380 -> 20mm thick'
        },
        {
          src: require('~/assets/images/industries/earthmoving/9_BUCKETS-ROLLED-8mmX800mm.jpg'),
          title: 'Rolled Buckets -> 8mm x 800mm'
        },
        {
          src: require('~/assets/images/industries/earthmoving/10_CUT_BENT_PARTS_6,8,10,12,20mm_S355.jpg'),
          title: 'Cut & Bent Parts 6, 8, 10, 12, 20mm S355'
        },
        {
          src: require('~/assets/images/industries/earthmoving/11_CUT_BENT_PARTS_6,8,10,12,20mm_S355.jpg'),
          title: 'Cut & Bent Parts 6, 8, 10, 12, 20mm S355'
        },
        {
          src: require('~/assets/images/industries/earthmoving/12_Weld_Assy_S355-10,12mm_thick.jpg'),
          title: 'Weld Assy S355 -> 10, 12mm thick'
        },
        {
          src: require('~/assets/images/industries/earthmoving/13_Welded_Loader_Arm-S335-6,8,12mm_thick.jpg'),
          title: 'Welded Loader Arm S335 -> 6, 8, 12mm thick'
        }
      ],
      material_handling: [
        { src: require('~/assets/images/industries/handling/handling_01.jpg') },
        { src: require('~/assets/images/industries/handling/handling_02.jpg') },
        { src: require('~/assets/images/industries/handling/handling_03.jpg') },
        { src: require('~/assets/images/industries/handling/handling_04.jpg') },
        { src: require('~/assets/images/industries/handling/handling_05.jpg') }
      ],
      automotive: [
        { src: require('~/assets/images/industries/automotive/automotive_01.jpg') },
        { src: require('~/assets/images/industries/automotive/automotive_02.jpg') },
        { src: require('~/assets/images/industries/automotive/automotive_03.jpg') }
      ],
      cement: [
        { src: require('~/assets/images/industries/cement/cement_01.jpg') },
        { src: require('~/assets/images/industries/cement/cement_02.jpg') },
        { src: require('~/assets/images/industries/cement/cement_03.jpg') },
        { src: require('~/assets/images/industries/cement/cement_04.jpg') }
      ],
      packaging: [
        { src: require('~/assets/images/industries/packaging/packaging_01.jpg') },
        { src: require('~/assets/images/industries/packaging/packaging_02.jpg') },
        { src: require('~/assets/images/industries/packaging/packaging_03.jpg') },
        { src: require('~/assets/images/industries/packaging/packaging_04.jpg') },
        { src: require('~/assets/images/industries/packaging/packaging_05.jpg') },
        { src: require('~/assets/images/industries/packaging/packaging_06.jpg') }
      ],
      parking: [
        { src: require('~/assets/images/industries/parking/parking_01.jpg') },
        { src: require('~/assets/images/industries/parking/parking_02.jpg') },
        { src: require('~/assets/images/industries/parking/parking_03.jpg') },
        { src: require('~/assets/images/industries/parking/parking_04.jpg') }
      ],
      pollution: [
        { src: require('~/assets/images/industries/pollution/pollution_01.jpg') },
        { src: require('~/assets/images/industries/pollution/pollution_02.jpg') },
        { src: require('~/assets/images/industries/pollution/pollution_03.jpg') },
        { src: require('~/assets/images/industries/pollution/pollution_04.jpg') },
        { src: require('~/assets/images/industries/pollution/pollution_05.jpg') },
        { src: require('~/assets/images/industries/pollution/pollution_06.jpg') }
      ],
      process: [
        { src: require('~/assets/images/industries/process/process_01.jpg') },
        { src: require('~/assets/images/industries/process/process_02.jpg') },
        { src: require('~/assets/images/industries/process/process_03.jpg') },
        { src: require('~/assets/images/industries/process/process_04.jpg') },
        { src: require('~/assets/images/industries/process/process_05.jpg') },
        { src: require('~/assets/images/industries/process/process_06.jpg') }
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
.industry b {
  @apply font-semibold text-sm;
}
.industry p {
  @apply justify-between text-justify;
}
.other-inner > div {
  @apply w-full md:w-1/2 mb-8;
  @apply p-4;
}
</style>
