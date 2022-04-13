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

const heroImage = 'assets/images/hero_industries.webp'
const heroTitle = 'Catering to major OEMs'
const heroContent = 'Earthmoving and construction, Electrical Systems, Mining and Agricultural Equipment and many more'

</script>

<template>
  <aura-hero :image="heroImage" :title="heroTitle" :content="heroContent" />
  <div class="page-content bg-alt">
    <div class="container flex-col">
      <h2 class="heading">
        Earthmoving &amp; Construction Equipment
      </h2>
      <industry-thumbnails name="earthmoving" :images="earthmoving" />
      <h2 class="heading">
        Electrical Switchgear Products
      </h2>
      <industry-thumbnails name="switchgear" :images="switchgear" />
      <h2 class="heading">
        Mining Equipment
      </h2>
      <industry-thumbnails name="mining" :images="mining" />
      <h2 class="heading">
        Agriculture and Farm Equipment
      </h2>
      <industry-thumbnails name="agriculture" :images="agriculture" />
      <h2 class="heading">
        Material Handling Equipment
      </h2>
      <industry-thumbnails name="handling" :images="material_handling" />
      <h2 class="heading">
        Automotive Components
      </h2>
      <industry-thumbnails name="automotive" :images="automotive" />
      <h2 class="heading">
        Textile Machinery
      </h2>
      <industry-thumbnails name="textile" :images="textile" />
      <h2 class="heading">
        Packaging &amp; Printing Machinery
      </h2>
      <industry-thumbnails name="packaging" :images="packaging" />
      <h2 class="heading">
        Automated Parking Systems
      </h2>
      <industry-thumbnails name="parking" :images="parking" />
      <h2 class="heading">
        Pollution Control Equipment
      </h2>
      <industry-thumbnails name="pollution" :images="pollution" />
      <h2 class="heading">
        Process Plant &amp; Equipment
      </h2>
      <industry-thumbnails name="process" :images="process" />
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: default
</route>
