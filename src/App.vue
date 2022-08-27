<template>
  <Header></Header>
  <router-view />
</template>

<script setup lang="ts">
import Header from './components/header.vue'
import { ref } from 'vue';
import { useMainStore } from './stores/main.store';


// const store = useMainStore();

// document.title += ` v${import.meta.env.PACKAGE_VERSION}`
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@500;700;900&display=swap')
html, body, #app
  width: 100%
  padding: 0
  margin: 0
  font-family: 'Noto Sans TC', sans-serif

#app
  display: flex
  flex-direction: column
</style>
