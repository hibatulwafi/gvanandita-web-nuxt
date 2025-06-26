<template>
  <section class="w-full bg-gray-900 text-white py-16 lg:py-24">
    <div class="container mx-auto px-8">
      <h2 class="text-4xl lg:text-5xl font-extrabold text-white text-center lg:text-left mb-12 lg:mb-16 uppercase"
          data-aos="fade-up" data-aos-duration="800">
        VISI & MISI
      </h2>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">
        <div class="col-span-1 order-last lg:order-first"
             data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
          <h3 class="text-3xl font-bold text-gold-500 mb-6">Visi</h3>
          <p class="text-lg text-gray-300 leading-relaxed">
            Menjadi lembaga keuangan terkemuka dan terpercaya yang menjadi pilihan
            utama bagi purnawirawan Aparatur Sipil Negara (ASN), Tentara
            Nasional Indonesia (TNI), dan Kepolisian Republik
            Indonesia (Polri) dalam memenuhi kebutuhan
            finansial di masa pensiun.
          </p>
        </div>

        <div class="col-span-1 order-last lg:order-first"
             data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
          <h3 class="text-3xl font-bold text-gold-500 mb-6">Misi</h3>
          <div class="space-y-6">
            <div v-for="(mission, index) in missions" :key="index"
                 class="flex items-start space-x-4"
                 data-aos="fade-up" data-aos-duration="800" :data-aos-delay="500 + (index * 100)">
              <div
                class="flex-shrink-0 w-10 h-10 rounded-full bg-gold-500 flex items-center justify-center text-gray-900 font-bold text-lg">
                {{ index + 1 }}
              </div>
              <p class="flex-grow text-lg text-gray-300">
                {{ mission.text }}
              </p>
            </div>
          </div>
        </div>

        <div class="col-span-1 order-first lg:order-last flex justify-center lg:justify-end items-center"
             data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
          <div
            class="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-none h-64 sm:h-80 md:h-96 lg:h-[500px] bg-gray-800 rounded-lg shadow-2xl overflow-hidden">
            <img src="/public/images/vision.jpg" alt="Vision and Mission Image"
              class="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const missions = [
  { text: 'Menyediakan produk pinjaman pensiun yang inovatif, kompetitif, dan mudah diakses bagi para pensiunan ASN, TNI, dan Polri.' },
  { text: 'Membangun hubungan jangka panjang yang berdasarkan kepercayaan, integritas, dan saling menguntungkan dengan para nasabah.' },
  { text: 'Memberikan pelayanan terbaik dengan menjunjung tinggi profesionalisme, kecepatan, dan transparansi.' },
  { text: 'Berperan aktif dalam meningkatkan kesejahteraan finansial para purnawirawan di Indonesia.' }
];
</script>

<style scoped>
.text-gold-500 {
  color: #D1B000;
}

.bg-gold-500 {
  background-color: #D1B000;
}
</style>