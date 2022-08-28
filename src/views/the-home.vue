<template>
  <div class="home">
    <Banner></Banner>
    <Service :serviceData="serviceData"></Service>
    <Web :webData="webData"></Web>
    <System :systemData="systemData"></System>
  </div>
</template>

<script setup lang="ts">
import Banner from '../components/home/banner-slider.vue'
import Service from '../components/home/service.vue'
import Web from '../components/home/web-service.vue'
import System from '../components/home/system-service.vue'
import { ref } from 'vue';

const serviceData = {
  tags: [
    {
      name: '模組化網站',
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
      title: '模組化網站',
      content: `提供最佳的模組系統，打造專屬於你的官方網站
                <br>網站SEO優化，提供最友善於搜尋引擎的系統
                <br>提供多種版型組合排列，不怕跟別人長得一樣
                <br>友善內容管理後台，不需工程人員即可即時更新修改
                <br><br>贈送  :  Sitemap提交 / Google Analytics / Google Tag Manager / Facebook Pixel 追蹤碼埋設`,
      img: '/image/home/service/service1.svg',
      price: '價位 : 10,000元 / 頁',
      tag: 1
    },
    {
      title: '客製化網站',
      content: `專業客製化網站製作，完美打造您理想中的官方網站
                <br>專屬專案窗口，確認所有你在乎的細節
                <br>專業網站規劃建議，使用者體驗優化
                <br>網站版面完美呈現，打造動態效果
                <br>客製化功能製作，滿足您的所有需求
                <br><br>贈送 : Sitemap提交 / Google Analytics / Google Tag Manager / Facebook Pixel 追蹤碼埋設`,
      img: '/image/home/service/service2.svg',
      price: '價位 : 60,000元起',
      tag: 2
    },
    {
      title: '客製化系統',
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

const webData = {
  img: '/image/home/web/web-service.svg',
  items: [
    {
      name: '網站開發'
    },
    {
      name: '內容管理後台'
    },
    {
      name: '廣告代操'
    },
    {
      name: 'GA安裝設定'
    },
    {
      name: 'SSL安全憑證安裝'
    },
    {
      name: '主機代管 (第一年免費)'
    },
    {
      name: 'FB像素追蹤'
    }
  ]
}

const systemData = {
  img: '/image/home/system/system-service.svg',
  items: [
    {
      name: 'IoT 系統整合'
    },
    {
      name: '資料庫建檔'
    },
    {
      name: '資料分析'
    },
    {
      name: '客製化軟體工具'
    },
    {
      name: '周邊硬體整合'
    },
    {
      name: '客製化功能組合鍵'
    },
    {
      name: '報表輸出'
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
