<script setup lang="ts">
const routes = [
  { title: 'Home', path: '/' },
  { title: 'Industries', path: '/industries' },
  { title: 'Services', path: '/services' },
  { title: 'About', path: '/about' },
  { title: 'Contact', path: '/contact' },
]
</script>

<template>
  <main class="">
    <aura-navigation :routes="routes" />
    <aura-sidenav :routes="routes" />
    <router-view />
    <aura-footer class="bg-alt" />
  </main>
</template>
