<template>
  <div class="header">
    <div class="brand">
      <QRouterLink class="img-box" to="/" @click="openMenu = false">
        <img src="/image/logo.svg" alt="">
        <div class="motion">MOTION</div>
      </QRouterLink>
    </div>
    <div class="toggle-btn" @click="openMenu = !openMenu" :class="{show: openMenu}">
      <div class="line top-line"></div>
      <div class="line center-line"></div>
      <div class="line bottom-line"></div>
    </div>
    <div class="nav" :class="{show: openMenu}">
      <div class="nav-menu" v-for="(item, index) in navItems" :key="index">
        <QRouterLink class="item" :to="item.link" @click="openMenu = false">
          <div class="en">{{ item.en }}</div>
          <div class="ch">{{ item.name }}</div>
        </QRouterLink>
      </div>
      <div class="s-block">
        <div class="social-block">
          <QRouterLink class="item" to="https://www.facebook.com/misseco.tw">
            <img src="/social/fb.svg">
          </QRouterLink>
          <QRouterLink class="item" to="https://www.instagram.com/misseco.tw/">
            <img src="/social/ig.svg">
          </QRouterLink>
          <QRouterLink class="item" to="https://lin.ee/35kz9K7">
            <img src="/social/line.svg">
          </QRouterLink>
        </div>
        <div class="mail">misseco.tw@gmail.com</div>
      </div>
    </div>
    <div class="social"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useWindowSize } from '@vueuse/core'
const openMenu = ref(false)
const navItems = [
  {
    name: '服務項目',
    en: 'Services',
    link: '/service'
  },
  {
    name: '方案介紹',
    en: 'Plan Introduction',
    link: '/plan'
  },
  {
    name: '關於我們',
    en: 'About Us',
    link: '/about'
  },
  {
    name: '報價咨詢',
    en: 'Quotation Inquiry',
    link: '/price'
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
  // background-color: #fff
  background-color: #283A2D
  display: flex
  flex-direction: column
  align-items: center
  justify-content: space-between
  position: fixed
  width: 100%
  z-index: 9999
  width: 90px
  height: 100vh
  // box-shadow: 0px 2px 6px 1px rgba(0,0,0,0.3)
  top: 0
  .brand
    display: flex
    flex: 1
    // border: solid 3px red
    .img-box
      padding: 10px 0px
      display: flex
      flex-direction: column
      align-items: center
      gap: 2px
      width: 60px
      padding: 20px 5px
      img
        width: 60px
      .motion
        font-size: 12px
        font-weight: 900
        color: #fff
  .toggle-btn
    height: 40px
    width: 40px
    border-radius: 8px
    justify-content: space-between
    align-items: center
    flex-direction: column
    position: relative
    border: solid 2px #fff
    .line
      border-top: solid 2px #fff
      width: 60%
      position: absolute
      left: 20%
      transform-origin: center
      transition-duration: 0.5s
      opacity: 1
  .toggle-btn.show
    .top-line
      top: 17px
      transform: rotate(45deg)
    .center-line
      top: 17px
      opacity: 0
    .bottom-line
      top: 17px
      transform: rotate(-45deg)
  .toggle-btn:not(.show)
    .top-line
      top: 10px
    .center-line
      top: 17px
    .bottom-line
      top: 24px

  .nav.show
    width: calc(100vw - 90px)
  .nav
    display: flex
    height: 100vh
    width: 0
    position: absolute
    background-color: #000
    left: 90px
    top: 0
    overflow: hidden
    transition-duration: .5s
    .nav-menu:first-child
      width: 25%
      overflow: hidden
      .item
        background-color: #FF9900
    .nav-menu:nth-child(2)
      width: 25%
      overflow: hidden
      .item
        background-color: #7C9483
    .nav-menu:nth-child(3)
      width: 25%
      overflow: hidden
      .item
        background-color: #D7471A
    .nav-menu:nth-child(4)
      width: 25%
      overflow: hidden
      .item
        background-color: #225e39
    .nav-menu
      width: 25%
      display: flex
      color: #000
      font-weight: 700
      justify-content: center
      align-items: center
      height: 100%
      .item
        flex: 1
        padding: 3px 18px
        font-size: 15px
        cursor: pointer
        color: #fff
        text-align: center
        white-space: nowrap
        height: 100%
        display: flex
        flex-direction: column
        justify-content: center
        gap: 20px
        .en
          font-size: 24px
        .ch
          font-size: 18px
          letter-spacing: 1px
    .s-block
      // display: flex
      flex-direction: column
      align-items: center
      margin-top: 50px
      display: none
      .mail
        font-size: 16px
        color: #778D7E
      .social-block
        display: flex
        justify-content: center
        margin-bottom: 10px
        .item
          border-radius: 30px
          width: 30px
          height: 30px
          margin: 0px 10px
  .social
    flex: 1
// @media (max-width: 992px)
//   .header
//     flex-wrap: wrap
//     justify-content: space-between
//     .brand
//       width: 150px
//     .toggle-btn
//       display: flex
//     .nav
//       border: solid 3px red
//       width: calc(100vw - 90px)
//       overflow: hidden
//       transition-duration: .5s
//       display: flex
//       justify-content: center
//       align-items: center
//       .s-block
//         display: flex
//       .nav-menu
//         flex-direction: column
//         .item
//           margin: 20px
//     .nav:not(.show)
//       height: 0
//     .social
//       display: none
</style>