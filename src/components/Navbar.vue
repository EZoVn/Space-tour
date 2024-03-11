<template>
  <div
    class="fixed left-0 top-0 z-20 ml-8 flex w-full items-center justify-between laptop:p-8 pr-0"
  >
    <div class="flex h-14 w-14 items-center">
      <img
        class="max-w-max object-contain"
        src="/assets/shared/logo.svg"
        alt="logo du site etoile a 4 piques"
      />
    </div>
    <span class="ml-8 flex-grow border-b border-gray-300 opacity-25 line"></span>
    <ul class="uppercase relative flex gap-8 bg-slate-900 px-24 py-6 text-white">
      <li class="relative hover:after:opacity-50" @click="toggleActive(0)" :class="{active: isActive === 0}">
        <router-link to="/"
          ><span class="font-bold p-1 tablet:hidden">00</span> Home</router-link
        >
      </li>
      <li class="relative hover:after:opacity-50" @click="toggleActive(1)" :class="{active: isActive === 1}">
        <router-link to="/Destination"
          ><span class="font-bold p-1 tablet:hidden">01</span> Destination</router-link
        >
      </li>
      <li class="relative hover:after:opacity-50" @click="toggleActive(2)" :class="{active: isActive === 2}">
        <router-link to="/Crew"
          ><span class="font-bold p-1 tablet:hidden">02</span> Crew</router-link
        >
      </li>
      <li class="relative hover:after:opacity-50" @click="toggleActive(3)" :class="{active: isActive === 3}">
        <router-link to="/Technology"
          ><span class="font-bold p-1 tablet:hidden">03</span> Technology</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const isActive = ref(0);

function toggleActive(index) {
  isActive.value = index;
}
</script>

<style scoped>

.active::after, ul li:hover::after{
  position: absolute;
  content: "";
  bottom: -23px;
  left: 0px;
  width: 100%;
  height: 3px;
  background-color: white;
}
@media screen and (max-width:768px) {
  .line{
    display: none;
  }
}
</style>
