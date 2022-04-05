import { acceptHMRUpdate, defineStore } from 'pinia'

export const useSidebarState = defineStore('sidebarState', {
  state: () => {
    return { isOpen: false }
  },
  actions: {
    toggle() {
      this.isOpen = !this.isOpen
    },
    open() {
      this.isOpen = true
    },
    close() {
      this.isOpen = false
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useSidebarState, import.meta.hot))
