<template>
  <div class="background-crew h-screen bg-cover bg-center text-white">
    <div class="pt-48 laptop:px-36">
      <h1 class="text-4xl uppercase">
        <span class="font-bold text-gray-400">02</span> Meet your crew
      </h1>

      <section class="container mt-32">
        <div class="w-1/2">
          <h2 class="opacity-25 uppercase text-4xl">{{ dataCrew[`${selectedCrew}`].role }}</h2>
          <p class="text-6xl uppercase pt-4 pb-8">{{ dataCrew[`${selectedCrew}`].name }}</p>
          <p >{{ dataCrew[`${selectedCrew}`].bio }}</p>
        </div>
        <div class="absolute bottom-20 left-30">
          <span @click="toggleActiveCrew(0)" class="spany" :class="{isActive: selectedCrew === 0}"></span>
          <span @click="toggleActiveCrew(1)" class="spany" :class="{isActive: selectedCrew === 1}"></span>
          <span @click="toggleActiveCrew(2)" class="spany" :class="{isActive: selectedCrew === 2}"></span>
          <span @click="toggleActiveCrew(3)" class="spany" :class="{isActive: selectedCrew === 3}"></span>
        </div>
        <div>
          <img class="absolute bottom-0 right-20" :src="dataCrew[`${selectedCrew}`].images.webp" alt="Photo du pilote">
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import data from "../assets/data.json";
import { ref } from "vue";

const dataCrew = data.crew;
// const selected = ref(0);
const selectedCrew = ref(0);

function toggleActiveCrew(index) {
  selectedCrew.value = index;
}

</script>

<style scoped>
.background-crew {
  background-image: url("@/assets/crew/background-crew-desktop.jpg");
}
.spany{
  display: inline-block;
  width: 15px;
  height: 15px;
  border-radius: 99%;
  margin-right: 18px;
  margin-top: 120px;
  @apply bg-gray-400;
}
.spany:hover{
  @apply bg-white opacity-25 cursor-pointer;
}
.isActive{
  @apply bg-white;
}



</style>
