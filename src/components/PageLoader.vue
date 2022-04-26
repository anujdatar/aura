<script setup lang="ts">
// const props = defineProps ({
//   start: Boolean,
//   stop: Boolean,
// })

const spin = ref(true)
const spinContainer = ref<HTMLDivElement>()

// function onCloseLoader() {}

// const stopWatch = watch(props.start, () => {
//   console.log('eeeeeeeeeeeeeee')
// })

// onMounted(() => {
//   console.log('what is it?', props.start)
//   // setTimeout(() => {
//   //   console.log('aaaaaaaaa')
//   //   // props.start = true
//   //   // spinContainer.value!.style.zIndex = '-10'
//   //   spin.value = true
//   // }, 500)

//   document.onreadystatechange = () => {
//     if (document.readyState === 'complete') {
//       console.log('Home Page completed with image and files!')
//       spin.value = false
//       spinContainer.value!.style.zIndex = '-10'
//     }
//     // fetch to next page or some code
//   }
//   document.addEventListener('load', () => {
//     // dom is fully loaded, but maybe waiting on images & css files
//     console.log('sssssssssssssssss')
//     spin.value = false
//     spinContainer.value!.style.zIndex = '-10'
//   })
// })

// onUnmounted(() => {
//   stopWatch()
// })
</script>

<template>
  <div ref="spinContainer" class="spinner-container">
    <div class="spinner-backdrop">
      <transition name="curtain-left">
        <div v-if="spin" class="loader-curtain-left" />
      </transition>
      <transition name="curtain-right">
        <div v-if="spin" class="loader-curtain-right" />
      </transition>
      <div v-if="spin" class="hourglass-loader" />
    </div>
  </div>
</template>

<style>
.spinner-container {
  z-index: 1005;
  width: 100%;
  height: 100%;
  /* background-color: rgba(0, 0, 0, .95); */

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

/* .loader-curtain {
  display: relative;
  width: 100%;
  height: 100%;
} */

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
  opacity: 0;
}
.curtain-right-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
.curtain-left-leave-from,
.curtain-right-leave-from {
  transform: translateX(0);
  opacity: 1;
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
  transform: translate(-50px, -50px);
}
.hourglass-loader:after {
  content: " ";
  display: block;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  margin: 8px;
  box-sizing: border-box;
  border: 5px solid #fff;
  border-color: #fff transparent #fff transparent;
  animation: hourglass-loader 1.2s infinite;
}
@keyframes hourglass-loader {
  0% {
    transform: rotate(0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  50% {
    transform: rotate(900deg);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  100% {
    transform: rotate(1800deg);
  }
}
</style>
