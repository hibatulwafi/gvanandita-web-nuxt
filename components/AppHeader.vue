<template>
  <header :class="{
    'bg-transparent text-white shadow-none': !scrolled,
    'bg-[#171616] text-white shadow-md': scrolled,
  }" class="fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
      <div class="flex items-center">
        <NuxtLink to="/" class="flex items-center space-x-2">
          <img v-if="scrolled" src="/public/images/black-logo.png" alt="KSP Glo Anandita Logo"
            class="h-16 transition-opacity duration-300" />
          <img v-else src="/public/images/white-logo.png" alt="KSP Glo Anandita Logo"
            class="h-16 transition-opacity duration-300" />
        </NuxtLink>
      </div>

      <div class="md:hidden">
        <button @click="toggleMobileMenu" class:class="{ 'rotate-90': isMobileMenuOpen }"
          class="transition-transform duration-300">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      <nav class="hidden md:flex space-x-6">
        <NuxtLink to="/" class="hover:underline underline-offset-4">Home</NuxtLink>
        <NuxtLink to="/product" class="hover:underline underline-offset-4">About</NuxtLink>
        <NuxtLink to="/profile" class="hover:underline underline-offset-4">Vision & Mision</NuxtLink>
        <NuxtLink to="/artikel" class="hover:underline underline-offset-4">Project</NuxtLink>
        <NuxtLink to="/artikel" class="hover:underline underline-offset-4">Portfolio</NuxtLink>
      </nav>
    </div>

    <transition name="fade">
      <div v-if="isMobileMenuOpen" class="md:hidden px-4 pb-4 bg-gray-800">
        <NuxtLink to="/" class="block py-2 text-white hover:bg-gray-700 rounded" @click="closeMobileMenu">Home
        </NuxtLink>
        <NuxtLink to="/product" class="block py-2 text-white hover:bg-gray-700 rounded" @click="closeMobileMenu">About
        </NuxtLink>
        <NuxtLink to="/profile" class="block py-2 text-white hover:bg-gray-700 rounded" @click="closeMobileMenu">Vision & Mision
        </NuxtLink>
        <NuxtLink to="/artikel" class="block py-2 text-white hover:bg-gray-700 rounded" @click="closeMobileMenu">Portfolio
        </NuxtLink>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// State untuk mengatur apakah navbar sudah discroll
const scrolled = ref(false);
// State untuk menu mobile
const isMobileMenuOpen = ref(false);

// Fungsi untuk menangani event scroll
const handleScroll = () => {
  scrolled.value = window.scrollY > 50; // Ubah nilai 50 ini sesuai seberapa jauh scroll yang Anda inginkan
};

// Fungsi untuk toggle menu mobile
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

// Fungsi untuk menutup menu mobile (berguna setelah klik link)
const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

// Pasang event listener saat komponen di-mount
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

// Bersihkan event listener saat komponen di-unmount untuk mencegah memory leak
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
/* Transisi untuk fade in/out menu mobile */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>