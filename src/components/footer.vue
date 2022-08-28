<template>
    <div class="footer">Footer</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

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
.footer
    width: 100%
    display: flex
    background-color: #000
</style>