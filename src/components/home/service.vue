<template>
    <div class="posts">
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
                        <div class="title">{{filterService[0].title}}</div>
                        <div class="content" v-html="filterService[0].content"></div>
                        <div class="price">{{filterService[0].price}}</div>
                    </div>
                </Transition>
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

.posts
    display: flex
    align-items: center
    padding: 50px 10%
    background-color: #F3FFF7
    height: 100vh
    .left
        flex: 1
    .right
        flex: 1
        .tags
            margin-top: 20px
            display: flex
            border-bottom: solid 2px #000
            gap: 10px
            flex-wrap: wrap
            .tag
                transition-duration: .5s
                cursor: pointer
                padding: 5px 10px
                font-size: 16px
                white-space: nowrap
                &:hover
                    background-color: #000
                    color: #C8EEC8
        .service-container
            display: flex
            flex-wrap: wrap
            margin-top: 20px
            gap: 40px
            .post
                width: calc(50% - 20px)
                display: flex
                gap: 20px
                .right
                    display: flex
                    flex-direction: column
                    justify-content: space-between
                    gap: 10px
                    width: calc(65% - 20px)
                    .title
                        font-size: 18px
                        font-weight: 700
                    .content
                        display: -webkit-box
                        -webkit-box-orient: vertical
                        -webkit-line-clamp: 3
                        overflow: hidden
                    .bottom
                        display: flex
                        justify-content: space-between
                        .more
                            color: #78A780
                            font-size: 16px
.active
    // background-color: #C8EEC8
    background-color: #000
    color: #C8EEC8
</style>