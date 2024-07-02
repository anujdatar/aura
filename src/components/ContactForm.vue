<template>
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
        <input id="company" type="text" name="company" class="form-input" />
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
</template>

<style>
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
@media (min-width: 768px) {
  .form-container {
    width: 60%;
  }
}
</style>
