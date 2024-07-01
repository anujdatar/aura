<script setup lang="ts">
onMounted(() => {
  window.scrollTo({
    top: 0,
    left: 0,
  })
})
</script>

<template>
  <div class="home-nav-border w-full h-navbar absolute top-0" />
  <div class="page-content contact-page">
    <div class="contact-page-container">
      <div class="form-container-outer w-full flex">
        <div
          class="form-container flex flex-col relative bg-alt2 rounded-lg card-shadow"
        >
          <form
            class="flex flex-col relative bg-alt2 rounded-lg"
            action="https://formsubmit.co/a14445c56c3b2cd4e311079b712b1792"
            method="POST"
          >
            <h2 class="text-primary text-2xl semibold mb-4">Contact Us</h2>
            <div class="relative mb-4">
              <label for="name" class="form-label">Name</label>
              <input id="name" type="text" name="name" class="form-input" />
            </div>
            <div class="relative mb-4">
              <label for="company" class="form-label">Company</label>
              <input
                id="company"
                type="text"
                name="company"
                class="form-input"
              />
            </div>
            <div class="relative mb-4">
              <label for="email" class="form-label">Email</label>
              <input id="email" type="text" name="email" class="form-input" />
            </div>
            <div class="relative mb-4">
              <label for="message" class="form-label">Message</label>
              <textarea id="message" name="message" class="form-input" />
            </div>
            <input
              type="hidden"
              name="_subject"
              value="New Website Contact Form Submission"
            />
            <input
              type="hidden"
              name="_next"
              value="https://www.auralaser.in/contact"
            />
            <input type="hidden" name="_template" value="table" />
            <input
              type="hidden"
              name="_autoresponse"
              value="Thank you for contacting Aura Laserfab Pvt. Ltd. We will get back to you shortly."
            />
            <div class="text-center mb-4">
              <button class="form-button" type="submit">Send Message</button>
            </div>
          </form>
        </div>
      </div>
      <h2 class="page-title text-primary">Plant Locations</h2>
      <div class="maps-container flex flex-col md:flex-row flex-wrap">
        <div class="map-component card-shadow rounded-lg">
          <h4>Plant 1: Shirwal</h4>
          <div class="map flex flex-col bg-alt2 rounded-lg">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3791.217777904991!2d73.9578373758383!3d18.153879080271164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2f64204c17821%3A0xd0bec5900841f42c!2sAura%20Laserfab%20Private%20Limited!5e0!3m2!1sen!2sin!4v1693547893541!5m2!1sen!2sin"
              width="100%"
              height="300"
              style="border: 0"
              allowfullscreen="false"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            />
            <p>
              Gat No. 1021, Pune-Bangalore Highway,<br />
              Near Pune, Shirwal,<br />
              Dist. Satara, Maharashtra - 412801
            </p>
          </div>
        </div>
        <div class="map-component card-shadow rounded-lg">
          <h4>Plant 2: Nashik</h4>
          <div class="map flex flex-col bg-alt2 rounded-lg h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7500.246373816523!2d73.741489!3d19.961321!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddecaf51fb53b7%3A0xd09c0caeb360c7aa!2sAura%20Laser%20Private%20Limited%20Nashik!5e0!3m2!1sen!2sus!4v1719230042890!5m2!1sen!2sus"
              width="100%"
              height="300"
              style="border: 0"
              allowfullscreen="false"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            />
            <p>
              Plot No. D-42, MIDC Ambad,<br />
              Nashik, Maharashtra - 422010
            </p>
          </div>
        </div>
        <div class="map-component card-shadow rounded-lg">
          <h4>Plant 3: Chakan</h4>
          <div class="map flex flex-col bg-alt2 rounded-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3776.9962971979176!2d73.77526631160728!3d18.798318360556042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b5004d47101f%3A0x13ef1db310e02320!2sAura%20Laserfab%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1719832838558!5m2!1sen!2sin"
              width="100%"
              height="300"
              style="border: 0"
              allowfullscreen="false"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            />
            <p>
              D-224, D-Block,<br />
              Chakan Industrial Area, Phase 2,<br />
              Bhamboli, Chakan, Pune, Maharashtra - 410501
            </p>
          </div>
        </div>
        <div class="map-component card-shadow rounded-lg">
          <h4>Additional contacts</h4>
          <p>
            D-224, D-Block,<br />
            Chakan Industrial Area, Phase 2,<br />
            Bhamboli, Chakan, Pune, Maharashtra - 410501
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-nav-border {
  border-bottom: 3px solid var(--accent);
}
.contact-page {
  padding-bottom: 4rem;
}
.contact-page-container {
  /* position: relative; */
  padding-top: var(--navbar-height);
  padding-bottom: 6rem;
  padding-inline: 4rem;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.page-title {
  font-size: 2.5rem;
  padding-top: 2rem;
  border-bottom: 2px solid var(--accent);
  width: 290px;
}

.maps-container {
  /* display: flex; */
  /* flex-wrap: wrap; */
  justify-content: space-between;
  gap: 2rem;
  padding-top: 2rem;
}

.map-component {
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  /* padding: 2rem; */
  /* margin: 2rem; */
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.2);
}

/* .map { */
/*   border: 1px solid black; */
/* } */

.map-component h4 {
  color: var(--accent);
  text-align: start;
  font-size: 1.2rem;
  padding-bottom: 0.5rem;
  padding-inline: 0.5rem;
  text-shadow: 2px 2px rgba(0, 0, 0, 0.2);
}

/* .map {
  padding-top: 1rem;
} */
.map p {
  padding-inline: 1rem;
  padding-block: 1rem;
  color: var(--primary);
  font-size: 0.8rem;
}
.map iframe {
  border-radius: 0.25rem;
}

.form-container {
  width: 100%;
  padding-inline: 2rem;
  margin-block: 4rem;
  margin-inline: auto;
}

.form-container form {
  width: 100%;
  padding-block: 0.5rem;
  padding-inline: 2rem;
  margin-top: 6rem;
  margin-bottom: auto;
}
.form-label {
  line-height: 1.25rem;
  font-size: 0.875rem;
  text-transform: uppercase;
  font-weight: 600;
  color: var(--secondary);
}
.form-input {
  width: 100%;
  border-radius: 0.25rem;
  border-width: 1px;
  border-color: var(--alt);
  color: var(--primary);
  padding-block: 0.25rem;
  padding-inline: 0.75rem;
  line-height: 2rem;

  -webkit-transition-property: background-color, border-color, color, fill,
    stroke;
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
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 700;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  border-radius: 0.25rem;
  border-width: 1px;

  -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
    0 1px 2px 0 rgba(0, 0, 0, 0.06);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}
.form-button:hover {
  background-color: var(--secondary);
  -webkit-box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
}
.form-button:active {
  border-color: var(--accent-alt);
}

.card-shadow {
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.4), 0 2px 4px -2px rgb(0 0 0 / 0.2);
  /* box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1); */
  /* box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1); */
  /* box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25); */
}

@media (min-width: 768px) {
  .map-component {
    width: 45%;
  }
  .form-container {
    width: 60%;
  }
}
</style>

<route lang="yaml">
meta:
  layout: home
</route>
