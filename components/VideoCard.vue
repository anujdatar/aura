<template>
  <div
    class="flex flex-col mb-20 md:mb-40 justify-center w-full mx-auto rounded-lg"
    :class="textRight ? 'md:flex-row-reverse' : 'md:flex-row'"
  >
    <div
      class="w-full md:w-1/2 flex flex-col justify-center mb-5 md:mb-0"
      :class="textRight ? 'md:pl-8' : 'md:pr-8'"
    >
      <div class="font-bold text-xl text-blue-gray-700 text-center md:text-left">
        {{ cardTitle }}
      </div>
      <div class="text-sm home-info-text">
        {{ cardContent }}
      </div>
      <slot />
    </div>
    <div class="w-full md:w-1/2">
      <iframe
        :src="videoLink"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        class="w-full min-h-52 rounded-lg"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    textRight: {
      type: Boolean
    },
    cardTitle: {
      type: String,
      default: 'Lorem ipsum dolor sit amet consectetur'
    },
    cardContent: {
      type: String,
      default: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis recusandae aliquam quos quo omnis quas quia nesciunt, esse numquam quis ad accusantium aperiam provident nostrum quidem eveniet magnam. Veritatis, repellendus.'
    },
    videoLink: {
      type: String,
      default: 'https://www.youtube-nocookie.com/embed/FJeelD-8U0I'
    }
  }
}
</script>
