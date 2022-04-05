<script setup lang="ts">
</script>

<template>
  <footer class="flex flex-col items-center justify-center text-center mt-auto text-primary">
    <div class="flex flex-col-reverse md:flex-row w-full max-w-1200px items-center justify-between px-6">
      <div class="text-center md:text-left">
        <h2 class="text-lg font-semibold">
          Aura LaserFab Pvt. Ltd.
        </h2>
        <p class="text-sm leading-6">
          Gat No. 1021, Pune-Bangalore Highway, Near Pune,
        </p>
        <p class="text-sm leading-6">
          Shirwal, Dist. Satara - 412801
        </p>
      </div>
      <div class="flex flex-col justify-between">
        <!-- <iso-cert-display /> -->
        <router-link to="/about" class="iso-link flex flex-row h-full justify-center items-center align-middle">
          <span class="semibold">
            ISO 9001:2015
          </span>
          <iso-icon class="icon iso" />
        </router-link>
        <div class="flex flex-row md:ml-auto mb-8 md:mb-2 mt-2 justify-between items-end">
          <a href="https://www.youtube.com/channel/UCM-qRH75zRIPxla2Ty-2MYQ" target="_blank" rel="noopener noreferrer" class="md:mr-2">
            <youtube-icon class="social-icon youtube" />

          </a>
          <a href="https://linkedin.com/company/aura-laserfab-private-limited-pune" target="_blank" rel="noopener noreferrer">
            <linkedin-icon class="social-icon linkedin" />
          </a>
        </div>
      </div>
    </div>
    <div class="pt-3 leading-8">
      &copy; 2006-2022 Aura LaserFab Pvt. Ltd.
    </div>
  </footer>
</template>

<style>
footer {
  padding-top: 2.5rem;
}
.youtube:hover {
  color: #FF0000;
}
.linkedin:hover {
  color: #0a66c2;
  /* color: #2867B2; */
  /* color: #0077B5; */
}
</style>
