<script setup lang="ts">
const props = defineProps({
  color: {
    type: String,
    default: 'text-white',
  },
})
</script>

<template>
  <div class="section-separator absolute left-0 w-full" style="transform: translateZ(0px);">
    <svg
      class="absolute bottom-0"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      version="1.1"
      viewBox="0 0 2560 95"
      x="0"
      y="0"
    >
      <polygon class="fill-current" points="2560,0 2560,95 0,95" :class="props.color" />
    </svg>
    <svg
      class="absolute bottom-0"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      version="1.1"
      viewBox="0 0 2560 100"
      x="0"
      y="0"
    >
      <polygon class="text-accent fill-current" points="0,95 2650,0 2650,5 0,100" />
    </svg>
  </div>
</template>

<style>
.section-separator {
  height: 5.025rem; /* 80.4px */
  margin-top: -5rem; /* -80px */
}
</style>
