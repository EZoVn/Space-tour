<template>
  <div class="background-technology h-screen bg-cover bg-center text-white ">
    <div class="pt-48 laptop:px-36 desktop:px-8">
      <h1 class="text-4xl uppercase">
        <span class="font-bold text-gray-400">03</span> Space launch 101
      </h1>

      <div class="flex container mt-32 gap-4 items-center ml-16">
        <div class="flex gap-8 flex-col">
          <span :class="{isActive: selectedTechnology === 0}" class="selectedNumber" @click="toggleActiveTechnology(0)">1</span>
          <span :class="{isActive: selectedTechnology === 1}" class="selectedNumber" @click="toggleActiveTechnology(1)">2</span>
          <span :class="{isActive: selectedTechnology === 2}" class="selectedNumber" @click="toggleActiveTechnology(2)">3</span>
        </div>
        <div class="w-full h-80 text-balance text-lg">
          <p class="uppercase text-primaryLight">The terminology ...</p>
          <p class="text-6xl uppercase pt-4 pb-8">{{ dataTechnology[`${selectedTechnology}`].name }}</p>
          <p class="text-primaryLight">{{ dataTechnology[`${selectedTechnology}`].description }}</p>
        </div>
        <div class="container">
          <img class="w-[515px] h-[527px]" :src="dataTechnology[`${selectedTechnology}`].images.portrait" alt="Photo du véhicule">
        </div>
      </div>
    </div>
  </div>

</template>
<script setup>
import { ref } from 'vue';
import data from '/src/data.json';

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
.selectedNumber{
  @apply rounded-full border h-20 w-20 flex items-center justify-center border-opacity-25 border-white text-lg;
}
.selectedNumber:hover{
  @apply border-opacity-100 cursor-pointer;
}
.isActive{
  @apply bg-white text-black;
}
</style>