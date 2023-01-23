<script setup>
defineProps({
  post:Object
})
</script>
<template>
  <div class="flex justify-center bg-[#00000086] fixed  items-center top-0 bottom-0 right-0 left-0 z-30">
    <div class="bg-[#181818] text-3xl h-1/4 px-8 rounded-xl text-white border border-[#00bd7e]  gap-3 flex items-center">
    <div class="">
      Post number
      {{ post.id }} 
    </div>
    Successfully Updated
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" viewBox="0 0 50 50" xml:space="preserve" width="64px" height="64px" fill="#000000">
      <g id="SVGRepo_bgCarrier" stroke-width="0"/>
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
      <g id="SVGRepo_iconCarrier"> 
        <circle style="fill:#25AE88;" cx="25" cy="25" r="25"/>
        <polyline style="fill:none;stroke:#FFFFFF;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;" points=" 38,15 22,33 12,25 "/>
      </g>  
    </svg>
    </div>
  </div>
</template>
