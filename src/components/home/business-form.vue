<template>
    <div class="bg-[#F3FFF7] 
    p-[60px_10%] md:p-[60px_100px_60px_170px]
     h-auto lg:min-h-screen">
        <div class="text-3xl font-bold mb-3">聯絡我們 CONTACT.</div>
        <div>對於網站設計或系統開發有相關問題可以透過以下表單填寫送出，我們將會回覆您的訊息或是直接與您聯繫。</div>
        <div class="">
            <q-input
                v-model="formData.companyName"
                label="公司名稱"
            />
            <div class="flex items-end flex-nowrap">
                <q-input
                    class="w-2/3 md:w-1/2"
                    v-model="formData.clientName"
                    label="聯絡人姓名"
                />
                <div class="w-1/3 mt-3 md:mt-0">
                    <q-radio
                        v-model="formData.clientGander"
                        val="Female"
                        label="女士"
                    />
                    <q-radio
                        v-model="formData.clientGander"
                        val="Male"
                        label="先生"
                    />
                </div>

            </div>
            <div class="md:flex justify-between">
                <q-input
                    type="email"
                    class="md:w-[49%]"
                    v-model="formData.clientName"
                    label="E-mail"
                />
                <q-input
                    class="md:w-[49%]"
                    v-model="formData.clientName"
                    label="聯絡電話"
                    type="tel"
                />
            </div>

            <div class="md:flex items-end">
                <div class="md:w-[49%]">
                    <div class="mt-6 text-lg text-[#616663]">案件類型</div>
                    <q-radio
                        v-model="formData.clientGander"
                        val="Female"
                        label="網站開發"
                    />
                    <q-radio
                        v-model="formData.clientGander"
                        val="Male"
                        label="客製化系統開發"
                    />
                    <q-radio
                        v-model="formData.clientGander"
                        val="Male"
                        label="其他"
                    />
                </div>
                <q-input
                    class="md:w-[49%]"
                    v-model="formData.clientName"
                    label="公司產業別"
                />

            </div>
            <q-input
                v-model="formData.companyName"
                label="公司網站"
            />
            <div class="md:flex justify-between">
                <q-input
                    class="md:w-[49%]"
                    v-model="formData.clientName"
                    label="預算範圍"
                />
                <q-input
                    class="md:w-[49%]"
                    v-model="formData.clientName"
                    label="參考範例"
                />
            </div>
            <q-input
                v-model="formData.companyName"
                label="需求簡述"
                type="textarea"
            />
            <div class="flex items-center">
                <q-toggle
                    class="mt-5"
                    v-model="formData.accept"
                    label="I accept the "
                />
                <div class="mt-5 ml-1">
                    <button></button>
                    <q-btn
                        padding="xs"
                        size="xs"
                        flat
                        color="primary"
                        label="license"
                    />
                    and
                    <q-btn
                        padding="xs"
                        size="xs"
                        flat
                        color="primary"
                        label="terms"
                    />
                </div>
            </div>
            <div class="mt-5">
                <q-btn
                    color="primary"
                    label="提交 SUBMIT"
                />
                <q-btn
                    class="ml-3"
                    flat
                    color="primary"
                    label="RESET"
                />
            </div>


        </div>
    </div>
</template>
<script setup lang="ts">
import { reactive } from 'vue';

const formData = reactive({
    accept: false,
    companyName: '',
    clientName: '',
    clientGander: 'Male'
})

</script>

<style scoped>
</style>