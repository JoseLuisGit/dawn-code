<script setup lang="ts">
import { ref } from 'vue';



let mainInput = ref<string>('0')

let history = ref<string>('')
let result: number = 0
let lastOperation: string = ''
let hasEqual: boolean = false

let hasOperation = ref<boolean>(false)

function addInput(value: string) {
    if (mainInput.value === '0' && value !== '.') {
        mainInput.value = ''
    }
    if (hasOperation.value || hasEqual) {
        mainInput.value = ''
        hasOperation.value = false
        if (hasEqual) {
            hasEqual = false
            history.value = ''
            result = Number(mainInput.value)
        }
    }
    mainInput.value += value
}

function deleteLeft() {
    mainInput.value = mainInput.value.slice(0, -1)
    if (mainInput.value === '') {
        mainInput.value = '0'
    }
}

function addOperation(value: string) {
    if (hasOperation.value) {
        history.value = history.value.slice(0, -2)
        history.value += ' ' + value + ' '
        lastOperation = value
        return
    }
    if (hasEqual) {
        result = Number(mainInput.value)
        history.value = mainInput.value + ' ' + value + ' '
        hasOperation.value = true
        lastOperation = value
        hasEqual = false
        return
    }
    history.value += mainInput.value + ' ' + value + ' '
    hasOperation.value = true

    if (result === 0) {
        result = Number(mainInput.value)
        lastOperation = value
        return;
    }
    handleOperations(lastOperation, mainInput.value)
    lastOperation = value
    mainInput.value = String(result)
}

function reset() {
    mainInput.value = '0'
    history.value = ''
    result = 0
}

function resetMainInput() {
    mainInput.value = '0'
}

function handleOperations(operator: string, value: string) {
    switch (operator) {
        case '+':
            result = result + Number(value)
            break;
        case '-':
            result = result - Number(value)
            break;
        case 'x':
            result = result * Number(value)
            break;
        case '/':
            result = result / Number(value)
            break;
    }
}

function handleEqual() {
    history.value += mainInput.value
    handleOperations(lastOperation, mainInput.value)
    history.value += ' = '
    mainInput.value = result.toString()
    hasOperation.value = false
    hasEqual = true
}

function handlePlusMinus() {
    mainInput.value = String(Number(mainInput.value) * -1)
    if (hasEqual) {
        history.value = ''
        result = 0
    }
}

</script>

