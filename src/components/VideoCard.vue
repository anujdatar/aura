<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: 'Video Card Title',
  },
  videoLink: {
    type: String,
  },
  textRight: Boolean,
})
</script>

<template>
  <div
    class="video-card-container flex flex-col"
    :class="props.textRight ? 'md:flex-row-reverse' : 'md:flex-row'"
  >
    <div
      class="card-text flex flex-col w-full md:w-1/2 justify-center"
      :class="props.textRight ? 'md:pl-8' : 'md:pr-8'"
      :data-aos="props.textRight ? 'fade-left' : 'fade-right'"
      data-aos-delay="250"
    >
      <h3 class="sub-heading text-primary text-center md:text-left">
        {{ props.title }}
      </h3>
      <!-- <p class="paragraph">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ad soluta ea laborum ipsam? Corrupti architecto quod nemo tempore id!
      </p> -->
      <slot />
    </div>
    <div
      class="w-full md:w-1/2"
      :data-aos="props.textRight ? 'fade-right' : 'fade-left'"
      data-aos-delay="250"
    >
      <iframe
        :src="props.videoLink"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        class="video-iframe shadow-xl"
      />
    </div>
  </div>
</template>

<style>
.video-card-container {
  margin-bottom: 6rem;
}
.video-iframe {
  width: 100%;
  min-height: 13rem; /* 208px */
  border-radius: 0.5rem; /* 8px */
}
/* @media (min-width: 768px) {
  .video-card-container {
    margin-bottom: 6rem;
  }
} */
</style>
