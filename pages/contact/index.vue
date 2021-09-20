<template>
  <div class="page-content bg-blue-gray-700 text-blue-gray-200  min-h-screen flex flex-col overflow-hidden">
    <div class="container relative flex flex-col centent-center items-center justify-center mt-20 mb-30">
      <div class="flex flex-col md:flex-row justify-between">
        <div class="p-2">
          <div class="">
            <h2 class="text-green-600 text-2xl">
              Aura Laserfab Pvt. Ltd.
            </h2>
            <p class="text-xs leading-8">
              Gat No. 1021, Pune-Bangalore Highway
            </p>
            <p class="text-xs leading-8">
              Near Pune, Shirwal
            </p>
            <p class="text-xs leading-8">
              Dist. Satara - 412801
            </p>
            <p class="text-xs leading-8">
              <strong>Pin: </strong>412 801
            </p>
            <p class="text-xs leading-8">
              <strong>Phone: </strong>+91 21699 244545, +91 2169 244546
            </p>
            <p class="text-xs leading-8">
              <strong>E-mail: </strong><a href="mailto:sales@auralaser.net">sales@auralaser.net</a> | <a href="mailto:laser@auralaser.net">laser@auralaser.net</a>
            </p>
          </div>
          <hr class="mt-3 md:mr-3">
          <div class="mt-3">
            <h2 class="text-green-600 text-2xl">
              Contact Persons
            </h2>
            <p class="text-xs leading-8">
              <strong>Abhay Paranjpe (Director): </strong>+91 9822 051621
            </p>
            <p class="text-xs leading-8">
              <strong>Umesh Mahajani (Director): </strong>+91 9822 051619
            </p>
            <p class="text-xs leading-8">
              <strong>Vivek Peshave (Manager - Marketing): </strong>+91 9881 727472
            </p>
            <p class="text-xs leading-8">
              <strong>Alok Dange (Asst. Manager - Marketing): </strong>+91 9881 727467
            </p>
          </div>
          <hr class="md:hidden block mt-3">
        </div>

        <div class="md:min-w-436px md:max-h-full min-w-600px h-368px md:p-4 md:pl-12 md:mt-4 pt-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3791.2178881282207!2d73.9604123!3d18.153874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2f64204c17821%3A0xd0bec5900841f42c!2sAura%20Laserfab%20Private%20Limited!5e0!3m2!1sen!2sin!4v1622216420647!5m2!1sen!2sin"
            allowfullscreen=""
            loading="lazy"
            class="border-none w-full h-full rounded-xl"
          />
        </div>
      </div>
      <div class="p-8 min-w-4/5 md:max-w-830px bg-blue-gray-200 mt-16 mb-20 rounded-xl mx-auto">
        <form class="flex flex-col" @submit.prevent="submitFormButton">
          <div class="input-div">
            <label for="name" class="input-label">Full Name</label>
            <input id="name" type="text" name="name" placeholder="Full Name" class="input-field text-blue-gray-800">
          </div>
          <div class="input-div">
            <label for="email" class="input-label">Email</label>
            <input id="email" type="email" name="email" placeholder="Email" class="input-field text-blue-gray-800">
          </div>
          <div class="input-div">
            <label for="message" class="input-label">Message</label>
            <textarea id="message" name="message" placeholder="Type a message.." class="input-field text-blue-gray-800" rows="4" />
          </div>
          <div class="text-center mt-6">
            <button class="bg-blue-gray-800 text-white active:bg-blue-gray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
    <div class="relative bg-blue-gray-200 mt-auto">
      <the-slant color="text-blue-gray-200" />
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
      console.log('Form submitted')
      e.preventDefault()
    }
  }
}
</script>

<style>
.input-div {
  @apply w-full;
  @apply mb-3;
}
.input-label {
  @apply uppercase;
  @apply text-blue-gray-600;
  @apply font-semibold;
  @apply mb-8;
}
.input-field {
  @apply w-full;
  @apply shadow;
  @apply appearance-none;
  @apply border-0;
  @apply rounded-lg;
  @apply py-2;
  @apply px-3;
  @apply leading-tight;
  @apply text-sm;
}
</style>
