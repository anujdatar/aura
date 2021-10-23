<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div
    class="aside fixed inset-0 overflow-hidden z-51"
    aria-labelledby="slide-over-title"
    role="dialog"
    aria-modal="true"
    :class="isSidebarOpen ? onOpen : ''"
  >
    <div class="absolute inset-0 overflow-hidden">
      <div class="fixed inset-y-0 right-0 pl-10 max-w-full flex">
        <div class="w-screen max-w-md">
          <div class="h-full flex flex-col py-2 bg-white shadow-xl">
            <div class="px-2 pb-2 shadow border-b">
              <div class="flex items-center justify-between">
                <nuxt-link to="/" class="flex flex-row pl-1">
                  <img src="~/assets/images/aura_logo_1.png" alt="brand-logo" class="w-32 mr-2 pt-2 text-justify">
                </nuxt-link>
                <div class="ml-3 h-7 flex items-center">
                  <button class="rounded-md text-primary hover:text-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" @click="toggleSidebar">
                    <span class="sr-only">Close panel</span>
                    <!-- Heroicon name: outline/x -->
                    <svg
                      class="h-8 w-8"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div class="mt-6 relative flex-1">
              <nuxt-link
                v-for="(route, i) in appRoutes"
                :key="i"
                :to="route.path"
                :data-hover="route.title"
                tabindex="0"
                class="uppercase py-4 px-4 flex items-center border-transparent text-sm nav-link text-primary font-semibold"
                @click.native="toggleSidebar"
              >
                {{ route.title }}
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
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
  computed: {
    isSidebarOpen () {
      return this.$store.state.sidebarOpen
    },
    onOpen () {
      return 'is-open'
    }
  },
  methods: mapMutations(['toggleSidebar'])
}
</script>

<style>
.aside {
  @apply transform transition ease-in-out duration-500;
  @apply translate-x-full;
}
.aside.is-open {
  @apply translate-x-0;
}
</style>
