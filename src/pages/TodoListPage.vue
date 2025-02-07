<script setup lang="ts">
import { computed, ref } from 'vue';


interface Task {
    id: string;
    text: string;
    completed: boolean;
    edit: boolean
}

let tasks = ref<Task[]>([])
let newTask = ref<string>('')


function addTask(e: Event) {
    e.preventDefault()

    if (newTask.value === '') {
        return
    }
    tasks.value.push({
        id: Math.random().toString(),
        text: newTask.value,
        completed: false,
        edit: false
    })
    scrollToEnd()
    newTask.value = ''
}

function removeTask(id: string) {
    tasks.value = tasks.value.filter(task => task.id !== id)
}

function completedTask(id: string) {
    tasks.value = tasks.value.map(task => {
        if (task.id === id) {
            task.completed = !task.completed
            return task
        }
        return task
    })
}

function removeCompletedTask() {
    tasks.value = tasks.value.filter(task => !task.completed)
}

const countCompletedTask = computed(() => {
    return tasks.value.filter(task => task.completed).length
})


const scrollToEnd = () => {
    const taskContainer = document.querySelector('#task-container')
    if (taskContainer) {
        taskContainer.scrollTop = taskContainer.scrollHeight
    }

}

</script>

<template>
    <div
        class="bg-gradient-to-tl from-green-950 to-green-400 h-screen flex flex-col items-center justify-center w-full">
        <section class="container bg-white h-1/2 max-w-xl w-3/4">
            <h1 class="text-2xl text-gray-800 font-bold text-center pt-6 pb-2">TODOLIST</h1>
            <form v-on:submit="addTask" class="flex items-center justify-center pr-3 pl-3">
                <input type="text" placeholder="Add a task" v-model="newTask"
                    class="w-screen m-0.5 py-2 px-4 rounded border border-blue-400 focus:outline-none" />
                <button @click="addTask"
                    class="bg-blue-400 hover:bg-blue-500 text-white font-bold m-0.5 py-2 px-4 rounded cursor-pointer">+</button>
            </form>
            <div id="task-container" class="max-h-70 overflow-y-scroll pr-2 pl-2 h-screen mt-2 mb-2">

                <div v-for="(task, index) in tasks" :class="(index % 2 == 0) ? 'bg-blue-50' : 'bg-white'"
                    class="bg-blue-50 flex items-center justify-start ml-2 mr-2 border-t border-gray-200 border-b pt-1 pb-1">
                    <input type="checkbox" class="w-4 h-4 ml-2 mr-2" :checked="task.completed"
                        @click="completedTask(task.id)" />
                    <input type="text" :disabled="!task.edit" v-model="task.text"
                        class="bg-white mr-2 ml-2 w-full py-1 px-4 rounded  focus:outline-none"
                        :class="task.completed ? 'line-through decoration-blue-400 decoration-1' : ''" />
                    <font-awesome-icon v-if="!task.edit" @click="task.edit = !task.edit" :icon="['fas', 'pen']"
                        class="ml-auto mr-2 cursor-pointer" />
                    <font-awesome-icon v-else @click="task.edit = !task.edit" :icon="['fas', 'floppy-disk']"
                        class="ml-auto mr-2 cursor-pointer" />
                    <font-awesome-icon @click="removeTask(task.id)" :icon="['fas', 'trash']"
                        class="ml-auto mr-2 cursor-pointer" />
                </div>
            </div>
            <div class="flex items-center pr-3 pl-3 mb-0 mt-auto">
                <div class="w-1/2 w-sm-1/2 max-w-sm relative bg-gray-50 h-8 dark:bg-gray-100">
                    <div class="z-0 absolute h-8 flex items-center justify-center">
                        <p class="pl-10 text-sm text-gray-700 font-medium">
                            {{ countCompletedTask }} of {{ tasks.length }} tasks completed</p>
                    </div>
                    <div class="bg-green-600 h-8 dark:bg-green-500" style="width: 45%"></div>
                </div>
                <button @click="removeCompletedTask"
                    class="w-1/2 w-sm-1/2 max-w-sm m-0.5 py-2 rounded cursor-pointer text-xs bg-blue-400 hover:bg-blue-500 text-white">Remove
                    Completed Tasks <i class="fa fa-x" /></button>

            </div>
        </section>
    </div>
</template>

<style scoped>
.fa-pen,
.fa-trash,
.fa-floppy-disk {
    color: oklch(0.707 0.165 254.624)
}

.fa-pen:hover,
.fa-trash:hover,
.fa-floppy-disk:hover {
    color: oklch(0.623 0.214 259.815)
}
</style>
