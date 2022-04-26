<script setup lang="ts">
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'Aura LaserFab',
  meta: [
    { name: 'description', content: 'Aura Laserfab Pvt. Ltd.' },
  ],
})

// const startLoading = ref<boolean>(true)
// const stopLoading = ref<boolean>(false)

// function toggleLoader() {
//   startLoading.value = !startLoading.value
// }

// onMounted(() => {
//   document.onreadystatechange = () => {
//     if (document.readyState === 'complete') {
//       console.log('Home Page completed with image and files!')
//       stopLoading.value = true
//     }
//     // fetch to next page or some code
//   }
//   document.addEventListener('load', () => {
//     // dom is fully loaded, but maybe waiting on images & css files
//     console.log('sssssssssssssssss')
//     stopLoading.value = true
//   })
// })
</script>

<template>
  <!-- <button @click="toggleLoader">
    Toggle
  </button> -->
  <!-- <page-loader :start="loader" /> -->
  <div v-cloak>
    <div class="v-cloak--block">
      <page-loader />
    </div>
    <div class="v-cloak--hidden">
      <router-view />
      @yield('content')
    </div>
  </div>
</template>

<style>
[v-cloak] .v-cloak--block {
  display: block;
}
[v-cloak] .v-cloak--inline {
  display: inline;
}
[v-cloak] .v-cloak--inlineBlock {
  display: inline-block;
}
[v-cloak] .v-cloak--hidden {
  display: none;
}
[v-cloak] .v-cloak--invisible {
  visibility: hidden;
}
.v-cloak--block,
.v-cloak--inline,
.v-cloak--inlineBlock {
  display: none;
}
</style>
