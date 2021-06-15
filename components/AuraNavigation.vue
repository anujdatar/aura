<template>
  <nav class="sticky top-0 z-50 w-full flex flex-row items-center justify-between h-12">
    <!-- site logo / brand -->
    <nuxt-link to="/" class="flex flex-row pl-2 md:pl-8">
      <img src="~/assets/images/aura_logo.png" alt="brand-logo" class="w-10 mr-2 pt-2 text-justify">
      <strong class="text-3xl text-green-600 font-serif items-center flex">{{ appTitle }}</strong>
    </nuxt-link>
    <!-- site navigation links -->
    <div class="flex flex-row h-full justify-center items-center hidden md:flex pr-8">
      <nuxt-link
        v-for="(route, i) in appRoutes"
        :key="i"
        :to="route.path"
        :data-hover="route.title"
        tabindex="0"
        class="h-full uppercase pl-1 pr-1 mr-2 flex items-center border-b-3 border-transparent text-sm nav-link text-white font-semibold"
      >
        {{ route.title }}
      </nuxt-link>
    </div>
    <!-- Sidebar toggle button -->
    <div class="block md:hidden text-white cursor-pointer pr-2 h-12 w-12" @click="toggleSidebar">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-full w-full p-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </div>
  </nav>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  props: {
    appTitle: {
      type: String,
      default: 'App'
    },
    appRoutes: {
      type: Array,
      required: true
    }
  },
  mounted () {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    ...mapMutations(['toggleSidebar']),
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

<style>
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
