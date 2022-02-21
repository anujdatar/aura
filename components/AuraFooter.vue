<template>
  <div
    class="text-sm flex flex-col items-center justify-center text-center mt-auto pt-10"
    :class="textColor"
  >
    <div class="flex flex-row w-full max-w-1200px justify-between">
      <div class="text-left ml-4">
        <h2 class="text-lg text-primary">
          Aura Laserfab Pvt. Ltd.
        </h2>
        <p class="text-sm leading-6">
          Gat No. 1021, Pune-Bangalore Highway, Near Pune,
        </p>
        <p class="text-sm leading-6">
          Shirwal, Dist. Satara - 412801
        </p>
      </div>
      <div class="flex flex-col justify-between">
        <iso-cert-display />
        <div class="flex items-end ml-auto">
          <a href="https://www.youtube.com/channel/UCM-qRH75zRIPxla2Ty-2MYQ" target="_blank" rel="noopener noreferrer">
            <youtube-icon class="w-8 text-primary hover:text-red-600 mr-1" />
          </a>
          <a href="https://linkedin.com/company/aura-laserfab-private-limited-pune" target="_blank" rel="noopener noreferrer">
            <linkedin-icon class="w-8 text-primary hover:text-blue-800 mr-2" />
          </a>
        </div>
      </div>
    </div>
    <div class="pt-3 leading-8">
      &copy; 2006-2021 Aura Laserfab Pvt. Ltd.
    </div>
  </div>
</template>

<script>
import YoutubeIcon from '@/assets/icons/youtube_icon.svg?inline'
import LinkedinIcon from '@/assets/icons/linkedin_icon.svg?inline'
export default {
  components: { YoutubeIcon, LinkedinIcon },
  props: {
    textColor: {
      type: String,
      default: 'text-secondary'
    }
  }
}
</script>

<style>
#footerServices {
  height: auto;
  -webkit-column-count: 3;
  -moz-column-count: 3;
  column-count: 3;
}
</style>
