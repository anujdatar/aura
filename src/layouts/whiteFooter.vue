<script setup lang="ts">
import { routes } from '~/modules/routes'
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
