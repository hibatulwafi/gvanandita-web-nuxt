// plugins/fontawesome.js
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// Import ikon merek (brands)
import {
    faFacebook,
    faInstagram,
    faLinkedin,
    faTiktok,
    faWhatsapp
} from '@fortawesome/free-brands-svg-icons'
// Import ikon solid (untuk kontak)
import {
    faPhone,
    faMapMarkerAlt, // Untuk ikon lokasi
    faEnvelope // Untuk ikon email
} from '@fortawesome/free-solid-svg-icons'

config.autoAddCss = false

// Tambahkan semua ikon yang Anda butuhkan ke library
library.add(
    faFacebook,
    faInstagram,
    faLinkedin,
    faTiktok,
    faPhone,
    faMapMarkerAlt, // Tambahkan ini
    faEnvelope // Tambahkan ini
)

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})