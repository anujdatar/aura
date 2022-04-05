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
  <nav class="navbar flex flex-row h-navbar items-center justify-center text-white">
    <div class="flex flex-row w-full max-w-1200px items-center justify-between px-6 h-navbar">
      <router-link to="/" class="brand-logo">
        <img src="assets/aura_logo.png" alt="brand-logo" class="aura-logo">
      </router-link>
      <div class="nav-link-group hidden md:flex flex-col h-full justify-between items-center">
        <div class="contact-info flex flex-row items-center justify-between px-2">
          <router-link to="/about" class="iso-link flex flex-row h-full justify-center items-center align-middle">
            <span class="semibold">
              ISO 9001:2015
            </span>
            <iso-icon class="icon iso" />
          </router-link>
          <span class="flex flex-row h-full justify-center items-center align-middle ml-3">
            <mail-icon />
            <span class="h-full flex justify-center items-center align-middle text-center pb-1">
              sales@auralaser.in
            </span>
          </span>
          <span class="flex flex-row h-full justify-center items-center ml-3">
            <phone-icon />
            <span class="pb-1">+91-9881727472</span>
          </span>
        </div>
        <div class="nav-links flex flex-row w-full justify-between">
          <router-link
            v-for="(route, i) in props.routes"
            :key="i"
            :to="route.path"
            class="nav-link h-full uppercase px-2 mr-2 py-3 flex items-center"
          >
            {{ route.title }}
          </router-link>
        </div>
      </div>
      <div class="burger cursor-pointer icon flex md:hidden" @click="sidebar.toggle">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-full w-full p-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </div>
    </div>
  </nav>
</template>

<style>
.navbar {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 50;
}
.router-link-exact-active:not(.brand-logo):not(.iso-link) {
  border-bottom: 3px solid var(--accent);
  color: var(--accent) !important;
}
.contact-info {
  min-height: 3rem;
}
.nav-links {
  max-height: 50%;
}
.nav-link:hover:not(.router-link-exact-active) {
  background-color: var(--accent);
  color: white;
}
.nav-links a:last-child {
  margin-right: 0;
}

.navbar .aura-logo {
  width: 9rem; /* 144px */
}
.icon.burger {
  height: 2.5rem;
  width: 2.5rem;
}
.icon.burger:hover {
  color: var(--secondary);
}
.iso-link:hover {
  color: var(--accent);
}
.icon.iso {
  width: 3rem;
  height: 3rem;
  margin-left: .25rem;
}
@media (min-width: 768px) {
  .icon.iso {
    width: 2rem;
    height: 2rem;
  }
}
</style>
