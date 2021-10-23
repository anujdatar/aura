<template>
  <div class="left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20.1" style="transform: translateZ(0px);">
    <svg
      class="absolute bottom-0 overflow-hidden"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      version="1.1"
      viewBox="0 0 2560 95"
      x="0"
      y="0"
    >
      <polygon class="fill-current" points="2560,0 2560,95 0,95" :class="color" />
    </svg>
    <separator-line />
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
