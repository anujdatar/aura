<script setup lang="ts">
onMounted(() => {
  window.scrollTo({
    top: 0,
    left: 0,
  })
})
</script>

<template>
  <div class="page-content bg-primary w-full h-full contact-page">
    <div class="contacts-map-section">
      <div id="map" class="flex flex-col">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3791.217777904991!2d73.9578373758383!3d18.153879080271164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2f64204c17821%3A0xd0bec5900841f42c!2sAura%20Laserfab%20Private%20Limited!5e0!3m2!1sen!2sin!4v1693547893541!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style="border:0;"
          allowfullscreen="false"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />
      </div>
      <!-- contact from here -->
      <div class="form-container flex mx-auto my-auto items-center justify-center" data-aos="fade-left">
        <form
          class="flex flex-col relative bg-alt2 rounded-lg"
          action="https://formsubmit.co/a14445c56c3b2cd4e311079b712b1792"
          method="POST"
        >
          <h2 class="text-primary text-2xl semibold mb-4">
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
            <input id="email" type="text" name="email" class="form-input">
          </div>
          <div class="relative mb-4">
            <label for="message" class="form-label">Message</label>
            <textarea id="message" name="message" class="form-input" />
          </div>
          <input type="hidden" name="_subject" value="New Website Contact Form Submission">
          <input type="hidden" name="_next" value="https://www.auralaser.in/contact">
          <input type="hidden" name="_template" value="table">
          <input type="hidden" name="_autoresponse" value="Thank you for contacting Aura Laserfab Pvt. Ltd. We will get back to you shortly.">
          <div class="text-center mb-4">
            <button class="form-button" type="submit">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style>
.contact-page {
  padding-bottom: 6rem;
}
.contacts-map-section {
  position: relative;
  padding-top: var(--navbar-height);
  padding-bottom: 6rem;
  height: 100%;
}
#map {
  background-color: var(--alt);
}
#map iframe {
  height: 100vh;
  filter: grayscale(.2) contrast(1.2) opacity(.9);
}
.contacts-map-section .form-container {
  padding-left: 4rem;
  padding-right: 4rem;
}
.form-container form {
  width: 100%;
  padding-top: .5rem;
  padding-bottom: .5rem;
  padding-left: 2rem;
  padding-right: 2rem;
  margin-top: 6rem;
  margin-bottom: auto;
}
.form-label {
  line-height: 1.25rem;
  font-size: .875rem;
  text-transform: uppercase;
  font-weight: 600;
  color: var(--secondary);
}

.form-input {
  width: 100%;
  border-radius: .25rem;
  border-width: 1px;
  border-color: var(--alt);
  color: var(--primary);
  padding-top: .25rem;
  padding-bottom: .25rem;
  padding-left: .75rem;
  padding-right: .75rem;
  line-height: 2rem;

  -webkit-transition-property: background-color, border-color, color, fill, stroke;
  -o-transition-property: background-color, border-color, color, fill, stroke;
  transition-property: background-color, border-color, color, fill, stroke;

  -webkit-transition-duration: 300ms;
  -o-transition-duration: 300ms;
  transition-duration: 300ms;

  -webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  -o-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
.form-input:focus {
  border-color: var(--accent-alt);
}

.contacts-map-section textarea {
  height: 8rem;
  resize: none;
}

.form-button {
  background-color: var(--primary) !important;
  color: var(--alt);
  text-transform: uppercase;
  font-size: .875rem;
  line-height: 1.25rem;
  font-weight: 700;
  padding-top: .75rem;
  padding-bottom: .75rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  border-radius: .25rem;
  border-width: 1px;

  -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}
.form-button:hover {
  background-color: var(--secondary);
  -webkit-box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}
.form-button:active {
  border-color: var(--accent-alt);
}
@media (min-width: 768px) {
  /* .form-container {
    padding-bottom: 0;
  } */
  #map {
    position: absolute;
    top: var(--navbar-height);
    bottom: 0;
    left: 0;
    right: 0;
  }
  .form-container form {
    width: 50%;
    margin-left: auto;
  }
}
@media (min-width: 1024px) {
  .form-container form {
    width: calc(100% / 3);
  }
}
</style>

<route lang="yaml">
meta:
  layout: default
</route>
