import { defineStore } from 'pinia'
import { TdSwiperProps } from "../../node_modules/tdesign-vue-next/es/swiper/type";

export const indexStore = defineStore('index', {
    state: () => (<TdSwiperProps>{
        autoplay: false,
    }),
    actions: {
        setAuto() {
            this.autoplay = !this.autoplay
        }
    },
})
