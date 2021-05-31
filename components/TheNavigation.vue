<template>
  <nav class="sticky top-0 z-50 w-full flex flex-row items-center justify-between h-12">
    <nuxt-link to="/" class="flex flex-row pl-1 md:pl-8">
      <img src="~/assets/images/aura_logo.png" alt="brand-logo" class="w-10 mr-2">
      <strong class="text-3xl text-green-600 font-serif">{{ appTitle }}</strong>
    </nuxt-link>
    <div class="flex flex-row h-full justify-center items-center invisible md:visible pr-8">
      <nuxt-link
        v-for="(route, i) in routes"
        :key="i"
        :to="route.path"
        :data-hover="route.title"
        tabindex="0"
        class="h-full uppercase pl-1 pr-1 mr-2 flex items-center border-b-3 border-transparent text-sm nav-link text-white font-semibold"
      >
        {{ route.title }}
      </nuxt-link>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      appTitle: 'Aura',
      routes: [
        { title: 'Home', path: '/' },
        { title: 'About', path: 'about' },
        { title: 'Capabilities', path: 'capabilities' },
        { title: 'Services', path: 'services' },
        { title: 'Contact', path: 'contact' }
      ]
    }
  },
  mounted () {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll (e) {
      const myNav = window.document.querySelector('nav')
      if (window.pageYOffset > 0) {
        myNav.classList.add('is-scrolled')
      } else {
        myNav.classList.remove('is-scrolled')
      }
    }
  }
}
</script>

<style scoped>
.nuxt-link-exact-active {
  @apply border-green-600;
  @apply text-green-600;
}
.nav-link:hover:not(.nuxt-link-exact-active) {
  @apply bg-green-400;
  @apply text-white;
}
.is-scrolled {
  @apply bg-white;
}

.is-scrolled .nav-link {
  @apply text-blue-gray-800;
  @apply font-semibold;
  text-decoration: none;
}
</style>
