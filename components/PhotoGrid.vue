<template>
  <div class="product-grid flex flex-wrap w-full h-full bg-center bg-cover relative" :style="cardImages">
    <div class="product-card-bg card1" />
    <div class="product-card-bg card2" />
    <div class="product-card-bg card3" />
    <div class="product-card-bg card4" />
    <div class="product-card-bg card5" />
    <div class="product-card-bg card6" />

    <a class="product-card" rel="card1" href="/industries#construction">
      {{ product1.title }}
    </a>
    <a class="product-card" rel="card2" href="/industries#switchgear">
      {{ product2.title }}
    </a>
    <a class="product-card" rel="card3" href="/industries#mining">
      {{ product3.title }}
    </a>
    <a class="product-card" rel="card4" href="/industries#agriculture">
      {{ product4.title }}
    </a>
    <a class="product-card" rel="card5" href="/industries#handling">
      {{ product5.title }}
    </a>
    <a class="product-card" rel="card6" href="/industries#other">
      {{ product6.title }}
    </a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      mainImage: require('~/assets/images/grid_images/laser.jpg'),
      product1: {
        title: 'Construction',
        image: require('~/assets/images/grid_images/earthmoving2.webp')
      },
      product2: {
        title: 'Electrical Switchgear',
        image: require('~/assets/images/grid_images/switchgear2.webp')
      },
      product3: {
        title: 'Mining',
        image: require('~/assets/images/grid_images/mining.webp')
      },
      product4: {
        title: 'Agriculture',
        image: require('~/assets/images/grid_images/agro4.webp')
      },
      product5: {
        title: 'Material Handling',
        image: require('~/assets/images/grid_images/mat_handling3.webp')
      },
      product6: {
        title: 'Other',
        image: require('~/assets/images/grid_images/process_plant.webp')
      },
      startImage: 0,
      gridImageCount: 6
    }
  },
  computed: {
    gridElement () {
      return document.querySelector('.product-grid')
    },
    productCards () {
      return document.getElementsByClassName('product-card')
    },
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
    },
    gridImages () {
      return [
        this.mainImage,
        this.product1.image,
        this.product2.image,
        this.product3.image,
        this.product4.image,
        this.product5.image,
        this.product6.image
      ]
    }
  },
  mounted () {
    Array.prototype.forEach.call(this.productCards, (element) => {
      element.addEventListener('mouseenter', this.mouseEnter)
      element.addEventListener('mouseleave', this.mouseLeave)
    })
    this.cycler = setInterval(this.cycleImages, 2000)
  },
  destroyed () {
    Array.prototype.forEach.call(this.productCards, (element) => {
      element.removeEventListener('mouseenter', this.mouseEnter)
      element.removeEventListener('mouseleave', this.mouseLeave)
    })
    clearInterval(this.cycler)
  },
  methods: {
    mouseEnter (e) {
      const targetRel = e.target.getAttribute('rel')
      const targetBgElement = document.querySelector('.product-card-bg.' + targetRel)
      targetBgElement.classList.add('active')
      clearInterval(this.cycler)
    },
    mouseLeave (e) {
      const targetRel = e.target.getAttribute('rel')
      const targetBgElement = document.querySelector('.product-card-bg.' + targetRel)
      targetBgElement.classList.remove('active')
      this.cycler = setInterval(this.cycleImages, 2000)
    },
    cycleImages () {
      this.gridElement.style.backgroundImage = 'url(' + this.gridImages[this.startImage] + ')'
      this.startImage += 1
      if (this.startImage > this.gridImageCount) {
        this.startImage = 0
      }
      console.log(this.startImage)
    }
  }
}
</script>

<style scoped>
.product-grid {
  background-image: var(--main-image);
  background-position-y: 70%;
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
  @apply w-1/2 md:w-1/3 h-1/3 md:h-1/2 p-4;
  @apply border border-alt;
  @apply no-underline text-right;
  @apply text-white text-2xl font-bold;
  text-shadow: 2px 2px 2px black;
}
.product-card:hover {
  @apply bg-orange-400 opacity-80;
}
</style>
