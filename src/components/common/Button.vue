<script setup lang="ts">
defineProps<{ title: string }>()
</script>

<template>
  <div class="card">
    <button class="m-1 bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded cursor-pointer "
      @click="$router.push(title.toLowerCase().replace(' ', '-'))">
      {{ title }}
    </button>
  </div>
</template>