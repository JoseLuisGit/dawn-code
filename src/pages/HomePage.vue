<script setup lang="ts">
import Button from '../components/common/Button.vue'
</script>
<template>
    <div class="flex flex-col items-center justify-center w-full h-dvh">
        <h1 class="m-10 text-7xl font-mono font-bold text-amber-950">DAWN CODE</h1>
        <div
            class="container bg-clip-border bg-gradient-to-tl from-orange-950 to-orange-400 pl-4 pr-4 pb-2 pt-2 flex flex-col items-center justify-center">
            <Button title="Todo List" />
        </div>
    </div>
</template>