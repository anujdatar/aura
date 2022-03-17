<template>
  <div class="iso-9001-div mx-auto">
    <div class="iso-text flex flex-col cursor-pointer font-bold text-primary hover:text-accent hover:underline items-center mx-auto max-w-1/2 h-full" @click="openIso9001Modal">
      <img src="~/static/aura_iso_9001.jpg" class="h-full w-auto">
      <div class="flex flex-row w-full mx-auto mt-2 text-center justify-center">
        <p class="mr-2 text-xl md:text-base">
          ISO 9001:2015
        </p>
        <iso-logo class="w-12 md:w-8" />
      </div>
    </div>
    <!-- iso modal -->
    <div rel="closed" class="absolute top-0 left-0 w-full h-screen z-1000 m-auto overflow-auto iso-9001-modal" @click.self="closeIso9001Modal">
      <div class="relative mx-auto w-full h-full py-4 z-1001" @click.self="closeIso9001Modal">
        <span class="close cursor-pointer z-1001" @click="closeIso9001Modal">&times;</span>
        <div class="w-8/10 md:w-3/4 h-full mx-auto flex flex-col">
          <img src="~/static/aura_iso_9001.jpg" class="mx-auto z-1001 max-h-full h-auto w-auto">
          <div class="mx-auto z-1001 w-full h-150 bg-red text-transparent">
            ""
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import IsoLogo from '@/assets/icons/iso-logo.svg?inline'
export default {
  components: { IsoLogo },
  computed: {
    iso9001Modal () {
      return document.querySelector('.iso-9001-modal')
    },
    navLinksDiv () {
      return document.querySelector('#nav-links')
    },
    body () {
      return document.querySelector('body')
    }
  },
  methods: {
    ...mapMutations(['setPageYPos']),
    ...mapGetters(['getPageYPos']),
    openIso9001Modal () {
      const iso9001Div = document.querySelector('.iso-9001-div')
      const divTop = iso9001Div.offsetParent.offsetParent.offsetTop
      // this.navLinksDiv.classList.remove('hidden')
      this.body.style.overflowY = 'hidden'
      this.iso9001Modal.style.display = 'block'
      this.iso9001Modal.setAttribute('rel', 'open')
      window.addEventListener('keyup', this.handleEscKey)
      this.setPageYPos()
      window.scroll(0, divTop + 126)
    },
    closeIso9001Modal () {
      window.scroll(0, this.getPageYPos())
      // this.navLinksDiv.classList.add('hidden')
      this.body.style.overflowY = 'auto'
      this.iso9001Modal.style.display = 'none'
      this.iso9001Modal.setAttribute('rel', 'closed')
      window.removeEventListener('keyup', this.handleEscKey)
    },
    handleEscKey (e) {
      const is9001Open = this.iso9001Modal.getAttribute('rel')
      if (is9001Open === 'open') {
        if (e.key === 'Escape') {
          this.closeIso9001Modal()
        }
      }
    }
  }
}
</script>

<style scoped>
.iso-9001-modal::before {
  @apply bg-black opacity-95 fixed top-0 left-0 w-full h-full;
  content: "";
}
.iso-9001-modal {
  display: none
}
.iso-9001-modal .close {
  @apply z-1002;
  @apply font-bold text-4xl text-left;
  @apply absolute top-0 md:top-8 right-0 md:right-8 text-alt;
}
</style>
