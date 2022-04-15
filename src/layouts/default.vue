<script setup lang="ts">
const routes = [
  { title: 'Home', path: '/' },
  { title: 'Industries', path: '/industries' },
  { title: 'Services', path: '/services' },
  { title: 'Exports', path: '/exports' },
  { title: 'About', path: '/about' },
  { title: 'Contact', path: '/contact' },
]
</script>

<template>
  <main class="h-full w-full">
    <aura-navigation :routes="routes" />
    <aura-sidenav :routes="routes" />
    <router-view />
    <section-separator color="text-alt" />
    <aura-footer class="bg-alt" />
  </main>
</template>
