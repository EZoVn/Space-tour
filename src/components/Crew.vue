<template>
  <div class="background-crew h-screen bg-cover bg-center text-white">
    <div class="pt-72 laptop:px-36">
      <h1 class="text-4xl uppercase">
        <span class="font-bold text-gray-400">02</span> Meet your crew
      </h1>

      <section class="flex justify-between">
        <div>
          <h2 class="opacity-25 uppercase text-4xl">{{ dataCrew[`${selected}`].role }}</h2>
          <h2>{{ dataCrew[`${selected}`].name }}</h2>
          <h2>{{ dataCrew[`${selected}`].bio }}</h2>
        </div>
        <div>
          <img class="absolute bottom-0 right-20 w-[568px] h-[712px]" :src="dataCrew[`${selected}`].images.webp" alt="Photo du pilote">
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import data from "../assets/data.json";
import { ref } from "vue";

const dataCrew = data.crew;
const selected = ref(0);

</script>

<style>
.background-crew {
  background-image: url("@/assets/crew/background-crew-desktop.jpg");
}
/* Commander */

/* image-removebg-preview(289) */

position: absolute;
width: 568.07px;
height: 712px;
left: 734.93px;
top: 198px;

background: url(Image.png);


</style>
