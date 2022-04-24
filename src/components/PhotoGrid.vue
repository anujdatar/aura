<script setup lang="ts">
// const mainImage = 'assets/images/grid_images/laser.jpg'
const mainImage = 'assets/images/hero_services.webp'

const gridImages = [
  {
    title: 'Construction',
    id: 'card1',
    link: '/industries/#earthmoving',
    image: 'assets/images/grid_images/earthmoving.webp',
  },
  {
    title: 'Electrical Switchgear',
    id: 'card2',
    link: '/industries/#switchgear',
    image: 'assets/images/grid_images/switchgear.webp',
  },
  {
    title: 'Mining',
    id: 'card3',
    link: '/industries/#mining',
    image: 'assets/images/grid_images/mining.webp',
  },
  {
    title: 'Agriculture',
    id: 'card4',
    link: '/industries/#agriculture',
    image: 'assets/images/grid_images/agro.webp',
  },
  {
    title: 'Material Handling',
    id: 'card5',
    link: '/industries/#mat_handling',
    image: 'assets/images/grid_images/mat_handling.webp',
  },
  {
    title: 'Other',
    id: 'card6',
    link: '/industries/#other',
    image: 'assets/images/grid_images/process_plant.webp',
  },
]

const productGrid = ref<HTMLDivElement>()
const productGridBgs = computed(() => document.querySelectorAll('.product-card-bg'))
const productCards = computed(() => document.querySelectorAll('.product-card'))

const startImage = ref(0)
const gridImagesCount = computed(() => productCards.value.length)
const autoImageCycler = ref()

onMounted(() => {
  // set main grid bg image
  // productGrid.value!.style.backgroundImage = `url(${mainImage})`
  productGrid.value!.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)), url(${mainImage})`

  productGridBgs.value.forEach((element, index) => {
    (element as HTMLDivElement).style.backgroundImage = `url(${gridImages[index].image})`
  })

  autoImageCycler.value = setInterval(cycleGridImages, 2000)
})
onUnmounted(() => {
  clearInterval(autoImageCycler.value)
})

function cardMouseEnter(e: Event) {
  clearHoveredClass()
  const targetRel = (e.target as HTMLElement).getAttribute('rel')
  const targetBgEl = document.querySelector(`.product-card-bg.${targetRel}`)
  targetBgEl?.classList.add('active')
  clearInterval(autoImageCycler.value)
}
function cardMouseLeave(e: Event) {
  const targetRel = (e.target as HTMLElement).getAttribute('rel')
  const targetBgEl = document.querySelector(`.product-card-bg.${targetRel}`)
  targetBgEl?.classList.remove('active')
  addHoveredClass(startImage.value - 1)
  autoImageCycler.value = setInterval(cycleGridImages, 2000)
}
function addHoveredClass(n: number) {
  if (n === 0) {
    productCards.value[productCards.value.length - 1].classList.remove('hovered')
    productGridBgs.value[productCards.value.length - 1].classList.remove('active')
  }
  if (n === 1) {
    productCards.value[n - 1].classList.add('hovered')
    productGridBgs.value[n - 1].classList.add('active')
  }
  if (n > 1) {
    productCards.value[n - 2].classList.remove('hovered')
    productCards.value[n - 1].classList.add('hovered')

    productGridBgs.value[n - 2].classList.remove('active')
    productGridBgs.value[n - 1].classList.add('active')
  }
}
function clearHoveredClass() {
  productCards.value.forEach((card) => {
    card.classList.remove('hovered')
  })
  productGridBgs.value.forEach((bg) => {
    bg.classList.remove('active')
  })
}
function cycleGridImages() {
  addHoveredClass(startImage.value)
  startImage.value += 1
  if (startImage.value > gridImagesCount.value)
    startImage.value = 0
}
</script>

<template>
  <div ref="productGrid" class="product-grid flex flex-wrap w-full">
    <div
      v-for="item in gridImages"
      :key="item.id"
      class="product-card-bg"
      :class="item.id"
    />
    <router-link
      v-for="item in gridImages"
      :key="item.id"
      :rel="item.id"
      :to="item.link"
      class="product-card text-2xl font-bold"
      @mouseenter="cardMouseEnter" @mouseleave="cardMouseLeave"
    >
      {{ item.title }}
      <span class="more">More &gt;</span>
    </router-link>
  </div>
</template>

<style>
.product-grid {
  /* z-index: 0; */
  min-height: calc(100vh - var(--navbar-height));
  max-height: 900px;
  background-size: cover;
  background-position-x: 20%;
  /* background-position-y: -50%; */
  position: relative;
}
.product-card-bg {
  /* z-index: 1; */
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  background-size: cover;
  background-position-y: 40%;
  transition: opacity 500ms ease-in-out;
}
.product-card-bg.active {
  opacity: 1;
}
.product-card {
  /* z-index: 2; */
  position: relative;
  display: block;
  width: 50%;
  min-height: 100%;
  border-width: 1px;
  border-color: var(--alt);
  padding: 1rem;

  text-decoration: none;
  text-align: right;
  color: white;
  text-shadow: 2px 2px 2px black;
}

.product-card:hover,
.product-card.hovered {
  background-color: var(--accent);
  opacity: 70%;
}

.product-grid .more {
  display: none;
  position: absolute;
  bottom: 0;
  right: 0;
  margin-bottom: .75rem;
  margin-right: .75rem;
}
.product-card:hover .more,
.product-card.hovered .more {
  display: block;
}

@media (min-width: 768px) {
  .product-grid {
    background-position: center;
  }
  .product-card {
    width: calc(100% / 3);
  }
}
</style>
