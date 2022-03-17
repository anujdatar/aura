<template>
  <div class="iso-3834-div mx-auto">
    <div class="iso-text flex flex-col cursor-pointer font-bold text-primary hover:text-accent hover:underline items-center mx-auto max-w-1/2 h-full" @click="openIso3834Modal">
      <img src="~/static/aura_iso_3834_1.webp" class="h-full w-auto">
      <div class="flex flex-row w-full mx-auto mt-2 text-center justify-center">
        <p class="mr-2 text-xl md:text-base">
          DIN EN ISO 3834-2
        </p>
        <iso-logo class="w-12 md:w-8" />
      </div>
    </div>
    <!-- iso modal -->
    <div rel="closed" class="absolute top-0 left-0 w-full h-screen z-1000 m-auto overflow-auto iso-3834-modal" @click.self="closeIso3834Modal">
      <div class="relative mx-auto w-full h-full py-4 z-1001" @click.self="closeIso3834Modal">
        <span class="close cursor-pointer z-1001" @click="closeIso3834Modal">&times;</span>
        <div class="w-8/10 md:w-3/4 h-full mx-auto flex flex-col">
          <img src="~/static/aura_iso_3834_1.webp" class="mx-auto z-1001 max-h-full h-auto w-auto mb-2">
          <img src="~/static/aura_iso_3834_2.webp" class="mx-auto z-1001 max-h-full h-auto w-auto">
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
    iso3834Modal () {
      return document.querySelector('.iso-3834-modal')
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
    openIso3834Modal () {
      const iso3834Div = document.querySelector('.iso-3834-div')
      const divTop = iso3834Div.offsetParent.offsetParent.offsetTop
      // this.navLinksDiv.classList.remove('hidden')
      this.body.style.overflowY = 'hidden'
      this.iso3834Modal.style.display = 'block'
      this.iso3834Modal.setAttribute('rel', 'open')
      window.addEventListener('keyup', this.handleEscKey)
      this.setPageYPos()
      window.scroll(0, divTop + 96)
    },
    closeIso3834Modal () {
      window.scroll(0, this.getPageYPos())
      // this.navLinksDiv.classList.add('hidden')
      this.body.style.overflowY = 'auto'
      this.iso3834Modal.style.display = 'none'
      this.iso3834Modal.setAttribute('rel', 'closed')
      window.removeEventListener('keyup', this.handleEscKey)
    },
    handleEscKey (e) {
      const is3834Open = this.iso3834Modal.getAttribute('rel')
      if (is3834Open === 'open') {
        if (e.key === 'Escape') {
          this.closeIso3834Modal()
        }
      }
    }
  }
}
</script>

<style scoped>
.iso-3834-modal::before {
  @apply bg-black opacity-95 fixed top-0 left-0 w-full h-full;
  content: "";
}
.iso-3834-modal {
  display: none
}
.iso-3834-modal .close {
  @apply z-1002;
  @apply font-bold text-4xl text-left;
  @apply absolute top-0 md:top-8 right-0 md:right-8 text-alt;
}
</style>
