<template>
    <div class="system">
        <div class="title">應用型系統開發</div>
        <div class="desktop" v-if="width >= 1250">
            <img :src="props.systemData.img" alt="">
            <div class="intro">
                <div class="text">
                    公司在沒有資料管理系統的情況容易造成資料不同步、資料遺失等問題，我們可以協助客製公司內部資料管理系統，依照公司內部工作流程進行操作介面設計，透過資料庫建檔管理，同時可以提供整合週邊硬體或 IoT 設備的服務，將數據進行資料分系及報表輸出，提升公司內部管理品質及工作效率。
                </div>
                <div class="items-block">
                    <div class="items-title">
                        系統相關服務內容
                    </div>
                    <div class="items">
                        <div class="item" v-for="(item, index) in props.systemData.items">
                            <p>{{item.name}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mobile" v-else>
            <div class="item" v-for="(item, index) in props.systemData.items" :key="index">
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
    systemData?: any;
}
const props = withDefaults(defineProps<Props>(), {
    systemData: {
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
.system
    display: flex
    flex-direction: column
    height: 100vh
    padding: 60px 100px 60px 170px
    justify-content: center
    gap: 50px
    background-color: #fff
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
    .system
        height: auto
        .title
            margin-bottom: 0px
        .mobile
            display: flex
            flex-wrap: wrap
            gap: 80px 40px

            .item
                width: calc(33% - 30px)
                background-color: #f4f4f4
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
    .system
        .mobile
            gap: 30px
            .item
                width: calc(50% - 15px)
@media (max-width: 720px)
    .system
        height: auto
        padding: 60px 10%
@media (max-width: 480px)
    .system
        .mobile
            .item
                width: 100%
</style>