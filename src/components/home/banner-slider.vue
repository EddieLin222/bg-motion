<template>
  <div class="banner">
    <video src="/image/home/banner/bg.mp4" autoplay muted loop playsinline></video>
    <div class="slider-block">
        <swiper
            :modules="[Navigation, Pagination, EffectFade]"
            :pagination="{clickable: true}"
            :navigation="{ nextEl: '.next-btn', prevEl: '.prev-btn' }"
            :slides-per-view="1"
            :space-between="30"
            :scrollbar="{ draggable: true }"
            :effect="'fade'"
            :fadeEffect="{crossFade:true}"
        >
            <swiper-slide
                v-for="(list, index) in dataList"
                :key="index"
            >
                <div class="left">
                    <div class="brand-name">
                        <div class="text">BackGround</div>
                        <div class="text">Motion</div>
                    </div>
                    <div class="title">
                        {{list.title}}
                    </div>
                    <div class="content">
                        {{list.content}}
                    </div>
                </div>
                <div class="right">
                    <!-- <img :src="list.img" alt=""> -->
                </div>
            </swiper-slide>
        </swiper>
    </div>
    <div class="navigation-block">
        <div class="inner">
            <div class="prev-btn">
                <q-icon name="arrow_left" />
            </div>
            <div class="next-btn">
                <q-icon name="arrow_right" />
            </div>
        </div>
        <div class="company-info">
        </div>
    </div>
</div>
</template>

<script setup lang="ts">
import { Navigation, Pagination, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { ref, onMounted } from 'vue';

const dataList = ref([
    {
        title: '數位行銷，企業轉型',
        content: '網站製作著重於數據追蹤與分析，得以輔助管理者商業洞察與決策，成為企業強大的後盾。',
        img: '/image/home/banner/banner1.svg',
        link: ''
    },
    {
        title: '依你所需，為你客製',
        content: '依照需求開發設計，能夠提升企業效率、降低繁瑣、輔助管理的資訊化系統。',
        img: '/image/home/banner/banner2.svg',
        link: ''
    },
    {
        title: '企業形象，視覺驚艷',
        content: '展現企業品味與價值。以品牌策略提供完整的行銷與設計服務。',
        img: '/image/home/banner/banner3.svg',
        link: ''
    }
])
// interface Props {
//   label?: string;
// }
// const props = withDefaults(defineProps<Props>(), {
//   label: '',
// });
// const emit = defineEmits<{
//   (e: 'update:modelValue', value: string): void;
// }>();
</script>

<style scoped lang="sass">
.banner
    height: 100vh
    background-color: #f4f4f4
    position: relative
    overflow: hidden
    video
        position: absolute
        object-fit: cover
        min-height: 100%
        min-width: 100%
    .slider-block
        display: flex
        align-items: center
        height: calc(100% - 100px)
        // border: solid 3px red
        .swiper
            --swiper-navigation-size: 30px
            margin-top: 50px
            .swiper-slide-active
                opacity: 1 !important
            .swiper-slide
                display: flex
                justify-content: center
                align-items: center
                padding: 0px 0px 0px 170px
                gap: 60px
                .left
                    flex: 1
                    color: #F3FFF7
                    // border: solid 3px red
                    .brand-name
                        display: flex
                        flex-direction: column
                        align-items: flex-start
                        font-size: 68px
                        font-weight: 900
                        line-height: 60px
                        gap: 20px
                        margin-bottom: 60px
                        .text
                            display: inline-block
                            border-bottom: solid 2px #F3FFF7
                    .title
                        font-size: 32px
                        font-weight: 700
                    .content
                        font-size: 18px
                        font-weight: 700
                        margin: 30px 0px
                        letter-spacing: 1px
                .right
                    flex: 1
                    // border: solid 3px red
                    // img
                    //     max-height: 50vh
            :deep() .swiper-pagination
                left: auto
                right: 0
                bottom: 50%
                width: auto
                transform: translateY(50%) rotate(90deg)
            :deep() .swiper-pagination-bullet
                // background-color: #415B48
                background-color: #F3FFF7
                transition-duration: .5s
                opacity: 1
                width: 15px
                height: 15px
                margin: 0 15px
                margin-right: 0px
            :deep() .swiper-pagination-bullet-active
                box-shadow: 0px 0px 0px 5px rgba(243, 255, 247, .5)
                // box-shadow: 0px 0px 0px 5px rgba(255, 255, 255, .4)
    .navigation-block
        display: flex
        justify-content: flex-start
        padding: 0px 0px 0px 170px
        height: 100px
        position: relative
        .inner
            display: inline-flex
            align-items: center
            gap: 20px
            height: 50px
            .prev-btn, .next-btn
                background-color: #415B48
                width: 40px
                height: 40px
                display: flex
                justify-content: center
                align-items: center
                border-radius: 5px
                cursor: pointer
                .q-icon
                    font-weight: 900
                    font-size: 24px
                    color: #F3FFF7
@media (max-width: 720px)
    .banner
        .slider-block
            .swiper
                .swiper-slide
                    display: flex
                    justify-content: center
                    align-items: center
                    padding: 0px 10%
        .navigation-block
            padding: 0px 10%

@media (max-width: 620px)
    .banner
        .slider-block
            .swiper
                .swiper-slide
                    .left
                        .brand-name
                            font-size: 50px
                            gap: 10px

@media (max-width: 480px)
    .banner
        .slider-block
            .swiper
                .swiper-slide
                    .left
                        .brand-name
                            font-size: 40px
                            gap: 10px
                            line-height: 45px
                        .title
                            font-size: 24px
                        .content
                            font-size: 16px
</style>