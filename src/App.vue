<script setup lang="ts">
useHead({
  title: 'Aura LaserFab',
  meta: [
    { name: 'description', content: 'Aura Laserfab Pvt. Ltd.' },
  ],
})

const startLoading = ref<boolean>(true)
// const loadingZIndex = ref('1000')

useRouter().afterEach((to, from, next) => {
  startLoading.value = true
  // loadingZIndex.value = '1000'
  setTimeout(() => {
    startLoading.value = false
    // loadingZIndex.value = '-1'
  }, 1000)
})

onMounted(() => {
  setTimeout(() => {
    startLoading.value = false
    // loadingZIndex.value = '-1'
  }, 2000)
})
</script>

<template>
  <page-loader :start="startLoading" />
  <router-view />
</template>
