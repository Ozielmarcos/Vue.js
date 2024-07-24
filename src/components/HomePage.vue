<template>
  <div class="w-full h-full flex rounded-md bg-black">
      <div class="w-[40%] p-5 bg-gradient-to-tr from-zinc-100/20 via-zinc-700/50 to-zinc-100/20">
        <div class="w-[90%] h-full flex flex-col items-center justify-center gap-10">
          <h1 class="text-[45px] font-bold text-slate-50">The Best Hamburguer</h1>
          <span class="text-slate-50">Vocẽ nunca experimentou algo igual!</span>
        </div>
      </div>
      <div class="w-[60%] flex rounded-br-lg rounded-tr-lg">
        <img src="/src/assets/16-hamburguer.jpeg" alt="imagem" class="banner-img">
      </div>
    </div>
</template>

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