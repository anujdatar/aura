<template>
  <div class="page-content bg-primary min-h-screen flex flex-col overflow-hidden w-full h-full">
    <!-- map and contact form div -->
    <div class="relative mt-24 min-h-screen-sm md:min-h-screen-md mb-30">
      <!-- map -->
      <div id="map" class="flex flex-col md:absolute md:inset-0 bg-alt min-h-7/10 md:min-h-max">
        <iframe
          style="filter: grayscale(.2) contrast(1.2) opacity(.75);"
          marginheight="0"
          marginwidth="0"
          title="map"
          scrolling="no"
          src="https://maps.google.com/maps/embed/v1/place?key=AIzaSyALhTi2QKCPFX-Ad8mEhitkdFPdSNq2UAo&q=aura%20laserfab%20shirwal&center=18.15388,73.96&zoom=17"
          width="100%"
          height="100%"
          frameborder="0"
          class="h-screen max-h-3/4 md:h-full md:max-h-full"
        />
      </div>
      <!-- contact form -->
      <div class="px-16 py-8 mx-auto my-2 flex">
        <form class="w-full md:w-1/2 lg:w-1/3 bg-alt rounded-lg px-8 py-2 flex flex-col relative z-10 shadow-md md:ml-auto" @submit.prevent="submitFormButton">
          <h2 class="text-primary text-2xl font-semibold mb-4">
            Contact Us
          </h2>
          <div class="relative mb-4">
            <label for="name" class="form-label">Name</label>
            <input id="name" type="text" name="name" class="form-input">
          </div>
          <div class="relative mb-4">
            <label for="company" class="form-label">Company</label>
            <input id="company" type="text" name="company" class="form-input">
          </div>
          <div class="relative mb-4">
            <label for="email" class="form-label">Email</label>
            <input id="email" type="email" name="email" class="form-input">
          </div>
          <div class="relative mb-4">
            <label for="message" class="form-label">Message</label>
            <textarea id="message" name="message" class="form-input h-32 resize-none" />
          </div>
          <div class="text-center mb-4">
            <button class="form-button" type="submit">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
    <div class="bg-alt mt-auto">
      <section-separator color="text-alt" />
      <aura-footer />
    </div>
  </div>
</template>

<script>
export default {
  head () {
    return { title: 'Contact Us' }
  },
  methods: {
    submitFormButton (e) {
      // e.preventDefault()
      console.log('Form submitted')
    }
  }
}
</script>

<style>
.form-label {
  @apply leading-7;
  @apply text-sm uppercase font-semibold;
  @apply text-secondary;
}
.form-input {
  @apply w-full;
  @apply rounded;
  @apply border border-alt;
  @apply focus:border-accent-alt;
  @apply text-primary;
  @apply outline-none;
  @apply py-1 px-3;
  @apply leading-8;
  @apply transition-colors duration-300 ease-in-out;
}
.form-button {
  @apply bg-primary hover:bg-secondary border active:border-accent-alt text-alt;
  @apply uppercase text-sm font-bold;
  @apply px-6 py-3;
  @apply rounded shadow hover:shadow-lg outline-none focus:outline-none;
  @apply ease-linear transition-all duration-150;
}
.page-content {
  @apply -mt-24 !important;
}
.container {
  @apply max-w-screen-lg;
  @apply flex;
  @apply mx-auto;
  @apply w-3/4;
  @apply md:w-auto;
  @apply px-8;
  @apply mt-30;
  @apply mb-30;
}
.container-inner {
  @apply flex;
  @apply flex-col;
  @apply md:flex-row;
  @apply justify-center;
  @apply items-center;
  @apply text-justify;
}
.heading {
  @apply font-semibold;
  @apply text-3xl;
  @apply text-primary;
  @apply mb-2;
  /* @apply text-center; */
}
.sub-heading {
  @apply font-semibold;
  @apply text-xl;
  @apply text-primary;
}
.paragraph {
  @apply text-secondary;
  @apply mb-2;
  @apply text-justify;
}
</style>
