<template>
    <div class="web">
        <div class="title">網站行銷整合服務</div>
        <div class="desktop" v-if="width >= 1250">
            <img :src="props.webData.img" alt="">
            <div class="intro">
                <div class="text">
                    數位化的時代來臨，消費者的使用習慣從線下快速轉變到線上，在網路的世界裡要能出現在目標對象面前，並引導他們完成您要的轉換，背景模式從官方及電商網站出發，致力於協助您從官方網站設計內容/追蹤及分析數據/廣告投放/最友善的後台管理系統，給您全方位的數位行銷服務，讓您無往不利。
                </div>
                <div class="items-block">
                    <div class="items-title">
                        網站相關服務內容
                    </div>
                    <div class="items">
                        <div class="item" v-for="(item, index) in props.webData.items" :key="index">
                            <p>{{item.name}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mobile" v-else>
            <div class="item" v-for="(item, index) in props.webData.items" :key="index">
                <div class="name">{{item.name}}</div>
                <img :src="item.img" alt="">
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue';
import { useWindowSize } from '@vueuse/core';
const { width } = useWindowSize();

interface Props {
    webData?: any;
}
const props = withDefaults(defineProps<Props>(), {
    webData: {
        img: '',
        items: [
            {
                name: '',
                img: ''
            }
        ]
    }
});
// const emit = defineEmits<{
//   (e: 'update:modelValue', value: string): void;
// }>();
</script>

<style scoped lang="sass">
.web
    display: flex
    flex-direction: column
    height: 100vh
    padding: 60px 100px 60px 170px
    justify-content: center
    gap: 50px
    background-color: #f4f4f4
    .title
        font-size: 28px
        font-weight: 700
        margin-bottom: 20px
    .desktop
        .intro
            display: flex
            gap: 80px
            .text
                flex: 1
                font-size: 16px
                line-height: 30px
            .items-block
                flex: 1
                .items-title
                    margin-bottom: 20px
                    font-size: 18px
                    font-weight: 700
                .items
                    display: flex
                    flex-wrap: wrap
                    gap: 10px 5px
                    flex: 1
                    .item
                        width: 32%
                        display: flex
                        p
                            font-size: 14px
                            font-weight: 500
@media (max-width: 1250px)
    .web
        height: auto
        .title
            margin-bottom: 0px
        .mobile
            display: flex
            flex-wrap: wrap
            gap: 80px 40px

            .item
                width: calc(33% - 30px)
                background-color: #fff
                padding: 30px
                display: flex
                flex-direction: column
                align-items: center
                font-weight: 700
                gap: 30px
                border-radius: 20px 20px 0px 20px
                .name
                    font-size: 20px

@media (max-width: 980px)
    .web
        .mobile
            gap: 30px
            .item
                width: calc(50% - 15px)

@media (max-width: 720px)
    .web
        height: auto
        padding: 60px 10%

@media (max-width: 480px)
    .web
        .mobile
            .item
                width: 100%
</style>