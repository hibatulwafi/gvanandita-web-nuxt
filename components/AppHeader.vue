<template>
  <header :class="{
    'bg-transparent text-white shadow-none': !scrolled,
    'bg-[#171616] text-white shadow-md': scrolled,
  }" class="fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
      <div class="flex items-center">
        <NuxtLink to="/" class="flex items-center space-x-2">
          <img v-if="scrolled" src="/images/black-logo.png" alt="KSP Glo Anandita Logo"
            class="h-16 transition-opacity duration-300" />
          <img v-else src="/images/white-logo.png" alt="KSP Glo Anandita Logo"
            class="h-16 transition-opacity duration-300" />
        </NuxtLink>
      </div>

      <div class="md:hidden">
        <button @click="toggleMobileMenu" :class="{ 'rotate-90': isMobileMenuOpen }"
          class="transition-transform duration-300 text-white">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      <nav class="hidden md:flex space-x-6">
        <a href="#home" @click.prevent="scrollToSection('home')"
          class="hover:underline underline-offset-4 cursor-pointer text-gold-500">Beranda</a>
        <a href="#about" @click.prevent="scrollToSection('about')"
          class="hover:underline underline-offset-4 cursor-pointer text-gold-500">Tentang</a>
        <a href="#vision-mission" @click.prevent="scrollToSection('vision-mission')"
          class="hover:underline underline-offset-4 cursor-pointer text-gold-500">Visi & Misi</a>
        <a href="#project" @click.prevent="scrollToSection('project')"
          class="hover:underline underline-offset-4 cursor-pointer text-gold-500">Project</a>
        <a href="#portfolio" @click.prevent="scrollToSection('portfolio')"
          class="hover:underline underline-offset-4 cursor-pointer text-gold-500">Portofolio</a>
        <a href="#contact" @click.prevent="scrollToSection('contact')"
          class="hover:underline underline-offset-4 cursor-pointer text-gold-500">Kontak</a>
      </nav>
    </div>

    <transition name="fade">
      <div v-if="isMobileMenuOpen" class="md:hidden px-4 pb-4 bg-[#171616]">
        <a href="#home" @click.prevent="scrollToSectionAndCloseMenu('home')"
          class="block py-2 text-white hover:bg-gray-700 rounded text-gold-500">Beranda</a>
        <a href="#about" @click.prevent="scrollToSectionAndCloseMenu('about')"
          class="block py-2 text-white hover:bg-gray-700 rounded text-gold-500">Tentang</a>
        <a href="#vision-mission" @click.prevent="scrollToSectionAndCloseMenu('vision-mission')"
          class="block py-2 text-white hover:bg-gray-700 rounded text-gold-500">Visi & Misi</a>
        <a href="#project" @click.prevent="scrollToSectionAndCloseMenu('project')"
          class="block py-2 text-white hover:bg-gray-700 rounded text-gold-500">Project</a>
        <a href="#portfolio" @click.prevent="scrollToSectionAndCloseMenu('portfolio')"
          class="block py-2 text-white hover:bg-gray-700 rounded text-gold-500">Portofolio</a>
        <a href="#contact" @click.prevent="scrollToSectionAndCloseMenu('contact')"
          class="block py-2 text-white hover:bg-gray-700 rounded text-gold-500">Kontak</a>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const scrolled = ref(false);
const isMobileMenuOpen = ref(false);

// Inisialisasi route dan router
// Pastikan ini di scope teratas dari script setup
const route = useRoute();
const router = useRouter();

const handleScroll = () => {
  scrolled.value = window.scrollY > 50;
};

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

const scrollToSection = async (id) => {
  // Tambahkan pemeriksaan keamanan
  if (!route || !router) {
    console.error("Router atau Route belum terinisialisasi. Tidak bisa melakukan scroll.");
    return;
  }

  if (route.path !== '/') {
    await router.push(`/#${id}`);
    // Setelah push, berikan sedikit waktu untuk rendering dan kemudian scroll
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80,
          behavior: 'smooth',
        });
      }
    }, 100);
  } else {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  }
};

const scrollToSectionAndCloseMenu = (id) => {
  scrollToSection(id);
  closeMobileMenu();
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);

  // Pastikan window ada sebelum mencoba mengakses route.hash
  if (process.client && route.hash) {
    setTimeout(() => {
      scrollToSection(route.hash.substring(1));
    }, 100);
  }
});

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

/* Define a custom gold color */
.text-gold-500 {
  color: #D1B000;
  /* Example gold color, adjust as needed */
}

.bg-gold-500 {
  background-color: #D1B000;
}

.hover\:bg-gold-600:hover {
  background-color: #BF9C00;
  /* Slightly darker gold for hover */
}

.hover\:border-gold-500:hover {
  border-color: #D1B000;
}

.hover\:text-gold-500:hover {
  color: #D1B000;
}
</style>