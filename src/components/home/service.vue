<template>
    <div class="service">
        <div class="title">服務項目 Service.</div>
        <div class="container">
            <div class="left">
                <Transition name="service-img">
                    <img :src="filterService[0].img" alt="">
                </Transition>
            </div>
            <div class="right">
                <div class="tags">
                    <div class="tag" v-for="(tag, index) in props.serviceData.tags" :key="index" @click="toggleTag(tag.value)" :class="{active: selectTag === tag.value}">
                        {{tag.name}}
                    </div>
                </div>
                <div class="service-container">
                    <Transition name="service">
                        <div class="service-data">
                            <div class="service-title">{{filterService[0].title}}</div>
                            <div class="content" v-html="filterService[0].content"></div>
                            <div class="price">{{filterService[0].price}}</div>
                        </div>
                    </Transition>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue';
const selectTag = ref(1)
const filterService = computed(()=>{
    const result = props.serviceData.posts.filter((e: { tag: number; })=>e.tag === selectTag.value)
    return result
})
const toggleTag = (value: any) => {
    selectTag.value = value
}
interface Props {
    serviceData?: any;
}
const props = withDefaults(defineProps<Props>(), {
    serviceData: {
        tags: [
            {
                name: '',
                value: 1
            },
        ],
        posts: [
            {
                title: '',
                subtitle: '',
                content: '',
                img: '',
                price: '',
                tag: 1
            }
        ]
    }
});
// const emit = defineEmits<{
//   (e: 'update:modelValue', value: string): void;
// }>();
</script>

<style scoped lang="sass">
// .posts-enter-active, .posts-leave-active
//   transition: all .5s ease
// .posts-enter-from, .posts-leave-to
//   opacity: 0



.service-enter-active, .service-leave-active, .service-img-enter-active, .service-img-leave-active
  transition: opacity 0.5s ease

.service-enter-from, .service-leave-to, .service-img-enter-from, .service-img-leave-to
  opacity: 0

.service
    display: flex
    flex-direction: column
    align-items: flex-start
    justify-content: center
    padding: 60px 100px 60px 170px
    // padding: 50px 12%
    background-color: #F3FFF7
    height: 100vh
    .title
        font-size: 28px
        font-weight: 700
        margin-bottom: 30px
    .container
        display: flex
        align-items: flex-start
        gap: 70px
        height: calc(100% - 180px)
        .left
            flex: 1
            height: 100%
            img
                height: 100%
        .right
            display: flex
            flex-direction: column
            flex: 1
            .tags
                margin-top: 20px
                display: flex
                border-bottom: solid 2px #415B48
                gap: 10px
                flex-wrap: wrap
                margin-bottom: 20px
                .tag
                    transition-duration: .5s
                    cursor: pointer
                    padding: 7px 15px 4px 15px
                    font-size: 16px
                    white-space: nowrap
                    border-radius: 5px 5px 0px 0px
                    font-weight: 700
                    border: solid 2px #415B48
                    border-bottom: none
                    &:hover
                        background-color: #415B48
                        color: #fff
            .service-container
                display: flex
                flex-wrap: wrap
                margin-top: 20px
                gap: 40px
                .service-data
                    display: flex
                    flex-direction: column
                    justify-content: space-between
                    width: 100%
                    gap: 20px
                    .service-title
                        font-size: 24px
                        font-weight: 700
                    .content
                        font-size: 16px
                        font-weight: 500
                        letter-spacing: 1px
                        line-height: 30px
                    .price
                        font-size: 24px
                        font-weight: 700
                        color: #415B48
.active
    background-color: #415B48
    color: #fff
</style>