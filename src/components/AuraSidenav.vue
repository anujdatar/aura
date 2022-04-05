<script setup lang="ts">
import type { RoutesInterface } from '../types'
import { useSidebarState } from '~/stores/sidebar'

interface properties {
  routes: RoutesInterface[]
}

const props = defineProps<properties>()

const sidebar = useSidebarState()
</script>

<template>
  <aside
    class="aside fixed inset-0 overflow-hidden"
    aria-labelledby="slide-over-title"
    role="dialog"
    aria-modal="true"
    :class="sidebar.isOpen ? 'is-open' : 'is-closed'"
  >
    <div class="sidenav-backdrop" @click="sidebar.close" />
    <div class="sidenav fixed inset-y-0 right-0">
      <div class="header flex flex-row h-navbar items-center justify-between">
        <router-link to="/" class="brand-logo">
          <img src="assets/aura_logo.png" alt="brand-logo" class="aura-logo">
        </router-link>
        <button class="close-sidenav rounded-md text-primary" @click="sidebar.close">
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
      <div class="mt-6 relative flex-1">
        <router-link
          v-for="(route, i) in props.routes"
          :key="i"
          :to="route.path"
          class="nav-link h-full uppercase px-2 mr-2 py-3 flex items-center"
          @click="sidebar.close"
        >
          {{ route.title }}
        </router-link>
      </div>
    </div>
  </aside>
</template>

<style>
.aside {
  --animation-duration: .5s;
}
.aside.is-closed {
  z-index: -1;
  animation: sidenav var(--animation-duration) forwards;
}
.aside.is-open {
  z-index: 51;
}
.sidenav-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  background-color: black;
  opacity: 0;
  transition: opacity var(--animation-duration);
  -webkit-transition: opacity var(--animation-duration);
}
.aside.is-open .sidenav-backdrop {
  opacity: .8;
}
.sidenav {
  width: 60%;
  background-color: white;
  transform: translateX(100%);
  transition: transform var(--animation-duration);
}
.aside.is-open .sidenav {
  transform: translateX(0px);
}
.aside.is-open .sidenav .header {
  box-shadow: 0 1px 3px #000000;
}
.sidenav .header {
  padding-left: 1.25rem;
  padding-right: 1.25rem;
}
.sidenav .aura-logo {
  width: 8rem;
}
.close-sidenav {
  border-radius: 5px;
}
.close-sidenav svg {
  height: 2.5rem;
}
.close-sidenav:hover {
  color: var(--secondary);
}
.close-sidenav:focus {
  outline: 2px solid var(--accent-alt);
  outline-offset: 2px;
}
/* .sidenav .nav-link {
  font-weight: 500;
} */
.sidenav .router-link-exact-active {
  border-bottom: none !important;
}

@keyframes sidenav {
  0% { z-index: 51; }
  10% { z-index: 51; }
  50% { z-index: 51; }
  99% { z-index: 51; }
  100% { z-index: -1; }
}
</style>
