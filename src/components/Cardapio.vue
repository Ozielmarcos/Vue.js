<template>
  <div class="w-full h-full flex flex-col rounded-md bg-gradient-to-bl from-black/50 via-gray-400/30 to-zinc-500/20 p-10 overflow-hidden">
    <h1 class="text-slate-50 text-4xl text-center mb-5 uppercase">Cardápio</h1>
    <div class="w-full h-full rounded-lg bg-gradient-to-b from-orange-700/90 via-orange-800 to-orange-600/90 p-5 grid grid-cols-5 gap-5 place-items-center overflow-auto">
      <Card v-for="item in cardapio" :key="item.id" :foto="item.imagem" :nome="item.name" :preco="item.price" @some-event="showModal(item)" />      
    </div>
  </div>

  <div v-if="state.isOpen" :data-open="state.isOpen" class="w-full h-screen bg-black/50 hidden data-[open=true]:flex items-center justify-center fixed z-50">
    <div class="w-2/5 p-10 bg-gradient-to-br from-orange-500 via-orange-800 to-orange-500 flex flex-col gap-5 rounded-lg shadow-md shadow-zinc-300/50 relative">
      <button type="button" class="text-slate-50/50 font-bold bg-black/5 p-1 rounded-full absolute right-5 top-5 hover:bg-black/20" @click="close"><XIcon/></button>
      <h1 class="text-slate-100 font-bold uppercase animate-pulse">Preencha seus dados</h1>
      <div class="w-full flex flex-col">
        <label for="pedido.clientName" class="text-xs text-slate-100 font-bold">Nome</label>
        <input type="text" v-model="pedido.clientName" class="px-3 py-1 rounded-md bg-zinc-300/10 border-b-2 border-slate-100/50 text-zinc-200 outline-none">
      </div>
      <div class="w-full flex flex-col">
        <label for="pedido.address" class="text-xs text-slate-100 font-bold">Endereço</label>
        <input type="text" v-model="pedido.address" class="px-3 py-1 rounded-md bg-zinc-300/10 border-b-2 border-slate-100/50 text-zinc-200 outline-none">
      </div>
      <div class="w-full flex flex-col">
        <label for="pedido.phone" class="text-xs text-slate-100 font-bold">Telefone</label>
        <input type="tel" v-model="pedido.phone" class="px-3 py-1 rounded-md bg-zinc-300/10 border-b-2 border-slate-100/50 text-zinc-200 outline-none">
      </div>
      <button type="submit" 
        class="font-bold bg-gradient-to-r from-zinc-700 via-zinc-900 to-zinc-700 p-3 rounded-lg text-slate-50 border-2 hover:animate-pulse mt-10">
        Salvar</button>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import Card from './Card.vue'
import { XIcon } from 'lucide-vue-next'

const state = reactive({isOpen: false})

const pedido = reactive({
  clientName: '',
  address: '',
  phone: ''
})

const close = () => {
  state.isOpen = false
}

const cardapio = reactive([
  {id:1, imagem:'/src/assets/H2.jpg', name:'X-Calabresa'  , price:30},
  {id:2, imagem:'/src/assets/Hamburguer.jpg', name:'X-Salada'  , price:28},
  {id:3, imagem:'/src/assets/H2.jpg', name: 'X-Palmito' , price:30},
  {id:4, imagem:'/src/assets/Hamburguer.jpg', name:'X-Tudo'  , price:48},
  {id:5, imagem:'/src/assets/H2.jpg', name: 'X-Calabresa Catupiry' , price:32},
  {id:6, imagem:'/src/assets/Hamburguer.jpg', name: 'X-Kids' , price:28},
  {id:7, imagem:'/src/assets/H2.jpg', name: 'X-Bagunça' , price:22},
  {id:8, imagem:'/src/assets/Hamburguer.jpg', name: 'X-Mignon'  , price:42},
  {id:9, imagem:'/src/assets/H2.jpg', name: 'X-Tasty' , price:38},
  {id:10, imagem:'/src/assets/Hamburguer.jpg', name: 'X-Monstro'  , price: 36},
  {id:11, imagem:'/src/assets/H2.jpg', name: 'X-Frango' , price: 32},
  {id:12, imagem:'/src/assets/Hamburguer.jpg', name: 'X-Burguer' , price: 26}
])

const lstPedidos = []

const showModal = (event) => {
  state.isOpen = !state.isOpen
  lstPedidos.push(event)
}

</script>

<style scoped>
  ::-webkit-scrollbar {
    background-color: black;
    border-radius: 6px;
    width: 8px;
}

::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-button {
    background-color: gray;
    display: flex;
    padding: 0;
    border-radius: 6px;
    height: 20px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: orange;
    border-radius: 6px;
}
</style>