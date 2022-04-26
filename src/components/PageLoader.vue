<script setup lang="ts">
const spinContainer = ref<HTMLDivElement>()
const curtain = ref<HTMLDivElement>()
const spin = ref<boolean>()

const emit = defineEmits(['close-spinner'])

function stopSpinner() {
  emit('close-spinner')
}

onMounted(() => {
  spin.value = true
  setTimeout(() => {
    spin.value = false
    curtain.value!.addEventListener('transitionend', () => {
      stopSpinner()
    })
  }, 1000)
  setTimeout(() => {
    if (spinContainer.value)
      spinContainer.value.style.zIndex = '-1'
    stopSpinner()
  }, 2000)
})
</script>

<template>
  <div ref="spinContainer" class="spinner-container">
    <div class="spinner-backdrop">
      <transition name="curtain-left">
        <div v-if="spin" ref="curtain" class="loader-curtain-left" />
      </transition>
      <transition name="curtain-right">
        <div v-if="spin" class="loader-curtain-right" />
      </transition>
      <div v-if="spin" class="hourglass-loader" />
      <div v-if="spin" class="hourglass-loader2" />
    </div>
  </div>
</template>

<style>
.spinner-container {
  z-index: 100;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
}
.spinner-backdrop {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.loader-curtain-left,
.loader-curtain-right {
  position: absolute;
  width: 50%;
  height: 100%;
  top: 0;
}

.loader-curtain-left {
  content: " ";
  left: 0;
  background-color: rgba(0, 0, 0, .95);
}
.loader-curtain-right {
  content: " ";
  right: 0;
  background-color: rgba(0, 0, 0, .95);
}

.curtain-left-leave-to {
  transform: translateX(-100%);
  z-index: -1;
}
.curtain-right-leave-to {
  transform: translateX(100%);
  z-index: -1;
}
.curtain-left-leave-from,
.curtain-right-leave-from {
  transform: translateX(0);
  z-index: 1005;
}
.curtain-left-leave-active,
.curtain-right-leave-active {
  transition: all 1s ease;
}

.hourglass-loader {
  display: inline-block;
  /* position: relative; */
  width: 80px;
  height: 80px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-40px, -40px);
}
.hourglass-loader:after {
  content: " ";
  display: block;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  margin: 8px;
  box-sizing: border-box;
  border: 3px solid var(--accent);
  border-color: var(--accent) transparent var(--accent) transparent;
  animation: hourglass-loader 1.2s infinite;
}

/* ************************************************ */
.hourglass-loader2 {
  display: inline-block;
  /* position: relative; */
  width: 40px;
  height: 40px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-20px, -20px);
}
.hourglass-loader2:after {
  content: " ";
  display: block;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin: 8px;
  box-sizing: border-box;
  border: 2px solid var(--accent-alt);
  border-color: transparent var(--accent-alt) transparent var(--accent-alt);
  animation: hourglass-loader 1.2s infinite;
}
/* ************************************************ */
@keyframes hourglass-loader {
  0% {
    transform: rotate(0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  50% {
    transform: rotate(450deg);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  100% {
    transform: rotate(900deg);
  }
}
</style>
