<template>
    <div class="system">
        <div class="title">應用型系統開發</div>
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
</template>
<script setup lang="ts">
import { ref, computed } from 'vue';
interface Props {
    systemData?: any;
}
const props = withDefaults(defineProps<Props>(), {
    systemData: {
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
    .intro
        display: flex
        gap: 100px
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
@media (max-width: 720px)
    .system
        height: auto
        padding: 60px 10%
</style>