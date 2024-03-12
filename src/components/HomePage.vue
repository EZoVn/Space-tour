<template>
  <div class="background-home h-screen bg-cover bg-center">
    <section
      class="laptop:pt-96 tablet:flex-col tablet:pt-40 tablet:text-center laptop:flex-row mx-8 flex items-center justify-around"
    >
      <div class="laptop:mr-10 laptop:w-96 tablet:mx-28 text-white">
        <p
          class="text-primaryLight barlowFont tracking-widests text-3xl uppercase"
        >
          So, you want to travel to
        </p>
        <h1 class="text-[150px] uppercase">Space</h1>
        <p class="text-primaryLight text-lg">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>

      <router-link to="/Destination" class="tablet:pt-32">
        <button class="effect h-64 w-64 rounded-full bg-white text-4xl">
          EXPLORE
        </button>
      </router-link>
    </section>
  </div>
</template>

<script setup>
</script>

<style scoped>
.background-home {
  background-image: url("/assets/home/background-home-desktop.jpg");
}
.effect:hover {
  box-shadow: 0 0 0.1em 2em rgba(200, 200, 200, 0.112);
  transition: all 0.5s;
}
@media screen and (min-width: 640px) and (max-width: 1024px) {
  .background-home {
    background-image: url("/assets/home/background-home-tablet.jpg");
  }
}
@media screen and (min-width: 300px) and (max-width: 639px) {
  .background-home {
    background-image: url("/assets/home/background-home-mobile.jpg");
  }
}
</style>
