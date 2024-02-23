<template>
  <div class="background-home h-screen bg-cover bg-center">
    <section class="mx-8 flex items-center justify-around pt-96">
      <div class="mr-10 w-96 text-white">
        <p class="uppercase text-3xl text-primaryLight barlowFont tracking-widests">So, you want to travel to</p>
        <h1 class="text-[150px] uppercase">Space</h1>
        <p class="text-lg text-primaryLight">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>

      <router-link to="/Destination">
        <button class="h-64 w-64 rounded-full bg-white text-4xl effect">
          EXPLORE
        </button>
      </router-link>
    </section>
  </div>
</template>

<script setup></script>

<style scoped>
.background-home {
  background-image: url("/assets/home/background-home-desktop.jpg");
}
.effect:hover {
  box-shadow: 0 0 .1em 2em rgba(200, 200, 200, 0.112);
  transition: all 0.5s;
}

</style>
