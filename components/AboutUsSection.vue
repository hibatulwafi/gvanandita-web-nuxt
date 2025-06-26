<template>
  <section class="w-full bg-white text-gray-900 py-16 lg:py-24">
    <div class="container mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      <div class="flex flex-col justify-center space-y-6" data-aos="fade-up" data-aos-duration="1000">
        <h2 class="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
          TENTANG KAMI
        </h2>
        <p class="text-lg text-gray-700 leading-relaxed">
          <span class="font-bold">PT Glory Victory Anandita</span> adalah perusahaan jasa keuangan yang
          berfokus pada penyediaan solusi pembiayaan pensiun bagi para
          purnawirawan Aparatur Sipil Negara (ASN), Tentara Nasional Indonesia (TNI),
          dan Kepolisian Republik Indonesia (Polri). Didirikan pada tahun 2025,
          kami hadir untuk menjawab kebutuhan spesifik segmen pensiunan dengan
          pendekatan secara kekeluargaan, transparan, dan berbasis teknologi.
        </p>

        <!-- <h3 class="text-2xl lg:text-3xl font-bold text-gold-500 mt-8">
          Tentang Perusahaan Kami
        </h3> -->
        
        <p class="text-lg text-gray-700 leading-relaxed">
          Dengan semangat <span class="italic font-semibold">"Glory in Service, Victory in Trust"</span>,
          kami berkomitmen untuk menjadi mitra finansial terpercaya yang tidak
          hanya memberikan akses pendanaan, tetapi juga menghadirkan nilai
          tambah bagi kualitas hidup para pensiunan. Dukungan kami tidak
          sebatas pada pencairan dana, namun juga pada pelayanan penuh
          empati, proses yang sederhana, serta edukasi finansial berkelanjutan.
        </p>
      </div>

      <div class="flex justify-center items-center lg:justify-end mt-12 lg:mt-0" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
        <div class="w-full max-w-lg h-64 sm:h-80 md:h-96 lg:h-[500px] bg-gray-100 rounded-lg shadow-xl overflow-hidden">
          <img src="/public/images/about.jpg" alt="About Us - Team Collaboration"
            class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500 ease-in-out" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No specific reactive data needed for this static section
</script>

<style scoped>
/* Define a custom gold color */
.text-gold-500 {
  color: #D1B000;
  /* Consistent gold color */
}
</style>