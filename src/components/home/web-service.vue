<template>
    <div class="web">
        <img :src="props.webData.img" alt="">
        <div class="intro">
            <div class="text">
                數位化的時代來臨，消費者的使用習慣從線下快速轉變到線上，在網路的世界裡要能出現在目標對象面前，並引導他們完成您要的轉換，背景模式從官方及電商網站出發，致力於協助您從官方網站設計內容/追蹤及分析數據/廣告投放/最友善的後台管理系統，給您全方位的數位行銷服務，讓您無往不利。
            </div>
            <div class="items">
                <div class="item" v-for="(item, index) in props.webData.items">{{item.name}}</div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue';
interface Props {
    webData?: any;
}
const props = withDefaults(defineProps<Props>(), {
    webData: {
        img: '',
        items: [
            {
                name: 'test'
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
    padding: 30px 15%
    justify-content: center
    gap: 50px
    .intro
        display: flex
        gap: 30px
        .text
            flex: 1
            font-size: 16px
            line-height: 30px
        .items
            flex: 1
            border: solid 3px red
</style>