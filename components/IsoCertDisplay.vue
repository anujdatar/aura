<template>
  <div class="iso-modal-div">
    <div class="flex cursor-pointer hover:text-accent font-bold items-center hover:underline" @click="openIsoModal">
      <p class="mr-2">
        ISO 9001:2015
      </p>
      <iso-logo class="w-8" />
    </div>
    <!-- iso modal -->
    <div rel="closed" class="absolute top-0 left-0 w-full h-screen z-1000 m-auto overflow-hidden iso-modal">
      <div class="relative mx-auto w-full h-full py-4 z-1001">
        <span class="close cursor-pointer z-1001" @click="closeIsoModal">&times;</span>
        <embed src="aura_iso_certificate.pdf" type="application/pdf" class="mx-auto z-1001 w-3/4 h-full">
      </div>
    </div>
  </div>
</template>

<script>
import IsoLogo from '@/assets/icons/iso-logo.svg?inline'
export default {
  components: { IsoLogo },
  computed: {
    isoModal () {
      return document.querySelector('.iso-modal')
    }
  },
  methods: {
    openIsoModal () {
      this.isoModal.style.display = 'block'
      this.isoModal.setAttribute('rel', 'open')
      window.addEventListener('keyup', this.handleEscKey)
    },
    closeIsoModal () {
      this.isoModal.style.display = 'none'
      this.isoModal.setAttribute('rel', 'closed')
      window.removeEventListener('keyup', this.handleEscKey)
    },
    handleEscKey (e) {
      const isIsoOpen = this.isoModal.getAttribute('rel')
      if (isIsoOpen === 'open') {
        if (e.key === 'Escape') {
          this.closeIsoModal()
        }
      }
    }
  }
}
</script>

<style scoped>
.iso-modal::before {
  @apply bg-black opacity-95 fixed top-0 left-0 w-full h-full;
  content: "";
}
.iso-modal {
  display: none
}
.iso-modal .close {
  @apply z-1002;
  @apply font-bold text-4xl text-left;
  @apply absolute top-8 right-8 text-alt;
}
</style>
