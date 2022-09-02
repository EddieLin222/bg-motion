<template>
  <Header v-if="width >= 720"></Header>
  <MoblieHeader v-else></MoblieHeader>
  <router-view />
  <Footer></Footer>
</template>

<script setup lang="ts">
import Header from './components/header.vue'
import MoblieHeader from './components/mobile-header.vue'
import Footer from './components/footer.vue'
import { ref } from 'vue';
import { useWindowSize } from '@vueuse/core'
import { setCssVar } from 'quasar';
const { width } = useWindowSize()


// const store = useMainStore();

// document.title += ` v${import.meta.env.PACKAGE_VERSION}`
setCssVar('primary', '#283A2D')

</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@500;700;900&family=Poppins:wght@400;500;600;700;800&display=swap')
html, body, #app
  width: 100%
  padding: 0
  margin: 0
  font-family: 'Poppins', 'Noto Sans TC', sans-serif
  letter-spacing: 0px
#app
  display: flex
  flex-direction: column
</style>
