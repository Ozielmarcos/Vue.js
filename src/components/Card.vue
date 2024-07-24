<template>
  <div class="w-[210px] h-[300px] rounded-md bg-slate-200/20 p-2 flex flex-col justify-between">
    <div class="w-full">
      <img :src="foto" alt="imagem" />
      </div>
    <div class="w-full h-20 rounded-md bg-gradient-to-tr from-black/70 via-zinc-500/50 to-black p-2 relative">
      <h2 class="text-slate-50 text-md font-semibold">{{nome}}</h2>
      <button type="button" class="border-2 border-zinc-400 rounded-md px-3 absolute right-2 bottom-2 hover:bg-black/50" @click="$emit('someEvent')">
        <span class="font-bold text-slate-50 text-xs">R$ {{ preco.toFixed(2) }}</span>
      </button>
    </div>
  </div>
</template>

<script setup>

  const props = defineProps({
    foto: {
      type: String,
      required: true,
      default: 'src/assets/Hamburguer.jpg'
    },
    nome: {
      type: String,
      required: true,
      default: 'X-Bacon'
    },
    preco: {
      type: Number,
      required: true,
      default: 28.90
    }
  })

</script>

<style scoped>
img {
  width: 100%;
  height: 100%;
  aspect-ratio: 1/1;
  border-radius: 4px;
  
}
</style>