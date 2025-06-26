// plugins/fontawesome.js
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
    faFacebook,
    faInstagram,
    faLinkedin,
    faTiktok,
    faWhatsapp
} from '@fortawesome/free-brands-svg-icons'

import {
    faPhone,
    faMapMarkerAlt,
    faEnvelope
} from '@fortawesome/free-solid-svg-icons'

config.autoAddCss = false

library.add(
    faFacebook,
    faInstagram,
    faLinkedin,
    faTiktok,
    faWhatsapp,
    faPhone,
    faMapMarkerAlt,
    faEnvelope
)

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})