<template>
  <div class="ml-8 p-8 pr-0 flex items-center justify-between text-xl
  fixed top-0 left-0 w-full z-20">
    <div>
      <img
        class="w-14 h-14 object-contain "
        src="../assets/shared/logo.svg"
        alt="logo du site etoile a 4 piques"
      />
    </div>
    <nav class="flex px-24 py-6 gap-8 text-white bg-slate-900">
      <router-link to="/"><span class="font-bold">00</span> Home</router-link>
      <router-link to="/Destination"><span class="font-bold">01</span> Destination</router-link>
      <router-link to="/Crew"><span class="font-bold">02</span> Crew</router-link>
      <router-link to="/Technology"><span class="font-bold">03</span> Technology</router-link>
    </nav>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>


</style>