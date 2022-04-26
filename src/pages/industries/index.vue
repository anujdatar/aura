<script setup lang="ts">
import {
  agriculture,
  automotive,
  earthmoving,
  material_handling,
  mining,
  packaging,
  parking,
  pollution,
  process,
  switchgear,
  textile,
} from '~/modules/images'

const router = useRouter()

const heroImage = '~/../../assets/images/hero_industries.webp'
const heroTitle = 'Catering to major OEMs'
const heroContent = 'Earthmoving and construction, Electrical Systems, Mining and Agricultural Equipment and many more'

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
  <aura-hero :image="heroImage" :title="heroTitle" :content="heroContent" />
  <div class="page-content bg-alt">
    <div class="container flex-col">
      <!-- 1. earthmoving and construction section -->
      <section id="earthmoving" class="industry">
        <h2 class="heading">
          Earthmoving &amp; Construction Equipment
        </h2>
        <p class="paragraph">
          We supply fabricated and machined assemblies such as Dozers, Linkages, Platforms, Sliders and Carriers for Excavators, Chassis &amp; Operator Platforms for Compactors and Other Cut, Bend and Fabricated Components Loaders, Skid Steers, Engine mounts etc.
        </p>
        <!-- <industry-thumbnails name="earthmoving" :images="earthmoving" /> -->
        <industry-thumbnail-trial name="earthmoving" :images="earthmoving" />
      </section>
      <!-- 2. electrical switchgear section -->
      <section id="switchgear" class="industry">
        <h2 class="heading">
          Electrical Switchgear Products
        </h2>
        <p class="paragraph">
          Typical Components we supply include SF6 Stainless Steel Welded Tanks for Medium Voltage Switchgear, Breaker Mechanism Units, Enclosures, and Other Precision Mechanism Components.
        </p>
        <industry-thumbnail-trial name="switchgear" :images="switchgear" />
      </section>
      <!-- 3. mining equipment section -->
      <section id="mining" class="industry">
        <h2 class="heading">
          Mining Equipment
        </h2>
        <p class="paragraph">
          We supply components such as Conveyor Frames, Hydraulic &amp; Fuel Tanks, Engine Base, Lift Axel Assembly etc.
        </p>
        <industry-thumbnail-trial name="mining" :images="mining" />
      </section>
    </div>
    <section-separator />
    <div class="bg-white">
      <div class="container flex-col">
        <!-- 4. agriculture and farm equipment section -->
        <section id="agriculture" class="industry">
          <h2 class="heading">
            Agriculture &amp; Farm Equipment
          </h2>
          <p class="paragraph">
            Our Products include Painted Tractor Chassis &amp; Body Parts, Hydraulic and Fuel Tanks, Pedals, Stainless Steel Tanks  &amp; Frames
          </p>
          <industry-thumbnail-trial name="agriculture" :images="agriculture" />
        </section>
        <!-- 5. escalator and elevator section -->
        <section id="escalators_elevators" class="industry">
          <h2 class="heading">
            Escalator &amp; Elevator Components
          </h2>
          <p class="paragraph">
            Typical Components include Apron Cells &amp; Buckets for Conveyors, Frames of Baggage Handling Conveyors, Buckets &amp; Chassis of Mini Dumpers and other assemblies
          </p>
          <industry-thumbnail-trial name="escalators" :images="material_handling" />
        </section>
        <!-- 6. other industries section -->
        <section id="other" class="industry">
          <h2 class="heading">
            Other Industries
          </h2>
          <div class="flex flex-row flex-wrap sub-industries">
            <!-- 6.a. automotive components div -->
            <div id="automotive" class="sub-industry">
              <h4 class="text-xl">
                Automotive Components
              </h4>
              <p class="paragraph">
                Products include Trailer Chassis, Landing Gear for Trailers, Parts for Suspension Systems
              </p>
              <industry-thumbnail-trial name="automotive" :images="automotive" />
            </div>
            <!-- 6.b. textile machinary div -->
            <div id="textile" class="sub-industry">
              <h4 class="text-xl">
                Textile Machinery
              </h4>
              <p class="paragraph">
                We supply Precision Cut &amp; Bent Components like Ring Frames, Suction Ducts, etc
              </p>
              <industry-thumbnail-trial name="textile" :images="textile" />
            </div>
            <!-- 6.c. packaging and printing machinary div -->
            <div id="packaging" class="sub-industry">
              <h4 class="text-xl">
                Packaging &amp; Printing Machinery
              </h4>
              <p class="paragraph">
                Typical products we supply include Fabricated &amp; Powder Coated Frames, Laser Cut &amp; Bent Parts
              </p>
              <industry-thumbnail-trial name="packaging" :images="packaging" />
            </div>
            <!-- 6.d. parking systems div -->
            <div id="parking" class="sub-industry">
              <h4 class="text-xl">
                Automated Parking Systems
              </h4>
              <p class="paragraph">
                Typical products we supply include Welded Platforms, Pillars &amp; slides.
              </p>
              <industry-thumbnail-trial name="parking" :images="parking" />
            </div>
            <!-- 6.e. pollution control div -->
            <div id="pollution" class="sub-industry">
              <h4 class="text-xl">
                Pollution Control Equipment
              </h4>
              <p class="paragraph">
                We supply Laser Cut Bag Holding Plates Fabricated Bag Houses &amp; other Assemblies
              </p>
              <industry-thumbnail-trial name="pollution" :images="pollution" />
            </div>
            <!-- 6.f. process plant equipment div -->
            <div id="process" class="sub-industry">
              <h4 class="text-xl">
                Process Plant &amp; Equipment
              </h4>
              <p class="paragraph">
                Typical products we supply include - Fabricated &amp; Painted Assemblies Precision Cut &amp; Bent Parts
              </p>
              <industry-thumbnail-trial name="process" :images="process" />
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<style>
.industry {
  margin-bottom: 3rem;
}
/* .industry-1 {
  margin-block: 4rem;
  display: flex;
  flex-direction: row;
} */
.industry-text {
  width: 100%;
}
.industry p {
  color: var(--secondary);
}
/* .thumbnail-test {
  width: 100%;
} */
.sub-industries > div {
  width: 100%;
  /* max-width: 50%; */
  margin-bottom: 2rem;
  padding: 1rem;
}
@media (min-width: 768px) {
  /* .thumbnail-test.test-right {
    padding-left: 2rem;
    margin-left: 1rem;
  } */
  /* .thumbnail-test.test-left {
    padding-right: 2rem;
    margin-right: 1rem;
  } */
  .sub-industries > div {
    max-width: 50%;
  }
}
</style>

<route lang="yaml">
meta:
  layout: default
</route>
