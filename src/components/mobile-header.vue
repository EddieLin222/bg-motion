<template>
    <div class="header">
      <div class="brand">
        <QRouterLink class="img-box" to="/" @click="openMenu = false">
          <img src="/image/logo.svg" alt="">
        </QRouterLink>
      </div>
      <div class="toggle-btn" @click="openMenu = !openMenu" :class="{show: openMenu}">
        <div class="line top-line"></div>
        <div class="line center-line"></div>
        <div class="line bottom-line"></div>
      </div>
      <div class="nav" :class="{show: openMenu}">
        <div class="nav-menu">
          <QRouterLink class="item" v-for="(item, index) in navItems" :to="item.link" @click="openMenu = false">
            <div class="name">{{ item.name }}</div>
            <div class="en">{{ item.en }}</div>
            </QRouterLink>
        </div>
      </div>
    </div>
    <div class="header-space"></div>
  
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
const openMenu = ref(false)
const navItems = [
    {
        name: '服務項目',
        en: 'Services',
        link: '/'
    },
    {
        name: '方案介紹',
        en: 'Plan Introduction',
        link: '/'
    },
    {
        name: '關於我們',
        en: 'About Us',
        link: '/'
    },
    {
        name: '報價諮詢',
        en: 'Quotation Inquiry',
        link: '/'
    }
]
const social = [
    {
        name: 'facebook',
        url: '',
        link: ''
    },
    {
        name: 'instagram',
        url: '',
        link: ''
    },
    {
        name: 'twitter',
        url: '',
        link: ''
    },
]
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
.header
    background-color: #283A2D
    display: flex
    flex-wrap: wrap
    align-items: center
    justify-content: space-between
    position: fixed
    width: 100%
    z-index: 9999
    padding: 12px 15px
    box-shadow: 0px 2px 6px 1px rgba(0,0,0,0.3)
    top: 0
    .brand
        width: 50px
        display: flex
        .img-box
            width: 100%
            img
                width: 100%
    .toggle-btn
        height: 34px
        width: 28px
        border-radius: 3px
        justify-content: space-between
        align-items: center
        flex-direction: column
        padding: 7px 6px
        display: flex
        position: relative
        .line
            border-top: solid 3px #F3FFF7
            width: 100%
            position: absolute
            transform-origin: center
            transition-duration: .5s
            opacity: 1
    .toggle-btn.show
        .top-line
            top: 15px
            transform: rotate(45deg)
        .center-line
            opacity: 0
        .bottom-line
            top: 15px
            transform: rotate(-45deg)
    .toggle-btn:not(.show)
        .top-line
            top: 6px
        .center-line
            top: 15px
        .bottom-line
            top: 24px
    .nav
        display: flex
        flex-direction: column
        width: 100%
        overflow: hidden
        transition-duration: .5s
        justify-content: center
        align-items: center
        height: calc(100vh - 60px)
        .nav-menu
            display: flex
            flex-direction: column
            color: #000
            font-weight: 500
            justify-content: center
            align-items: center
            .item
                margin: 20px 
                padding: 3px 18px
                font-size: 16px
                color: #F3FFF7
                display: flex
                flex-direction: column
                align-items: center
                .name
                    font-size: 20px
    .nav:not(.show)
        height: 0
</style>