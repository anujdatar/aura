<template>
  <div class="product-grid flex flex-wrap w-full bg-center bg-cover relative" :style="cardImages">
    <div class="product-card-bg card1" />
    <div class="product-card-bg card2" />
    <div class="product-card-bg card3" />
    <div class="product-card-bg card4" />
    <div class="product-card-bg card5" />
    <div class="product-card-bg card6" />

    <a class="product-card" rel="card1">
      {{ product1.title }}
    </a>
    <a class="product-card" rel="card2">
      {{ product2.title }}
    </a>
    <a class="product-card" rel="card3">
      {{ product3.title }}
    </a>
    <a class="product-card" rel="card4">
      {{ product4.title }}
    </a>
    <a class="product-card" rel="card5">
      {{ product5.title }}
    </a>
    <a class="product-card" rel="card6">
      {{ product6.title }}
    </a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      mainImage: require('~/assets/images/hero_home.jpeg'),
      product1: {
        title: 'Construction',
        image: require('~/assets/images/grid_images/earthmoving1.jpg')
      },
      product2: {
        title: 'Electrical Switchgear',
        image: require('~/assets/images/grid_images/electrical.jpg')
      },
      product3: {
        title: 'Mining',
        image: require('~/assets/images/grid_images/mining.jpg')
      },
      product4: {
        title: 'Agriculture',
        image: require('~/assets/images/grid_images/agro.jpg')
      },
      product5: {
        title: 'Material Handling',
        image: require('~/assets/images/grid_images/mat_handling.jpg')
      },
      product6: {
        title: 'Other',
        image: require('~/assets/images/grid_images/process_plant.jpg')
      }
    }
  },
  computed: {
    cardImages () {
      return {
        '--main-image': 'url(' + this.mainImage + ')',
        '--card-image-1': 'url(' + this.product1.image + ')',
        '--card-image-2': 'url(' + this.product2.image + ')',
        '--card-image-3': 'url(' + this.product3.image + ')',
        '--card-image-4': 'url(' + this.product4.image + ')',
        '--card-image-5': 'url(' + this.product5.image + ')',
        '--card-image-6': 'url(' + this.product6.image + ')'
      }
    }
  },
  mounted () {
    const cardBgElements = document.getElementsByClassName('product-card')
    cardBgElements.forEach((element) => {
      element.addEventListener('mouseenter', this.mouseEnter)
      element.addEventListener('mouseleave', this.mouseLeave)
    })
  },
  methods: {
    mouseEnter (e) {
      const targetRel = e.target.getAttribute('rel')
      const targetBgElement = document.querySelector('.product-card-bg.' + targetRel)
      targetBgElement.classList.add('active')
    },
    mouseLeave (e) {
      const targetRel = e.target.getAttribute('rel')
      const targetBgElement = document.querySelector('.product-card-bg.' + targetRel)
      targetBgElement.classList.remove('active')
    }
  }
}
</script>

<style scoped>
.product-grid {
  background-image: var(--main-image);
  background-position-y: 50%;
}
.product-card-bg {
  @apply w-full h-full;
  @apply absolute top-0 left-0;
  @apply bg-center bg-repeat bg-cover;
  @apply opacity-0;
  @apply transition-opacity duration-700 ease;
}
.product-card-bg.active {
  @apply opacity-100;
}
.product-card-bg.card1 {
  background-image: var(--card-image-1);
}
.product-card-bg.card2 {
  background-image: var(--card-image-2);
}
.product-card-bg.card3 {
  background-image: var(--card-image-3);
}
.product-card-bg.card4 {
  background-image: var(--card-image-4);
}
.product-card-bg.card5 {
  background-image: var(--card-image-5);
}
.product-card-bg.card6 {
  background-image: var(--card-image-6);
}
.product-card {
  @apply relative;
  @apply w-1/3 h-50;
  @apply border border-alt;
  @apply no-underline text-right;
  @apply text-white text-2xl font-bold;
  text-shadow: 1px 1px 1px black;
}
.product-card:hover {
  @apply bg-accent-alt;
}
</style>
