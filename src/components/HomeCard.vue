<script setup lang="ts">
const props = defineProps<{
  cardTitle: String
  cardContent: String
  cardImage: string
}>()
</script>

<template>
  <div class="home-card flex flex-col relative justify-center items-center text-center shadow-xl">
    <div class="img-container justify-center items-center text-center shadow-xl">
      <img :src="props.cardImage" alt="card-image">
    </div>
    <p class="card-title text-center semibold text-lg text-primary">
      {{ props.cardTitle }}
    </p>
    <p class="text-center text-secondary">
      {{ props.cardContent }}
    </p>
  </div>
</template>

<style>
.home-card {
  background-color: var(--alt2);
  width: 100%;

  margin-left: 2.5rem;
  margin-right: 2.5rem;
  margin-bottom: 3rem;
  padding: 1.25rem;

  border-radius: .75rem;
}

.home-card .img-container {
  display: flex;
}

.home-card img {
  width: 5rem;
  height: 5rem;
  border-radius: .5rem;
  position: absolute;
  top: -1.25rem;
  margin-bottom: 2rem;
}

.home-card .card-title {
  margin-top: 4rem;
}

@media (min-width: 768px) {
  .home-card {
    width: 25%;
    min-height: 21rem;
  }
}
@media (min-width: 1024px) {
  .home-card {
    /* max-width: 300px; */
    height: auto;
  }
  .home-card .card-title {
    margin-top: 3rem;
  }
}
</style>
