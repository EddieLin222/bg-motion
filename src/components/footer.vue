<template>
    <div class="footer">
        <div class="top">
            <div class="logo">
                <img src="/image/logo.svg">
                <div class="word">
                    <div class="ch">背景模式有限公司</div>
                    <div class="en">MOTION</div>
                </div>
            </div>
        </div>
        <div class="center">
            <div class="time">營業時間&ensp;|&ensp;週一至週五 09:00 - 18:00</div>
            <div class="address">電話&ensp;|&ensp;04-24621082</div>
            <div class="address">地址&ensp;|&ensp;台中市西屯區西屯路三段148-19巷18號</div>
        </div>
        <div class="bottom">
            <div class="left">
                <div class="copyright">©&ensp;2022&ensp;BG MOTION&ensp;all rights reserved.</div>
            </div>
            <div class="right">
                Website Design&emsp;|&emsp;System Development&emsp;|&emsp;Internet Marketing
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Props {
    label?: string;
}
const props = withDefaults(defineProps<Props>(), {
    label: '',
});

const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void;
}>();
</script>

<style scoped lang="sass">
.footer
    width: 100%
    display: flex
    flex-direction: column
    background-color: #252926
    padding: 40px 100px 40px 170px
    color: #fff
    font-weight: 500
    gap: 30px
    .top
        font-weight: 900
        width: 100%
        .logo
            display: flex
            img
                width: 60px
                margin-right: 5px
    .bottom
        display: flex
        justify-content: space-between
        align-items: flex-end
</style>