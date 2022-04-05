<script setup lang="ts">
const routes = [
  { title: 'Home', path: '/' },
  { title: 'Industries', path: '/industries' },
  { title: 'Services', path: '/services' },
  { title: 'About', path: '/about' },
  { title: 'Contact', path: '/contact' },
]

onMounted(() => {
  const navbar = document.querySelector('.navbar')
  navbar?.classList.remove('text-white')
  navbar?.classList.add('text-primary')
})
</script>

<template>
  <main class="h-full w-full">
    <aura-navigation :routes="routes" />
    <aura-sidenav :routes="routes" />
    <router-view />
    <section-separator />
    <aura-footer />
  </main>
</template>
