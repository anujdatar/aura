<script setup lang="ts">
useHead({
  title: 'Aura LaserFab',
  meta: [
    { name: 'description', content: 'Aura Laserfab Pvt. Ltd.' },
  ],
})

const startLoading = ref<boolean>()

function handleCloseSpinner() {
  startLoading.value = false
}

useRouter().afterEach(() => {
  startLoading.value = true
})

onMounted(() => {
  startLoading.value = true
  watch(startLoading, () => {
    if (startLoading.value === true) {
      setTimeout(() => {
        startLoading.value = false
      }, 2000)
    }
  })
})
</script>

<template>
  <page-loader v-if="startLoading" @close-spinner="handleCloseSpinner" />
  <router-view />
</template>
