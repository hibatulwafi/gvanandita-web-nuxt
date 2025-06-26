<template>
  <section class="bg-gray-100 py-16 lg:py-24 text-gray-900">
    <div class="container mx-auto px-6 lg:px-8">
      <h2 class="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-10 md:mb-12" data-aos="fade-up"
        data-aos-duration="800">
        Kunjungi Kantor Kami
      </h2>

      <div class="flex flex-col gap-10 lg:gap-12 items-center">
        <div class="flex flex-col justify-center text-left lg:text-left w-full max-w-fit mx-auto p-4 lg:p-0">
          <p class="text-base md:text-lg text-gray-700 leading-relaxed mb-6" data-aos="fade-up" data-aos-delay="100"
            data-aos-duration="900">
            Kami siap menyambut Anda di kantor pusat KSP Glo Anandita. Silakan kunjungi kami atau hubungi melalui
            informasi di bawah:
          </p>

          <div class="mb-4 flex items-start justify-start" data-aos="fade-up" data-aos-delay="200"
            data-aos-duration="900">
            <span class="text-gold-500 mr-3 mt-1 flex-shrink-0">
              <font-awesome-icon :icon="['fas', 'map-marker-alt']" class="w-5 h-5" />
            </span>
            <address class="text-base md:text-lg text-gray-700 not-italic">
              <span class="font-semibold block mb-1">Kantor Pusat:</span>
              Jl. Wolter Monginsidi No.107A, RT 006,<br>
              RW 006, Rawa Barat, Kebayoran Baru,<br>
              Jakarta Selatan, DKI Jakarta 12170
            </address>
          </div>

          <div class="mb-4 flex items-center justify-start" data-aos="fade-up" data-aos-delay="350"
            data-aos-duration="900">
            <span class="text-gold-500 mr-3 flex-shrink-0">
              <font-awesome-icon :icon="['fas', 'phone']" class="w-5 h-5" />
            </span>
            <p class="text-base md:text-lg text-gray-700">
              <span class="font-semibold">Telepon:</span>
              <a href="https://wa.me/6282311001068" target="_blank" class="text-gold-500 hover:underline"> +62 823 1100
                1068 </a>
            </p>
          </div>

          <div class="mb-0 flex items-center justify-start" data-aos="fade-up" data-aos-delay="500"
            data-aos-duration="900">
            <span class="text-gold-500 mr-3 flex-shrink-0">
              <font-awesome-icon :icon="['fas', 'envelope']" class="w-5 h-5" />
            </span>
            <p class="text-base md:text-lg text-gray-700">
              <span class="font-semibold">Email:</span>
              <a href="mailto:info@gvanandita.com" class="text-gold-500 hover:underline"> info@gvanandita.com</a>
            </p>
          </div>
        </div>

        <div
          class="w-full max-w-5xl mx-auto h-80 md:h-96 lg:h-[400px] overflow-hidden rounded-lg shadow-xl border-2 border-gold-500"
          data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.195311029272!2d106.80415397441865!3d-6.237000861118116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f12d2b512e9b%3A0x1d50b4a7e9f1a070!2sJl.%20Wolter%20Monginsidi%20No.107A%2C%20RT.6%2FRW.6%2C%20Rawa%20Barat%2C%20Kby.%20Baru%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2012170!5e0!3m2!1sid!2sid!4v1719232800000!5m2!1sid!2sid"
            width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade" class="border-0">
          </iframe>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Script setup section remains empty as no specific logic is needed here
</script>

<style scoped>
.text-gold-500 {
  color: #D1B000;
}

.border-gold-500 {
  border-color: #D1B000;
}
</style>