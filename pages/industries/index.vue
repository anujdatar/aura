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
      <div id="mining" class="industry">
        <h2 class="heading block">
          Mining Equipment
        </h2>
        <p>
          We supply components such as Conveyor Frames, Hydraulic &amp; Fuel Tanks, Engine Base, Lift Axel Assembly etc.
        </p>
        <lightbox name="mining_lightbox" :images="mining" />
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
                Textile Machinery
              </h4>
              <p>
                We supply Precision Cut &amp; Bent Components like Ring Frames, Suction Ducts, etc
              </p>
              <lightbox name="textile_lightbox" :images="textile" />
            </div>
            <div>
              <h4 class="text-xl text-primary">
                Packaging &amp; Printing Machinery
              </h4>
              <p>
                Typical products we supply include Fabricated &amp; Powder Coated Frames, Laser Cut &amp; Bent Parts
              </p>
              <lightbox name="packaging_lightbox" :images="packaging" />
            </div>
            <div>
              <h4 class="text-xl text-primary">
                Automated Parking Systems
              </h4>
              <p>
                Typical products we supply include Welded Platforms, Pillars &amp; slides.
              </p>
              <lightbox name="parking_lightbox" :images="parking" />
            </div>
            <div>
              <h4 class="text-xl text-primary">
                Pollution Control Equipment
              </h4>
              <p>
                We supply Laser Cut Bag Holding Plates Fabricated Bag Houses &amp; other Assemblies
              </p>
              <lightbox name="pollution_lightbox" :images="pollution" />
            </div>
            <div>
              <h4 class="text-xl text-primary">
                Process Plant &amp; Equipment
              </h4>
              <p>
                Typical products we supply include -
                Fabricated &amp; Painted Assemblies
                Precision Cut &amp; Bent Parts
              </p>
              <lightbox name="process_lightbox" :images="process" />
            </div>
          </div>
        </div>
      </div>
      <!--  -->
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
      heroTitle: 'Catering to major OEMs',
      heroContent: 'Earthmoving and construction, Electrical Systems, Mining and Agricultural Equipment and many more',
      heroImage: require('~/assets/images/hero_industries.webp'),
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
          src: require('~/assets/images/industries/agriculture/4_Painted_Tractor_Chassis.jpg'),
          title: 'Painted Tractor Chassis'
        },
        {
          src: require('~/assets/images/industries/agriculture/5_Painted_Assembly.webp'),
          title: 'Painted Assembly'
        },
        {
          src: require('~/assets/images/industries/agriculture/6_Painted_Chassis_6,8,12,16mm_S235JR.webp'),
          title: 'Painted Chassis -> 6, 8, 12, 16 mm S235JR'
        },
        {
          src: require('~/assets/images/industries/agriculture/7_Chassis_8,12,16,20mm_S235JR.webp'),
          title: 'Chassis -> 8, 12, 16, 20 mm S235JR'
        },
        {
          src: require('~/assets/images/industries/agriculture/8_Painted_Cover.webp'),
          title: 'Painted Cover'
        },
        {
          src: require('~/assets/images/industries/agriculture/9_Painted_Frames.webp'),
          title: 'Painted Frames'
        },
        {
          src: require('~/assets/images/industries/agriculture/10_Painted_Tank.webp'),
          title: 'Painted Tank'
        }
      ],
      automotive: [
        {
          src: require('~/assets/images/industries/automotive/1_fabricated_chassis.jpg'),
          title: 'Fabricated Chassis'
        },
        {
          src: require('~/assets/images/industries/automotive/2_parts_for_suspension_systems.jpg'),
          title: 'Parts for Suspension Systems'
        },
        {
          src: require('~/assets/images/industries/automotive/3_landing_gear_frame.jpg'),
          title: 'Landing Gear Frame'
        }
      ],
      earthmoving: [
        {
          src: require('~/assets/images/industries/earthmoving/1_Dozer.webp'),
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
          src: require('~/assets/images/industries/earthmoving/5_Compactor_Chassis.webp'),
          title: 'Compactor Chassis'
        },
        {
          src: require('~/assets/images/industries/earthmoving/6_Compactor_Chassis.webp'),
          title: 'Compactor Chassis'
        },
        {
          src: require('~/assets/images/industries/earthmoving/7_Compactor_Operator_Platform.webp'),
          title: 'Compactor Operator Platform'
        },
        {
          src: require('~/assets/images/industries/earthmoving/8_Back_Hoe_Loader_Weld_Assy_QSTE_380-20mm_thick.webp'),
          title: 'Back Hoe Loader Weld Assy QSTE380 -> 20mm thick'
        },
        {
          src: require('~/assets/images/industries/earthmoving/9_BUCKETS-ROLLED-8mmX800mm.webp'),
          title: 'Rolled Buckets -> 8mm x 800mm'
        },
        {
          src: require('~/assets/images/industries/earthmoving/10_CUT_BENT_PARTS_6,8,10,12,20mm_S355.webp'),
          title: 'Cut & Bent Parts 6, 8, 10, 12, 20mm S355'
        },
        {
          src: require('~/assets/images/industries/earthmoving/11_CUT_BENT_PARTS_6,8,10,12,20mm_S355.webp'),
          title: 'Cut & Bent Parts 6, 8, 10, 12, 20mm S355'
        },
        {
          src: require('~/assets/images/industries/earthmoving/12_Weld_Assy_S355-10,12mm_thick.webp'),
          title: 'Weld Assy S355 -> 10, 12mm thick'
        },
        {
          src: require('~/assets/images/industries/earthmoving/13_Welded_Loader_Arm-S335-6,8,12mm_thick.webp'),
          title: 'Welded Loader Arm S335 -> 6, 8, 12mm thick'
        }
      ],
      material_handling: [
        {
          src: require('~/assets/images/industries/handling/1_conveyor_bucket_for_cement_plants.jpg'),
          title: 'Conveyor Bucket for Cement Plants'
        },
        {
          src: require('~/assets/images/industries/handling/2_conveyor_bucket_for_cement_plants.jpg'),
          title: 'Conveyor Bucket for Cement Plants'
        },
        {
          src: require('~/assets/images/industries/handling/3_baggage_conveyor_cladding.jpg'),
          title: 'Baggage Conveyor Cladding'
        },
        {
          src: require('~/assets/images/industries/handling/4_baggage_conveyor_cladding.jpg'),
          title: 'Baggage Conveyor Cladding'
        },
        {
          src: require('~/assets/images/industries/handling/5_mini_dumper_bucket.jpg'),
          title: 'Mini Dumper Bucket'
        },
        {
          src: require('~/assets/images/industries/handling/6_mini_dumper_bucket.jpg'),
          title: 'Mini Dumper Bucket'
        }
      ],
      mining: [
        {
          src: require('~/assets/images/industries/mining/1_welded_tank.webp'),
          title: 'Welded Tank'
        },
        {
          src: require('~/assets/images/industries/mining/2_fuel_tank.webp'),
          title: 'Fuel Tank'
        },
        {
          src: require('~/assets/images/industries/mining/3_engine_base.webp'),
          title: 'Engine Base'
        },
        {
          src: require('~/assets/images/industries/mining/4_hopper.webp'),
          title: 'Hopper'
        },
        {
          src: require('~/assets/images/industries/mining/5_conveyor_frame.webp'),
          title: 'Conveyor Frame'
        },
        {
          src: require('~/assets/images/industries/mining/6_conveyor_frame.webp'),
          title: 'Conveyor Frame'
        },
        {
          src: require('~/assets/images/industries/mining/7_lift_axel_arm.webp'),
          title: 'Lift Axel Arm'
        },
        {
          src: require('~/assets/images/industries/mining/8_lift_axel_assy.webp'),
          title: 'Lift Axel Assembly'
        },
        {
          src: require('~/assets/images/industries/mining/9_frame.webp'),
          title: 'Frame'
        },
        {
          src: require('~/assets/images/industries/mining/10_towbar_weldment.webp'),
          title: 'Towbar Reldment'
        }
      ],
      packaging: [
        {
          src: require('~/assets/images/industries/packaging/1_frame_assy_powder_coated.jpg'),
          title: 'Frame Assembly - Powder Coated'
        },
        {
          src: require('~/assets/images/industries/packaging/2_frame_assy_powder_coated.jpg'),
          title: 'Frame Assembly - Powder Coated'
        },
        {
          src: require('~/assets/images/industries/packaging/3_fabricated_assy.jpg'),
          title: 'Fabricated Assembly'
        },
        {
          src: require('~/assets/images/industries/packaging/4_fabricated_assy.jpg'),
          title: 'Fabricated Assembly'
        },
        {
          src: require('~/assets/images/industries/packaging/5_parts_of_packaging_machinery.jpg'),
          title: 'Parts of Packaging Machinery'
        },
        {
          src: require('~/assets/images/industries/packaging/6_parts_of_packaging_machinery.jpg'),
          title: 'Parts of Packaging Machinery'
        },
        {
          src: require('~/assets/images/industries/packaging/7_welded_assy__1.5-3_mm.webp'),
          title: 'Welded Assembly - 1.5 to 3 mm thick'
        },
        {
          src: require('~/assets/images/industries/packaging/8_welded_assy__2-4_mm.webp'),
          title: 'Welded Assembly - 2 to 4 mm thick'
        }
      ],
      parking: [
        {
          src: require('~/assets/images/industries/parking/1_pillars_for_parking_systems_6-12mm.jpg'),
          title: 'Pillars for Parking Systems - 6 to 12 mm thick'
        },
        {
          src: require('~/assets/images/industries/parking/2_pillars_for_parking_systems_4-6mm.jpg'),
          title: 'Pillars for Parking Systems - 4 to 6 mm thick'
        },
        {
          src: require('~/assets/images/industries/parking/3_slides_for_parking_systems_6-12mm.jpg'),
          title: 'Slides for Parking Systems - 6 to 12 mm thick'
        },
        {
          src: require('~/assets/images/industries/parking/3_slides_for_parking_systems_6-12mm.jpg'),
          title: 'Slides for Parking Systems - 6 to 12 mm thick'
        }
      ],
      pollution: [
        {
          src: require('~/assets/images/industries/pollution/1_tube_sheets.jpg'),
          title: 'Tube Sheets'
        },
        {
          src: require('~/assets/images/industries/pollution/2_tube_sheets.jpg'),
          title: 'Tube Sheets'
        },
        {
          src: require('~/assets/images/industries/pollution/3_tube_sheets.jpg'),
          title: 'Tube Sheets'
        },
        {
          src: require('~/assets/images/industries/pollution/4_tube_sheets.jpg'),
          title: 'Tube Sheets'
        },
        {
          src: require('~/assets/images/industries/pollution/5_tube_sheet_assy.jpg'),
          title: 'Tube Sheet Assembly'
        },
        {
          src: require('~/assets/images/industries/pollution/6_tube_sheet_assy.jpg'),
          title: 'Tube Sheet Assembly'
        }
      ],
      process: [
        {
          src: require('~/assets/images/industries/process/1_aeration_element.jpg'),
          title: 'Aeration Element'
        },
        {
          src: require('~/assets/images/industries/process/2_aeration_element.jpg'),
          title: 'Aeration Element'
        },
        {
          src: require('~/assets/images/industries/process/3_aeration_element.jpg'),
          title: 'Aeration Element'
        },
        {
          src: require('~/assets/images/industries/process/4_aeration_element.jpg'),
          title: 'Aeration Element'
        },
        {
          src: require('~/assets/images/industries/process/5_air_ventilation_unit.jpg'),
          title: 'Air Ventilation Unit'
        },
        {
          src: require('~/assets/images/industries/process/6_air_ventilation_unit.jpg'),
          title: 'Air Ventilation Unit'
        },
        {
          src: require('~/assets/images/industries/process/7_cement_plant_equipment.jpg'),
          title: 'Cement Plant Equipment'
        },
        {
          src: require('~/assets/images/industries/process/8_cement_plant_equipment.jpg'),
          title: 'Cement Plant Equipment'
        },
        {
          src: require('~/assets/images/industries/process/9_welded_assy__1.5-3_mm.webp'),
          title: 'Welded Assembly - 1.5 to 3_mm thick'
        }
      ],
      switchgear: [
        {
          src: require('~/assets/images/industries/switchgear/1_Switchgear_Housing.webp'),
          title: 'Switchgear Housing'
        },
        {
          src: require('~/assets/images/industries/switchgear/2_Breaker_Support_Plate.webp'),
          title: 'Breaker Support Plate'
        },
        {
          src: require('~/assets/images/industries/switchgear/3_Breaker_Main_Plate.webp'),
          title: 'Breaker Main Plate'
        },
        {
          src: require('~/assets/images/industries/switchgear/4_SS_Welded_MV_Tank.webp'),
          title: 'SS Welded MV Tank'
        },
        {
          src: require('~/assets/images/industries/switchgear/5_SS_Welded_MV_Tank.webp'),
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
      textile: [
        {
          src: require('~/assets/images/industries/textile/1_frame.jpg'),
          title: 'Frame'
        },
        {
          src: require('~/assets/images/industries/textile/2_laser_cut_parts.jpg'),
          title: 'Laser Cut Parts'
        },
        {
          src: require('~/assets/images/industries/textile/3_laser_cut_parts.jpg'),
          title: 'Laser Cut Parts'
        }
      ]
    }
  },
  head () {
    return { title: 'Industries' }
  },
  mounted () {
    // scroll to does not work in chrome without a timeout, it fires too early
    setTimeout(() => {
      window.scrollTo({
        top: this.getElementTopOffset(),
        left: 0,
        behavior: 'smooth'
      })
    }, 100)
  },
  methods: {
    getElementTopOffset () {
      const pageUrl = window.location.href
      const urlBreakdown = pageUrl.split('#')
      const sectionEl = document.getElementById(urlBreakdown[1])

      if (sectionEl) {
        const navEl = window.document.querySelector('nav')
        const navHeight = navEl.clientHeight
        const sectionTop = window.scrollY
        const offsetY = sectionTop - navHeight
        return offsetY
      }
      return 0
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
/* .sub-heading {
  @apply font-semibold;
  @apply text-xl;
  @apply text-primary;
}
.paragraph {
  @apply text-secondary;
  @apply mb-2;
  @apply text-justify;
} */
.industry {
  @apply mb-12 text-primary;
}
.industry b {
  @apply font-semibold text-sm;
}
.industry p {
  @apply justify-between text-justify mb-4;
}
.other-inner > div {
  @apply w-full md:w-1/2 mb-8;
  @apply p-4;
}
</style>
