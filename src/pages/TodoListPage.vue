<script setup lang="ts">
import { icon } from '@fortawesome/fontawesome-svg-core';

</script>

<template>
    <div
        class="bg-gradient-to-tl from-green-950 to-green-400 h-screen flex flex-col items-center justify-center w-full">
        <section class="container bg-white h-1/2 max-w-lg">
            <h1 class="text-3xl text-gray-800 font-bold text-center pt-6">TODOLIST</h1>
            <div class="flex items-center justify-center pr-3 pl-3">
                <input type="text" placeholder="Add a task"
                    class="w-screen m-0.5 py-2 px-4 rounded border border-blue-400 focus:outline-none" />
                <button
                    class="bg-blue-400 hover:bg-blue-500 text-white font-bold m-0.5 py-2 px-4 rounded cursor-pointer">+</button>
            </div>
            <div class="w-full pr-2 pl-2 mt-1">
                <div
                    class="bg-blue-50 flex items-center justify-start ml-2 mr-2 border-t border-gray-200 border-b pt-1 pb-1">
                    <input type="checkbox" class="w-4 h-4 ml-2 mr-2" />
                    <p class=" text-blue-400 bg-white pl-2 pr-2">This is a task</p>
                    <font-awesome-icon :icon="['fas', 'pen']" class="ml-auto mr-2 cursor-pointer" />
                    <font-awesome-icon :icon="['fas', 'trash']" class="fa-trash mr-2 cursor-pointer" />
                </div>
                <div
                    class="bg-white flex items-center justify-start ml-2 mr-2 border-t border-gray-200 border-b pt-1 pb-1">
                    <input type="checkbox" class="w-4 h-4 ml-2 mr-2" />
                    <p class=" text-blue-400 bg-white pl-2 pr-2">This is a task</p>
                    <font-awesome-icon :icon="['fas', 'pen']" class="ml-auto mr-2 cursor-pointer" />
                    <font-awesome-icon :icon="['fas', 'trash']" class="fa-trash mr-2 cursor-pointer" />
                </div>
            </div>
            <div class="flex items-center pr-3 pl-3 mt-auto mb-1">
                <div class="w-1/2 bg-gray-50 h-8 dark:bg-gray-100">
                    <div class="z-0 absolute w-1/2 h-8 flex items-center justify-center">
                        <p class="text-sm text-gray-700 font-medium">
                            3 of 5 tasks completed</p>
                    </div>
                    <div class="bg-green-600 h-8 dark:bg-green-500" style="width: 45%"></div>
                </div>
                <button
                    class="w-1/2 m-0.5 py-2 rounded cursor-pointer text-xs bg-blue-400 hover:bg-blue-500 text-white">Remove
                    Completed Tasks <i class="fa fa-x" /></button>

            </div>
        </section>
    </div>
</template>

<style scoped>
.fa-pen,
.fa-trash {
    color: oklch(0.707 0.165 254.624)
}

.fa-pen:hover,
.fa-trash:hover {
    color: oklch(0.623 0.214 259.815)
}
</style>
