<template>
  <div class="overflow-x-hidden">
    <AppHeader />
    <HeroSection id="home" />
    <AboutUsSection id="about" />
    <VisionMissionSection id="vision-mission" />
    <OurProjectSection id="project" />
    <PortfolioSection id="portfolio" />
    <MapSection id="contact" />
    <AppFooter />
  </div>

  <a href="https://wa.me/6282311001068" target="_blank" rel="noopener noreferrer" class="fixed bottom-6 right-6 lg:bottom-8 lg:right-8
            bg-green-500 text-white p-3 rounded-full shadow-lg
            hover:bg-green-600 transition-all duration-300 ease-in-out
            z-50 flex items-center justify-center
            transform hover:scale-110">
    <font-awesome-icon :icon="['fab', 'whatsapp']" class="w-8 h-8" size="xl"/>

    <!-- <font-awesome-icon :icon="['fas', 'whatsapp']" class="w-8 h-8 lg:w-10 lg:h-10" /> -->
    <span class="sr-only">Hubungi kami via WhatsApp</span>
  </a>

</template>

<script setup>
import AppHeader from '~/components/AppHeader.vue';
import HeroSection from '~/components/HeroSection.vue';
import AboutUsSection from '~/components/AboutUsSection.vue';
import VisionMissionSection from '~/components/VisionMissionSection.vue';
import OurProjectSection from '~/components/OurProjectSection.vue';
import PortfolioSection from '~/components/PortfolioSection.vue';
import MapSection from '~/components/MapSection.vue';
import AppFooter from '~/components/AppFooter.vue';
</script>