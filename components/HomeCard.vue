<template>
  <div class="relative flex flex-col justify-center items-center border shadow rounded-xl md:w-1/4 w-3/4 md:min-h-84 lg:h-auto ml-10 mr-10 mb-12 p-5 bg-white">
    <div class="flex rounded-full shadow-black shadow-md justify-center items-center text-center mb-8" :class="circleColor">
      <!-- <div class="w-2/3 h-2/3 fill-current text-white"> -->
      <div class="fill-current absolute -top-5 text-white">
        <slot />
      </div>
    </div>
    <div class="text-center font-semibold text-lg text-blue-gray-700 mt-4">
      {{ cardTitle }}
    </div>
    <div class="text-center text-blue-gray-500">
      {{ cardContent }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    circleColor: {
      type: String,
      default: 'bg-transparent'
    },
    cardTitle: {
      type: String,
      default: 'Heading'
    },
    cardContent: {
      type: String,
      default: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus a sequi iste.'
    }
  }
}
</script>
