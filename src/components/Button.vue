<script setup lang="ts">

const props = defineProps<{ msg: string }>()

const goToPage = () => {
  console.log(props.msg.toLowerCase())
}

</script>

<template>
  <div class="card">
    <button class="m-1 bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded cursor-pointer "
      type="button" @click="goToPage">{{ msg
      }}</button>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
