<script setup lang="ts">
import { computed, reactive } from 'vue';
import {Home, ScrollText, ShoppingBasket, Store, MessageCircleMore} from 'lucide-vue-next'
import HomePage from '@/components/HomePage.vue';
import Cardapio from '@/components/Cardapio.vue';
import Sobre from '@/components/Sobre.vue';
import Pedidos from '@/components/Pedidos.vue';
import Contato from '@/components/Contato.vue';


const iconMap = {
  home: Home,
  cardapio: ScrollText,
  pedidos: ShoppingBasket,
  sobre: Store,
  contato: MessageCircleMore
}

const navMap = {
  initial: HomePage,
  cardapio: Cardapio,
  pedidos: Pedidos,
  sobre: Sobre,
  contato: Contato
}

const navBar = reactive([
  {id: 1, name: 'Home', url: navMap.initial, active: true,  icon: iconMap.home},
  {id: 2, name: 'Cardápio', url: navMap.cardapio, active: false, icon: iconMap.cardapio},
  {id: 3, name: 'Pedidos', url: navMap.pedidos, active: false, icon: iconMap.pedidos},
  {id: 4, name: 'Sobre', url: navMap.sobre, active: false, icon: iconMap.sobre},
  {id: 5, name: 'Contato', url: navMap.contato, active: false, icon: iconMap.contato},
])

const handleNav = (id:number) => {
 navBar.map((x)=> x.active = false)
 const result = navBar.find((item)=> item.id === id)
 if (!result) return 
 
 result.active = true
}

const rota = computed(() => navBar.find((item) => item.active === true))

</script>

<template>
    <main class="w-full h-screen flex items-center justify-center bg-gradient-to-br from-black/10 via-zinc-700 to-black/30 ">
      <div class="w-[95%] h-[95%] backdrop-blur-md bg-black/80 shadow-lg rounded-xl flex justify-between p-5 gap-5 relative">
        <div class="flex flex-col gap-5 bg-black/90 p-5">
          <aside class="w-48 h-fit rounded-md">
            <nav class="text-slate-50 flex flex-col backdrop-blur-md bg-slate-100/20 shadow-lg">
              <button v-for="item in navBar" :data-ativo="item.active" :key="item.id" @click="handleNav(item.id)" 
                class="p-3 text-sm font-bold hover:bg-black data-[ativo=true]:bg-orange-600 flex gap-2">
                <component :is="item.icon" :size="18" class="inline-block"/> &nbsp;{{ item.name }}</button>
            </nav>
          </aside>        
        </div>
        <component v-if="rota" :is="rota?.url"/>
      </div>
    </main>
</template>
<style></style>

