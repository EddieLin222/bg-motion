<template>
  <div class="home">
    <Banner></Banner>
    <Service :serviceData="serviceData"></Service>
  </div>
</template>

<script setup lang="ts">
import Banner from '../components/home/banner-slider.vue'
import Service from '../components/home/service.vue'
import { ref } from 'vue';

const serviceData = {
  tags: [
    {
      name: 'Cool Puzzle',
      value: 1
    },
    {
      name: '客製化網站',
      value: 2
    },
    {
      name: '客製化系統',
      value: 3
    },
  ],
  posts: [
    {
      title: 'Cool Puzzle',
      subtitle: '模板組合',
      content: `提供最佳的模組系統，打造專屬於你的官方網站
                <br>網站seo優化，提供最友善於搜尋引擎的系統
                <br>提供多種版型組合排列，不怕跟別人長得一樣
                <br>友善內容管理後台，不需工程人員即可即時更新修改
                <br><br>贈送  :  Sitemap提交 / Google Analytics / Google Tag Manager / Facebook Pixel 追蹤碼埋設`,
      img: '/image/home/service/service1.svg',
      price: '價位 : 10000元 / 頁',
      tag: 1
    },
    {
      title: '客製化網站',
      subtitle: '',
      content: `專業客製化網站製作，完美打造您理想中的官方網站
                <br>專屬專案窗口，確認所有你在乎的細節
                <br>專業網站規劃建議，使用者體驗優化
                <br>網站版面完美呈現，打造動態效果
                <br>客製化功能製作，滿足您的所有需求`,
      img: '/image/home/service/service2.svg',
      price: '價位 : 60000元以上',
      tag: 2
    },
    {
      title: '客製化系統',
      subtitle: '',
      content: `專屬專案窗口，確認所有你在乎的細節
                <br>依照您的使用需求建置
                <br>按照您的業務及管理邏輯開發，節省人力預算，實現smart work
                <br>產出您需要的報表，讓您輕鬆管理
                <br>串接相關系統API，彙整您需要的功能與資料
                <br>解決您的痛點，完美您的流程`,
      img: '/image/home/service/service3.svg',
      price: '價位 : 依功能報價',
      tag: 3
    }
  ]
}

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
