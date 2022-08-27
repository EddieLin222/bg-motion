<template>
  <div class="banner">
    <div class="slider-block">
        <swiper
            :modules="[Navigation, Pagination]"
            :pagination="{clickable: true}"
            :navigation="{ nextEl: '.next-btn', prevEl: '.prev-btn' }"
            :slides-per-view="1"
            :space-between="30"
            :scrollbar="{ draggable: true }"
        >
            <swiper-slide
                v-for="(list, index) in dataList"
                :key="index"
            >
                <div class="left">
                    <div class="title">
                        {{list.title}}
                    </div>
                    <div class="content">
                        {{list.content}}
                    </div>
                    <div class="btn">Button</div>
                </div>
                <div class="right">
                    <img src="/image/home/banner/banner1.svg" alt="">
                </div>
            </swiper-slide>
        </swiper>
    </div>
     <div class="navigation-block">
        <div class="inner">
            <div class="prev-btn">
                <q-icon name="chevron_left" />
            </div>
            <div class="next-btn">
                <q-icon name="navigate_next" />
            </div>
        </div>
    </div>
</div>
</template>

<script setup lang="ts">
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { ref, onMounted } from 'vue';

const dataList = ref([
    {
        title: '數位行銷，企業轉型',
        content: '網站製作著重於數據追蹤與分析，得以輔助管理者商業洞察與決策，成為企業強大的後盾。',
        link: ''
    },
    {
        title: '依你所需，為你客製',
        content: '依照需求開發設計，能夠提升企業效率、降低繁瑣、輔助管理的資訊化系統。',
        link: ''
    },
    {
        title: '企業形象，視覺驚艷',
        content: '展現企業品味與價值。以品牌策略提供完整的行銷與設計服務。',
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
    height: calc(100vh - 50px)
    background-color: #F4F4F4
    position: relative
    .slider-block
        display: flex
        align-items: center
        height: 100%
        .swiper
            --swiper-navigation-size: 30px
            .swiper-slide
                display: flex
                justify-content: center
                align-items: center
                padding: 0px 120px
                gap: 50px
                .left
                    flex: 1
                    .title
                        font-size: 32px
                        font-weight: 900
                    .content
                        font-size: 18px
                        font-weight: 900
                        margin: 30px 0px
                        letter-spacing: 1px
                    .btn
                        font-size: 18px
                        background-color: #415B48
                        display: inline-block
                        padding: 3px 15px
                        color: #fff
                        font-weight: 900
                        border-radius: 5px
                .right
                    flex: 1
            :deep() .swiper-pagination
                left: auto
                right: 0
                bottom: 50%
                width: auto
                transform: translateY(50%) rotate(90deg)
            :deep() .swiper-pagination-bullet
                background-color: #415B48
                transition-duration: .5s
                opacity: 1
                width: 15px
                height: 15px
                margin: 0 15px
                margin-right: 0px
            :deep() .swiper-pagination-bullet-active
                box-shadow: 0px 0px 0px 5px rgba(65, 91, 72, .5)
    .navigation-block
        padding: 0px 120px
        position: absolute
        bottom: 70px
        left: 0
        z-index: 9998
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
                    color: #fff
</style>