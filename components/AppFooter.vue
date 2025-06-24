<template>
  <footer class="bg-[#171616] text-white  pt-12 pb-6">
    <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

      <div class="flex flex-col items-center md:items-start text-center md:text-left">
        <NuxtLink to="/" class="mb-4">
          <img src="/public/images/white-logo.png" alt="GVA Logo" class="h-20 w-auto" />
        </NuxtLink>
        <p class="text-sm sm:text-sm lg:text-base font-extrabold leading-tight text-white drop-shadow-lg">
          Glory in Service,
          Victory in Trust
        </p>

        <p class="text-sm sm:text-sm lg:text-base leading-tight text-white drop-shadow-lg">
          PT Glory Victory Anandita
        </p>
      </div>

      <div>
        <h3 class="text-xl font-semibold mb-4 text-gold-500">Sosial Media</h3>
        <ul class="space-y-2">
          <li>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
              class="hover:underline text-gray-300 flex items-center">
              <font-awesome-icon :icon="['fab', 'facebook']" class="w-5 h-5 text-gold-500 mr-3" />
              Facebook
            </a>
          </li>
          <li>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
              class="hover:underline text-gray-300 flex items-center">
              <font-awesome-icon :icon="['fab', 'instagram']" class="w-5 h-5 text-gold-500 mr-3" />
              Instagram
            </a>
          </li>
          <li>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
              class="hover:underline text-gray-300 flex items-center">
              <font-awesome-icon :icon="['fab', 'linkedin']" class="w-5 h-5 text-gold-500 mr-3" />
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"
              class="hover:underline text-gray-300 flex items-center">
              <font-awesome-icon :icon="['fab', 'tiktok']" class="w-5 h-5 text-gold-500 mr-3" />
              TikTok
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h3 class="text-xl font-semibold mb-4 text-gold-500">Hubungi Kami</h3>

        <div class="flex items-start mb-2">
          <font-awesome-icon :icon="['fas', 'phone']" class="w-5 h-5 text-gold-500 mr-3 mt-1 flex-shrink-0" />
          <p class="text-gray-300">+62 823 1100 1068</p>
        </div>

        <div class="flex items-start mb-2">
          <font-awesome-icon :icon="['fas', 'envelope']" class="w-5 h-5 text-gold-500 mr-3 mt-1 flex-shrink-0" />
          <p class="text-gray-300">Email: <a href="mailto:sekretaris@gvanandita.com"
              class="hover:underline">info@gvanandita.com</a></p>
        </div>

        <div class="flex items-start mb-2">
          <font-awesome-icon :icon="['fas', 'map-marker-alt']" class="w-5 h-5 text-gold-500 mr-3 mt-1 flex-shrink-0" />
          <address class="text-gray-300 not-italic">
            Jl. Wolter Monginsidi No.107A, RT 006,<br>
            RW 006, Rawa Barat, Kebayoran Baru,<br>
            Jakarta Selatan, DKI Jakarta 12170
          </address>
        </div>


      </div>

      <div class="mt-12 text-center text-sm text-gray-500">
        <hr class="border-gray-700 my-4" />
        &copy; 2025 PT Glory Victory Anandita. All rights reserved.
      </div>

    </div>
  </footer>
</template>

<script setup>
// No specific reactive data needed for the footer
</script>

<style scoped>
/* Define a custom gold color consistent with other components */
.text-gold-500 {
  color: #D1B000;
}
</style>