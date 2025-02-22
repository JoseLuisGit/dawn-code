<script setup lang="ts">
import { ref } from 'vue'

const date = ref(new Date())
const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

setInterval(() => {
    date.value = new Date()
}, 1000)

const formatTime = (time: number) => {
    return time < 10 ? `0${time}` : time
}

const isTodayWeekday = (weekday: string) => {
    return weekday.toLowerCase() === date.value.toLocaleString('en-US', { weekday: 'short' }).toLowerCase()
}
</script>

<template>
    <div class="bg-gradient-to-tl from-gray-950 to-gray-700 h-screen flex flex-col items-center justify-center w-full">
        <section
            class="border-8 border-gray-900 bg-black w-100 p-4 rounded-lg shadow-lg flex flex-col items-center justify-center">
            <div class="text-8xl font-digital text-red-600 pb-2 flex flex-row items-center justify-center">
                <div class="bg-red-950/35 p-1">
                    {{ formatTime(date.getHours()) }}
                </div>
                <p>:</p>
                <div class="bg-red-950/35 p-1">
                    {{ formatTime(date.getMinutes()) }}
                </div>
                <p>:</p>
                <div class="bg-red-950/35 p-1">
                    {{ formatTime(date.getSeconds()) }}
                </div>
            </div>
            <div class="text-xs text-white flex flex-row pb-2 font-semibold font-sans">
                <p class="p-0.5" v-for="day of days" :class="isTodayWeekday(day) ? 'text-red-600' : 'text-white'">
                    {{ day }}
                </p>
            </div>
            <div class="text-md text-white flex flex-row item-center font-sans">
                <div class="flex flex-row pr-4">
                    <p class="text-red-600 font-digital text-xl
                    p-0.5">{{ formatTime(date.getDay()) }}</p>
                    <p class="text-white
                    p-0.5">DATE</p>
                </div>
                <div class="flex flex-row pr-4">
                    <p class="text-red-600 font-digital text-xl
                    p-0.5">{{ date.getMonth() }}</p>
                    <p class="text-white
                    p-0.5">MON</p>
                </div>
                <div class="flex flex-row pr-4">
                    <p class="text-red-600 font-digital text-xl
                    p-0.5">{{ date.getFullYear() }}</p>
                    <p class="text-white
                    p-0.5">YEAR</p>
                </div>
                <div class="flex flex-row pr-4">
                    <p class="text-white
                    p-0.5">TEMP</p>
                    <p class="text-red-600 font-digital text-xl
                    p-0.5">28</p>
                    <p class="text-white">°C</p>
                </div>
            </div>

        </section>

    </div>
</template>