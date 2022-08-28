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
      <div class="nav-menu">
        <QRouterLink class="item" v-for="(item, index) in navItems" :to="item.link" @click="openMenu = false">{{ item.name }}</QRouterLink>
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
    link: '/service'
  },
  {
    name: '方案介紹',
    link: '/plan'
  },
  {
    name: '關於我們',
    link: '/about'
  },
  {
    name: '報價咨詢',
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
      padding: 5px 0px
      display: flex
      flex-direction: column
      align-items: center
      gap: 2px
      width: 70px
      padding: 15px 5px
      img
        width: 70px
      .motion
        font-size: 12px
        font-weight: 900
        color: #fff
  .toggle-btn
    height: 50px
    width: 50px
    border-radius: 8px
    justify-content: space-between
    align-items: center
    flex-direction: column
    position: relative
    border: solid 3px #fff
    .line
      border-top: solid 3px #fff
      width: 70%
      position: absolute
      left: 15%
      transform-origin: center
      transition-duration: 0.5s
      opacity: 1
  .toggle-btn.show
    .top-line
      top: 20px
      transform: rotate(45deg)
    .center-line
      top: 25px
      opacity: 0
    .bottom-line
      top: 20px
      transform: rotate(-45deg)
  .toggle-btn:not(.show)
    .top-line
      top: 11px
    .center-line
      top: 20px
    .bottom-line
      top: 29px

  .nav.show
    width: calc(100vw - 90px)
  .nav
    display: flex
    height: 100vh
    flex-direction: column
    width: 0
    position: absolute
    background-color: #000
    left: 90px
    top: 0
    overflow: hidden
    transition-duration: .5s
    .nav-menu
      display: flex
      color: #000
      font-weight: 700
      justify-content: center
      align-items: center
      .item
        margin: 0px 5px 
        padding: 3px 18px
        font-size: 15px
        cursor: pointer
        color: #fff
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