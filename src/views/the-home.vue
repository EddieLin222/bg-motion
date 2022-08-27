<template>
  <div class="home">
    <div class="header-space"></div>
    <Banner></Banner>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import Banner from '../components/banner-slider.vue'

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
.home
  .header-space
    height: 50px
</style>
