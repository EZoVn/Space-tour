<template>
  <div class="background-destination h-screen bg-cover bg-center text-white mobile:overflow-y-auto">
    <div class=" laptop:px-36 laptop:pt-48 mobile:pt-24">
      <h1 class="laptop:text-4xl uppercase tablet:text-xl tablet:ml-10 tablet:text-start mobile:text-center">
        <span class="font-bold text-gray-400">01</span> Pick your destination
      </h1>

      <div class="flex justify-between items-center tablet:pt-20 desktop:mx-10 mobile:flex-col mobile:pt-8 laptop:flex-row">
        <div class="laptop:w-[445px] laptop:h-[445px] tablet:w-[300px] tablet:h-[300px] mobile:w-[170px] mobile:h-[170px]">
          <img class="laptop:max-w-max"  id="img" :src="dataDestinations[`${selected}`].images.webp" alt="image de la lune" />
        </div>
          
        <section class="laptop:ml-24 p-4 h-[450px] max-w-[650px] flex flex-col justify-between mobile:text-center laptop:text-start tablet:px-16">
            <ul class="flex gap-8 mobile:justify-center laptop:justify-start">
              <li class="hover:cursor-pointer barlowFont tracking-wider text-primaryLight relative hover:after:opacity-50" :class="{active: selected === 0}" @click="toggleActive(0)">MOON</li>
              <li class="hover:cursor-pointer barlowFont tracking-wider text-primaryLight relative hover:after:opacity-50" :class="{active: selected === 1}" @click="toggleActive(1)">MARS</li>
              <li class="hover:cursor-pointer barlowFont tracking-wider text-primaryLight relative hover:after:opacity-50" :class="{active: selected === 2}" @click="toggleActive(2)">EUROPA</li>
              <li class="hover:cursor-pointer barlowFont tracking-wider text-primaryLight relative hover:after:opacity-50" :class="{active: selected === 3}" @click="toggleActive(3)">TITAN</li>
            </ul>

          <h2 class="uppercase mobile:text-[56px] mobile:text-center tablet:text-[100px]  py-4">{{ dataDestinations[`${selected}`].name }}</h2>
          <p class="text-wrap text-primaryLight tablet:text-lg mobile:text-base">{{ dataDestinations[`${selected}`].description }}</p>
          <span class="tablet:flex-grow border-b border-gray-300 opacity-25 line pt-4"></span>
          <div class="flex laptop:justify-between tablet:flex-row tablet:pt-8 tablet:justify-around tablet:py-0 mobile:flex-col mobile:py-8">
            <div>
              <p class="barlowFont tracking-wide text-primaryLight">AVG. DISTANCE</p>
              <p class="text-2xl uppercase mobile:pt-2">{{ dataDestinations[`${selected}`].distance }}</p>
            </div>
            <div>
              <p class="barlowFont tracking-wide text-primaryLight tablet:pt-0 mobile:pt-8">EST. TRAVEL TIME</p>
              <p class="text-2xl uppercase mobile:pt-2">{{ dataDestinations[`${selected}`].travel }}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import data from "/src/data.json";
import { ref } from "vue";

const dataDestinations = data.destinations;
const selected = ref(0);
function toggleActive(index) {
  selected.value = index;
}
</script>

<style scoped>

.background-destination {
  background-image: url("/assets/destination/background-destination-desktop.jpg");
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
.active{
  color: white;
}

@media screen and (min-width: 640px) and (max-width: 1024px) {
  .background-destination{
    background-image: url("/assets/destination/background-destination-tablet.jpg");
  }
}
@media screen and (min-width: 300px) and (max-width: 639px) {
  .background-destination {
    background-image: url("/assets/destination/background-destination-mobile.jpg");
  }
}
</style>
