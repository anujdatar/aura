<script setup lang="ts">
const router = useRouter()
const routes = [
  { title: 'Home', path: '/' },
  { title: 'Industries', path: '/industries' },
  { title: 'Services', path: '/services' },
  { title: 'Exports', path: '/exports' },
  { title: 'About', path: '/about' },
  { title: 'Contact', path: '/contact' },
]
</script>

<template>
  <main class="w-full h-full text-primary">
    <aura-navigation :routes="routes" class="bg-primary" />
    <aura-sidenav :routes="routes" />
    <div class="page-content">
      <div class="container flex-col items-center align-middle justify-center">
        <div class="flex flex-col items-center align-middle justify-center text-4xl pt-8">
          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="2rem" height="2rem" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32">
            <path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm0 26a12 12 0 1 1 12-12a12 12 0 0 1-12 12Z" />
            <path fill="currentColor" d="M15 8h2v11h-2zm1 14a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 22z" />
          </svg>
          404 page not found
        </div>
        <div>
          <button class="btn" @click="router.back()">
            &#8592; Go Back
          </button>
        </div>
      </div>
    </div>
    <div class="w-full absolute bottom-0">
      <section-separator color="text-alt" class="" />
      <aura-footer class="bg-alt" />
    </div>
  </main>
</template>

<style scoped>
.btn {
  display: inline-block;
  cursor: pointer;
  border-radius: 0.25rem;
  background-color: var(--accent);
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  color: white;
  margin-top: 3rem;
}
.btn:hover {
  background-color: var(--accent-alt);
}
</style>
