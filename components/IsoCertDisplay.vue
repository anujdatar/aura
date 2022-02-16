<template>
  <div class="">
    <div class="flex text-primary hover:text-accent font-bold mb-2">
      <div class="flex flex-col mr-2">
        <p class="cursor-pointer hover:underline" @click="openIsoModal">
          ISO 9001:2015
        </p>
        <p class="cursor-pointer hover:underline" @click="open3834Modal">
          ISO 3834-2
        </p>
      </div>
      <iso-logo class="w-12" />
    </div>
    <!-- iso 9001 modal -->
    <div rel="closed" class="absolute top-0 left-0 w-full h-full z-1000 m-auto overflow-hidden iso-9001-modal">
      <div class="relative mx-auto w-full h-full py-4 overflow-y-scroll z-1001">
        <span class="close cursor-pointer z-1001" @click="closeIsoModal">&times;</span>
        <embed src="aura_iso_certificate.jpg" type="application/pdf" class="mx-auto z-1001">
      </div>
    </div>
    <!-- iso 3834 modal -->
    <div rel="closed" class="absolute top-0 left-0 w-full h-full z-1000 m-auto overflow-hidden iso-3834-modal">
      <div class="relative mx-auto w-full h-full py-4 overflow-y-scroll z-1001">
        <span class="close cursor-pointer z-1001" @click="close3834Modal">&times;</span>
        <embed src="aura_iso_3834.pdf" type="application/pdf" class="mx-auto z-1001 w-3/4 h-full">
      </div>
    </div>
  </div>
</template>

<script>
import IsoLogo from '@/assets/icons/iso-logo.svg?inline'
export default {
  components: { IsoLogo },
  computed: {
    iso9001Modal () {
      return document.querySelector('.iso-9001-modal')
    },
    iso3834Modal () {
      return document.querySelector('.iso-3834-modal')
    }
  },
  methods: {
    openIsoModal () {
      this.iso9001Modal.style.display = 'block'
      this.iso9001Modal.setAttribute('rel', 'open')
      window.addEventListener('keyup', this.handleEscKey)
    },
    closeIsoModal () {
      this.iso9001Modal.style.display = 'none'
      this.iso9001Modal.setAttribute('rel', 'closed')
      window.removeEventListener('keyup', this.handleEscKey)
    },
    open3834Modal () {
      this.iso3834Modal.style.display = 'block'
      this.iso3834Modal.setAttribute('rel', 'open')
      window.addEventListener('keyup', this.handleEscKey)
    },
    close3834Modal () {
      this.iso3834Modal.style.display = 'none'
      this.iso3834Modal.setAttribute('rel', 'closed')
      window.removeEventListener('keyup', this.handleEscKey)
    },
    handleEscKey (e) {
      const isIsoOpen = this.iso9001Modal.getAttribute('rel')
      if (isIsoOpen === 'open') {
        if (e.key === 'Escape') {
          this.closeIsoModal()
        }
      }
      const is3834Open = this.iso3834Modal.getAttribute('rel')
      if (is3834Open === 'open') {
        if (e.key === 'Escape') {
          this.close3834Modal()
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
  @apply absolute top-8 right-8 text-alt;
}
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
  @apply absolute top-8 right-8 text-alt;
}
</style>
