<template>
  <div
    class="laptop:p-8 mobile:p-4 fixed left-0 top-0 z-20 ml-8 flex w-full items-center justify-between pr-0"
  >
    <div class="flex h-14 w-14 items-center">
      <img
        class="max-w-max object-contain"
        src="/assets/shared/logo.svg"
        alt="logo du site etoile a 4 piques"
      />
    </div>
    <div class="absolute right-12 hover:cursor-pointer" @click="toggleMenu">
      <img
        v-if="!isOpen"
        src="/assets/shared/icon-hamburger.svg"
        alt="logo hamburger menu"
      />
      <img v-else src="/assets/shared/icon-close.svg" alt="close logo" />
    </div>
    <span
      class="line ml-8 flex-grow border-b border-gray-300 opacity-25"
    ></span>
    <ul
      :class="{ isOpen: isOpen }"
      class="tablet:flex mobile:hidden tablet:relative tablet:bg-slate-900 gap-8 px-24 py-6 uppercase text-white"
    >
      <li
        class="relative hover:after:opacity-50"
        @click="toggleActive(0)"
        :class="{ active: isActive === 0 }"
      >
        <router-link to="/"
          ><span class="tablet:hidden laptop:inline-block p-1 font-bold"
            >00</span
          >
          Home</router-link
        >
      </li>
      <li
        class="relative hover:after:opacity-50"
        @click="toggleActive(1)"
        :class="{ active: isActive === 1 }"
      >
        <router-link to="/Destination"
          ><span class="tablet:hidden laptop:inline-block p-1 font-bold"
            >01</span
          >
          Destination</router-link
        >
      </li>
      <li
        class="relative hover:after:opacity-50"
        @click="toggleActive(2)"
        :class="{ active: isActive === 2 }"
      >
        <router-link to="/Crew"
          ><span class="tablet:hidden laptop:inline-block p-1 font-bold"
            >02</span
          >
          Crew</router-link
        >
      </li>
      <li
        class="relative hover:after:opacity-50"
        @click="toggleActive(3)"
        :class="{ active: isActive === 3 }"
      >
        <router-link to="/Technology"
          ><span class="tablet:hidden laptop:inline-block p-1 font-bold"
            >03</span
          >
          Technology</router-link
        >
      </li>
      <li class="tablet:hidden mobile:block blur-bg"></li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";
const isActive = ref(0);
const isOpen = ref(false);

function toggleActive(index) {
  isActive.value = index;
}
function toggleMenu() {
  isOpen.value = !isOpen.value;
}
</script>

<style scoped>
@media screen and (min-width: 640px) {
  .active::after,
  ul li:hover::after {
    position: absolute;
    content: "";
    bottom: -23px;
    left: 0px;
    width: 100%;
    height: 3px;
    background-color: white;
  }
}
@media screen and (max-width: 768px) {
  .line {
    display: none;
  }
}
@media screen and (max-width: 639px) {
  .active::after,
  ul li a:hover::after {
    position: absolute;
    content: "";
    top: 0;
    right: 0px;
    width: 3px;
    height: 130%;
    background-color: white;
  }
  .isOpen {
    @apply fixed right-0 top-0 -z-10 flex h-full w-2/3 flex-col pr-0 pl-10 pt-32;
  }
  .blur-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(40.7742px);
    z-index: -1;
  }
}
</style>
