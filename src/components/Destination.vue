<template>
  <div class="background-destination h-screen bg-cover bg-center text-white">
    <div class="pt-72 px-36">
      <h2 class="text-4xl uppercase">
        <span class="font-bold text-gray-400">01</span> Pick your destination
      </h2>

      <div class="flex justify-between items-center pt-24">
        <div class="w-[445px] h-[445px]">

          <img class=" max-w-max"  id="img" :src="dataDestinations[`${selected}`].images.webp" alt="image de la lune" />
        </div>
          
        <section class="pl-24">
            <ul class="flex gap-8 ">
              <li class="hover:cursor-pointer" @click="selected = 0">MOON</li>
              <li class="hover:cursor-pointer" @click="selected = 1">MARS</li>
              <li class="hover:cursor-pointer" @click="selected = 2">EUROPA</li>
              <li class="hover:cursor-pointer" @click="selected = 3">TITAN</li>
            </ul>

          <h1 class="uppercase text-[100px]">{{ dataDestinations[`${selected}`].name }}</h1>
          <p class="text-wrap">{{ dataDestinations[`${selected}`].description }}</p>
          <div class="flex">
            <div>
              <p>AVG. DISTANCE</p>
              <p>{{ dataDestinations[`${selected}`].distance }}</p>
            </div>
            <div>
              <p>EST. TRAVEL TIME</p>
              <p>{{ dataDestinations[`${selected}`].travel }}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import data from "../assets/data.json";
import { ref } from "vue";

const dataDestinations = data.destinations;
const selected = ref(0);

</script>

<style>
.background-destination {
  background-image: url("@/assets/destination/background-destination-desktop.jpg");
}



</style>
