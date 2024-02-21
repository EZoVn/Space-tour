<template>
  <div class="background-destination h-screen bg-cover bg-center text-white">
    <div class=" laptop:px-36 pt-48">
      <h1 class="text-4xl uppercase">
        <span class="font-bold text-gray-400">01</span> Pick your destination
      </h1>

      <div class="flex justify-between items-center pt-24 desktop:mx-10">
        <div class="w-[445px] h-[445px]">

          <img class="max-w-max"  id="img" :src="dataDestinations[`${selected}`].images.webp" alt="image de la lune" />
        </div>
          
        <section class="ml-24 p-4 h-[450px] max-w-[650px] flex flex-col justify-between">
            <ul class="flex gap-8 ">
              <li class="hover:cursor-pointer relative hover:after:opacity-50" :class="{active: selected === 0}" @click="toggleActive(0)">MOON</li>
              <li class="hover:cursor-pointer relative hover:after:opacity-50" :class="{active: selected === 1}" @click="toggleActive(1)">MARS</li>
              <li class="hover:cursor-pointer relative hover:after:opacity-50" :class="{active: selected === 2}" @click="toggleActive(2)">EUROPA</li>
              <li class="hover:cursor-pointer relative hover:after:opacity-50" :class="{active: selected === 3}" @click="toggleActive(3)">TITAN</li>
            </ul>

          <h2 class="uppercase text-[100px] py-4">{{ dataDestinations[`${selected}`].name }}</h2>
          <p class="text-wrap">{{ dataDestinations[`${selected}`].description }}</p>
          <div class="flex justify-between pt-8 ">
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
function toggleActive(index) {
  selected.value = index;
  console.log(selected.value);
}
</script>

<style scoped>
.background-destination {
  background-image: url("@/assets/destination/background-destination-desktop.jpg");
}

.active::after, ul li:hover::after{
  content: '';
  position: absolute;
  bottom: -13px;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: white;
}

</style>
