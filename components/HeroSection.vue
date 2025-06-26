<template>
  <section class="pt-12 relative w-full min-h-screen text-white flex items-center overflow-hidden hero-background">
    <div class="absolute inset-0 bg-black opacity-60 z-10"></div>

    <div class="container mx-auto px-8 py-16 lg:py-0 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-20">

      <div class="order-first lg:order-last flex justify-center items-center lg:justify-end mt-0 lg:mt-0">
        <div
          class="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-56 sm:h-64 md:h-80 lg:h-[400px] rounded-lg shadow-2xl overflow-hidden float-animation">
          <img src="/public/images/hero.png" alt="Innovative Solutions"
            class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500 ease-in-out" />
        </div>
      </div>

      <div
        class="order-last lg:order-first flex flex-col justify-center space-y-6 text-center lg:text-left mt-12 lg:mt-0">
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white drop-shadow-lg">
          <span class="text-gold-500">Glory</span> in Service,
          <span class="text-gold-500">Victory</span> in Trust
        </h1>
        <p class="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0">
          Penyedia solusi pembiayaan pensiun bagi para
          purnawirawan Aparatur Sipil Negara (ASN), Tentara
          Nasional Indonesia (TNI), dan Kepolisian Republik
          Indonesia (Polri)
        </p>
        <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
          <!-- <NuxtLink to="/"
            class="inline-block bg-gold-500 hover:bg-gold-600 text-gray-900 font-bold py-3 px-8 rounded-full transition-colors duration-300 text-lg shadow-lg">
            Get Started
          </NuxtLink> -->
          <a @click.prevent="scroll"
            class="inline-block border border-white hover:border-gold-500 text-white hover:text-gold-500 font-semibold py-3 px-8 rounded-full transition-colors duration-300 text-lg cursor-pointer">
            Get Started
          </a>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

const scroll = async () => {
  if (route.path !== '/') {
    // Jika tidak di homepage, navigasi dulu ke homepage dengan hash
    await router.push('/#about');
  }

  // Lakukan scroll setelah (potensi) navigasi atau jika sudah di homepage
  // Beri sedikit delay untuk memastikan DOM siap jika ada navigasi
  setTimeout(() => {
    const element = document.getElementById('about');
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Sesuaikan offset header Anda
        behavior: 'smooth',
      });
    }
  }, 100); // Delay singkat
};
</script>

<style scoped>
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

/* Floating Animation */
.float-animation {
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-15px);
    /* Adjust the float height as needed */
  }

  100% {
    transform: translateY(0px);
  }
}

/* Custom background image for the hero section */
.hero-background {
  background-image: url('/public/images/hero-bg-full.jpg');
  /* Ganti dengan path gambar latar belakang Anda */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  /* Menghilangkan background-color dari Tailwind karena sudah ada gambar */
  background-color: transparent;
  /* Pastikan tidak ada warna latar belakang solid */
}
</style>