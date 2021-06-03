<template>
  <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mx-auto">
    <div class="relative flex flex-col min-w-0 h-250px md:h-300px break-words w-full mb-6 shadow-lg rounded-lg bg-blue-gray-600">
      <div class="about-card-image inline-block absolute top-0 w-full h-1/2 bg-center bg-cover rounded-t-lg" :style="bgImage" />
      <blockquote class="absolute bottom-0 left-0 right-0 p-4 mt-6 h-1/2">
        <p class="text-sm mt-2 text-blue-gray-100">
          {{ cardContent }}
        </p>
      </blockquote>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageSrc: {
      type: String,
      default: ''
    },
    cardContent: {
      type: String,
      default: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus a sequi iste.'
    }
  },
  computed: {
    bgImage () {
      return {
        '--img-url': 'url(' + this.imageSrc + ')'
      }
    }
  }
}
</script>

<style>
.about-card-image {
  background-image: var(--img-url);
  clip-path: polygon(0 0, 100% 0, 100% 90%, 0% 100%);
}
</style>
