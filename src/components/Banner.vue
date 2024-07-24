<template>
  <div class="w-[60%] flex rounded-br-lg rounded-tr-lg">
    <img :src="props.imagem" alt="imagem" class="banner-img">
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{imagem:string}>()

  console.log(props.imagem)
</script>

<style scoped>
.banner-img {
  width: 100%;
  height: 100%;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  object-position: center;
  object-fit: contain;
}
</style>