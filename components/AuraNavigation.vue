<template>
  <nav class="sticky top-0 z-50 w-full flex flex-row items-center justify-between h-24 text-white">
    <!-- site logo / brand -->
    <nuxt-link to="/" class="flex flex-row pl-2 md:pl-8">
      <img src="~/assets/images/aura_logo_1.png" alt="brand-logo" class="w-36 mr-2 pt-2 text-justify">
      <!-- <strong class="text-3xl text-green-600 font-serif items-center flex">{{ appTitle }}</strong> -->
    </nuxt-link>
    <!-- site navigation links -->
    <div class="flex flex-col h-full justify-between items-center hidden md:flex pr-6">
      <div class="flex flex-row w-full contact-info items-center justify-between px-2">
        <span class="flex flex-row justify-center items-center align-middle text-lg">
          <mail-icon class="w-4 h-full mr-1 pt-1" />
          <span class="h-full flex justify-center items-center text-center align-middle">
            sales@auralaser.in
          </span>
        </span>
        <span class="flex flex-row justify-center items-center text-lg ml-4">
          <phone-icon class="w-4 h-full mr-1 pt-1" />
          +91-9881727472
        </span>
      </div>
      <div class="flex flex-row w-full h-5/8">
        <nuxt-link
          v-for="(route, i) in appRoutes"
          :key="i"
          :to="route.path"
          :data-hover="route.title"
          tabindex="0"
          class="h-full uppercase px-2 py-3 mr-2 flex items-center border-b-3 border-transparent text-md nav-link"
        >
          {{ route.title }}
        </nuxt-link>
      </div>
    </div>
    <!-- Sidebar toggle button -->
    <div class="burger block md:hidden cursor-pointer pr-2 h-12 w-12 hover:text-alt" @click="toggleSidebar">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-full w-full p-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </div>
  </nav>
</template>

<script>
import { mapMutations } from 'vuex'
import PhoneIcon from '@/assets/icons/phone_icon.svg?inline'
import MailIcon from '@/assets/icons/mail_icon.svg?inline'
export default {
  components: { PhoneIcon, MailIcon },
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
    this.onScroll() // check page y-position on reload
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
nav {
  transition-property: background-color;
  /* transition-timing-function: ease; */
  transition-duration: 1s;
}
.nuxt-link-exact-active {
  @apply border-accent !important;
  @apply text-accent !important;
}
.nav-link:hover:not(.nuxt-link-exact-active) {
  @apply bg-accent;
  @apply text-white;
}
.is-scrolled {
  @apply bg-black;
  @apply opacity-80;
}
</style>
