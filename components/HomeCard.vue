<template>
  <div class="relative flex flex-col justify-center items-center border shadow-xl rounded-xl md:w-1/4 w-full md:min-h-84 lg:h-auto ml-10 mr-10 mb-12 p-5 bg-alt">
    <div class="flex rounded-full shadow-black shadow-xl justify-center items-center text-center mb-8">
      <div class="absolute -top-5">
        <img :src="cardImage" alt="homeCardImage" class="w-20 h-20 rounded-lg">
      </div>
    </div>
    <div class="text-center font-semibold text-lg text-primary mt-4">
      {{ cardTitle }}
    </div>
    <div class="text-center text-secondary">
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
    },
    cardImage: {
      type: String,
      default: ''
    }
  }
}
</script>
