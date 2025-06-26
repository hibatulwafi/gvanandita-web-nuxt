<template>
  <section class="min-h-screen bg-slate-100 text-gray-900 flex items-center justify-center p-8 lg:p-16">
    <div class="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div class="space-y-8">
        <h2 class="text-4xl lg:text-6xl font-extrabold text-gold-500 tracking-wider uppercase leading-tight"
            data-aos="fade-up" data-aos-duration="800">
          PROJECT KAMI
        </h2>
        <div class="space-y-6">
          <div v-for="(item, index) in projectItems" :key="index"
               class="flex items-start space-x-4"
               data-aos="fade-up" :data-aos-delay="100 + (index * 150)" data-aos-duration="900">
            <svg class="flex-shrink-0 w-8 h-8 text-green-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <p class="text-lg lg:text-xl text-gray-900">
              {{ item.text }}
            </p>
          </div>
        </div>
      </div>

      <div class="hidden lg:flex justify-center items-center"
           data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
        <div
          class="w-full max-w-lg h-96 bg-gray-800 rounded-lg shadow-lg overflow-hidden flex items-center justify-center">
          <img src="/public/images/project.jpg" srcset="" alt="Project Overview"
            class="object-cover w-full h-full" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const projectItems = [
  { text: 'Kredit Solutif Pensiun (KSP) Produk pinjaman dengan proses cepat dan persyaratan ringan bagi purnawirawan ASN, TNI, dan Polri.' },
  { text: 'Pensiunpreneur Pendanaan usaha mikro dan UMKM bagi pensiunan yang ingin tetap produktif di masa pensiun.' },
  { text: 'Rumah Nyaman Purnawirawan Program pembiayaan renovasi atau pembelian rumah kedua bagi pensiunan agar dapat menikmati masa tua yang layak.' },
  { text: 'Edukasi dan Literasi Keuangan Pensiun Workshop dan pendampingan untuk meningkatkan kesadaran finansial serta perencanaan jangka panjang bagi nasabah.' },
  { text: 'Pensiun Sejahtera Digital Aplikasi digital untuk pengajuan pinjaman, monitoring cicilan, dan akses layanan informasi berbasis teknologi.' }
];
</script>

<style scoped>
/* Define a custom gold color */
.text-gold-500 {
  color: #D1B000;
  /* Example gold color, adjust as needed */
}
</style>