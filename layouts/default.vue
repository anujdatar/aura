<template>
  <div class="bg-blue-gray-200">
    <!-- <div> -->
    <aura-navigation :app-title="appTitle" :app-routes="routes" />
    <aura-sidenav :app-title="appTitle" :app-routes="routes" />
    <Nuxt />
  </div>
</template>

<script>
export default {
  data () {
    return {
      appTitle: 'Aura',
      routes: [
        { title: 'Home', path: '/' },
        { title: 'Industries', path: 'industries' },
        { title: 'Services', path: 'services' },
        { title: 'About', path: 'about' },
        { title: 'Contact', path: 'contact' }
      ]
    }
  }
}
</script>

<style>
html, body {
  width: 100%;
  height: 100%;
}
*:focus {
  outline: none;
}
</style>
