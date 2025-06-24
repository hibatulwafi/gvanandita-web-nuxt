<template>
  <section class="w-full bg-gray-900 text-white py-16 lg:py-24">
    <div class="container mx-auto px-8">
      <h2 class="text-4xl lg:text-5xl font-extrabold text-white text-center lg:text-left mb-12 lg:mb-16 uppercase"
        data-aos="fade-up" data-aos-duration="800">
        OUR PORTFOLIO
      </h2>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <div class="flex flex-col justify-center space-y-6">
          <p class="text-lg text-gray-300 leading-relaxed" data-aos="fade-up" data-aos-delay="100"
            data-aos-duration="900">
            Kami bangga telah menjadi mitra finansial bagi ratusan pensiunan
            di seluruh Indonesia, termasuk:
          </p>

          <div class="space-y-4">
            <div v-for="(item, index) in portfolioItems" :key="index" class="flex items-start space-x-4"
              data-aos="fade-up" :data-aos-delay="200 + (index * 150)" data-aos-duration="900">
              <svg class="flex-shrink-0 w-8 h-8 text-green-400 mt-1" fill="none" stroke="currentColor"
                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <p class="text-lg text-gray-300">
                {{ item.text }}
              </p>
            </div>
          </div>

          <p class="text-lg text-gray-300 leading-relaxed mt-4" data-aos="fade-up"
            :data-aos-delay="200 + (portfolioItems.length * 150)" data-aos-duration="900">
            Setiap cerita mereka adalah bukti nyata bahwa masa pensiun
            dapat dijalani dengan lebih tenang, bermakna, dan produktif
            bersama kami.
          </p>
        </div>

        <div class="flex justify-center items-center lg:justify-end mt-12 lg:mt-0" data-aos="fade-up"
          data-aos-delay="500" data-aos-duration="1000">
          <div
            class="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-none h-64 sm:h-80 md:h-96 lg:h-[450px] bg-gray-800 rounded-lg shadow-2xl overflow-hidden">
            <img src="/public/images/portfolio.jpg" alt="Handshake - Partnership"
              class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500 ease-in-out" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const portfolioItems = [
  { text: 'Purnawirawan ASN dari Kementerian dan Pemerintah Daerah di berbagai provinsi.' },
  { text: 'Pensiunan TNI dari dari matra Darat, Laut, dan Udara.' },
  { text: 'Pensiunan POLRI dari berbagai kesatuan dan wilayah hukum.' },
  { text: 'Pensiunan Pegawai BUMN yang telah menyelesaikan masa bakti.' }
];
</script>

<style scoped>
/* No specific custom styles needed if only using Tailwind defaults and defined gold color elsewhere */
</style>