<template>
    <div class="bg-gradient-to-tl from-gray-950 to-gray-700 h-screen flex flex-col items-center justify-center w-full">
        <section class="container bg-white h-140 max-w-90 rounded-xl pr-3 pl-3 pt-4 border-gray-400 border-2">
            <div class="flex items-center justify-evenly pr-1 pb-2">
                <h1 class="text-xl text-gray-500 font-normal">Basic Calculator</h1>
                <font-awesome-icon :icon="['fas', 'bars']" class="ml-auto mr-2 cursor-pointer" />
            </div>
            <div class="container bg-gray-100 h-15 border-gray-400 border rounded-b-md rounded-t-md mb-5">
                <div class="h-4">
                    <h2 class="text-md text-gray-500 text-right mr-2">{{ history }}</h2>
                </div>
                <h1 class="text-4xl text-gray-900 font-semibold text-right mr-2">{{ mainInput }}</h1>
            </div>
            <div class="grid grid-cols-5 gap-2">
                <button
                    class="px-2 py-3 border border-gray-100 rounded cursor-pointer font-medium text-3xl bg-red-700 hover:bg-red-800 text-white">MC</button>
                <button
                    class="px-2 py-3 border border-gray-100 rounded cursor-pointer font-medium text-3xl bg-red-700 hover:bg-red-800 text-white">M-</button>
                <button
                    class="px-2 py-3 border border-gray-100 rounded cursor-pointer font-medium text-3xl bg-red-700 hover:bg-red-800 text-white">M+</button>
                <button
                    class="px-2 py-3 border border-gray-100 rounded cursor-pointer font-medium text-3xl bg-red-700 hover:bg-red-800 text-white">MR</button>
                <button
                    class="px-2 py-3 border border-gray-100 rounded cursor-pointer font-medium text-3xl bg-gray-300 hover:bg-gray-400 text-black"
                    @click="deleteLeft"><font-awesome-icon :icon="['fas', 'delete-left']" /></button>
                <button
                    class="px-2 py-3 border border-gray-100 rounded cursor-pointer font-medium text-3xl bg-gray-300 hover:bg-gray-400 text-black"
                    @click="reset">AC</button>
                <button
                    class="px-2 py-3 border border-gray-100 rounded cursor-pointer font-medium text-3xl bg-gray-300 hover:bg-gray-400 text-black"
                    @click="resetMainInput">CE</button>

                <button
                    class="px-2 py-3 border border-gray-100 rounded cursor-pointer font-medium text-3xl bg-gray-300 hover:bg-gray-400 text-black"
                    @click="handlePlusMinus"><font-awesome-icon :icon="['fas', 'plus-minus']" /></button>

                <button
                    class="px-2 py-3 border border-gray-100 rounded cursor-pointer font-medium text-3xl bg-gray-300 hover:bg-gray-400 text-black"><font-awesome-icon
                        :icon="['fas', 'square-root-variable']" /></button>

                <button
                    class="px-2 py-3 border border-gray-100 rounded cursor-pointer font-bold text-3xl bg-gray-300 hover:bg-gray-400 text-black">^2</button>

                <button
                    class="px-2 py-3 border border-gray-100 rounded cursor-pointer font-medium text-3xl bg-gray-100 hover:bg-gray-300 text-black"
                    @click="addInput('7')">7</button>
                <button
                    class="px-2 py-3 border border-gray-100 rounded cursor-pointer font-medium text-3xl bg-gray-100 hover:bg-gray-300 text-black"
                    @click="addInput('8')">8</button>

                <button
                    class="px-2 py-3 border border-gray-100 rounded cursor-pointer font-medium text-3xl bg-gray-100 hover:bg-gray-300 text-black"
                    @click="addInput('9')">9</button>

                <button
                    class="px-2 py-3 border border-gray-100 rounded cursor-pointer font-bold text-3xl bg-gray-300 hover:bg-gray-400 text-black"><font-awesome-icon
                        :icon="['fas', 'divide']" @click="addOperation('/')" /></button>
                <button
                    class="px-2 py-3 border border-gray-100 rounded cursor-pointer font-bold text-3xl bg-gray-300 hover:bg-gray-400 text-black"><font-awesome-icon
                        :icon="['fas', 'percent']" /></button>
                <button
                    class="px-2 py-3 border border-gray-100 rounded cursor-pointer font-medium text-3xl bg-gray-100 hover:bg-gray-300 text-black"
                    @click="addInput('4')">4</button>
                <button
                    class="px-2 py-3 border border-gray-100 rounded cursor-pointer font-medium text-3xl bg-gray-100 hover:bg-gray-300 text-black"
                    @click="addInput('5')">5</button>

                <button
                    class="px-2 py-3 border border-gray-100 rounded cursor-pointer font-medium text-3xl bg-gray-100 hover:bg-gray-300 text-black"
                    @click="addInput('6')">6</button>
                <button
                    class="px-2 py-3 border border-gray-100 rounded cursor-pointer font-bold text-3xl bg-gray-300 hover:bg-gray-400 text-black"
                    @click="addOperation('x')"><font-awesome-icon :icon="['fas', 'xmark']" /></button>
                <button
                    class="px-2 py-3 border border-gray-100 rounded cursor-pointer font-semibold text-3xl bg-gray-300 hover:bg-gray-400 text-black">1/x</button>
                <button
                    class="px-2 py-3 border border-gray-100 rounded cursor-pointer font-medium text-3xl bg-gray-100 hover:bg-gray-300 text-black"
                    @click="addInput('1')">1</button>
                <button
                    class="px-2 py-3 border border-gray-100 rounded cursor-pointer font-medium text-3xl bg-gray-100 hover:bg-gray-300 text-black"
                    @click="addInput('2')">2</button>

                <button
                    class="px-2 py-3 border border-gray-100 rounded cursor-pointer font-medium text-3xl bg-gray-100 hover:bg-gray-300 text-black"
                    @click="addInput('3')">3</button>
                <button
                    class="px-2 py-3 border border-gray-100 rounded cursor-pointer font-bold text-3xl bg-gray-300 hover:bg-gray-400 text-black"><font-awesome-icon
                        :icon="['fas', 'minus']" @click="addOperation('-')" /></button>
                <button
                    class="px-2 py-3 border border-gray-100 rounded cursor-pointer font-bold text-3xl bg-blue-400 hover:bg-blue-500 text-white col-span-1 row-span-2"
                    @click="handleEqual"><font-awesome-icon :icon="['fas', 'equals']" /></button>
                <button
                    class="px-2 py-3 border border-gray-100 rounded cursor-pointer font-medium text-3xl bg-gray-100 hover:bg-gray-300 text-black row-span-1 col-span-2"
                    @click="addInput('0')">0</button>
                <button
                    class="px-2 py-3 border border-gray-100 rounded cursor-pointer font-bold text-3xl bg-gray-100 hover:bg-gray-300 text-black"
                    @click="addInput('.')">.</button>
                <button
                    class="px-2 py-3 border border-gray-100 rounded cursor-pointer font-bold text-3xl bg-gray-300 hover:bg-gray-400 text-black"
                    @click="addOperation('+')"><font-awesome-icon :icon="['fas', 'plus']" /></button>
            </div>
        </section>
    </div>
</template>
<style scoped>
.fa-bars {
    color: #6a7282
}
</style>
