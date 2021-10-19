<template>
  <div class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20.1" style="transform: translateZ(0px);">
    <svg
      class="absolute bottom-0 overflow-hidden"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      version="1.1"
      viewBox="0 0 2560 100"
      x="0"
      y="0"
    >
      <polygon class="fill-current" points="2560 0 2560 100 0 100" :class="color" />
      <polygon class="fill-current text-orange-400" points="0,95 2650,0 2650,5 0,100 " />
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'text-white'
    }
  }
}
</script>
