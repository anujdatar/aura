<script setup lang="ts">
const cardImageDiv = ref<HTMLElement>()

const props = defineProps({
  cardImage: {
    type: String,
    default: 'assets/images/card_images/sheet.webp',
  },
  content: {
    type: String,
    default: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },
})

onMounted(() => {
  cardImageDiv.value!.style.backgroundImage = `url(${props.cardImage})`
})
</script>

<template>
  <div class="about-card relative w-full mx-auto shadow-xl">
    <div ref="cardImageDiv" class="about-card-image" />
    <blockquote class="flex absolute bottom-0 left-0 right-0">
      <p class="flex text-sm mt-2 text-alt text-justify about-content">
        {{ props.content }}
      </p>
    </blockquote>
  </div>
</template>

<style>
.about-card {
  display: flex;
  flex-direction: column;
  min-width: 0;
  height: 250px;
  overflow-wrap: break-word;
  border-radius: .5rem; /* 8px */
  background-color: var(--primary);
  margin-inline: 1rem;
  margin-bottom: 1.5rem;
}
.about-card-image {
  display: inline-block;
  position: absolute;
  top: 0;
  width: 100%;
  height: 50%;
  background-position: center;
  background-size: cover;
  border-top-left-radius: 0.5rem; /* 8px */
  border-top-right-radius: 0.5rem; /* 8px */
  clip-path: polygon(0 0, 100% 0, 100% 90%, 0% 100%);
}
.about-card blockquote {
  height: 50%;
  padding: 1rem;
  margin-top: 1.5rem;
  color: var(--alt);
}
.about-content {
  font-size: 1rem;
}
@media (min-width: 640px) {
  .about-card {
    width: 50%;
    max-width: 11rem;
  }
}
@media (min-width: 768px) {
  .about-card {
    width: calc(100% / 3);
    height: 300px;
    max-width: 13rem;
  }
}
@media (min-width: 1024px) {
  .about-card {
    width: 25%;
  }
}
</style>
