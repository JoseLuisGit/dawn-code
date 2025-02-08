<template>
    <div class="bg-gradient-to-tl from-gray-950 to-gray-700 h-screen flex flex-col items-center justify-center w-full">
        <section class="container bg-white h-140 max-w-90 rounded-xl pr-3 pl-3 pt-4 border-gray-400 border-2">
            <div class="flex items-center justify-evenly pr-1 pb-2">
                <h1 class="text-xl text-gray-500 font-normal">Basic Calculator</h1>
                <font-awesome-icon :icon="['fas', 'bars']" class="ml-auto mr-2 cursor-pointer" />
            </div>
            <div class="container bg-white h-15 border-gray-400 border rounded-b-md rounded-t-md mb-5">
                <h2 class="text-xs text-gray-500 text-right mr-2">3,500 x 3 =</h2>
                <h1 class="text-3xl text-gray-900 font-semibold text-right mr-2 leading-5">10,500</h1>
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
                    class="px-2 py-3 border border-gray-100 rounded cursor-pointer font-medium text-3xl bg-gray-300 hover:bg-gray-400 text-black"><font-awesome-icon
                        :icon="['fas', 'delete-left']" /></button>
                <button
                    class="px-2 py-3 border border-gray-100 rounded cursor-pointer font-medium text-3xl bg-gray-300 hover:bg-gray-400 text-black">AC</button>
                <button
                    class="px-2 py-3 border border-gray-100 rounded cursor-pointer font-medium text-3xl bg-gray-300 hover:bg-gray-400 text-black">CE</button>

                <button
                    class="px-2 py-3 border border-gray-100 rounded cursor-pointer font-medium text-3xl bg-gray-300 hover:bg-gray-400 text-black"><font-awesome-icon
                        :icon="['fas', 'plus-minus']" /></button>

                <button
                    class="px-2 py-3 border border-gray-100 rounded cursor-pointer font-medium text-3xl bg-gray-300 hover:bg-gray-400 text-black"><font-awesome-icon
                        :icon="['fas', 'square-root-variable']" /></button>

                <button
                    class="px-2 py-3 border border-gray-100 rounded cursor-pointer font-bold text-3xl bg-gray-300 hover:bg-gray-400 text-black">^2</button>

                <button
                    class="px-2 py-3 border border-gray-100 rounded cursor-pointer font-medium text-3xl bg-gray-100 hover:bg-gray-300 text-black">7</button>
                <button
                    class="px-2 py-3 border border-gray-100 rounded cursor-pointer font-medium text-3xl bg-gray-100 hover:bg-gray-300 text-black">8</button>

                <button
                    class="px-2 py-3 border border-gray-100 rounded cursor-pointer font-medium text-3xl bg-gray-100 hover:bg-gray-300 text-black">9</button>

                <button
                    class="px-2 py-3 border border-gray-100 rounded cursor-pointer font-bold text-3xl bg-gray-300 hover:bg-gray-400 text-black"><font-awesome-icon
                        :icon="['fas', 'divide']" /></button>
                <button
                    class="px-2 py-3 border border-gray-100 rounded cursor-pointer font-bold text-3xl bg-gray-300 hover:bg-gray-400 text-black"><font-awesome-icon
                        :icon="['fas', 'percent']" /></button>
                <button
                    class="px-2 py-3 border border-gray-100 rounded cursor-pointer font-medium text-3xl bg-gray-100 hover:bg-gray-300 text-black">4</button>
                <button
                    class="px-2 py-3 border border-gray-100 rounded cursor-pointer font-medium text-3xl bg-gray-100 hover:bg-gray-300 text-black">5</button>

                <button
                    class="px-2 py-3 border border-gray-100 rounded cursor-pointer font-medium text-3xl bg-gray-100 hover:bg-gray-300 text-black">6</button>
                <button
                    class="px-2 py-3 border border-gray-100 rounded cursor-pointer font-bold text-3xl bg-gray-300 hover:bg-gray-400 text-black"><font-awesome-icon
                        :icon="['fas', 'xmark']" /></button>
                <button
                    class="px-2 py-3 border border-gray-100 rounded cursor-pointer font-semibold text-3xl bg-gray-300 hover:bg-gray-400 text-black">1/x</button>
                <button
                    class="px-2 py-3 border border-gray-100 rounded cursor-pointer font-medium text-3xl bg-gray-100 hover:bg-gray-300 text-black">1</button>
                <button
                    class="px-2 py-3 border border-gray-100 rounded cursor-pointer font-medium text-3xl bg-gray-100 hover:bg-gray-300 text-black">2</button>

                <button
                    class="px-2 py-3 border border-gray-100 rounded cursor-pointer font-medium text-3xl bg-gray-100 hover:bg-gray-300 text-black">3</button>
                <button
                    class="px-2 py-3 border border-gray-100 rounded cursor-pointer font-bold text-3xl bg-gray-300 hover:bg-gray-400 text-black"><font-awesome-icon
                        :icon="['fas', 'minus']" /></button>
                <button
                    class="px-2 py-3 border border-gray-100 rounded cursor-pointer font-bold text-3xl bg-blue-400 hover:bg-blue-500 text-white col-span-1 row-span-2"><font-awesome-icon
                        :icon="['fas', 'equals']" /></button>
                <button
                    class="px-2 py-3 border border-gray-100 rounded cursor-pointer font-medium text-3xl bg-gray-100 hover:bg-gray-300 text-black row-span-1 col-span-2">0</button>
                <button
                    class="px-2 py-3 border border-gray-100 rounded cursor-pointer font-bold text-3xl bg-gray-100 hover:bg-gray-300 text-black">.</button>
                <button
                    class="px-2 py-3 border border-gray-100 rounded cursor-pointer font-bold text-3xl bg-gray-300 hover:bg-gray-400 text-black"><font-awesome-icon
                        :icon="['fas', 'plus']" /></button>
            </div>
        </section>
    </div>
</template>
<style scoped>
.fa-bars {
    color: #6a7282
}
</style>
