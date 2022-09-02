<template>
    <div
        :id="props.id"
        v-intersection="options"
        ref="thisComponent"
    >
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import { computed, reactive, ref, watch } from 'vue';
import { useDebounceFn, useElementBounding, useElementVisibility } from '@vueuse/core';
import { useRoute, useRouter } from 'vue-router';

interface Props {
    id: string;
}
const props = defineProps<Props>()


const router = useRouter()
const route = useRoute()
const thisComponent = ref<HTMLElement | null>(null)

const replaceRouter = useDebounceFn(() => {
    router.replace(`#${props.id}`)
}, 100)


const thresholds = []
for (let i = 0; i <= 1.0; i += 0.01) {
    thresholds.push(i)
}
const old_percent = ref(0)
const handleShowInView = (entry: any) => {
    const el = thisComponent.value;
    const new_percent = Number((entry.intersectionRatio * 100).toFixed(0))

    console.log(props.id, new_percent - old_percent.value);

    const isShowInView = entry.isIntersecting
    if (isShowInView && new_percent - old_percent.value > 0 && el) {
        //  el.scrollIntoView({ behavior: 'smooth'  })
        console.log(route.hash, 'to', props.id);
        if (route.hash !== `#${props.id}`) {
            router.replace(`#${props.id}`)
        } else {
            replaceRouter()

        }

    }
    if (old_percent.value !== new_percent) {
        old_percent.value = new_percent
    }
}
const options = reactive({
    handler: handleShowInView,
    cfg: {
        threshold: thresholds
    }
})








// const elementBounding = useElementBounding(thisComponent)

// const targetIsVisible = useElementVisibility(thisComponent)
// const elementIds = computed(()=>{
//     const el = thisComponent.value;
//     const result: any[] = []
//     if(el ){
//         el.childNodes.forEach((item:any)=>{if(item.id){result.push(item.id)}})
//     }
//     return result
// })
// watch(() => targetIsVisible.value, (_targetIsVisible) => {
//     console.log(targetIsVisible.value,);
//     // const el = thisComponent.value;
//     if (_targetIsVisible ) {
//         console.log();
//         router.replace(`#${props.id}`)
//         const x = setInterval(() => {
//             // el.scrollIntoView({ behavior: 'smooth' , })
//             // console.log(elementBounding.top.value);
//             router.replace(`#${props.id}`)

//             if (elementBounding.top.value <= 10) {
//                 clearInterval(x)
//             }
//         }, 1000)

//     }
// })
</script>

<style scoped>
</style>