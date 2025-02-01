<script setup lang="ts">
import Button from './components/Button.vue'
</script>

<template>
  <div class="flex flex-col items-center justify-center w-full h-dvh">
    <h1 class="m-10 text-7xl font-mono text-amber-500">DAWN CODE</h1>
    <div
      class="container bg-gradient-to-t from-black to-amber-500 pl-4 pr-4 pb-2 pt-2 bg-amber-950 flex flex-col items-center justify-center">
      <Button msg="Code 1" />
      <Button msg="Great Code 2" />
      <Button msg="Code 3" />
      <Button msg="Code 4" />
      <Button msg="Code 5" />
    </div>
  </div>

</template>
