<template>
  <div class="background-crew h-screen bg-cover bg-center text-white">
    <div class="laptop:px-36 laptop:pt-48 tablet:pt-24">
      <h1 class="laptop:text-4xl uppercase tablet:text-xl tablet:ml-10">
        <span class="font-bold text-gray-400">02</span> Meet your crew
      </h1>

      <section class="container laptop:mt-32 tablet:mt-20">
        <div class="laptop:w-1/2 laptop:text-start laptop:px-0 tablet:text-center tablet:px-20">
          <h2 class="text-4xl uppercase opacity-25">
            {{ dataCrew[`${selectedCrew}`].role }}
          </h2>
          <p class="pb-8 pt-4 laptop:text-6xl uppercase tablet:text-5xl">
            {{ dataCrew[`${selectedCrew}`].name }}
          </p>
          <p class="text-primaryLight text-lg">{{ dataCrew[`${selectedCrew}`].bio }}</p>
        </div>
        <div class="laptop:left-30 laptop:absolute laptop:bottom-20 tablet:text-center">
          <span
            @click="toggleActiveCrew(0)"
            class="spany"
            :class="{ isActive: selectedCrew === 0 }"
          ></span>
          <span
            @click="toggleActiveCrew(1)"
            class="spany"
            :class="{ isActive: selectedCrew === 1 }"
          ></span>
          <span
            @click="toggleActiveCrew(2)"
            class="spany"
            :class="{ isActive: selectedCrew === 2 }"
          ></span>
          <span
            @click="toggleActiveCrew(3)"
            class="spany"
            :class="{ isActive: selectedCrew === 3 }"
          ></span>
        </div>
        <div>
          <img
            class="laptop:absolute laptop:bottom-0 laptop:right-20 tablet:mx-auto tablet:w-[456px] tablet:h-[572px]"
            :src="dataCrew[`${selectedCrew}`].images.webp"
            alt="Photo du pilote"
          />
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import data from "/src/data.json";
import { ref } from "vue";

const dataCrew = data.crew;
const selectedCrew = ref(0);

function toggleActiveCrew(index) {
  selectedCrew.value = index;
}
</script>

<style scoped>
.background-crew {
  background-image: url("/assets/crew/background-crew-desktop.jpg");
}
.spany {
  display: inline-block;
  width: 15px;
  height: 15px;
  border-radius: 99%;
  margin-right: 22px;
  margin-top: 120px;
  @apply bg-gray-400;
}
.spany:hover {
  @apply cursor-pointer bg-white opacity-25;
}
.isActive {
  @apply bg-white;
}
@media screen and (min-width: 640px) and (max-width: 1024px) {
  .background-crew{
    background-image: url("/assets/crew/background-crew-tablet.jpg");
  }
  .spany{
    margin-top: 40px;
  }
}
@media screen and (min-width: 300px) and (max-width: 639px) {
  .background-crew {
    background-image: url("/assets/crew/background-crew-mobile.jpg");
  }
}
</style>
