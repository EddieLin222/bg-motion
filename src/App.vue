<template>
  <Header></Header>
  <router-view />
  <Footer></Footer>
</template>

<script setup lang="ts">
import Header from './components/header.vue'
import Footer from './components/footer.vue'
import { ref } from 'vue';
import { useMainStore } from './stores/main.store';


// const store = useMainStore();

// document.title += ` v${import.meta.env.PACKAGE_VERSION}`
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
