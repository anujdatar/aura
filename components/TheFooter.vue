<template>
  <div
    class="text-sm flex flex-col justify-center text-center mt-auto pt-10"
    :class="textColor"
  >
    <div class="border-b border-blue-gray-600 pb-3 shadow-sm">
      <h3 class="font-bold text-xl mb-2 text-blue-gray-600">
        Our Services
      </h3>
      <ul id="footerServices" class="leading-loose">
        <li>
          Product Development &amp; Engineering
        </li>
        <li>CNC Laser Cutting</li>
        <li>CNC Plasma Cutting</li>
        <li>CNC Oxy-fuel Cutting</li>
        <li>CNC Bending</li>
        <li>CNC Rolling</li>
        <li>Carbon Steel Welding</li>
        <li>Stainless Steal Welding</li>
        <li>Painting &amp; Powder Coating</li>
      </ul>
    </div>
    <div class="pt-3">
      &copy; 2006-2021 Aura Laserfab Pvt. Ltd.
    </div>
  </div>
</template>

<script>
export default {
  props: {
    textColor: {
      type: String,
      default: 'text-blue-gray-500'
    }
  }
}
</script>

<style>
#footerServices {
  height: auto;
  -webkit-column-count: 3;
  -moz-column-count: 3;
  column-count: 3;
}
</style>
