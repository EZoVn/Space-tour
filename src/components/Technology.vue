<template>
  <div class="background-technology h-screen bg-cover bg-center text-white">
    <div class="laptop:pt-48 laptop:px-36 desktop:px-8 tablet:pt-24">
      <h1 class="laptop:text-4xl tablet:text-xl tablet:ml-10 uppercase">
        <span class="font-bold text-gray-400">03</span> Space launch 101
      </h1>

      <div
        class="laptop:mt-32 laptop:ml-16 laptop:flex-row tablet:flex-col container flex items-center gap-4"
      >
        <div class="laptop:flex-col laptop:pt-0 tablet:pt-10 tablet:flex-row flex gap-8 tablet:order-2 laptop:order-1">
          <span
            :class="{ isActive: selectedTechnology === 0 }"
            class="selectedNumber"
            @click="toggleActiveTechnology(0)"
            >1</span
          >
          <span
            :class="{ isActive: selectedTechnology === 1 }"
            class="selectedNumber"
            @click="toggleActiveTechnology(1)"
            >2</span
          >
          <span
            :class="{ isActive: selectedTechnology === 2 }"
            class="selectedNumber"
            @click="toggleActiveTechnology(2)"
            >3</span
          >
        </div>
        <div class="h-80 w-full text-balance text-lg tablet:order-3 laptop:order-2 laptop:text-start tablet:text-center laptop:p-0 tablet:px-28 tablet:pt-10">
          <p class="text-primaryLight uppercase">The terminology ...</p>
          <p class="pb-8 pt-4 laptop:text-6xl tablet:text-5xl uppercase">
            {{ dataTechnology[`${selectedTechnology}`].name }}
          </p>
          <p class="text-primaryLight">
            {{ dataTechnology[`${selectedTechnology}`].description }}
          </p>
        </div>
        <div class="container tablet:order-1 laptop:order-3 tablet:w-[768px] tablet:h-80">
          <img
            class="laptop:h-[527px] laptop:w-[515px] tablet:w-full tablet:h-full tablet:object-cover"
            :src="dataTechnology[`${selectedTechnology}`].images.portrait"
            alt="Photo du véhicule"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import data from "/src/data.json";

const dataTechnology = data.technology;
const selectedTechnology = ref(0);
function toggleActiveTechnology(index) {
  selectedTechnology.value = index;
}
</script>

<style scoped>
.background-technology {
  background-image: url("/assets/technology/background-technology-desktop.jpg");
}
.selectedNumber {
  @apply flex h-20 w-20 items-center justify-center rounded-full border border-white border-opacity-25 text-lg;
}
.selectedNumber:hover {
  @apply cursor-pointer border-opacity-100;
}
.isActive {
  @apply bg-white text-black;
}
@media screen and (min-width: 640px) and (max-width: 1024px) {
  .background-technology {
    background-image: url("/assets/technology/background-technology-tablet.jpg");
  }
}
@media screen and (min-width: 300px) and (max-width: 639px) {
  .background-technology {
    background-image: url("/assets/technology/background-technology-mobile.jpg");
  }
}
</style>
